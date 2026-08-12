const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const pages = ['index.html', 'works.html', 'contact.html', 'project_test.html'];
const attributePattern = /\b(href|src|poster)\s*=\s*(["'])(.*?)\2/gi;
const i18nPattern = /\bdata-i18n(?:-html|-aria-label|-alt)?\s*=\s*(["'])(.*?)\1/gi;

function readPage(page) {
  return fs.readFileSync(path.join(root, page), 'utf8');
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/\b([\w-]+)\s*=\s*(["'])(.*?)\2/g)].map(([, name, , value]) => [name, value]),
  );
}

function localPath(value) {
  const withoutQuery = value.split('?')[0].split('#')[0];
  return withoutQuery && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value) && !value.startsWith('/')
    ? withoutQuery
    : null;
}

function valueAt(object, key) {
  return key.split('.').reduce((value, segment) => value?.[segment], object);
}

test('required HTML pages exist', () => {
  for (const page of pages) {
    assert.ok(fs.existsSync(path.join(root, page)), `${page} must exist`);
  }
});

test('local HTML assets resolve to files', () => {
  for (const page of pages) {
    const html = readPage(page);
    for (const [, , , value] of html.matchAll(attributePattern)) {
      const asset = localPath(value);
      if (asset) {
        assert.ok(fs.existsSync(path.resolve(root, asset)), `${page}: missing ${asset}`);
      }
    }
  }
});

test('HTML i18n keys resolve to strings in both languages', async () => {
  const { translations } = await import(pathToFileURL(path.join(root, 'js/translations.mjs')).href);
  const keys = new Set();

  for (const page of pages) {
    for (const [, , key] of readPage(page).matchAll(i18nPattern)) {
      keys.add(key);
    }
  }

  for (const key of keys) {
    for (const language of ['en', 'ko']) {
      assert.equal(typeof valueAt(translations[language], key), 'string', `${language}.${key}`);
    }
  }
});

test('Tempo project uses ten local, non-preloaded videos', () => {
  const html = readPage('project_test.html');
  assert.doesNotMatch(html, /studiodumbar|jsdelivr|autoplay/i);

  const videos = [...html.matchAll(/<video\b[^>]*>[\s\S]*?<\/video>/gi)];
  assert.equal(videos.length, 10);

  for (const [video] of videos) {
    const videoTag = video.match(/<video\b[^>]*>/i)[0];
    const videoAttributes = attributes(videoTag);
    assert.equal(videoAttributes.preload, 'none');
    assert.ok(videoAttributes.poster, 'each video needs a poster');
    assert.match(videoAttributes.poster, /^assets\/media\/tempo\//);
    assert.ok(fs.existsSync(path.resolve(root, videoAttributes.poster)), videoAttributes.poster);

    const source = video.match(/<source\b[^>]*\bsrc\s*=\s*(["'])(.*?)\1/i);
    assert.ok(source, 'each video needs a source');
    assert.match(source[2], /^assets\/media\/tempo\//);
    assert.ok(fs.existsSync(path.resolve(root, source[2])), source[2]);
  }
});

test('contact email button keeps the original copy interaction', () => {
  const html = readPage('contact.html');
  assert.match(
    html,
    /<button\b[^>]*\btype\s*=\s*(["'])button\1[^>]*\bdata-copy-email\s*=\s*(["'])glenn\.psd@gmail\.com\2[^>]*>/i,
  );
  assert.match(
    html,
    /<span\b[^>]*\bclass\s*=\s*(["'])copy-tooltip\1[^>]*\baria-hidden\s*=\s*(["'])true\2[^>]*>\s*Copy\s*<\/span>/i,
  );
  assert.match(html, />\s*glenn\.psd@gmail\.com\s*<\/button>/i);
  assert.doesNotMatch(html, /mailto:/i);
});

test('contact copy fallback reports failure and always cleans up', async () => {
  const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const documentDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'document');
  let removed = false;

  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {} });
  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    value: {
      body: { appendChild() {} },
      createElement: () => ({
        remove: () => {
          removed = true;
        },
        select() {},
        setAttribute() {},
        style: {},
        value: '',
      }),
      execCommand: () => {
        throw new Error('copy unavailable');
      },
    },
  });

  try {
    const { copyText } = await import(
      `${pathToFileURL(path.join(root, 'js/contact.mjs')).href}?test=copy-fallback`
    );
    assert.equal(await copyText('glenn.psd@gmail.com'), false);
    assert.equal(removed, true);
  } finally {
    if (navigatorDescriptor) Object.defineProperty(globalThis, 'navigator', navigatorDescriptor);
    else delete globalThis.navigator;
    if (documentDescriptor) Object.defineProperty(globalThis, 'document', documentDescriptor);
    else delete globalThis.document;
  }
});

test('every page loads app.js as a module', () => {
  for (const page of pages) {
    const scripts = [...readPage(page).matchAll(/<script\b[^>]*>/gi)].map(([tag]) =>
      attributes(tag),
    );
    assert.ok(
      scripts.some(
        (script) => /^app\.js(?:\?.*)?$/.test(script.src || '') && script.type === 'module',
      ),
      `${page} must load app.js with type=module`,
    );
  }
});

test('career identifiers match translation keys', async () => {
  const { translations } = await import(pathToFileURL(path.join(root, 'js/translations.mjs')).href);
  const careers = new Set(
    [...readPage('index.html').matchAll(/\bdata-career\s*=\s*(["'])(.*?)\1/gi)].map(
      ([, , value]) => value,
    ),
  );

  for (const language of ['en', 'ko']) {
    assert.deepEqual(
      [...careers].sort(),
      Object.keys(translations[language].pages.about.careers).sort(),
      `${language} career keys`,
    );
  }
});

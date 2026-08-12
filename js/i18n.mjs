import { translations } from './translations.mjs';

const supportedLanguages = new Set(Object.keys(translations));
let currentLanguage = 'en';

const getValue = (language, key) =>
  key.split('.').reduce((value, segment) => value?.[segment], translations[language]);

const readStoredLanguage = () => {
  try {
    return window.localStorage.getItem('language');
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    window.localStorage.setItem('language', language);
  } catch {
    // The URL remains the shareable source of truth when storage is unavailable.
  }
};

const getInitialLanguage = () => {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (supportedLanguages.has(queryLanguage)) return queryLanguage;
  const storedLanguage = readStoredLanguage();
  return supportedLanguages.has(storedLanguage) ? storedLanguage : 'en';
};

const syncLanguageUrl = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url);
};

const applyCareerTranslations = (dictionary) => {
  document.querySelectorAll('[data-career]').forEach((entry) => {
    const career = dictionary.pages.about.careers[entry.dataset.career];
    if (!career) return;
    entry.querySelector('.career-company-name').textContent = career.company;
    entry.querySelector('.career-meta').innerHTML = career.meta;
    entry.querySelectorAll('[data-project]').forEach((project) => {
      const projectData = career.projects[project.dataset.project];
      if (!projectData) return;
      project.querySelector('.career-project-title').textContent = projectData.title;
      project.querySelector('.career-project-description').textContent = projectData.description;
    });
  });
};

const applyLanguage = (language, { syncUrl = false } = {}) => {
  const dictionary = translations[language];
  if (!dictionary) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  storeLanguage(language);
  if (syncUrl) syncLanguageUrl(language);

  const page = dictionary.pages[document.body.dataset.page];
  if (page) {
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(language, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getValue(language, element.dataset.i18nHtml);
    if (typeof value === 'string') element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = getValue(language, element.dataset.i18nAriaLabel);
    if (typeof value === 'string') element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = getValue(language, element.dataset.i18nAlt);
    if (typeof value === 'string') element.setAttribute('alt', value);
  });
  if (document.body.dataset.page === 'about') applyCareerTranslations(dictionary);

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
};

export const translate = (key) => getValue(currentLanguage, key) ?? key;

export const initI18n = () => {
  applyLanguage(getInitialLanguage());
  const trigger = document.querySelector('[data-language-toggle]');
  trigger?.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'en' ? 'ko' : 'en', { syncUrl: true });
  });
};

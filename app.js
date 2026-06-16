(() => {
  const externalRel = 'target="_blank" rel="noopener noreferrer"';
  const translations = {
    en: {
      common: {
        language: 'KR',
        about: 'About',
        works: 'Works',
        contact: 'Contact',
        footerContact: 'Contact',
        copied: 'Copied.',
      },
      pages: {
        'page-about': {
          title: 'Tayhoon Kim | Product Designer',
          description: 'Tayhoon Kim product designer profile',
          profile: `
            <p>Hello.<br />I&rsquo;m Tayhoon Kim, a product designer.</p>
            <p>&ldquo;I design what is visible and what is not.&rdquo;</p>
            <p>I&rsquo;m interested in design systems and UX/UI for AI services.<br />I&rsquo;m especially drawn to understanding the context behind user data and improving UX/UI based on it.</p>
            <p>I&rsquo;m currently working at NC AI on <a href="https://3d.varco.ai/explore" ${externalRel}>VARCO 3D</a>, a Text-to-3D AI generation service.</p>
            <p>You can find my experience below.<br />Stay healthy and happy.</p>
          `,
          careerTitle: 'Experience',
          careerEntries: [
            {
              company: 'NC AI',
              meta: `Product Designer<br />2025.02 - Present<br /><a href="https://nc-ai.com/en" ${externalRel}>nc-ai.com</a>`,
              projects: [
                [
                  'VARCO 3D',
                  'UX/UI design and operation for a generative AI 3D asset creation product',
                ],
                [
                  'VARCO Design System',
                  'Built and operated the design system across NC AI services',
                ],
              ],
            },
            {
              company: 'NC',
              meta: `Product Designer<br />2022.06 - 2025.01<br /><a href="https://www.nc.com/?locale=en-US" ${externalRel}>nc.com</a>`,
              projects: [
                [
                  'VARCO Text',
                  'UX/UI design for a Text-to-Text AI service specialized for game production',
                ],
                [
                  'AI Financial Service',
                  'UX/UI design for an MTS app prototype powered by financial AI',
                ],
              ],
            },
            {
              company: 'Webzen',
              meta: `UX/UI Designer<br />2017.08 - 2022.05<br /><a href="https://company.webzen.com/en" ${externalRel}>company.webzen.com</a>`,
              projects: [
                ['Webzen Community Site', 'Built a mobile game community platform and improved UX'],
                [
                  'Shot Online EU Website Renewal',
                  'UX/UI design for the Shot Online Europe website renewal',
                ],
                ['Webzen Remote App', 'UX/UI design for a mobile desktop game streaming app'],
                [
                  'Southeast Asia Payment Platform',
                  'Built UX/UI for a payment platform targeting Southeast Asian markets',
                ],
                ['Game Guide Website', 'UX/UI design for Webzen game guide websites'],
                [
                  'Master Tanker Official Website',
                  'Built the official website for the mobile game Master Tanker',
                ],
              ],
            },
            {
              company: 'Media4th One',
              meta: `UI Designer<br />2014/09 - 2015.09<br /><a href="https://www.media4thone.co.kr/" ${externalRel}>media4thone.co.kr</a>`,
              projects: [
                [
                  'SM Entertainment Website Proposal',
                  'Independently led UI design for a website renewal proposal',
                ],
                ['Shot Online EU Website Renewal', 'Designed subpages for a website build project'],
                ['Dragon Nest Website', 'Designed UI for brand website subpages'],
                [
                  'Renault Samsung Website Renewal Proposal',
                  'Developed a website renewal proposal and UI resources',
                ],
                ['Paradise City Website', 'UX/UI design for a multilingual website and subpages'],
                [
                  'KT&amp;G Website Accessibility Improvement',
                  'Improved accessibility of the English site to meet WCAG 2.0 standards',
                ],
              ],
            },
          ],
        },
        'page-contact': {
          title: 'Contact | Tayhoon Kim',
          description: 'Contact Tayhoon Kim',
          heading: 'Open to thoughtful projects and good conversations.',
          label: 'Contact',
        },
        'page-works': {
          title: 'Works | Tayhoon Kim',
          description: 'Tayhoon Kim work list',
          projectTitle: 'ProjectTitle',
        },
      },
    },
    ko: {
      common: {
        language: 'EN',
        about: 'About',
        works: 'Works',
        contact: 'Contact',
        footerContact: 'Contact',
        copied: 'Copied.',
      },
      pages: {
        'page-about': {
          title: '김태훈 | 프로덕트 디자이너',
          description: '프로덕트 디자이너 김태훈의 프로필과 경험',
          profile: `
            <p>안녕하세요.<br />프로덕트 디자이너 김태훈입니다.</p>
            <p>&ldquo;보이는 것과 보이지 않는 것을 디자인합니다.&rdquo;</p>
            <p>디자인 시스템과 AI 서비스의 UX/UI에 관심을 가지고 있습니다.<br />특히, 사용자 데이터의 맥락을 이해하고, 이를 기반으로 UX/UI를 개선하는 작업에 깊은 흥미를 갖고 있습니다.</p>
            <p>현재는 NC AI에서 Text to 3D AI 생성 서비스인 <a href="https://3d.varco.ai/explore" ${externalRel}>VARCO 3D</a>를 개발하고 있습니다.</p>
            <p>아래에서 저의 이력을 확인하실 수 있습니다.<br />건강하고 행복하세요.</p>
          `,
          careerTitle: '경험',
          careerEntries: [
            {
              company: 'NC AI',
              meta: `Product Designer<br />2025.02 - 현재<br /><a href="https://nc-ai.com/en" ${externalRel}>nc-ai.com</a>`,
              projects: [
                ['VARCO 3D', '생성형 AI 기반 3D 에셋 제작 제품의 UX/UI 설계 및 운영'],
                ['VARCO Design System', 'NC AI 서비스 전반의 디자인 시스템 구축 및 운영'],
              ],
            },
            {
              company: 'NC',
              meta: `Product Designer<br />2022.06 - 2025.01<br /><a href="https://www.nc.com/?locale=en-US" ${externalRel}>nc.com</a>`,
              projects: [
                ['VARCO Text', '게임 제작에 특화된 Text-to-Text AI 서비스 UX/UI 설계'],
                ['AI Financial Service', '금융 AI 기반 MTS 앱 프로토타입 UX/UI 설계'],
              ],
            },
            {
              company: 'Webzen',
              meta: `UX/UI Designer<br />2017.08 - 2022.05<br /><a href="https://company.webzen.com/en" ${externalRel}>company.webzen.com</a>`,
              projects: [
                ['Webzen Community Site', '모바일 게임 커뮤니티 플랫폼 구축 및 UX 개선'],
                [
                  'Shot Online EU Website Renewal',
                  'Shot Online 유럽 공식 웹사이트 리뉴얼 UX/UI 설계',
                ],
                ['Webzen Remote App', '모바일 데스크톱 게임 스트리밍 앱 UX/UI 설계'],
                ['Southeast Asia Payment Platform', '동남아시아 시장 대상 결제 플랫폼 UX/UI 구축'],
                ['Game Guide Website', 'Webzen 게임 가이드 웹사이트 UX/UI 설계'],
                ['Master Tanker Official Website', '모바일 게임 Master Tanker 공식 웹사이트 구축'],
              ],
            },
            {
              company: 'Media4th One',
              meta: `UI Designer<br />2014/09 - 2015.09<br /><a href="https://www.media4thone.co.kr/" ${externalRel}>media4thone.co.kr</a>`,
              projects: [
                ['SM Entertainment Website Proposal', '웹사이트 리뉴얼 제안 UI 디자인 단독 수행'],
                ['Shot Online EU Website Renewal', '웹사이트 구축 프로젝트의 서브페이지 디자인'],
                ['Dragon Nest Website', '브랜드 웹사이트 서브페이지 UI 디자인'],
                [
                  'Renault Samsung Website Renewal Proposal',
                  '웹사이트 리뉴얼 제안 및 UI 리소스 제작',
                ],
                ['Paradise City Website', '다국어 웹사이트와 서브페이지 UX/UI 설계'],
                [
                  'KT&amp;G Website Accessibility Improvement',
                  'WCAG 2.0 기준에 맞춘 영문 사이트 접근성 개선',
                ],
              ],
            },
          ],
        },
        'page-contact': {
          title: 'Contact | 김태훈',
          description: '김태훈 연락처',
          heading: '좋은 프로젝트와 의미 있는 대화를 기다립니다.',
          label: 'Contact',
        },
        'page-works': {
          title: 'Works | 김태훈',
          description: '김태훈 작업 목록',
          projectTitle: '프로젝트명',
        },
      },
    },
  };

  const selectors = {
    aboutIntro: '.about-intro',
    careerTitle: '#career-title',
    careerEntry: '.career-entry',
    careerCompanyName: '.career-company-name',
    careerMeta: '.career-meta',
    careerProject: '.career-project',
    careerProjectTitle: '.career-project-title',
    careerProjectDescription: '.career-project-description',
    contactTitle: '.contact-title',
    contactLabel: '.contact-label',
    copyEmail: '[data-copy-email]',
    copyToast: '.copy-toast',
    footerContact: '.footer-contact',
    languageToggle: '.language-toggle',
    languageCurrent: '.language-current',
    siteHeader: '.site-header',
    siteNavLinks: '.site-nav a',
    workName: '.work-name',
    revealItem: '[data-scroll-reveal], .career-list > .career-entry, .work-list > .work-item',
    revealGroup: '.career-list, .work-list',
    groupedRevealItem: ':scope > [data-scroll-reveal], :scope > .career-entry, :scope > .work-item',
  };

  const getPageKey = () =>
    ['page-about', 'page-contact', 'page-works'].find((key) =>
      document.body.classList.contains(key),
    );
  const getInitialLanguage = () =>
    new URLSearchParams(window.location.search).get('lang') === 'ko' ? 'ko' : 'en';
  const syncLanguageUrl = (lang) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };
  let currentLanguage = getInitialLanguage();

  const applyCareer = (page) => {
    const title = document.querySelector(selectors.careerTitle);
    if (title) title.textContent = page.careerTitle;
    document.querySelectorAll(selectors.careerEntry).forEach((entry, index) => {
      const data = page.careerEntries[index];
      if (!data) return;
      entry.querySelector(selectors.careerCompanyName).textContent = data.company;
      entry.querySelector(selectors.careerMeta).innerHTML = data.meta;
      entry.querySelectorAll(selectors.careerProject).forEach((project, projectIndex) => {
        const projectData = data.projects[projectIndex];
        if (!projectData) return;
        project.querySelector(selectors.careerProjectTitle).innerHTML = projectData[0];
        project.querySelector(selectors.careerProjectDescription).innerHTML = projectData[1];
      });
    });
  };

  const applyLanguage = (lang, shouldSyncUrl = true) => {
    const pageKey = getPageKey();
    const dictionary = translations[lang];
    const page = dictionary.pages[pageKey];
    if (!page) return;
    currentLanguage = lang;
    if (shouldSyncUrl) syncLanguageUrl(lang);
    document.documentElement.lang = lang;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector(selectors.languageCurrent)?.replaceChildren(dictionary.common.language);
    document.querySelectorAll(selectors.siteNavLinks).forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (href.includes('#about')) link.textContent = dictionary.common.about;
      if (href.includes('works.html')) link.textContent = dictionary.common.works;
      if (href.includes('contact.html')) link.textContent = dictionary.common.contact;
    });
    document
      .querySelectorAll(selectors.footerContact)
      .forEach((link) => (link.textContent = dictionary.common.footerContact));
    const toast = document.querySelector(selectors.copyToast);
    if (toast) toast.textContent = dictionary.common.copied;
    if (pageKey === 'page-about') {
      document.querySelector(selectors.aboutIntro).innerHTML = page.profile;
      applyCareer(page);
    }
    if (pageKey === 'page-contact') {
      document.querySelector(selectors.contactTitle).textContent = page.heading;
      document.querySelector(selectors.contactLabel).textContent = page.label;
    }
    if (pageKey === 'page-works') {
      document
        .querySelectorAll(selectors.workName)
        .forEach((title) => (title.textContent = page.projectTitle));
    }
  };

  applyLanguage(currentLanguage, new URLSearchParams(window.location.search).has('lang'));

  const header = document.querySelector(selectors.siteHeader);
  const trigger = document.querySelector(selectors.languageToggle);

  if (header) {
    const syncStickyHeader = () => header.classList.toggle('is-stuck', window.scrollY > 0);
    syncStickyHeader();
    window.addEventListener('scroll', syncStickyHeader, { passive: true });
    window.addEventListener('resize', syncStickyHeader);
  }

  if (trigger) {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      applyLanguage(currentLanguage === 'en' ? 'ko' : 'en');
    });
  }

  const revealItems = document.querySelectorAll(selectors.revealItem);
  const revealGroups = document.querySelectorAll(selectors.revealGroup);
  if (revealItems.length) {
    revealGroups.forEach((group) => {
      group.querySelectorAll(selectors.groupedRevealItem).forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${(index + 1) * 60}ms`);
      });
    });
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -14% 0px', threshold: 0.16 },
      );
      revealItems.forEach((item) => revealObserver.observe(item));
    }
  }

  const emailLink = document.querySelector(selectors.copyEmail);
  const toast = document.querySelector(selectors.copyToast);
  let toastTimer;
  if (!emailLink || !toast) return;

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {}
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  const showToast = () => {
    window.clearTimeout(toastTimer);
    toast.hidden = false;
    toast.getBoundingClientRect();
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      window.setTimeout(() => {
        if (!toast.classList.contains('is-visible')) toast.hidden = true;
      }, 320);
    }, 2200);
  };

  emailLink.addEventListener('click', async (event) => {
    event.preventDefault();
    await copyText(emailLink.dataset.copyEmail);
    showToast();
  });
})();

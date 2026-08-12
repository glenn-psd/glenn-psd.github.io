const externalRel = 'target="_blank" rel="noopener noreferrer"';

export const translations = {
  en: {
    common: {
      language: 'KR',
      switchLanguage: 'Switch to Korean',
      about: 'About',
      works: 'Works',
      contact: 'Contact',
      copy: 'Copy',
      copied: 'Copied.',
      copyFailed: 'Unable to copy.',
    },
    pages: {
      about: {
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
        careers: {
          ncai: {
            company: 'NC AI',
            meta: `Product Designer<br />2025.02 - Present<br /><a href="https://nc-ai.com/en" ${externalRel}>nc-ai.com</a>`,
            projects: {
              varco3d: {
                title: 'VARCO 3D',
                description:
                  'UX/UI design and operation for a generative AI 3D asset creation product',
              },
              designSystem: {
                title: 'VARCO Design System',
                description: 'Built and operated the design system across NC AI services',
              },
            },
          },
          nc: {
            company: 'NC',
            meta: `Product Designer<br />2022.06 - 2025.01<br /><a href="https://www.nc.com/?locale=en-US" ${externalRel}>nc.com</a>`,
            projects: {
              varcoText: {
                title: 'VARCO Text',
                description:
                  'UX/UI design for a Text-to-Text AI service specialized for game production',
              },
              aiFinancial: {
                title: 'AI Financial Service',
                description: 'UX/UI design for an MTS app prototype powered by financial AI',
              },
            },
          },
          webzen: {
            company: 'Webzen',
            meta: `UX/UI Designer<br />2017.08 - 2022.05<br /><a href="https://company.webzen.com/en" ${externalRel}>company.webzen.com</a>`,
            projects: {
              community: {
                title: 'Webzen Community Site',
                description: 'Built a mobile game community platform and improved UX',
              },
              shotOnline: {
                title: 'Shot Online EU Website Renewal',
                description: 'UX/UI design for the Shot Online Europe website renewal',
              },
              remote: {
                title: 'Webzen Remote App',
                description: 'UX/UI design for a mobile desktop game streaming app',
              },
              payments: {
                title: 'Southeast Asia Payment Platform',
                description: 'Built UX/UI for a payment platform targeting Southeast Asian markets',
              },
              gameGuide: {
                title: 'Game Guide Website',
                description: 'UX/UI design for Webzen game guide websites',
              },
              masterTanker: {
                title: 'Master Tanker Official Website',
                description: 'Built the official website for the mobile game Master Tanker',
              },
            },
          },
          media4th: {
            company: 'Media4th One',
            meta: `UI Designer<br />2014/09 - 2015.09<br /><a href="https://www.media4thone.co.kr/" ${externalRel}>media4thone.co.kr</a>`,
            projects: {
              sm: {
                title: 'SM Entertainment Website Proposal',
                description: 'Independently led UI design for a website renewal proposal',
              },
              shotOnline: {
                title: 'Shot Online EU Website Renewal',
                description: 'Designed subpages for a website build project',
              },
              dragonNest: {
                title: 'Dragon Nest Website',
                description: 'Designed UI for brand website subpages',
              },
              renault: {
                title: 'Renault Samsung Website Renewal Proposal',
                description: 'Developed a website renewal proposal and UI resources',
              },
              paradise: {
                title: 'Paradise City Website',
                description: 'UX/UI design for a multilingual website and subpages',
              },
              ktng: {
                title: 'KT&G Website Accessibility Improvement',
                description:
                  'Improved accessibility of the English site to meet WCAG 2.0 standards',
              },
            },
          },
        },
      },
      contact: {
        title: 'Contact | Tayhoon Kim',
        description: 'Contact Tayhoon Kim',
        heading: 'Open to thoughtful projects and good conversations.',
        label: 'Contact',
      },
      works: {
        title: 'Works | Tayhoon Kim',
        description: 'Tayhoon Kim work list',
        projectTitle: 'ProjectTitle',
      },
      project: {
        title: 'Tempo | Tayhoon Kim',
        description: 'Tempo project detail',
        projectTitle:
          'Tempo — Brand identity for a blockchain that is redefining the future of global payments',
        servicesLabel: 'Services',
        services: {
          motion: 'Motion',
          visualIdentity: 'Visual identity',
          sound: 'Sound',
          interactive: 'Interactive',
        },
        intro:
          'Founded by Paradigm and Stripe, Tempo is a blockchain for real world payments that is destined to set new standards in the industry. Designed specifically for stablecoin transactions, Tempo delivers the speed, efficiency, and scalability required for global payments at scale.',
        stories: {
          strategy: {
            title: 'Strategy',
            description:
              'Humble in its role as a provider yet confident in its potential, Tempo will play a defining role in the future of global payments. The brand needed to feel outspoken and distinctive while remaining direct, grounded, and ready for developers, entrepreneurs, global brands, banks, and governments.',
          },
          design: {
            title: 'Design',
            description:
              "Tempo's foundation of speed and advanced technology shaped the identity. A standalone T supports the wordmark, while a custom Tempo typeface and tailor-made software expand letterforms from regular to extremely wide, echoing the movement of cross-border payments through space and time.",
          },
          results: {
            title: 'Results',
            description:
              'The identity embodies a product built to redefine the future of money transfers. A comprehensive package of motion, sound, design software, guidelines, and digital assets gives in-house teams a cohesive but flexible visual language.',
          },
        },
        images: {
          composition: 'Tempo brand identity compositions',
          applications: 'Tempo brand applications',
          mobile: 'Tempo mobile brand application',
        },
      },
    },
  },
  ko: {
    common: {
      language: 'EN',
      switchLanguage: '영어로 전환',
      about: 'About',
      works: 'Works',
      contact: 'Contact',
      copy: '복사',
      copied: '복사했습니다.',
      copyFailed: '복사하지 못했습니다.',
    },
    pages: {
      about: {
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
        careers: {
          ncai: {
            company: 'NC AI',
            meta: `Product Designer<br />2025.02 - 현재<br /><a href="https://nc-ai.com/en" ${externalRel}>nc-ai.com</a>`,
            projects: {
              varco3d: {
                title: 'VARCO 3D',
                description: '생성형 AI 기반 3D 에셋 제작 제품의 UX/UI 설계 및 운영',
              },
              designSystem: {
                title: 'VARCO Design System',
                description: 'NC AI 서비스 전반의 디자인 시스템 구축 및 운영',
              },
            },
          },
          nc: {
            company: 'NC',
            meta: `Product Designer<br />2022.06 - 2025.01<br /><a href="https://www.nc.com/?locale=en-US" ${externalRel}>nc.com</a>`,
            projects: {
              varcoText: {
                title: 'VARCO Text',
                description: '게임 제작에 특화된 Text-to-Text AI 서비스 UX/UI 설계',
              },
              aiFinancial: {
                title: 'AI Financial Service',
                description: '금융 AI 기반 MTS 앱 프로토타입 UX/UI 설계',
              },
            },
          },
          webzen: {
            company: 'Webzen',
            meta: `UX/UI Designer<br />2017.08 - 2022.05<br /><a href="https://company.webzen.com/en" ${externalRel}>company.webzen.com</a>`,
            projects: {
              community: {
                title: 'Webzen Community Site',
                description: '모바일 게임 커뮤니티 플랫폼 구축 및 UX 개선',
              },
              shotOnline: {
                title: 'Shot Online EU Website Renewal',
                description: 'Shot Online 유럽 공식 웹사이트 리뉴얼 UX/UI 설계',
              },
              remote: {
                title: 'Webzen Remote App',
                description: '모바일 데스크톱 게임 스트리밍 앱 UX/UI 설계',
              },
              payments: {
                title: 'Southeast Asia Payment Platform',
                description: '동남아시아 시장 대상 결제 플랫폼 UX/UI 구축',
              },
              gameGuide: {
                title: 'Game Guide Website',
                description: 'Webzen 게임 가이드 웹사이트 UX/UI 설계',
              },
              masterTanker: {
                title: 'Master Tanker Official Website',
                description: '모바일 게임 Master Tanker 공식 웹사이트 구축',
              },
            },
          },
          media4th: {
            company: 'Media4th One',
            meta: `UI Designer<br />2014/09 - 2015.09<br /><a href="https://www.media4thone.co.kr/" ${externalRel}>media4thone.co.kr</a>`,
            projects: {
              sm: {
                title: 'SM Entertainment Website Proposal',
                description: '웹사이트 리뉴얼 제안 UI 디자인 단독 수행',
              },
              shotOnline: {
                title: 'Shot Online EU Website Renewal',
                description: '웹사이트 구축 프로젝트의 서브페이지 디자인',
              },
              dragonNest: {
                title: 'Dragon Nest Website',
                description: '브랜드 웹사이트 서브페이지 UI 디자인',
              },
              renault: {
                title: 'Renault Samsung Website Renewal Proposal',
                description: '웹사이트 리뉴얼 제안 및 UI 리소스 제작',
              },
              paradise: {
                title: 'Paradise City Website',
                description: '다국어 웹사이트와 서브페이지 UX/UI 설계',
              },
              ktng: {
                title: 'KT&G Website Accessibility Improvement',
                description: 'WCAG 2.0 기준에 맞춘 영문 사이트 접근성 개선',
              },
            },
          },
        },
      },
      contact: {
        title: 'Contact | 김태훈',
        description: '김태훈 연락처',
        heading: '좋은 프로젝트와 의미 있는 대화를 기다립니다.',
        label: 'Contact',
      },
      works: {
        title: 'Works | 김태훈',
        description: '김태훈 작업 목록',
        projectTitle: '프로젝트명',
      },
      project: {
        title: 'Tempo | 김태훈',
        description: 'Tempo 프로젝트 상세',
        projectTitle:
          'Tempo — 글로벌 결제의 미래를 다시 정의하는 블록체인을 위한 브랜드 아이덴티티',
        servicesLabel: '서비스',
        services: {
          motion: '모션',
          visualIdentity: '비주얼 아이덴티티',
          sound: '사운드',
          interactive: '인터랙티브',
        },
        intro:
          'Paradigm과 Stripe가 설립한 Tempo는 실물 결제를 위한 블록체인으로, 업계의 새로운 기준을 목표로 합니다. 스테이블코인 거래에 맞춰 설계된 Tempo는 글로벌 결제를 대규모로 처리하는 데 필요한 속도, 효율성, 확장성을 제공합니다.',
        stories: {
          strategy: {
            title: '전략',
            description:
              '인프라 제공자로서 절제된 태도를 유지하면서도 가능성에는 확신을 가져야 했습니다. Tempo는 글로벌 결제의 미래에서 중요한 역할을 하게 될 브랜드입니다. 개발자와 기업가부터 글로벌 브랜드, 은행, 정부까지 폭넓은 사용자를 위해 직관적이고 현실적이면서도 분명한 존재감을 갖춰야 했습니다.',
          },
          design: {
            title: '디자인',
            description:
              '속도와 첨단 기술이라는 기반이 아이덴티티의 방향을 만들었습니다. 독립적인 T 심볼이 워드마크를 지지하고, 전용 Tempo 서체와 맞춤 소프트웨어는 글자 폭을 Regular에서 극단적으로 넓은 형태까지 확장합니다. 이는 국경을 넘는 결제가 시간과 공간을 가로질러 이동하는 모습을 반영합니다.',
          },
          results: {
            title: '결과',
            description:
              '완성된 아이덴티티는 송금의 미래를 다시 정의하려는 제품의 태도를 담습니다. 모션, 사운드, 디자인 소프트웨어, 가이드라인과 디지털 에셋으로 구성된 체계는 내부 팀에 일관되면서도 유연한 시각 언어를 제공합니다.',
          },
        },
        images: {
          composition: 'Tempo 브랜드 아이덴티티 구성',
          applications: 'Tempo 브랜드 애플리케이션',
          mobile: 'Tempo 모바일 브랜드 애플리케이션',
        },
      },
    },
  },
};

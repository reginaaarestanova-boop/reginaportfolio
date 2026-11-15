import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import './styles.css';

const PORTFOLIO_EMAIL = 'reginaaarestanova@gmail.com';

const projectCategories = [
  { id: 'recent', en: 'Recent work', ru: 'Все проекты', count: 6 },
  { id: 'saas', en: 'SaaS', ru: 'SaaS', count: 2 },
  { id: 'web', en: 'Web', ru: 'Web', count: 2 },
  { id: 'mobile', en: 'Mobile', ru: 'Mobile', count: 2 },
];

const projects = [
  {
    title: 'Network Security Management Platform', titleRu: 'Платформа управления сетевой безопасностью', image: '/assets/optimized/project-security.jpg', category: 'saas',
    badges: ['b2b', 'SaaS', 'Cybersecurity', 'Complex UX', 'Design System', 'Web App'],
    hoverBadgesEn: ['b2b', 'SaaS', 'Cybersecurity', 'Complex UX', 'Design System', 'Web App'],
    hoverBadgesRu: ['b2b', 'SAAS', 'Кибербезопасность', 'Сложные интерфейсы', 'Дизайн-система', 'Веб-приложение'],
  },
  {
    title: 'AI Content Creation & Editing Platform', titleRu: 'Платформа для создания и редактирования AI-контента', image: '/assets/optimized/project-ai.jpg', category: 'saas',
    badges: ['AI', 'SaaS', 'Content Creation', 'Product Design', 'Tool', 'Web App'],
    hoverBadgesEn: ['AI', 'SaaS', 'Content Creation', 'Product Design', 'Tool', 'Web App'],
    hoverBadgesRu: ['AI', 'SAAS', 'Создание контента', 'Продуктовый дизайн', 'Веб-инструмент', 'Веб-приложение'],
  },
  {
    title: 'Digital Banking & Payment Experiences', titleRu: 'Цифровой банкинг и платёжные сценарии', image: '/assets/optimized/project-banking.jpg', category: 'web', nda: true,
    badges: ['Fintech', 'Banking', 'Payments', 'Web & Mobile', 'UX/UI'],
    hoverBadgesEn: ['Fintech', 'Banking', 'Payments', 'UX/UI'],
    hoverBadgesRu: ['Финтех', 'Банкинг', 'Платежи', 'Веб и мобильные интерфейсы', 'UX/UI'],
  },
  {
    title: 'Industrial Corporate Website Redesign', titleRu: 'Редизайн корпоративного сайта промышленной компании', image: '/assets/optimized/project-industrial.jpg', category: 'web',
    badges: ['b2b', 'Corporate Website', 'Web Design', 'Redesign', 'Responsive', 'Web Animation'],
    hoverBadgesEn: ['b2b', 'Corporate Website', 'Web Design', 'Redesign', 'Responsive', 'Web Animation'],
    hoverBadgesRu: ['b2b', 'Корпоративный сайт', 'Веб-дизайн', 'Редизайн', 'Адаптивный дизайн', 'Анимации'],
  },
  {
    title: 'Pet Marketplace & Mobile Ecosystem', titleRu: 'Маркетплейс зоотоваров и мобильная экосистема', image: '/assets/optimized/project-pets.jpg', category: 'mobile',
    badges: ['iOS & Android', 'E-commerce', 'Marketplace', 'Mobile app', 'MVP', 'b2c'],
    hoverBadgesEn: ['E-commerce', 'Marketplace', 'Mobile app', 'MVP', 'b2c'],
    hoverBadgesRu: ['E-commerce', 'Маркетплейс', 'Мобильный дизайн', 'MVP', 'b2c'],
  },
  {
    title: 'Investment Portfolio Tracker for iOS', titleRu: 'iOS-приложение для отслеживания инвестиций', image: '/assets/optimized/project-investment.jpg', category: 'mobile',
    badges: ['iOS', 'Fintech', 'Portfolio Analytics', 'Utility App', 'MVP', 'b2c'],
    hoverBadgesEn: ['iOS', 'Fintech', 'Portfolio Analytics', 'Utility App', 'MVP', 'b2c'],
    hoverBadgesRu: ['iOS', 'Финтех', 'Аналитика портфеля', 'Утилита', 'MVP', 'b2c'],
  },
];

const copy = {
  en: {
    locale: 'en',
    nav: ['Work', 'About', 'Connect'],
    name: 'Regina Arestanova',
    role: 'UX/UI & Product Designer',
    bioParagraphs: [
      ['I make complex product logic feel simple.'],
      ["For 3+ years, I've been designing digital products — from user flows", 'and design decisions to development-ready interfaces.'],
    ],
    copyEmail: 'Copy email',
    connect: 'Let’s connect',
    emailCopied: 'Copied',
    copyright: '© 2026 Regina Arestanova',
    footerLinks: ['Email', 'Linkedin', 'Telegram'],
  },
  ru: {
    locale: 'ru',
    nav: ['Проекты', 'Обо мне', 'Контакты'],
    name: 'Регина Арестанова',
    role: 'UX/UI & Product Designer',
    bioParagraphs: [
      ['Проектирую интерфейсы, в которых сложная логика становится', 'простым пользовательским опытом.'],
      ['3+ года работаю с цифровыми продуктами: продумываю сценарии,', 'принимаю дизайн-решения и довожу их до реализации.'],
    ],
    copyEmail: 'Написать на почту',
    emailCopied: 'Скопировано',
    connect: 'Связаться',
    copyright: '© 2026 Регина Арестанова',
    footerLinks: ['Email', 'Linkedin', 'Telegram'],
  },
};

function Icon({ src, alt = '' }) {
  return <img className="icon" src={src} alt={alt} />;
}

function LanguageSwitch({ language, onChange }) {
  const languages = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ];

  return (
    <nav className="language-switch" aria-label="Language">
      {languages.map(({ value, label }) => {
        const active = language === value;
        return (
          <motion.a
            key={value}
            className={active ? 'language active' : 'language'}
            href={`/${value}`}
            aria-current={active ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              if (!active) onChange(value);
            }}
            whileHover={{ color: '#3a3a3a' }}
            transition={{ duration: 0.18 }}
          >
            <span className="language-label">{label}</span>
            {active && (
              <motion.span
                className="language-indicator"
                layoutId="language-active-indicator"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                aria-hidden="true"
              />
            )}
          </motion.a>
        );
      })}
    </nav>
  );
}

function Header({ content, language, onLanguageChange }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [highlight, setHighlight] = React.useState({ left: 0, width: 0 });
  const navRef = React.useRef(null);
  const tabRefs = React.useRef([]);

  const measureTab = (index) => {
    const nav = navRef.current;
    const tab = tabRefs.current[index];
    if (!nav || !tab) return;
    const navRect = nav.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setHighlight({ left: tabRect.left - navRect.left, width: tabRect.width });
  };

  React.useLayoutEffect(() => {
    const index = hoveredIndex ?? activeIndex;
    measureTab(index);
    const handleResize = () => measureTab(hoveredIndex ?? activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, hoveredIndex, content.nav]);

  return (
    <header className="header page-gutter">
      <nav
        ref={navRef}
        className="header-nav"
        aria-label={language === 'ru' ? 'Главная навигация' : 'Main navigation'}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.span
          className="header-nav-highlight"
          animate={{ left: highlight.left, width: highlight.width, opacity: hoveredIndex === null ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-hidden="true"
        />
        {content.nav.map((item, index) => {
          const active = index === activeIndex;
          return (
            <a
              key={item}
              ref={(element) => { tabRefs.current[index] = element; }}
              className={active ? 'active' : ''}
              href={`#${['work', 'about', 'connect'][index]}`}
              aria-current={active ? 'location' : undefined}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              {item}
            </a>
          );
        })}
      </nav>
      <LanguageSwitch language={language} onChange={onLanguageChange} />
    </header>
  );
}

function ContactButton({ children, tone = 'dark', icon, onClick, href, disabled = false }) {
  const className = `contact-button ${tone}`;
  const content = <>{icon && <Icon src={icon} />}<span className="contact-button-label">{children}</span></>;
  return href
    ? <a className={className} href={href}>{content}</a>
    : <button className={className} onClick={onClick} disabled={disabled}>{content}</button>;
}

function Intro({ content, language }) {
  const profileRef = React.useRef(null);
  const bioRef = React.useRef(null);
  const copiedTimeoutRef = React.useRef(null);
  const [emailCopied, setEmailCopied] = React.useState(false);

  React.useEffect(() => () => window.clearTimeout(copiedTimeoutRef.current), []);

  const handleCopyEmail = async () => {
    const fallbackCopy = () => {
      const input = document.createElement('textarea');
      input.value = PORTFOLIO_EMAIL;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      if (!copied) throw new Error('Clipboard copy failed');
    };

    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(PORTFOLIO_EMAIL);
        } catch {
          fallbackCopy();
        }
      } else {
        fallbackCopy();
      }
      setEmailCopied(true);
      window.clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  React.useLayoutEffect(() => {
    const profile = profileRef.current;
    const bio = bioRef.current;
    if (!profile || !bio) return;

    const syncPhotoSize = () => {
      const height = bio.getBoundingClientRect().height;
      if (height > 0) profile.style.setProperty('--profile-photo-size', `${height}px`);
    };

    syncPhotoSize();
    const observer = new ResizeObserver(syncPhotoSize);
    observer.observe(bio);
    window.addEventListener('resize', syncPhotoSize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncPhotoSize);
    };
  }, [language]);

  return (
    <section className="intro" id="about">
      <div className="profile" ref={profileRef}>
        <img className="avatar" src="/assets/optimized/avatar.jpg" alt={content.name} />
        <div className="identity">
          <h1>{content.name}</h1>
          <p className="subtitle-accent">{content.role}</p>
        </div>
      </div>
      <div className="bio" id="connect" ref={bioRef}>
        <div className="bio-copy" lang={language}>
          {content.bioParagraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((line, lineIndex) => (
                <React.Fragment key={line}>
                  {lineIndex > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
        <div className="contact-actions">
          <ContactButton icon={emailCopied ? "/assets/icon-check.svg" : "/assets/icon-copy.svg"} onClick={handleCopyEmail}>{emailCopied ? content.emailCopied : content.copyEmail}</ContactButton>
          <ContactButton tone="light" icon="/assets/icon-plane.svg" disabled>{content.connect}</ContactButton>
        </div>
      </div>
    </section>
  );
}

function CategoryTabs({ content, selected, onChange }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [hoverStyle, setHoverStyle] = React.useState({ left: 0, width: 0 });
  const [activeStyle, setActiveStyle] = React.useState({ left: 0, width: 0 });
  const tabRefs = React.useRef([]);

  const measureTab = (index, update) => {
    const tab = tabRefs.current[index];
    if (!tab) return;
    update({ left: tab.offsetLeft, width: tab.offsetWidth });
  };

  React.useLayoutEffect(() => {
    const activeIndex = projectCategories.findIndex((category) => category.id === selected);
    measureTab(activeIndex, setActiveStyle);
    if (hoveredIndex !== null) measureTab(hoveredIndex, setHoverStyle);

    const handleResize = () => {
      measureTab(activeIndex, setActiveStyle);
      if (hoveredIndex !== null) measureTab(hoveredIndex, setHoverStyle);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selected, hoveredIndex, content.locale]);

  return (
    <nav
      className="category-tabs"
      aria-label={content.locale === 'ru' ? 'Категория проекта' : 'Project category'}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.span
        className="category-hover-highlight"
        animate={{ left: hoverStyle.left, width: hoverStyle.width, opacity: hoveredIndex === null ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <motion.span
        className="category-active-indicator"
        animate={{ left: activeStyle.left, width: activeStyle.width }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
      {projectCategories.map((category, index) => {
        const active = selected === category.id;
        return (
          <button
            key={category.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            className={active ? 'category active' : 'category'}
            onClick={() => onChange(category.id)}
            onMouseEnter={() => setHoveredIndex(index)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            aria-pressed={active}
          >
            <span>{category[content.locale]}</span>
            <span className="count">({category.count})</span>
          </button>
        );
      })}
    </nav>
  );
}

function ProjectCard({ project, language }) {
  const title = language === 'ru' ? project.titleRu : project.title;
  const badges = language === 'ru' ? project.hoverBadgesRu : project.hoverBadgesEn;
  return (
    <article className="project-card">
      <img className="project-art" src={project.image} alt="" />
      <div className="project-content">
        <div className="project-heading">
          <h2>{title}</h2>
          {project.nda && <span className="nda">NDA</span>}
        </div>
        <div className="project-badges project-badges-desktop" aria-label={language === 'ru' ? 'Теги проекта' : 'Project tags'}>
          {badges.map((badge) => <span className="project-badge" key={badge}>{badge}</span>)}
        </div>
        <div className="project-badges project-badges-adaptive" aria-label={language === 'ru' ? 'Теги проекта' : 'Project tags'}>
          {project.badges.map((badge) => <span className="project-badge" key={badge}>{badge}</span>)}
        </div>
        {project.previewVideo && (
          <button className="play-button" aria-label={`${language === 'ru' ? 'Открыть' : 'Open'} ${title}`}>
            <Icon src="/assets/icon-pause.svg" />
          </button>
        )}
      </div>
    </article>
  );
}

function ProjectGrid({ selected, language }) {
  const visibleProjects = selected === 'recent' ? projects : projects.filter((project) => project.category === selected);
  return <div className="project-grid" id="work">{visibleProjects.map((project) => <ProjectCard key={project.title} project={project} language={language} />)}</div>;
}

function Footer({ content }) {
  return (
    <footer className="footer page-gutter">
      <p>{content.copyright}</p>
      <nav aria-label={content.locale === 'ru' ? 'Социальные сети' : 'Social links'}>
        {content.footerLinks.map((label) => <a href="#connect" key={label}>{label}</a>)}
      </nav>
    </footer>
  );
}

function PortfolioHome({ language, onLanguageChange }) {
  const [selected, setSelected] = React.useState('recent');
  const content = copy[language];
  return (
    <div className="site-shell">
      <Header content={content} language={language} onLanguageChange={onLanguageChange} />
      <main className="page-gutter main-content">
        <div className="intro-region">
          <Intro content={content} language={language} />
          <CategoryTabs content={{ ...content, locale: language }} selected={selected} onChange={setSelected} />
        </div>
        <ProjectGrid selected={selected} language={language} />
      </main>
      <Footer content={content} />
    </div>
  );
}

function App() {
  const getLanguage = () => window.location.pathname.replace(/\/$/, '').split('/').pop() === 'ru' ? 'ru' : 'en';
  const [language, setLanguage] = React.useState(getLanguage);

  React.useEffect(() => {
    const updateLanguage = () => setLanguage(getLanguage());
    window.addEventListener('popstate', updateLanguage);
    return () => window.removeEventListener('popstate', updateLanguage);
  }, []);

  const changeLanguage = (nextLanguage) => {
    window.history.pushState({}, '', `/${nextLanguage}`);
    setLanguage(nextLanguage);
  };

  document.documentElement.lang = language;
  document.title = language === 'ru'
    ? 'Регина Арестанова — UX/UI & Product Designer'
    : 'Regina Arestanova — UX/UI & Product Designer';
  return <PortfolioHome language={language} onLanguageChange={changeLanguage} />;
}

createRoot(document.getElementById('root')).render(<App />);

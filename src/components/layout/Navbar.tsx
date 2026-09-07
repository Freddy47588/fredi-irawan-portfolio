import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1) || 'home');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'certifications',
      'contact',
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]?.target.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-22% 0px -68% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links: Array<[string, string]> = [
    ['home', t.nav.home],
    ['about', t.nav.about],
    ['skills', t.nav.skills],
    ['projects', t.nav.projects],
    ['experience', t.nav.experience],
    ['education', t.nav.education],
    ['certifications', t.nav.certifications],
    ['contact', t.nav.contact],
  ];
  const selectSection = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label={t.nav.primary}>
        <a
          className="wordmark"
          href="#home"
          onClick={() => selectSection('home')}
          aria-label="Fredi Irawan, home"
        >
          <span>FI</span>
          <strong>Fredi Irawan</strong>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => selectSection(id)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label={t.nav.language}>
            <button
              className={locale === 'en' ? 'active' : ''}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              className={locale === 'id' ? 'active' : ''}
              onClick={() => setLocale('id')}
              aria-pressed={locale === 'id'}
            >
              ID
            </button>
          </div>
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

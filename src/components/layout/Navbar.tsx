import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const links = [
    ['home', t.nav.home],
    ['about', t.nav.about],
    ['skills', t.nav.skills],
    ['projects', t.nav.projects],
    ['experience', t.nav.experience],
    ['education', t.nav.education],
    ['certifications', t.nav.certifications],
    ['contact', t.nav.contact],
  ];
  const closeMenu = () => setOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label={t.nav.primary}>
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Fredi Irawan, home">
          <span>FI</span>
          <strong>Fredi Irawan</strong>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
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

import { ArrowDown, ArrowUpRight, GitBranch, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="container hero-content">
        <div className="availability">
          <span />
          {t.hero.availability}
        </div>
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title">{t.hero.title}</h1>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {t.hero.projects}
            <ArrowDown size={18} />
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/Freddy47588"
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={18} />
            {t.hero.github}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hero-meta">
          <span>Fredi Irawan</span>
          <span>
            <MapPin size={16} />
            Malang, Indonesia
          </span>
        </div>
      </div>
    </section>
  );
}

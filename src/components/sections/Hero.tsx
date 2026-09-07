import {
  ArrowDown,
  ArrowUpRight,
  GitBranch,
  Map,
  MapPin,
  MonitorSmartphone,
  ScanSearch,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';

export function Hero() {
  const { locale, t } = useLanguage();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="availability hero-enter" style={{ '--hero-order': 0 } as CSSProperties}>
            <span />
            {t.hero.availability}
          </div>
          <p className="eyebrow hero-enter" style={{ '--hero-order': 1 } as CSSProperties}>
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-enter" style={{ '--hero-order': 2 } as CSSProperties}>
            {t.hero.title}
          </h1>
          <p className="hero-description hero-enter" style={{ '--hero-order': 3 } as CSSProperties}>
            {t.hero.description}
          </p>
          <div className="hero-actions hero-enter" style={{ '--hero-order': 4 } as CSSProperties}>
            <a className="button button-primary" href="#projects">
              {t.hero.projects}
              <ArrowDown size={18} />
            </a>
            <a
              className="button button-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitBranch size={18} />
              {t.hero.github}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-meta hero-enter" style={{ '--hero-order': 5 } as CSSProperties}>
            <span>{profile.name}</span>
            <span>
              <MapPin size={16} />
              {profile.location[locale]}
            </span>
          </div>
        </div>
        <aside
          className="workspace-card hero-enter"
          style={{ '--hero-order': 6 } as CSSProperties}
          aria-label={t.hero.workspace}
        >
          <div className="workspace-card-head">
            <span>{t.hero.workspace}</span>
            <i aria-hidden="true" />
          </div>
          <ul>
            <li>
              <MonitorSmartphone aria-hidden="true" />
              <span>{t.hero.workspaceFocus[0]}</span>
            </li>
            <li>
              <Map aria-hidden="true" />
              <span>{t.hero.workspaceFocus[1]}</span>
            </li>
            <li>
              <ScanSearch aria-hidden="true" />
              <span>{t.hero.workspaceFocus[2]}</span>
            </li>
          </ul>
          <div className="workspace-card-accent" aria-hidden="true" />
        </aside>
      </div>
    </section>
  );
}

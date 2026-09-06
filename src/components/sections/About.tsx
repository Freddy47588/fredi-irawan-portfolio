import { Crosshair, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const { locale, t } = useLanguage();
  return (
    <section id="about" className="section">
      <Reveal className="container about-grid">
        <div className="portrait-shell">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt={t.about.profileAlt}
            loading="lazy"
            width="640"
            height="760"
          />
          <div className="portrait-label">
            <span>01</span> {t.about.portraitLabel}
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <p>{t.about.body}</p>
          <dl className="fact-list">
            <div>
              <dt>
                <MapPin size={18} aria-hidden="true" />
                {t.about.location}
              </dt>
              <dd>{profile.location[locale]}</dd>
            </div>
            <div>
              <dt>
                <Crosshair size={18} aria-hidden="true" />
                {t.about.focus}
              </dt>
              <dd>{t.about.focusValue}</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

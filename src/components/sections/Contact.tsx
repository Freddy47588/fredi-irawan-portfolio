import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section contact-section">
      <Reveal className="container contact-inner">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.description}</p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {t.contact.cta}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {t.contact.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} aria-hidden="true" />
              {t.contact.github}
            </a>
            {profile.linkedin ? (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                {t.contact.linkedin}
              </a>
            ) : (
              <span title={t.contact.comingSoon}>
                <BriefcaseBusiness size={18} aria-hidden="true" />
                {t.contact.linkedin}
                <small>{t.contact.comingSoon}</small>
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

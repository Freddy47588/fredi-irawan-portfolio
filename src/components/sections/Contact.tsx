import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';
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
          <a className="button button-primary" href="mailto:freddyirawan510@gmail.com">
            <Mail size={18} />
            {t.contact.cta}
            <ArrowUpRight size={16} />
          </a>
          <div className="contact-links">
            <a href="mailto:freddyirawan510@gmail.com">
              <Mail size={18} />
              {t.contact.email}
            </a>
            <a href="https://github.com/Freddy47588" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              {t.contact.github}
            </a>
            <span title={t.contact.comingSoon}>
              <BriefcaseBusiness size={18} />
              {t.contact.linkedin}
              <small>{t.contact.comingSoon}</small>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

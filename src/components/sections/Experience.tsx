import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '../../data/experience';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  const { locale, t } = useLanguage();
  return (
    <section id="experience" className="section section-tinted">
      <div className="container">
        <Reveal direction="left">
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </Reveal>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal key={item.id} className="experience-card" delay={(index % 2) * 80}>
              <div className="experience-lead">
                <BriefcaseBusiness size={23} aria-hidden="true" />
                <p className="timeline-type">{item.role[locale]}</p>
                <h3>{item.company}</h3>
                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.period[locale]}
                  </span>
                  {item.mode && (
                    <span>
                      <MapPin size={15} aria-hidden="true" />
                      {item.mode[locale]}
                    </span>
                  )}
                </div>
                {item.association && <p className="association">{item.association}</p>}
              </div>
              <div className="experience-body">
                <p>{item.summary[locale]}</p>
                <h4>{t.experience.highlights}</h4>
                <ul className="highlight-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.en}>{highlight[locale]}</li>
                  ))}
                </ul>
                <ul className="tag-list">
                  {item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

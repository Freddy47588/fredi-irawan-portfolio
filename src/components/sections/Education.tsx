import { BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Education() {
  const { locale, t } = useLanguage();
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            description={t.education.description}
          />
        </Reveal>
        <div className="education-grid">
          {education.map((item) => (
            <Reveal
              key={item.id}
              className={`education-entry ${item.featured ? 'education-featured' : ''}`}
            >
              <div className="education-icon">
                {item.featured ? (
                  <GraduationCap aria-hidden="true" />
                ) : (
                  <BookOpen aria-hidden="true" />
                )}
              </div>
              <div>
                <div className="education-topline">
                  <p className="timeline-type">{item.level[locale]}</p>
                  {item.period && <span>{item.period[locale]}</span>}
                </div>
                <h3>{item.institution}</h3>
                {item.program && <p className="education-program">{item.program[locale]}</p>}
                {item.status && (
                  <span className="ongoing-badge">
                    <CheckCircle2 size={14} aria-hidden="true" />
                    {item.status[locale]}
                  </span>
                )}
                <p className="education-description">{item.description[locale]}</p>
                {item.learningAreas && (
                  <ul className="tag-list">
                    {item.learningAreas.map((area) => (
                      <li key={area.en}>{area[locale]}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

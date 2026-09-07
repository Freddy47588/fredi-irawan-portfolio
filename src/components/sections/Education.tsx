import { BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Education() {
  const { locale, t } = useLanguage();
  const featuredEducation = education.filter((item) => item.featured);
  const earlierEducation = education.filter((item) => !item.featured);

  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal direction="left">
          <SectionHeading
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            description={t.education.description}
          />
        </Reveal>
        <div className="education-grid">
          {featuredEducation.map((item, index) => (
            <Reveal key={item.id} className="education-entry education-featured" delay={index * 80}>
              <div className="education-icon">
                <GraduationCap aria-hidden="true" />
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
        <div className="earlier-education" aria-labelledby="earlier-education-title">
          <Reveal direction="left">
            <h3 id="earlier-education-title" className="subsection-title">
              {t.education.earlier}
            </h3>
          </Reveal>
          <div className="earlier-education-list">
            {earlierEducation.map((item, index) => (
              <Reveal key={item.id} className="earlier-education-item" delay={index * 70}>
                <div className="education-icon">
                  <BookOpen aria-hidden="true" />
                </div>
                <div>
                  <p className="timeline-type">{item.level[locale]}</p>
                  <h4>{item.institution}</h4>
                  <p>{item.description[locale]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

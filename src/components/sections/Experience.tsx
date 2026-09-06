import { GraduationCap } from 'lucide-react';
import { education, experiences } from '../../data/experience';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  const { locale, t } = useLanguage();
  return (
    <section id="experience" className="section section-tinted">
      <div className="container experience-layout">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </Reveal>
          <div className="timeline">
            {experiences.map((item) => (
              <Reveal key={item.title.en} className="timeline-item">
                <span className="timeline-dot" />
                <p className="timeline-type">{item.type[locale]}</p>
                <h3>{item.title[locale]}</h3>
                <p>{item.description[locale]}</p>
                <ul className="tag-list">
                  {item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="education-card">
          <GraduationCap size={25} />
          <p className="eyebrow">{t.education.eyebrow}</p>
          <h2>{t.education.title}</h2>
          <p>{t.education.description}</p>
          {education.map((item) => (
            <div className="education-item" key={item.institution}>
              <h3>{item.institution}</h3>
              <p>{item.program[locale]}</p>
              <span>{item.location}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

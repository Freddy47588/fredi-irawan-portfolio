import { Code2, School } from 'lucide-react';
import { training } from '../../data/training';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Training() {
  const { locale, t } = useLanguage();
  return (
    <section className="section section-tinted" aria-labelledby="training-title">
      <div className="container training-layout">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={t.training.eyebrow}
              title={t.training.title}
              description={t.training.description}
            />
          </Reveal>
          <div className="training-grid">
            {training.map((item) => (
              <Reveal key={item.id} className="training-card">
                <div className="training-card-top">
                  <School size={20} aria-hidden="true" />
                  {item.grade && (
                    <span>
                      {t.training.grade} {item.grade}
                    </span>
                  )}
                </div>
                <h3>{item.title[locale]}</h3>
                <p className="training-period">{item.period[locale]}</p>
                <p>{item.description[locale]}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="milestone-card">
          <Code2 size={26} aria-hidden="true" />
          <p className="eyebrow">Java · OOP</p>
          <h3>{t.training.milestone}</h3>
          <p>{t.training.milestoneDescription}</p>
        </Reveal>
      </div>
    </section>
  );
}

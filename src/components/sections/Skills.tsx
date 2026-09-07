import { BrainCircuit, Braces, Code2, Database, Map, Smartphone, Wrench } from 'lucide-react';
import { skillGroups } from '../../data/skills';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const icons = [Code2, Smartphone, Braces, BrainCircuit, Map, Database, Wrench];
export function Skills() {
  const { locale, t } = useLanguage();
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <Reveal direction="left">
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <Reveal key={group.id} className="skill-card" delay={(index % 3) * 70}>
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title[locale]}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

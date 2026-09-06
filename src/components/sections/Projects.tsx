import { useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project, ProjectCategory } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDialog } from '../projects/ProjectDialog';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Web', 'Mobile', 'GIS', 'AI', 'AR'];
export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(
    () => projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  );
  const filterLabel = (value: Filter) =>
    value === 'All' ? t.projects.all : value === 'AI' ? 'AI / CV' : value;
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>
        <div className="filter-list" role="group" aria-label={t.projects.title}>
          {filters.map((value) => (
            <button
              key={value}
              className={filter === value ? 'active' : ''}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {filterLabel(value)}
            </button>
          ))}
        </div>
        {visible.length > 0 ? (
          <div className="projects-grid">
            {visible.map((project) => (
              <Reveal key={project.id}>
                <ProjectCard project={project} onDetails={setSelected} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="empty-state">{t.projects.empty}</p>
        )}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

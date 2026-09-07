import { useMemo, useRef, useState } from 'react';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project, ProjectCategory } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDialog } from '../projects/ProjectDialog';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Web', 'Mobile', 'GIS', 'Data', 'Computer Vision', 'AR'];

export function Projects() {
  const { locale, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogTriggerRef = useRef<HTMLElement | null>(null);
  const featured = useMemo(
    () =>
      projects.filter(
        (project) => project.featured && (filter === 'All' || project.categories.includes(filter)),
      ),
    [filter],
  );
  const archive = useMemo(
    () =>
      projects.filter(
        (project) => !project.featured && (filter === 'All' || project.categories.includes(filter)),
      ),
    [filter],
  );

  const filterLabel = (value: Filter) =>
    value === 'All' ? t.projects.all : t.projects.filters[value];
  const openProject = (project: Project, trigger: HTMLElement) => {
    dialogTriggerRef.current = trigger;
    setSelected(project);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal direction="left">
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

        {featured.length > 0 && (
          <div aria-labelledby="featured-projects-title">
            <Reveal direction="left">
              <h3 id="featured-projects-title" className="subsection-title">
                {t.projects.featured}
              </h3>
            </Reveal>
            <div className="projects-grid project-filter-results" key={`featured-${filter}`}>
              {featured.map((project, index) => (
                <Reveal key={project.id} delay={(index % 2) * 80}>
                  <ProjectCard project={project} onDetails={openProject} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {archive.length > 0 && (
          <div className="project-archive" aria-labelledby="project-archive-title">
            <Reveal direction="left">
              <div className="archive-heading">
                <h3 id="project-archive-title">{t.projects.archive}</h3>
                <p>{t.projects.archiveDescription}</p>
              </div>
            </Reveal>
            <div className="archive-grid project-filter-results" key={`archive-${filter}`}>
              {archive.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 60} className="archive-card-wrap">
                  <article className="archive-card">
                    <div className="archive-meta">
                      <span>{project.year}</span>
                      <span>{t.projects.status[project.status]}</span>
                    </div>
                    <h4>{project.title}</h4>
                    <p>{project.description[locale]}</p>
                    <ul className="tag-list" aria-label={t.projects.technology}>
                      {project.technologies.slice(0, 3).map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <div className="archive-actions">
                      <button
                        className="text-button"
                        onClick={(event) => openProject(project, event.currentTarget)}
                      >
                        {t.projects.details}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </button>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${t.projects.github}: ${project.title}`}
                        >
                          <GitBranch size={17} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {featured.length === 0 && archive.length === 0 && (
          <p className="empty-state">{t.projects.empty}</p>
        )}
      </div>
      <ProjectDialog
        project={selected}
        triggerRef={dialogTriggerRef}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

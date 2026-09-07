import { ArrowUpRight, GitBranch } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from '../../types';

export function ProjectCard({
  project,
  onDetails,
}: {
  project: Project;
  onDetails: (project: Project, trigger: HTMLButtonElement) => void;
}) {
  const { locale, t } = useLanguage();
  return (
    <article className="project-card">
      {project.image && (
        <div className="project-image-wrap">
          <img
            src={`${import.meta.env.BASE_URL}projects/${project.image}`}
            alt={`${t.projects.imageAlt} ${project.title}`}
            loading="lazy"
            width="720"
            height="420"
          />
          <span className="category-chip">
            {project.categories.map((category) => t.projects.filters[category]).join(' · ')}
          </span>
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>{project.year}</span>
          <span>{t.projects.status[project.status]}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description[locale]}</p>
        <ul className="tag-list" aria-label={t.projects.technology}>
          {project.technologies.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-actions">
          <button
            className="text-button"
            onClick={(event) => onDetails(project, event.currentTarget)}
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
              <GitBranch size={18} aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${t.projects.live}: ${project.title}`}
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

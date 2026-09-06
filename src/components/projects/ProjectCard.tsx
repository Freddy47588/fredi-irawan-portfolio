import { ArrowUpRight, GitBranch } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from '../../types';

export function ProjectCard({
  project,
  onDetails,
}: {
  project: Project;
  onDetails: (project: Project) => void;
}) {
  const { locale, t } = useLanguage();
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={`${import.meta.env.BASE_URL}projects/${project.image}`}
          alt={`${t.projects.imageAlt} ${project.title}`}
          loading="lazy"
          width="720"
          height="420"
        />
        <span className="category-chip">
          {project.category === 'AI' ? 'AI / Computer Vision' : project.category}
        </span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description[locale]}</p>
        <ul className="tag-list" aria-label={t.projects.technology}>
          {project.technologies.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-actions">
          <button className="text-button" onClick={() => onDetails(project)}>
            {t.projects.details}
            <ArrowUpRight size={16} />
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.projects.github}: ${project.title}`}
          >
            <GitBranch size={18} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.projects.live}: ${project.title}`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

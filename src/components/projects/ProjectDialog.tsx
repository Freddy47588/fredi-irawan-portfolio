import { useEffect, useRef } from 'react';
import { ArrowUpRight, GitBranch, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from '../../types';

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { locale, t } = useLanguage();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && dialog && !dialog.open) dialog.showModal();
    if (!project && dialog?.open) dialog.close();
  }, [project]);
  if (!project) return null;
  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="dialog-inner">
        <button className="dialog-close" onClick={onClose} aria-label={t.projects.close}>
          <X size={20} />
        </button>
        <span className="eyebrow">{project.category}</span>
        <h2>{project.title}</h2>
        <div className="dialog-copy">
          <h3>{t.projects.overview}</h3>
          <p>{project.overview[locale]}</p>
          <h3>{t.projects.problem}</h3>
          <p>{project.problem[locale]}</p>
          <h3>{t.projects.features}</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.en}>{feature[locale]}</li>
            ))}
          </ul>
          <h3>{t.projects.technology}</h3>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
        <div className="dialog-actions">
          <a
            className="button button-primary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={18} />
            {t.projects.github}
          </a>
          {project.liveUrl && (
            <a
              className="button button-secondary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.projects.live}
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}

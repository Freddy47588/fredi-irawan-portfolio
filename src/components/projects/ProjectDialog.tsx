import { useEffect, useRef, type RefObject } from 'react';
import { ArrowUpRight, GitBranch, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from '../../types';

export function ProjectDialog({
  project,
  triggerRef,
  onClose,
}: {
  project: Project | null;
  triggerRef: RefObject<HTMLElement | null>;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousOverflowRef = useRef('');
  const { locale, t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let focusFrame: number | undefined;
    if (!dialog.open) {
      dialog.showModal();
      focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    }

    return () => {
      if (focusFrame !== undefined) window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [project]);

  const closeDialog = () => dialogRef.current?.close();
  const handleClosed = () => {
    document.body.style.overflow = previousOverflowRef.current;
    onClose();
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={handleClosed}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <button
            ref={closeButtonRef}
            className="dialog-close"
            onClick={closeDialog}
            aria-label={t.projects.close}
          >
            <X size={20} aria-hidden="true" />
          </button>
          <span className="eyebrow">
            {project.categories.map((category) => t.projects.filters[category]).join(' · ')}
          </span>
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
          {(project.githubUrl || project.liveUrl) && (
            <div className="dialog-actions">
              {project.githubUrl && (
                <a
                  className="button button-primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitBranch size={18} aria-hidden="true" />
                  {t.projects.github}
                </a>
              )}
              {project.liveUrl && (
                <a
                  className="button button-secondary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t.projects.live}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}

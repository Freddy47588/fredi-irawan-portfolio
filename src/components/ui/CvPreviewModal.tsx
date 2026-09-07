import { useEffect, useRef, type RefObject } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';

interface CvPreviewModalProps {
  isOpen: boolean;
  pdfUrl: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export function CvPreviewModal({ isOpen, pdfUrl, triggerRef, onClose }: CvPreviewModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousOverflowRef = useRef('');
  const { t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !pdfUrl || !dialog) return;

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
  }, [isOpen, pdfUrl]);

  const closeDialog = () => dialogRef.current?.close();
  const handleClosed = () => {
    document.body.style.overflow = previousOverflowRef.current;
    onClose();
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  if (!pdfUrl) return null;

  return (
    <dialog
      ref={dialogRef}
      className="cv-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClose={handleClosed}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
    >
      <div className="cv-modal-inner">
        <header className="cv-modal-header">
          <div>
            <FileText size={20} aria-hidden="true" />
            <h2 id="cv-modal-title">
              {profile.name} — {t.cvModal.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            className="dialog-close cv-modal-close"
            type="button"
            onClick={closeDialog}
            aria-label={t.cvModal.close}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="cv-preview-area">
          <object data={pdfUrl} type="application/pdf" aria-label={t.cvModal.previewLabel}>
            <div className="cv-preview-fallback">
              <FileText size={36} aria-hidden="true" />
              <p>{t.cvModal.fallback}</p>
              <div>
                <a
                  className="button button-secondary"
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cvModal.open}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <a className="button button-primary" href={pdfUrl} download="Fredi-Irawan-CV.pdf">
                  <Download size={16} aria-hidden="true" />
                  {t.cvModal.download}
                </a>
              </div>
            </div>
          </object>
        </div>

        <footer className="cv-modal-footer">
          <p>{t.cvModal.fallback}</p>
          <div>
            <a
              className="button button-secondary"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cvModal.open}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            <a className="button button-primary" href={pdfUrl} download="Fredi-Irawan-CV.pdf">
              <Download size={16} aria-hidden="true" />
              {t.cvModal.download}
            </a>
          </div>
        </footer>
      </div>
    </dialog>
  );
}

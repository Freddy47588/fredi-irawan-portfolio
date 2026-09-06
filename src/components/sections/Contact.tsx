import { useEffect, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, Copy, GitBranch, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';

type CopyStatus = 'idle' | 'success' | 'error';

const subject = 'Portfolio Collaboration';
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}`;
const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

function copyWithSelection(value: string) {
  const activeElement =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.setAttribute('aria-hidden', 'true');
  textarea.tabIndex = -1;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  activeElement?.focus();
  if (!copied) throw new Error('Copy command was unavailable');
}

export function Contact() {
  const { t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const timeout = window.setTimeout(() => setCopyStatus('idle'), 2500);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        copyWithSelection(profile.email);
      }
      setCopyStatus('success');
    } catch {
      try {
        copyWithSelection(profile.email);
        setCopyStatus('success');
      } catch {
        setCopyStatus('error');
      }
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <Reveal className="container contact-inner">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.description}</p>
        </div>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${t.contact.cta} — Gmail`}
          >
            <Mail size={18} aria-hidden="true" />
            {t.contact.cta}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={mailtoUrl} aria-label={`${t.contact.email}: ${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {t.contact.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={`${t.contact.copyEmail}: ${profile.email}`}
            >
              {copyStatus === 'success' ? (
                <Check size={18} aria-hidden="true" />
              ) : (
                <Copy size={18} aria-hidden="true" />
              )}
              {t.contact.copyEmail}
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${t.contact.github}: Fredi Irawan`}
            >
              <GitBranch size={18} aria-hidden="true" />
              {t.contact.github}
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${t.contact.linkedin}: Fredi Irawan`}
              >
                <BriefcaseBusiness size={18} aria-hidden="true" />
                {t.contact.linkedin}
              </a>
            )}
          </div>
          <span className="copy-feedback" aria-live="polite" aria-atomic="true">
            {copyStatus === 'success'
              ? t.contact.emailCopied
              : copyStatus === 'error'
                ? t.contact.copyFailed
                : ''}
          </span>
        </div>
      </Reveal>
    </section>
  );
}

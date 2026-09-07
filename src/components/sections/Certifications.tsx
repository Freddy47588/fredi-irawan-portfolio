import { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../../data/certificates';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Certifications() {
  const { locale, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? certificates
    : certificates.filter((certificate) => certificate.featured);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal direction="left">
          <SectionHeading
            eyebrow={t.certificates.eyebrow}
            title={t.certificates.title}
            description={t.certificates.description}
          />
        </Reveal>
        <div className="certificate-grid">
          {visible.map((certificate, index) => (
            <Reveal key={certificate.id} className="certificate-card" delay={(index % 2) * 70}>
              <div className="certificate-preview">
                {certificate.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}certificates/${certificate.image}`}
                    alt={certificate.title[locale]}
                    loading="lazy"
                  />
                ) : (
                  <div className="credential-fallback" aria-hidden="true">
                    <Award size={29} />
                    <strong>{t.certificates.category[certificate.category]}</strong>
                    <span>{certificate.issuer}</span>
                    <span>{certificate.year}</span>
                  </div>
                )}
              </div>
              <div className="certificate-copy">
                <div className="certificate-meta">
                  <span>{t.certificates.category[certificate.category]}</span>
                  <span>{certificate.year}</span>
                </div>
                <h3>{certificate.title[locale]}</h3>
                <p>{certificate.issuer}</p>
                {certificate.detail && <small>{certificate.detail[locale]}</small>}
                {certificate.credentialUrl && (
                  <a href={certificate.credentialUrl} target="_blank" rel="noreferrer noopener">
                    {t.certificates.credential}
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        {certificates.some((certificate) => !certificate.featured) && (
          <button
            className="button button-secondary credentials-toggle"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? t.certificates.showLess : t.certificates.viewMore}
          </button>
        )}
      </div>
    </section>
  );
}

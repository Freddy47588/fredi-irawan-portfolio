import { ArrowUp, GitBranch } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Freddy47588"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={19} />
          </a>
          <a href="#home" aria-label={t.footer.backToTop}>
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}

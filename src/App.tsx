import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { About } from './components/sections/About';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Training } from './components/sections/Training';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skipLink}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Training />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

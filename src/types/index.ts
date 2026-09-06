export type Locale = 'en' | 'id';
export type Theme = 'dark' | 'light';
export type LocalizedText = Record<Locale, string>;
export type ProjectCategory = 'Web' | 'Mobile' | 'GIS' | 'AI' | 'AR';

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  overview: LocalizedText;
  problem: LocalizedText;
  features: LocalizedText[];
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface SkillGroup {
  title: LocalizedText;
  skills: string[];
}

export interface Experience {
  title: LocalizedText;
  type: LocalizedText;
  description: LocalizedText;
  technologies: string[];
}

export interface Education {
  institution: string;
  program: LocalizedText;
  location: string;
}

export interface Translation {
  skipLink: string;
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    menu: string;
    close: string;
  };
  theme: { light: string; dark: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    projects: string;
    github: string;
    availability: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    location: string;
    focus: string;
    focusValue: string;
    profileAlt: string;
  };
  skills: { eyebrow: string; title: string; description: string };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    details: string;
    github: string;
    live: string;
    close: string;
    overview: string;
    problem: string;
    features: string;
    technology: string;
    imageAlt: string;
    empty: string;
  };
  experience: { eyebrow: string; title: string; description: string };
  education: { eyebrow: string; title: string; description: string };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    email: string;
    github: string;
    linkedin: string;
    comingSoon: string;
  };
  footer: { copyright: string; backToTop: string };
}

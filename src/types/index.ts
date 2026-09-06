export type Locale = 'en' | 'id';
export type Theme = 'dark' | 'light';
export type LocalizedText = Record<Locale, string>;

export type ProjectCategory = 'Web' | 'Mobile' | 'GIS' | 'Data' | 'Computer Vision' | 'AR';
export type ProjectStatus = 'active' | 'completed' | 'experimental' | 'academic';

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  overview: LocalizedText;
  problem: LocalizedText;
  features: LocalizedText[];
  year: number;
  categories: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  status: ProjectStatus;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  mode?: LocalizedText;
  association?: string;
  summary: LocalizedText;
  highlights: LocalizedText[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  level: LocalizedText;
  program?: LocalizedText;
  period?: LocalizedText;
  status?: LocalizedText;
  description: LocalizedText;
  learningAreas?: LocalizedText[];
  featured: boolean;
}

export interface Training {
  id: string;
  title: LocalizedText;
  provider: string;
  association: string;
  period: LocalizedText;
  grade?: string;
  description: LocalizedText;
  technologies?: string[];
}

export type CertificateCategory = 'training' | 'academic' | 'language' | 'event' | 'technical';

export interface Certificate {
  id: string;
  title: LocalizedText;
  issuer: string;
  year: number;
  category: CertificateCategory;
  detail?: LocalizedText;
  credentialUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Translation {
  skipLink: string;
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    certifications: string;
    contact: string;
    menu: string;
    close: string;
    primary: string;
    language: string;
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
    portraitLabel: string;
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
    featured: string;
    archive: string;
    archiveDescription: string;
    sourceUnavailable: string;
    year: string;
    status: Record<ProjectStatus, string>;
    filters: Record<ProjectCategory, string>;
  };
  experience: { eyebrow: string; title: string; description: string; highlights: string };
  education: { eyebrow: string; title: string; description: string; ongoing: string };
  training: {
    eyebrow: string;
    title: string;
    description: string;
    grade: string;
    milestone: string;
    milestoneDescription: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    description: string;
    viewMore: string;
    showLess: string;
    placeholder: string;
    credential: string;
    category: Record<CertificateCategory, string>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    email: string;
    copyEmail: string;
    emailCopied: string;
    copyFailed: string;
    github: string;
    linkedin: string;
  };
  footer: { copyright: string; backToTop: string };
}

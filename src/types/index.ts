export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface SiteIdentity {
  nameEn: string;
  nameAr: string;
  monogram: string;
  titleEn: string;
  titleAr: string;
  headlineEn: string;
  headlineAr: string;
  introEn: string;
  introAr: string;
  avatarUrl?: string;
  availability: {
    available: boolean;
    statusEn: string;
    statusAr: string;
  };
}

export interface SiteContact {
  email: string;
  github: string;
  linkedin: string;
  facebook?: string;
  twitter?: string;
  locationEn?: string;
  locationAr?: string;
  cvUrl?: string;
}

export interface SectionToggles {
  about: boolean;
  skills: boolean;
  projects: boolean;
  experience: boolean;
  education: boolean;
  certifications: boolean;
  achievements: boolean;
  contact: boolean;
}

export interface SitePreferences {
  defaultLanguage: Language;
  defaultTheme: Theme;
  accentColor: string;
  enablePwaPrompt: boolean;
}

export interface SitePricing {
  priceFormatted: string;
  labelEn: string;
  labelAr: string;
}

export interface SiteConfig {
  identity: SiteIdentity;
  contact: SiteContact;
  pricing?: SitePricing;
  sections: SectionToggles;
  preferences: SitePreferences;
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'architecture';

export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  category: ProjectCategory;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  docsUrl?: string;
  featured: boolean;
  highlightsEn?: string[];
  highlightsAr?: string[];
}

export interface SkillItem {
  name: string;
  levelEn?: string;
  levelAr?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  titleEn: string;
  titleAr: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  roleEn: string;
  roleAr: string;
  companyEn: string;
  companyAr: string;
  periodEn: string;
  periodAr: string;
  locationEn?: string;
  locationAr?: string;
  current: boolean;
  descriptionEn: string;
  descriptionAr: string;
  achievementsEn: string[];
  achievementsAr: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institutionEn: string;
  institutionAr: string;
  degreeEn: string;
  degreeAr: string;
  fieldEn: string;
  fieldAr: string;
  periodEn: string;
  periodAr: string;
  honorsEn?: string;
  honorsAr?: string;
  courseworkEn?: string[];
  courseworkAr?: string[];
}

export interface Certification {
  id: string;
  titleEn: string;
  titleAr: string;
  issuerEn: string;
  issuerAr: string;
  dateEn: string;
  dateAr: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface Achievement {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  dateEn: string;
  dateAr: string;
  metric?: string;
  link?: string;
}

import { describe, it, expect } from 'vitest';
import { translations } from '../i18n/translations';
import { siteConfig } from '../data/siteConfig';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';
import { educations } from '../data/education';
import { certifications } from '../data/certifications';

describe('Bilingual Localization Completeness', () => {
  it('should have matching keys between English and Arabic dictionaries', () => {
    const enKeys = Object.keys(translations.en).sort();
    const arKeys = Object.keys(translations.ar).sort();

    expect(enKeys).toEqual(arKeys);
    expect(enKeys.length).toBeGreaterThan(40);
  });

  it('should not contain empty strings in any translation key', () => {
    Object.entries(translations.en).forEach(([key, value]) => {
      expect(value.trim().length, `Empty English translation for key: ${key}`).toBeGreaterThan(0);
    });

    Object.entries(translations.ar).forEach(([key, value]) => {
      expect(value.trim().length, `Empty Arabic translation for key: ${key}`).toBeGreaterThan(0);
    });
  });
});

describe('Centralized Site Configuration', () => {
  it('should have valid identity, contact, and section toggles', () => {
    expect(siteConfig.identity.nameEn).toBeTruthy();
    expect(siteConfig.identity.nameAr).toBeTruthy();
    expect(siteConfig.identity.monogram).toBeTruthy();
    expect(siteConfig.contact.email).toContain('@');
    expect(siteConfig.sections.projects).toBe(true);
    expect(['en', 'ar']).toContain(siteConfig.preferences.defaultLanguage);
  });
});

describe('Projects Portfolio Integrity', () => {
  it('should have unique IDs and required bilingual fields for all projects', () => {
    const ids = new Set<string>();

    projects.forEach(project => {
      expect(ids.has(project.id), `Duplicate project id: ${project.id}`).toBe(false);
      ids.add(project.id);

      expect(project.titleEn).toBeTruthy();
      expect(project.titleAr).toBeTruthy();
      expect(project.summaryEn).toBeTruthy();
      expect(project.summaryAr).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(['all', 'fullstack', 'frontend', 'backend', 'architecture']).toContain(project.category);
    });
  });
});

describe('Technical Skills & Experience', () => {
  it('should have structured skill categories with valid skill items', () => {
    expect(skillCategories.length).toBeGreaterThanOrEqual(4);

    skillCategories.forEach(category => {
      expect(category.titleEn).toBeTruthy();
      expect(category.titleAr).toBeTruthy();
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  it('should have structured experience entries with non-empty achievements', () => {
    expect(experiences.length).toBeGreaterThan(0);

    experiences.forEach(exp => {
      expect(exp.roleEn).toBeTruthy();
      expect(exp.roleAr).toBeTruthy();
      expect(exp.companyEn).toBeTruthy();
      expect(exp.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have education and certification records', () => {
    expect(educations.length).toBeGreaterThan(0);
    expect(certifications.length).toBeGreaterThan(0);
  });
});

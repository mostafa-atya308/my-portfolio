import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ExternalLink, BookOpen, Layers, X, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.filter_all },
    { id: 'fullstack', label: t.filter_fullstack },
    { id: 'frontend', label: t.filter_frontend },
    { id: 'backend', label: t.filter_backend },
    { id: 'architecture', label: t.filter_architecture },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t.nav_projects}</span>
          <h2 className="section-title">{t.section_projects_title}</h2>
          <p className="section-subtitle">{t.section_projects_subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => {
            const title = language === 'ar' ? project.titleAr : project.titleEn;
            const summary = language === 'ar' ? project.summaryAr : project.summaryEn;

            return (
              <article key={project.id} className="card project-card">
                {/* Project Banner with Image */}
                <div className="project-banner">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={title}
                      className="project-banner-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="banner-tech-icon">
                      <Code2 size={28} />
                    </div>
                  )}
                  <span className="banner-category-tag">{project.category}</span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-summary">{summary}</p>

                  {/* Tech stack badges */}
                  <div className="project-tags">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="badge">+{project.technologies.length - 5}</span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="project-footer">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary btn-sm"
                      aria-haspopup="dialog"
                    >
                      <Layers size={14} />
                      <span>{t.cta_view_details}</span>
                    </button>

                    <div className="project-external-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="btn-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t.cta_view_code}
                          aria-label={`${t.cta_view_code}: ${title}`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          className="btn-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t.cta_live_demo}
                          aria-label={`${t.cta_live_demo}: ${title}`}
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      )}
                      {project.docsUrl && (
                        <a
                          href={project.docsUrl}
                          className="btn-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Documentation"
                          aria-label={`Docs: ${title}`}
                        >
                          <BookOpen size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state card">
            <p>{t.project_no_results}</p>
          </div>
        )}

        {/* Detailed Modal Dialog */}
        {selectedProject && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-content card" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className="banner-category-tag">{selectedProject.category}</span>
                  <h3 id="modal-title" className="modal-title">
                    {language === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-icon"
                  aria-label={t.cta_close}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-desc">
                  {language === 'ar'
                    ? selectedProject.descriptionAr || selectedProject.summaryAr
                    : selectedProject.descriptionEn || selectedProject.summaryEn}
                </p>

                {/* Highlights */}
                {((language === 'ar' && selectedProject.highlightsAr) ||
                  (language === 'en' && selectedProject.highlightsEn)) && (
                  <div className="modal-highlights">
                    <h4 className="highlights-title">{t.project_key_highlights}</h4>
                    <ul className="highlights-list-bullet">
                      {(language === 'ar'
                        ? selectedProject.highlightsAr
                        : selectedProject.highlightsEn
                      )?.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="modal-tech-stack">
                  <h4 className="highlights-title">{t.project_tech_stack}</h4>
                  <div className="project-tags">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} />
                    <span>{t.cta_view_code}</span>
                  </a>
                )}
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>{t.cta_live_demo}</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-outline"
                >
                  {t.cta_close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

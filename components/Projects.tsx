'use client';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { LockIcon, ExternalLinkIcon } from './icons';

interface ProjectDef {
  titleKey: string;
  descKey: string;
  chipsKey: string;
  badge?: 'coming-soon' | 'private';
  badgeKey?: string;
  link?: string;
}

const projects: ProjectDef[] = [
  {
    titleKey: 'projects.ome.title',
    descKey: 'projects.ome.desc',
    chipsKey: 'projects.ome.chips',
    badge: 'private',
    badgeKey: 'projects.private',
  },
  {
    titleKey: 'projects.caliq.title',
    descKey: 'projects.caliq.desc',
    chipsKey: 'projects.caliq.chips',
    badge: 'coming-soon',
    badgeKey: 'projects.caliq.badge',
  },
  {
    titleKey: 'projects.base.title',
    descKey: 'projects.base.desc',
    chipsKey: 'projects.base.chips',
    badge: 'private',
    badgeKey: 'projects.private',
  },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title={t('projects.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.titleKey} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectDef;
  t: (key: string) => string;
}

function ProjectCard({ project, t }: ProjectCardProps) {
  const chips = t(project.chipsKey)
    .split('·')
    .map((c) => c.trim())
    .filter(Boolean);

  return (
    <div className="group relative flex flex-col bg-light-navy rounded-lg p-6 border border-lightest-navy hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      {/* Accent top border on hover */}
      <div className="absolute top-0 start-0 end-0 h-0.5 rounded-t-lg bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-lightest-slate group-hover:text-accent transition-colors duration-200">
          {t(project.titleKey)}
        </h3>

        {/* Badge */}
        {project.badge === 'coming-soon' && project.badgeKey && (
          <span className="shrink-0 font-mono text-xs text-navy bg-accent px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
            {t(project.badgeKey)}
          </span>
        )}
        {project.badge === 'private' && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-slate hover:text-accent transition-colors"
            aria-label="View project"
          >
            <ExternalLinkIcon size={18} />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-slate text-sm leading-relaxed flex-1 mb-4">
        {t(project.descKey)}
      </p>

      {/* Private note */}
      {project.badge === 'private' && project.badgeKey && (
        <p className="flex items-center gap-1.5 text-xs text-slate/70 font-mono mb-3">
          <LockIcon size={12} className="text-slate/50" />
          {t(project.badgeKey)}
        </p>
      )}

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {chips.map((chip) => (
          <span
            key={chip}
            className="font-mono text-xs text-accent/80 bg-navy/60 px-2 py-0.5 rounded border border-accent/10"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

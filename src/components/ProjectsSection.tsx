
import React from 'react';
import { ProjectItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { CodeBracketIcon } from '../constants';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { Language } from '../App';

interface ProjectCardProps {
  project: ProjectItem;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language }) => {
  return (
    <Card className="flex flex-col h-full transform transition-all duration-300 focus-within:ring-2 focus-within:ring-primary" interactive={true}>
      <img 
       src={`${process.env.PUBLIC_URL}/${project.imageUrl}`}
        alt={project.title[language]} 
        className="w-full h-48 object-cover rounded-t-md mb-4"
        loading="lazy"
      />

      <div className="flex-grow p-1">
        <h3 className="text-xl font-semibold text-primary mb-1">{project.title[language]}</h3>
        {project.period && <p className="text-xs text-text-light mb-2">{project.period}</p>}
        <p className="text-sm text-text-light mb-3 flex-grow min-h-[3rem]">{project.description[language]}</p>
        {project.longDescription && project.longDescription.length > 0 && (
            <ul className="list-disc list-inside text-xs text-text-light space-y-1 mb-3 pl-1">
                {project.longDescription.map((item, idx) => <li key={idx}>{item[language]}</li>)}
            </ul>
        )}
      </div>
      <div className="mt-auto p-1">
        <div className="mb-4">
          {project.technologiesLabel && <h4 className="text-sm font-semibold text-text-main mb-1 sr-only">{project.technologiesLabel[language]}</h4>}
          {project.technologies.map(tech => <Tag key={tech} text={tech} color="accent" />)}
        </div>
        <div className="flex space-x-4">
            {project.liveLink && project.liveLinkLabel &&
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-light hover:text-primary transition-colors duration-200 flex items-center text-sm group"
                aria-label={`Live demo of ${project.title[language]}`}
              >
                <ExternalLinkIcon className="w-5 h-5 mr-1.5 group-hover:scale-110 transition-transform"/> {project.liveLinkLabel[language]}
              </a>}
            {project.repoLink && project.repoLinkLabel &&
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-light hover:text-primary transition-colors duration-200 flex items-center text-sm group"
                aria-label={`GitHub repository for ${project.title[language]}`}
              >
                <GitHubIcon className="w-5 h-5 mr-1.5 group-hover:scale-110 transition-transform"/> {project.repoLinkLabel[language]}
              </a>}
        </div>
      </div>
    </Card>
  );
};


interface ProjectsSectionProps {
  id?: string;
  academicProjects: ProjectItem[];
  freelanceProjects: ProjectItem[];
  language: Language;
  title: string;
  academicSubtitle: string;
  freelanceSubtitle: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, academicProjects, freelanceProjects, language, title, academicSubtitle, freelanceSubtitle }) => {
  const projectCardDelayClasses = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];

  return (
    <Section id={id} title={title} icon={<CodeBracketIcon className="w-8 h-8"/>}>
      <div>
        <h3 className="text-2xl font-semibold text-text-light mb-8 relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:bg-primary after:rounded-full">{academicSubtitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {academicProjects.map((project, index) => 
            <div key={project.id} className={`animate-fade-in-slide-up ${projectCardDelayClasses[index % projectCardDelayClasses.length]}`}>
              <ProjectCard project={project} language={language} />
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-text-light mb-8 relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:bg-primary after:rounded-full">{freelanceSubtitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelanceProjects.map((project, index) => 
            <div key={project.id} className={`animate-fade-in-slide-up ${projectCardDelayClasses[index % projectCardDelayClasses.length]}`}>
              <ProjectCard project={project} language={language} />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

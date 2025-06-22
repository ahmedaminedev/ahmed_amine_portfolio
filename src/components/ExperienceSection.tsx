
import React from 'react';
import { ExperienceItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { BriefcaseIcon } from '../constants';
import { Language } from '../App';

interface ExperienceSectionProps {
  id?: string;
  experiences: ExperienceItem[];
  language: Language;
  title: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, experiences, language, title }) => {
  const cardDelayClasses = ['delay-100', 'delay-200', 'delay-300'];
  return (
    <Section id={id} title={title} icon={<BriefcaseIcon className="w-8 h-8" />}>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className={`animate-fade-in-slide-up ${cardDelayClasses[index % cardDelayClasses.length]}`}>
            <Card className="hover:border-primary border-2 border-transparent" interactive={true}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                <h3 className="text-xl font-semibold text-primary mb-1 sm:mb-0">{exp.role[language]}</h3>
                <p className="text-sm text-text-light font-medium whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-md font-medium text-text-main mb-3">
                {exp.company[language]} <span className="text-text-light font-normal">- {exp.location[language]}</span>
              </p>
              <ul className="list-disc list-inside text-text-light space-y-1.5 mb-4 pl-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">{resp[language]}</li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div>
                  {exp.technologiesLabel && <h4 className="text-sm font-semibold text-text-main mb-2">{exp.technologiesLabel[language]}</h4>}
                  <div className="flex flex-wrap">
                    {exp.technologies.map(tech => <Tag key={tech} text={tech} color="secondary" />)}
                  </div>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

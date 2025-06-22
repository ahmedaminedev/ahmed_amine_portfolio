
import React from 'react';
import { EducationItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { AcademicCapIcon } from '../constants';
import { Language } from '../App';

interface EducationSectionProps {
  id?: string;
  educationItems: EducationItem[];
  language: Language;
  title: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ id, educationItems, language, title }) => {
  const cardDelayClasses = ['delay-100', 'delay-200', 'delay-300'];
  return (
    <Section id={id} title={title} icon={<AcademicCapIcon className="w-8 h-8" />}>
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <div key={index} className={`animate-fade-in-slide-up ${cardDelayClasses[index % cardDelayClasses.length]}`}>
            <Card className="hover:border-primary border-2 border-transparent" interactive={true}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                <h3 className="text-xl font-semibold text-primary mb-1 sm:mb-0">{item.degree[language]}</h3>
                <p className="text-sm text-text-light font-medium whitespace-nowrap">{item.period}</p>
              </div>
              <p className="text-md font-medium text-text-main mb-2">
                {item.institution[language]} 
                {item.location && <span className="text-text-light font-normal"> - {item.location[language]}</span>}
              </p>
              <ul className="list-disc list-inside text-text-light space-y-1 pl-1">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-sm">{detail[language]}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

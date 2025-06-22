
import React from 'react';
import { SkillCategory, SkillItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { CogIcon } from './icons/CogIcon';
import { Language } from '../App';

interface SkillBarProps {
  skill: SkillItem;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-text-main">{skill.name}</span>
      <span className="text-sm font-medium text-primary">{skill.level}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <div
        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${skill.level}%` }}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
      ></div>
    </div>
  </div>
);

interface SkillsSectionProps {
  id?: string;
  skillsCategories: SkillCategory[];
  language: Language;
  title: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skillsCategories, language, title }) => {
  const cardDelayClasses = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
  return (
    <Section id={id} title={title} icon={<CogIcon className="w-8 h-8 text-primary"/>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {skillsCategories.map((category, index) => (
          <div key={index} className={`animate-fade-in-slide-up ${cardDelayClasses[index % cardDelayClasses.length]}`}>
            <Card className="!p-6" interactive={true}>
              <h3 className="text-xl font-semibold text-primary mb-5">{category.name[language]}</h3>
              <div>
                {category.skills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

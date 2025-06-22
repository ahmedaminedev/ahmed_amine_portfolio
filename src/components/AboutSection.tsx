
import React from 'react';
import { ProfileData } from '../types';
import { Section } from './Section';
import { UserIcon } from './icons/UserIcon';
import { Language } from '../App';

interface AboutSectionProps {
  id?: string;
  profile: ProfileData;
  language: Language;
  title: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ id, profile, language, title }) => {
  return (
    <Section id={id} title={title} icon={<UserIcon className="w-8 h-8"/>} className="bg-card-bg/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-text-light leading-relaxed">
          {profile.summary[language]}
        </p>
      </div>
    </Section>
  );
};

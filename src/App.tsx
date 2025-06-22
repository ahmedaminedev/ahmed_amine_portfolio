
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { QualitiesSection } from './components/QualitiesSection';
import { InterestsSection } from './components/InterestsSection';
import { AssociationsSection } from './components/AssociationsSection';
import { ContactFooter } from './components/ContactFooter';
import { PROFILE_DATA, CONTACT_INFO, EDUCATION_DATA, EXPERIENCE_DATA, ACADEMIC_PROJECTS_DATA, FREELANCE_PROJECTS_DATA, SKILLS_DATA, LANGUAGES_DATA, QUALITIES_DATA, INTERESTS_DATA, ASSOCIATIONS_DATA, NAVIGATION_LINKS, UI_LABELS } from './constants';
import { LocalizedString } from './types';

export type Language = 'fr' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = language === 'en' ? 'mauve' : 'cyan';
  }, [language]);

  const getLabel = (labelObj: LocalizedString) => labelObj[language];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white"> {/* bg and text are now controlled by CSS variables via body tag */}
      <Header 
        navItems={NAVIGATION_LINKS} 
        profile={PROFILE_DATA} 
        contact={CONTACT_INFO} 
        language={language}
        setLanguage={setLanguage}
        uiLabels={UI_LABELS}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-slide-up">
            <AboutSection id="about" profile={PROFILE_DATA} language={language} title={getLabel(UI_LABELS.aboutMeTitle)} />
        </div>
        <div className="animate-fade-in-slide-up delay-400">
          <EducationSection id="education" educationItems={EDUCATION_DATA} language={language} title={getLabel(UI_LABELS.educationTitle)} />
        </div>



        <div className="animate-fade-in-slide-up delay-100">
            <SkillsSection id="skills" skillsCategories={SKILLS_DATA} language={language} title={getLabel(UI_LABELS.skillsTitle)} />
        </div>
        <div className="animate-fade-in-slide-up delay-200">
          <ExperienceSection id="experience" experiences={EXPERIENCE_DATA} language={language} title={getLabel(UI_LABELS.experienceTitle)} />
        </div>
        <div className="animate-fade-in-slide-up delay-300">
          <ProjectsSection 
            id="projects" 
            academicProjects={ACADEMIC_PROJECTS_DATA} 
            freelanceProjects={FREELANCE_PROJECTS_DATA} 
            language={language} 
            title={getLabel(UI_LABELS.projectsTitle)}
            academicSubtitle={getLabel(UI_LABELS.academicProjectsSubtitle)}
            freelanceSubtitle={getLabel(UI_LABELS.freelanceProjectsSubtitle)}
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 animate-fade-in-slide-up delay-500">
          <LanguagesSection languages={LANGUAGES_DATA} language={language} title={getLabel(UI_LABELS.languagesTitle)} />
          <QualitiesSection qualities={QUALITIES_DATA} language={language} title={getLabel(UI_LABELS.qualitiesTitle)} />
          <InterestsSection interests={INTERESTS_DATA} language={language} title={getLabel(UI_LABELS.interestsTitle)} />
          <AssociationsSection associations={ASSOCIATIONS_DATA} language={language} title={getLabel(UI_LABELS.associationsTitle)} />
        </div>

      </main>
      
      <ContactFooter 
        id="contact" 
        contact={CONTACT_INFO} 
        profileName={PROFILE_DATA.name} 
        language={language}
        uiLabels={UI_LABELS}
      />
    </div>
  );
};

export default App;

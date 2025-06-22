import React, { useState, useEffect, useRef } from 'react';
import { LanguageItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { ChatBubbleLeftRightIcon } from './icons/ChatBubbleLeftRightIcon';
import { Language } from '../App';

interface LanguageProficiencyBarProps {
  level: number;
  maxLevel?: number;
  animated?: boolean;
}

const LanguageProficiencyBar: React.FC<LanguageProficiencyBarProps> = ({
  level,
  maxLevel = 5,
  animated = false,
}) => {
  const [currentLevel, setCurrentLevel] = useState(animated ? 0 : level);

  useEffect(() => {
    if (animated && currentLevel < level) {
      const timeouts = Array.from({ length: level - currentLevel }).map((_, i) =>
        setTimeout(() => {
          setCurrentLevel((prev) => prev + 1);
        }, (i + 1) * 100)
      );
      return () => {
        timeouts.forEach(clearTimeout);
      };
    } else if (!animated) {
      setCurrentLevel(level);
    }
  }, [animated, level, currentLevel]);

  return (
    <div className="flex items-center">
      {Array.from({ length: maxLevel }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 rounded-full mr-1.5 transition-colors duration-300 ${
            i < currentLevel ? 'bg-primary' : 'bg-secondary'
          }`}
          aria-hidden="true"
        ></span>
      ))}
    </div>
  );
};


interface LanguagesSectionProps {
  languages: LanguageItem[];
  language: Language;
  title: string;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  languages,
  language,
  title,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refNode = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (refNode) {
            observer.unobserve(refNode);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (refNode) {
      observer.observe(refNode);
    }

    return () => {
      if (refNode) {
        observer.unobserve(refNode);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="animate-fade-in-slide-up">
      <Section
        title={title}
        icon={<ChatBubbleLeftRightIcon className="w-7 h-7 text-primary" />}
        titleClassName="text-2xl !mb-6"
      >
        <Card interactive={true}>
          <ul className="space-y-5">
            {languages.map((lang, index) => (
              <li
                key={index}
                className="flex justify-between items-center"
                aria-label={`${lang.name[language]}: ${lang.levelText[language]}, ${lang.level} sur 5`}
              >
                <div>
                  <span className="font-medium text-text-main">
                    {lang.name[language]}
                  </span>
                  <span className="text-sm text-text-light ml-2">
                    ({lang.levelText[language]})
                  </span>
                </div>
                <LanguageProficiencyBar level={lang.level} animated={isVisible} />
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  );
};

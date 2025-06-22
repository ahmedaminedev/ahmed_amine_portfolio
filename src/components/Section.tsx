
import React from 'react';

interface SectionProps {
  id?: string;
  title: string; // Title will be localized by the parent component
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, icon, children, className, titleClassName }) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="flex items-center mb-10 md:mb-12">
        {icon && <span className="mr-4 text-primary">{icon}</span>}
        <h2 className={`text-3xl md:text-4xl font-bold text-text-main tracking-tight section-title ${titleClassName}`}>{title}</h2>
      </div>
      {children}
    </section>
  );
};

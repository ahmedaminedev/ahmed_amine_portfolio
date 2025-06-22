
import React, { useRef, useEffect } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean; // New prop to enable/disable 3D effect
}

export const Card: React.FC<CardProps> = ({ children, className, interactive = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7; // Max rotation 7deg
      const rotateY = ((x - centerX) / centerX) * 7;  // Max rotation 7deg

      card.style.setProperty('--rotateX', `${rotateX}deg`);
      card.style.setProperty('--rotateY', `${rotateY}deg`);
      card.style.transform = `perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.05)`; // Scale remains 1.05
      card.style.boxShadow = `0px ${10 + Math.abs(rotateX) * 2}px ${25 + Math.abs(rotateY) * 3}px -10px rgba(var(--color-primary-rgb), 0.3)`;
    };

    const handleMouseLeave = () => {
      card.style.removeProperty('--rotateX');
      card.style.removeProperty('--rotateY');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '0px 8px 20px -8px rgba(var(--color-primary-rgb), 0.1)'; // Default shadow
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Set initial less prominent shadow if desired
    card.style.boxShadow = '0px 8px 20px -8px rgba(var(--color-primary-rgb), 0.1)';


    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);

  return (
    <div 
      ref={cardRef} 
      className={`bg-card-bg shadow-xl rounded-lg p-6 md:p-8 
                  ${interactive ? 'interactive-card hover:shadow-primary/30' : 'transition-all duration-300 hover:shadow-primary/30 hover:ring-2 hover:ring-primary/50'} 
                  ${className}`}
      style={{ transformStyle: 'preserve-3d' } as React.CSSProperties} // Cast for CSS variables
    >
      {children}
    </div>
  );
};
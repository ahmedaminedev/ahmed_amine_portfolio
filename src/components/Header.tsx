
import React, { useState, useEffect, useRef } from 'react';
import { ProfileData, ContactInfo, NavItem, LocalizedString, CVLink } from '../types';
import { Language } from '../App'; // Import Language type

// Icons
const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

interface HeaderProps {
  profile: ProfileData;
  contact: ContactInfo;
  navItems: NavItem[];
  language: Language;
  setLanguage: (language: Language) => void;
  uiLabels: { [key: string]: LocalizedString }; // For labels like "Hello, It's Me"
}

export const Header: React.FC<HeaderProps> = ({ profile, navItems, language, setLanguage, uiLabels }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const heroImageContainerRef = useRef<HTMLDivElement>(null);

  const getLabel = (labelObj: LocalizedString) => labelObj[language];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile: boolean = false) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (isMobile) setIsMenuOpen(false);
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, isMobile ? 100 : 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      let currentActiveSection: string = '';
      const scrollThreshold = 150;

      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        if (heroRect.top <= scrollThreshold && heroRect.bottom > 0 && scrollPosition < heroRect.height / 2) {
          currentActiveSection = '#hero';
        }
      }

      if (!currentActiveSection) {
        for (let i = navItems.length - 1; i >= 0; i--) {
          const item = navItems[i];
          const element = document.getElementById(item.href.substring(1));
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= scrollThreshold && rect.bottom >= scrollThreshold) {
              currentActiveSection = item.href;
              break;
            }
          }
        }
      }

      if (!currentActiveSection && (window.innerHeight + scrollPosition) >= document.body.offsetHeight - 50) {
        const contactNavItem = navItems.find(item => item.href === '#contact');
        if (contactNavItem) currentActiveSection = contactNavItem.href;
      } else if (!currentActiveSection && scrollPosition < 50 && heroElement) {
        currentActiveSection = '#hero';
      } else if (!currentActiveSection && activeSection) {
        currentActiveSection = activeSection;
      } else if (!currentActiveSection && !activeSection) {
        currentActiveSection = '#hero';
      }

      if (currentActiveSection) setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timerId = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timerId);
    };
  }, [navItems, activeSection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const heroImageDiv = heroImageContainerRef.current;
    if (!heroImageDiv) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroImageDiv.getBoundingClientRect();
      const x = e.clientX - rect.left; const y = e.clientY - rect.top;
      const centerX = rect.width / 2; const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      heroImageDiv.style.setProperty('--heroRotateX', `${rotateX}deg`);
      heroImageDiv.style.setProperty('--heroRotateY', `${rotateY}deg`);
      heroImageDiv.style.transform = `perspective(1200px) rotateX(var(--heroRotateX)) rotateY(var(--heroRotateY)) scale(1.05)`;
    };
    const handleMouseLeave = () => {
      heroImageDiv.style.removeProperty('--heroRotateX');
      heroImageDiv.style.removeProperty('--heroRotateY');
      heroImageDiv.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    heroImageDiv.addEventListener('mousemove', handleMouseMove);
    heroImageDiv.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      heroImageDiv.removeEventListener('mousemove', handleMouseMove);
      heroImageDiv.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const navLinkClasses = (href: string, baseClass: string) =>
    `${baseClass} transition-colors duration-300 ${activeSection === href ? 'text-primary font-semibold' : 'text-text-light hover:text-primary'}`;
  
  const mobileMenuNavLinkClasses = (href: string) => `block py-3 text-xl ${navLinkClasses(href, '')}`;

  const LanguageSwitcher: React.FC<{mobile?: boolean}> = ({ mobile }) => (
    <div className={`flex items-center border border-gray-600 rounded-full p-0.5 ${mobile ? 'my-4' : 'ml-4'}`}>
      <button
        className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${language === 'fr' ? 'bg-primary text-white shadow-md' : 'text-text-light hover:bg-gray-700'}`}
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${language === 'en' ? 'bg-primary text-white shadow-md' : 'text-text-light hover:bg-gray-700'}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );

  const frenchCv = profile.cvLinks?.find(cv => cv.url.includes('-fr.pdf'));
  const englishCv = profile.cvLinks?.find(cv => cv.url.includes('-en.pdf'));
  let cvToDisplay: CVLink | undefined = undefined;

  if (language === 'fr' && frenchCv) {
    cvToDisplay = frenchCv;
  } else if (language === 'en' && englishCv) {
    cvToDisplay = englishCv;
  }


  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-neutral-bg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold" onClick={(e) => handleLinkClick(e, '#hero')}>
                <span className="text-primary">{profile.name.split(' ')[0]}</span>
                <span className="text-text-main">{profile.name.split(' ').slice(1).join(' ')}</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center">
              {navItems.map((item) => (
                <a
                  key={getLabel(item.name)}
                  href={item.href}
                  className={navLinkClasses(item.href, 'px-3 py-2 rounded-md text-sm font-medium')}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-label={`Navigate to ${getLabel(item.name)} section`}
                >
                  {getLabel(item.name)}
                </a>
              ))}
              <LanguageSwitcher />
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-light hover:text-primary focus:outline-none p-2"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XMarkIcon className="h-7 w-7"/> : <Bars3Icon className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0 animate-fade-in' : '-translate-x-full animate-fade-out pointer-events-none'} bg-footer-bg p-6 flex flex-col`}
        role="dialog" aria-modal="true" aria-labelledby="mobile-menu-heading"
      >
        <div className="flex items-center justify-between mb-10">
          <a id="mobile-menu-heading" href="#hero" className="text-2xl font-bold" onClick={(e) => handleLinkClick(e, '#hero', true)}>
            <span className="text-primary">{profile.name.split(' ')[0]}</span>
            <span className="text-text-main">{profile.name.split(' ').slice(1).join(' ')}</span>
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-text-light hover:text-primary p-2" aria-label="Close menu">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <nav className="flex-grow flex flex-col items-center justify-center space-y-6 text-center">
          {navItems.map((item) => (
            <a
              key={getLabel(item.name)}
              href={item.href}
              className={mobileMenuNavLinkClasses(item.href)}
              onClick={(e) => handleLinkClick(e, item.href, true)}
              aria-label={`Navigate to ${getLabel(item.name)} section`}
            >
              {getLabel(item.name)}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center space-y-4 pb-6">
          <LanguageSwitcher mobile={true} />
          {cvToDisplay && (
            <a
              href={cvToDisplay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
            >
              {getLabel(cvToDisplay.name)}
            </a>
          )}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact', true)}
            className="w-full max-w-xs text-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          >
            {getLabel(uiLabels.contactMe)}
          </a>
        </div>
      </div>

      <section id="hero" className="min-h-screen flex items-center justify-center bg-neutral-bg pt-24 pb-12 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in-up">
          <div className="md:w-3/5 text-center md:text-left">
            <p className="text-xl md:text-2xl text-text-light mb-2">{getLabel(uiLabels.helloItsMe)}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3">
              <span className="text-text-main">{profile.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              <span className="text-text-light">{getLabel(uiLabels.andImA)}</span>
              <span className="text-primary">
                {getLabel(profile.title).includes("FullStack") ? getLabel(profile.title).replace("FullStack", " FullStack") : getLabel(profile.title)}
              </span>
            </h2>
            <p className="text-md md:text-lg text-text-light mb-8 max-w-xl mx-auto md:mx-0">{getLabel(profile.heroBio)}</p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              {profile.socials.map(social => (
                <a
                  key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-text-light hover:text-primary transition-colors duration-300 bg-card-bg p-3 rounded-full shadow-md hover:shadow-primary/30"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            {cvToDisplay && (
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href={cvToDisplay.url} target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  {getLabel(cvToDisplay.name)}
                </a>
              </div>
            )}
          </div>
<div
  ref={heroImageContainerRef}
  className="relative md:w-2/5 flex justify-center items-center mt-8 md:mt-0 interactive-hero-image"
  style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
>
  {/* Grand hexagone (fond) */}
  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
    <svg
      className="w-full h-full drop-shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.7)]"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="hexagonClip">
          <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
        </clipPath>
        <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(var(--color-primary-rgb))', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(var(--color-primary-dark-rgb))', stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <polygon
        points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
        fill="url(#hexagonGradient)"
      />
    </svg>
  </div>

{/* Petit hexagone avec image, positionné au centre du grand hexagone */}
<div className="absolute w-80 h-80 sm:w-82 sm:h-82 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <clipPath id="smallHexClip">
        <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
      </clipPath>
    </defs>
    <image
      href={`${process.env.PUBLIC_URL}/${profile.profileImageUrl}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#smallHexClip)"
    />
  </svg>
</div>
</div>

        </div>
      </section>
    </>
  );
};

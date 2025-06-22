
import React from 'react';
import { ContactInfo, LocalizedString } from '../types';
import { EnvelopeIcon, PhoneIcon, LinkedInIcon } from '../constants'; 
import { Language } from '../App';

interface ContactFooterProps {
  id?: string;
  contact: ContactInfo;
  profileName: string;
  language: Language;
  uiLabels: { [key: string]: LocalizedString };
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ id, contact, profileName, language, uiLabels }) => {
  const getLabel = (labelObj: LocalizedString) => labelObj[language];
  return (
    <footer id={id} className="bg-footer-bg text-text-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 section-title mx-auto">{getLabel(uiLabels.contactFooterTitle)}</h2>
        <p className="max-w-xl mx-auto mb-8 text-md">
          {getLabel(uiLabels.contactFooterPitch)}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-6 mb-10 text-lg">
          <a href={`mailto:${contact.email}`} className="flex items-center hover:text-primary transition-colors duration-200 group">
            <EnvelopeIcon className="w-6 h-6 mr-2.5 text-primary group-hover:scale-110 transition-transform" /> {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-primary transition-colors duration-200 group">
            <PhoneIcon className="w-6 h-6 mr-2.5 text-primary group-hover:scale-110 transition-transform" /> {contact.phone}
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors duration-200 group">
            <LinkedInIcon className="w-6 h-6 mr-2.5 text-primary group-hover:scale-110 transition-transform" /> {getLabel(uiLabels.linkedInSocial)}
          </a>
        </div>
        <div className="border-t border-border-color pt-8 mt-8">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {profileName}. {getLabel(uiLabels.copyrightReserved)}.</p>
            <p className="text-xs text-gray-600 mt-1">
                {getLabel(uiLabels.designedWith)} <span className="text-primary">&#x2764;</span> en React & Tailwind CSS. {getLabel(uiLabels.inspiredBy)}.
            </p>
        </div>
      </div>
    </footer>
  );
};

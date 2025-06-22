import React from 'react';
import { ProfileData, ContactInfo, EducationItem, ExperienceItem, ProjectItem, SkillCategory, LanguageItem, AssociationItem, NavItem, LocalizedString } from './types';

// Icon components remain the same

export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.001a1.5 1.5 0 0 1-2.252 1.503l-1.034.492a.75.75 0 0 0-.342.943l.848 1.848a.75.75 0 0 0 .943.342l.492-1.034a1.5 1.5 0 0 1 1.503-2.252l3.001.716A1.5 1.5 0 0 1 18 11.5v1.148a1.5 1.5 0 0 1-1.175 1.465l-3.001.716a1.5 1.5 0 0 1-1.503-2.252l1.034-.492a.75.75 0 0 0-.943-.342l-1.848.848a.75.75 0 0 0-.342.943l1.034.492a1.5 1.5 0 0 1 2.252 1.503l.716 3.001A1.5 1.5 0 0 1 11.5 18h-1.148a1.5 1.5 0 0 1-1.465-1.175l-.716-3.001a1.5 1.5 0 0 1 2.252-1.503l1.034-.492a.75.75 0 0 0 .342-.943l-.848-1.848a.75.75 0 0 0-.943-.342l-.492 1.034a1.5 1.5 0 0 1-1.503 2.252l-3.001-.716A1.5 1.5 0 0 1 2 8.5v-1.148A1.5 1.5 0 0 1 3.175 5.9l3.001-.716a1.5 1.5 0 0 1 1.503 2.252l-1.034.492a.75.75 0 0 0 .943.342l1.848-.848a.75.75 0 0 0 .342-.943l-1.034-.492A1.5 1.5 0 0 1 5.352 3.5H3.5Z" clipRule="evenodd" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.145l.005-.002.007-.003.017-.008.022-.01.05-.024.052-.026.108-.054.212-.109.318-.164.42-.217.513-.266.6-.31.678-.348.744-.385.795-.418.832-.444.853-.465.858-.474.847-.477.82-.472.78-.457.73-.434.67-.403.6-.364.53-.32.45-.268.37-.212.28-.153.19-.1.1-.05.08-.024Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-10.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 116.5 4.75a1.75 1.75 0 010 3.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V19z" />
  </svg>
);

export const GitHubIconConst: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.869-.013-1.704-2.782.603-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.707 9.707 0 0112 6.885c.853 0 1.732.114 2.548.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.565 4.935.359.309.679.922.679 1.857 0 1.337-.012 2.417-.012 2.745 0 .268.18.578.688.48C19.138 20.163 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

export const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M7.5 5.25A2.25 2.25 0 019.75 3h4.5A2.25 2.25 0 0116.5 5.25v1.5h3.75a3 3 0 013 3V16.5a3 3 0 01-3 3H3.75a3 3 0 01-3-3V9.75a3 3 0 013-3H7.5v-1.5zM9.75 5.25h4.5V6A.75.75 0 0113.5 6.75h-3A.75.75 0 019.75 6v-.75z" clipRule="evenodd" />
    <path d="M3.75 20.25a1.5 1.5 0 01-1.5-1.5V9.75a1.5 1.5 0 011.5-1.5H20.25a1.5 1.5 0 011.5 1.5V18.75a1.5 1.5 0 01-1.5 1.5H3.75z" />
  </svg>
);

export const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.703 2.539a2.25 2.25 0 012.594 0l6.666 4.008a.75.75 0 01.337.632V18.75a.75.75 0 01-1.125.65L12 15.69l-7.175 3.71a.75.75 0 01-1.125-.65V7.179a.75.75 0 01.337-.632l6.666-4.008zM12 4.414L6.075 7.88v7.925l5.175-2.68a.75.75 0 01.75 0L17.1 15.805V7.88L12 4.414z" />
    <path d="M4.5 9.332V18.75a.75.75 0 001.125.65l6.375-3.3a.75.75 0 000-1.3l-6.375-3.3A.75.75 0 004.5 9.332zm13.875 5.418a.75.75 0 000 1.3l6.375 3.3a.75.75 0 001.125-.65V9.331a.75.75 0 00-.675-.741l-6.375-1.52A.75.75 0 0018.375 7.81v6.94z" />
  </svg>
);

export const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-12a2.25 2.25 0 00-2.25-2.25h-3zM9 6a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v12a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V6z" clipRule="evenodd" />
    <path d="M6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM6.75 15a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM15 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75A.75.75 0 0115 12.75zM15.75 15a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75z" />
  </svg>
);

export const CONTACT_INFO: ContactInfo = {
  email: "nafti.ahmed.amine@gmail.com",
  phone: "+216 92 702 533",
  location: {
    fr: "Ezzahra, Ben Arous, Tunisie",
    en: "Ezzahra, Ben Arous, Tunisia"
  },
  linkedinUser: "ahmed-nafti-bab147201",
  linkedinUrl: "https://www.linkedin.com/in/ahmed-nafti-bab147201/"
};

export const PROFILE_DATA: ProfileData = {
  name: "AHMED AMINE NAFTI",
  title: {
    fr: "Ingénieur Web FullStack",
    en: "FullStack Web Engineer"
  },
  summary: {
    fr: "Diplômé en ingénierie spécialisée en développement web à ESPRIT, je suis à la recherche d'un poste de développeur FullStack. Curieux, autonome et doté d'un bon esprit d'équipe, je souhaite contribuer activement à des projets innovants au sein d'une équipe dynamique.",
    en: "[EN] Graduated in engineering with a specialization in web development from ESPRIT, I am seeking a FullStack developer position. Curious, autonomous, and a good team player, I aim to actively contribute to innovative projects within a dynamic team."
  },
  cvLinks: [
    { name: { fr: "CV Français", en: "French CV" }, url: "/uploads/ahmed-amine-nafti-cv-fr.pdf" },
    { name: { fr: "CV English", en: "English CV" }, url: "/uploads/ahmed-amine-nafti-cv-en.pdf" }
  ],
  heroBio: {
    fr: "Ingénieur FullStack passionné, spécialisé dans la création d'applications web innovantes et dynamiques. Prêt à relever de nouveaux défis et à transformer vos idées en réalité.",
    en: "[EN] Passionate FullStack Engineer, specializing in creating innovative and dynamic web applications. Ready to take on new challenges and turn your ideas into reality."
  },
  profileImageUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&h=400&q=80",
  socials: [
    { name: 'LinkedIn', url: CONTACT_INFO.linkedinUrl, icon: LinkedInIcon },
    { name: 'GitHub', url: 'https://github.com/ahmedaminedev', icon: GitHubIconConst },
  ]
};

export const NAVIGATION_LINKS: NavItem[] = [
  { name: { fr: "À Propos", en: "About" }, href: "#about" },
  { name: { fr: "Compétences", en: "Skills" }, href: "#skills" },
  { name: { fr: "Expériences", en: "Experience" }, href: "#experience" },
  { name: { fr: "Projets", en: "Projects" }, href: "#projects" },
  { name: { fr: "Éducation", en: "Education" }, href: "#education" },
  { name: { fr: "Contact", en: "Contact" }, href: "#contact" },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: { fr: "Ingénierie en développement web", en: "Engineering in Web Development" },
    institution: { fr: "ESPRIT", en: "ESPRIT" },
    location: { fr: "Ariana", en: "Ariana" },
    period: "Sept. 2021 - Août 2024",
    details: [{ fr: "Formation axée sur la pratique, les projets collaboratifs et les technologies récentes.", en: "[EN] Training focused on practice, collaborative projects, and recent technologies." }]
  },
  {
    degree: { fr: "Licence appliquée en développement des systèmes d'information", en: "Applied Bachelor's Degree in Information Systems Development" },
    institution: { fr: "ISET Rades", en: "ISET Rades" },
    location: { fr: "Radès, Ben Arous", en: "Rades, Ben Arous" },
    period: "Sept. 2018 - Juin 2021",
    details: [{ fr: "Fondamentaux en informatique et développement logiciel.", en: "[EN] Fundamentals in computer science and software development." }]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: { fr: "Stagiaire PFE - Ingénieur développement web", en: "Final Project Intern - Web Development Engineer" },
    company: { fr: "Medianet", en: "Medianet" },
    location: { fr: "Menzah, Tunis", en: "Menzah, Tunis" },
    period: "Mars 2024 - Jan. 2025 (Prévu)",
    responsibilities: [
      { fr: "Conception et développement d'une application web de comparaison de prix basée sur le scraping avec une architecture de microservices.", en: "[EN] Design and development of a web-based price comparison app using scraping with a microservices architecture." },
      { fr: "Intégration du scraping de données web avec BeautifulSoup pour optimiser le rapport qualité-prix des produits.", en: "[EN] Integrated web scraping with BeautifulSoup to optimize product quality/price ratio." },
      { fr: "Utilisation du threading pour améliorer les performances concurrentes lors du traitement des données.", en: "[EN] Used threading to enhance concurrent performance in data processing." },
      { fr: "Implémentation d'APScheduler pour une planification automatisée des tâches de scraping.", en: "[EN] Implemented APScheduler for automated scraping task scheduling." },
      { fr: "Utilisation de Keycloak pour la gestion sécurisée des identités et des accès.", en: "[EN] Used Keycloak for secure identity and access management." },
      { fr: "Calcul de similarité avec TF-IDF pour les détails produits.", en: "[EN] Similarity calculation using TF-IDF for product details." },
      { fr: "Intégration de WebSocket avec Flask-SocketIO pour les mises à jour en temps réel.", en: "[EN] Integrated WebSocket with Flask-SocketIO for real-time updates." },
      { fr: "Système d'alertes personnalisées pour notifier les clients.", en: "[EN] Customized alert system to notify users." }
    ],
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" },
    technologies: ["Spring Boot", "Django", "Angular", "MongoDB", "MySQL", "BeautifulSoup", "APScheduler", "Keycloak", "TF-IDF", "Flask-SocketIO"]
  },
  {
    role: { fr: "Stagiaire PFE - Technicien supérieur en développement de systèmes d'information", en: "Final Project Intern - Senior Technician in Information Systems Development" },
    company: { fr: "ISET Rades", en: "ISET Rades" },
    location: { fr: "Radès, Ben Arous, Tunisie", en: "Rades, Ben Arous, Tunisia" },
    period: "Jan. 2020 - Juin 2020",
    responsibilities: [
      { fr: "Conception et développement d'une application web administrative pour la gestion des notes des étudiants en mastère.", en: "[EN] Designed and developed an administrative web app for managing master's students' grades." },
      { fr: "Automatisation du processus d'admission et de passage des étudiants avec plan d'étude et coefficients.", en: "[EN] Automated student admission and promotion processes with curriculum and coefficients." },
      { fr: "Génération de fichiers PDF personnalisés pour les attestations et relevés de notes (Dompdf).", en: "[EN] Generated customized PDF files for certificates and transcripts (Dompdf)." }
    ],
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" },
    technologies: ["Laravel", "Ajax", "MySQL", "Dompdf"]
  }
];

export const ACADEMIC_PROJECTS_DATA: ProjectItem[] = [
  {
    id: "academic1",
    title: { fr: "Plateforme e-commerce pour la vente de jeux vidéo", en: "E-commerce Platform for Video Games" },
    period: "2021-2022",
    description: { fr: "Développement d'une plateforme e-commerce multiplateforme pour la vente de jeux vidéo.", en: "[EN] Development of a multi-platform e-commerce platform for selling video games." },
    longDescription: [
        { fr: "Développement multiplateforme : Symfony (web), JavaFX (desktop), CodeNameOne (mobile).", en: "[EN] Cross-platform development: Symfony (web), JavaFX (desktop), CodeNameOne (mobile)." },
        { fr: "Paiement sécurisé via l'API PayPal.", en: "[EN] Secure payments using PayPal API." },
        { fr: "Notifications par SMS via Twilio, emails via SendGrid.", en: "[EN] SMS notifications via Twilio, emails via SendGrid." },
        { fr: "Connexion simplifiée via Facebook et Gmail.", en: "[EN] Easy login via Facebook and Gmail." }
    ],
    technologies: ["Symfony", "JavaFX", "CodeNameOne", "PayPal API", "Twilio", "SendGrid", "Facebook API", "Gmail API"],
    type: "academic",
    imageUrl: "images/commerce.png",
    liveLinkLabel: { fr: "Démo Live", en: "Live Demo" },
    repoLinkLabel: { fr: "Code Source", en: "Source Code" },
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" }
  },
  {
    id: "academic2",
    title: { fr: "Application de recherche de stage", en: "Internship Search Application" },
    period: "2022-2023",
    description: { fr: "Application MERN stack pour la recherche de stages avec intégrations API et IA pour la sélection automatique.", en: "[EN] MERN stack application for internship search with API integrations and AI for automatic selection." },
     longDescription: [
        { fr: "Développement avec stack MERN JS (MongoDB, Express.js, React, Node.js).", en: "[EN] Development with MERN JS stack (MongoDB, Express.js, React, Node.js)." },
        { fr: "Intégration d'API : Zoom (entretiens), Slack (communication), LinkedIn (profils), Google Maps (localisation).", en: "[EN] API Integration: Zoom (interviews), Slack (communication), LinkedIn (profiles), Google Maps (location)." },
        { fr: "IA pour la sélection automatique de stagiaires (Random Forest).", en: "[EN] AI for automatic trainee selection (Random Forest)." },
        { fr: "Planification d'entretiens avec React Event Calendar (hooks) et module de quiz.", en: "[EN] Interview scheduling with React Event Calendar (hooks) and quiz module." }
    ],
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "Zoom API", "Slack API", "LinkedIn API", "Google Maps API", "Random Forest", "React Event Calendar"],
    type: "academic",
    imageUrl: "images/recherche_stage.png",
    liveLinkLabel: { fr: "Démo Live", en: "Live Demo" },
    repoLinkLabel: { fr: "Code Source", en: "Source Code" },
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" }
  }
];

export const FREELANCE_PROJECTS_DATA: ProjectItem[] = [
  {
    id: "freelance1",
    title: { fr: "Dashboard de Gestion des Stages", en: "Internship Management Dashboard" },
    description: { fr: "Développement d’un tableau de bord web en React pour la gestion des stages, des candidatures et du suivi de progression.", en: "[EN] Development of a React web dashboard for managing internships, applications, and progress tracking." },
    longDescription: [
        { fr: "Interface utilisateur moderne avec Tailwind CSS et composants réactifs.", en: "[EN] Modern user interface with Tailwind CSS and reactive components." },
        { fr: "API REST construite avec Node.js et Express pour la gestion des stages, étudiants et entreprises.", en: "[EN] REST API built with Node.js and Express for managing internships, students, and companies." },
        { fr: "Authentification via JWT, gestion des rôles (étudiant / encadrant), pagination dynamique.", en: "[EN] Authentication via JWT, role management (student / supervisor), dynamic pagination." },
        { fr: "Intégration de graphiques avec Chart.js pour le reporting.", en: "[EN] Integration of charts with Chart.js for reporting." },
        { fr: "Notifications en temps réel avec Socket.IO.", en: "[EN] Real-time notifications with Socket.IO." }
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "Chart.js", "Socket.IO"],
    type: "freelance",
    imageUrl: "images/dasboard_stage.png",
    period: "2023",
    liveLinkLabel: { fr: "Démo Live", en: "Live Demo" },
    repoLinkLabel: { fr: "Code Source", en: "Source Code" },
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" }
  },
  {
    id: "freelance2",
    title: { fr: "Gestion des Classes en Faculté", en: "Faculty Class Management" },
    description: { fr: "Application full-stack pour la gestion des classes universitaires, des étudiants et des emplois du temps.", en: "[EN] Full-stack application for managing university classes, students, and schedules." },
    longDescription: [
        { fr: "Backend développé en Flask avec API RESTful pour les opérations CRUD sur les classes, enseignants et cours.", en: "[EN] Backend developed in Flask with RESTful API for CRUD operations on classes, teachers, and courses." },
        { fr: "Frontend React avec affichage conditionnel, formulaires dynamiques et filtrage des données.", en: "[EN] React frontend with conditional display, dynamic forms, and data filtering." },
        { fr: "Base de données relationnelle MySQL avec ORM SQLAlchemy.", en: "[EN] MySQL relational database with SQLAlchemy ORM." },
        { fr: "Génération de bulletins en PDF avec ReportLab.", en: "[EN] PDF report card generation with ReportLab." },
        { fr: "Authentification sécurisée avec Flask-Login.", en: "[EN] Secure authentication with Flask-Login." }
    ],
    technologies: ["Flask", "React", "Python", "MySQL", "SQLAlchemy", "ReportLab", "Flask-Login"],
    type: "freelance",
    imageUrl: "images/gestion_classes.png",
    period: "2023",
    liveLinkLabel: { fr: "Démo Live", en: "Live Demo" },
    repoLinkLabel: { fr: "Code Source", en: "Source Code" },
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" }
  },
  {
    id: "freelance3",
    title: { fr: "Plateforme de Gestion de Projets", en: "Project Management Platform" },
    description: { fr: "Plateforme web pour la planification, le suivi et la collaboration autour des projets en entreprise.", en: "[EN] Web platform for planning, tracking, and collaboration on business projects." },
    longDescription: [
        { fr: "Backend Laravel avec gestion des utilisateurs, rôles, permissions (spatie/laravel-permission).", en: "[EN] Laravel backend with user, role, permission management (spatie/laravel-permission)." },
        { fr: "Interface React avec Kanban interactif pour la gestion des tâches (react-beautiful-dnd).", en: "[EN] React interface with interactive Kanban board for task management (react-beautiful-dnd)." },
        { fr: "Notifications en temps réel via Laravel Echo et Pusher.", en: "[EN] Real-time notifications via Laravel Echo and Pusher." },
        { fr: "Envoi d’emails automatiques via Laravel Mail + Mailtrap.", en: "[EN] Automatic emails via Laravel Mail + Mailtrap." },
        { fr: "Authentification via Sanctum et tokens API.", en: "[EN] Authentication via Sanctum and API tokens." },
        { fr: "Dashboard statistique avec filtrage par projet, échéance, et membre d’équipe.", en: "[EN] Statistical dashboard with filtering by project, deadline, and team member." }
    ],
    technologies: ["Laravel", "React", "PHP", "MySQL", "Eloquent", "spatie/laravel-permission", "react-beautiful-dnd", "Laravel Echo", "Pusher", "Mailtrap", "Sanctum"],
    type: "freelance",
    imageUrl: "images/gestion_projets.png",
    period: "2024",
    liveLinkLabel: { fr: "Démo Live", en: "Live Demo" },
    repoLinkLabel: { fr: "Code Source", en: "Source Code" },
    technologiesLabel: { fr: "Technologies:", en: "Technologies:" }
  }
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        name: { fr: "Frameworks & Librairies", en: "Frameworks & Libraries" },
        skills: [
            { name: "React", level: 90 }, { name: "Angular", level: 80 }, { name: "Spring Boot", level: 85 },
            { name: "Node.js / Express.js", level: 80 }, { name: "Django", level: 75 }, { name: "Laravel", level: 70 },
            { name: "Flask", level: 70 }, { name: ".NET Core", level: 65 }, { name: "Symfony", level: 60 },
            { name: "Tailwind CSS", level: 85}, { name: "JavaFX", level: 50 }, { name: "CodeNameOne", level: 45 },
        ]
    },
    {
        name: { fr: "Langages de Programmation", en: "Programming Languages" },
        skills: [
            { name: "JavaScript / TypeScript", level: 90 }, { name: "Java", level: 85 }, { name: "Python", level: 80 },
            { name: "PHP", level: 70 }, { name: "C#", level: 65 }, { name: "C", level: 60 },
        ]
    },
    {
        name: { fr: "Bases de Données & Outils", en: "Databases & Tools" },
        skills: [
            { name: "MySQL", level: 85 }, { name: "MongoDB", level: 80 }, { name: "PostgreSQL", level: 75 },
            { name: "Oracle", level: 60 }, { name: "Docker", level: 75 }, { name: "Git / GitHub", level: 90 },
            { name: "Jenkins", level: 60 }, { name: "SonarQube", level: 65 }, { name: "UML", level: 70 },
            { name: "Keycloak", level: 70 }, { name: "BeautifulSoup", level: 65 }, { name: "APScheduler", level: 60 },
            { name: "Dompdf", level: 55 },
        ]
    },
    {
        name: { fr: "Autres & APIs", en: "Others & APIs" },
        skills: [
            { name: "REST APIs", level: 90 }, { name: "Microservices", level: 75 },
            { name: "Agile Methodologies", level: 80 }, { name: "Machine Learning (Random Forest)", level: 55 },
            { name: "TF-IDF", level: 60 }, { name: "WebSocket (SocketIO, Pusher)", level: 70 },
            { name: "Payment APIs (PayPal)", level: 65 }, { name: "Communication APIs (Twilio, SendGrid)", level: 60 },
        ]
    }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { name: { fr: "Arabe", en: "Arabic" }, level: 5, levelText: { fr: "Natif", en: "Native" } },
  { name: { fr: "Français", en: "French" }, level: 5, levelText: { fr: "Courant (C1)", en: "Fluent (C1)" } },
  { name: { fr: "Anglais", en: "English" }, level: 4, levelText: { fr: "Avancé (B2)", en: "Advanced (B2)" } }
];

export const QUALITIES_DATA: LocalizedString[] = [
  { fr: "Curiosité", en: "Curiosity" }, { fr: "Logique", en: "Logic" }, { fr: "Autonomie", en: "Autonomy" },
  { fr: "Apprentissage rapide", en: "Fast Learner" }, { fr: "Dynamisme", en: "Dynamism" },
  { fr: "Esprit d'équipe", en: "Team Spirit" }, { fr: "Résolution de problèmes", en: "Problem Solving" }
];

export const INTERESTS_DATA: LocalizedString[] = [
  { fr: "Sport (Football, Fitness)", en: "Sports (Football, Fitness)" },
  { fr: "Développement personnel", en: "Personal Development" },
  { fr: "Jeux vidéo (Stratégie, RPG)", en: "Video Games (Strategy, RPG)" },
  { fr: "Nouvelles Technologies", en: "New Technologies" },
  { fr: "Lecture Technique", en: "Technical Reading" }
];

export const ASSOCIATIONS_DATA: AssociationItem[] = [
  {
    name: { fr: "Rotaract Boumhal Bassatine", en: "Rotaract Boumhal Bassatine" },
    period: "Depuis 2022",
    roles: [
      { fr: "Membre (2022)", en: "Member (2022)" },
      { fr: "Responsable commission développement personnel et professionnel (2023)", en: "Head of Personal and Professional Development Committee (2023)" }
    ]
  },
  {
    name: { fr: "JCI Belvédère", en: "JCI Belvédère" },
    period: "Depuis 2022",
    roles: [
      { fr: "Membre (2022)", en: "Member (2022)" },
      { fr: "Trésorier (2023)", en: "Treasurer (2023)" }
    ]
  }
];

// Localized strings for UI elements not in constants
export const UI_LABELS = {
  helloItsMe: { fr: "Bonjour, c'est Moi", en: "Hello, It's Me" },
  andImA: { fr: "Et je suis ", en: "And I'm a " },
  contactMe: { fr: "Contactez-moi", en: "Contact Me" },
  aboutMeTitle: { fr: "À Propos de Moi", en: "About Me" },
  skillsTitle: { fr: "Compétences Techniques", en: "Technical Skills" },
  experienceTitle: { fr: "Expériences Professionnelles", en: "Professional Experience" },
  projectsTitle: { fr: "Projets Réalisés", en: "Projects" },
  academicProjectsSubtitle: { fr: "Projets Académiques", en: "Academic Projects" },
  freelanceProjectsSubtitle: { fr: "Projets Freelance", en: "Freelance Projects" },
  educationTitle: { fr: "Éducation", en: "Education" },
  languagesTitle: { fr: "Langues", en: "Languages" },
  qualitiesTitle: { fr: "Qualités Personnelles", en: "Soft Skills" },
  interestsTitle: { fr: "Centres d'Intérêt", en: "Interests" },
  associationsTitle: { fr: "Engagement Associatif", en: "Associative Engagement" },
  contactFooterTitle: { fr: "Contactez-moi", en: "Contact Me" },
  contactFooterPitch: {
    fr: "N'hésitez pas à me contacter si vous avez des questions, des opportunités de projet, ou si vous souhaitez simplement discuter.",
    en: "Feel free to contact me if you have any questions, project opportunities, or if you just want to chat."
  },
  copyrightReserved: { fr: "Tous droits réservés", en: "All rights reserved" },
  designedWith: { fr: "Conçu avec", en: "Designed with" },
  inspiredBy: { fr: "Inspiré par le web moderne", en: "Inspired by the modern web" },
  linkedInSocial: { fr: "LinkedIn", en: "LinkedIn" }
};

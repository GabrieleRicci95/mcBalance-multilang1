// src/context/TranslationContext.js
'use client';

import { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

const translations = {
   it: {
    // Navbar
    'chi-siamo': 'Chi siamo',
    'cosa-facciamo': 'Cosa facciamo',
    'nostre-competenze': 'Le nostre competenze',
    'carriere': 'Carriere',
    
    // Dropdown Chi siamo
    'nostra-storia': 'La nostra storia',
    
    // Dropdown Cosa facciamo
    'overview': 'Panoramica',
    'settori': 'Settori',
    'servizi': 'Servizi',
    'nostri-servizi': 'I nostri servizi',
    'servizi-description': 'Soluzioni innovative per la crescita aziendale',
    
    // Dropdown Competenze
    'competenze-tecniche': 'Competenze tecniche',
    'trasformazione-digitale': 'Trasformazione digitale',
    'sostenibilita': 'Sostenibilità',
    
    // Dropdown Carriere
    'opportunita-lavoro': 'Opportunità di lavoro',
    'stage-tirocini': 'Stage e tirocini',
    'crescita-professionale': 'Crescita professionale',
    
    // Hero Section
    'hero-title': 'Ti aiutiamo a guardare verso il futuro!',
    'hero-subtitle': 'Pensare, sviluppare, creare, crescere, cambiare e affrontare nuove sfide in equilibrio e in armonia con gli elementi.',
    
    // Mission Section (Homepage)
    'mission-title': 'La nostra missione',
    'mission-p1': 'nasce per dare vita ad attività professionali finalizzate all\'innovazione e al miglioramento continuo.',
    'mission-p2': 'L\'approccio per lo sviluppo di idee e progetti si basa su due concetti fondamentali. Il primo è l\', inteso come ricerca continua di una condizione che garantisce armonia tra i vari elementi che sono coinvolti in un progetto. Il secondo è la, inteso come ricerca continua di una condivisione ed integrazione di ispirazioni.',
    'mission-equilibrium': 'EQUILIBRIO',
    'mission-network': 'RETE',
    'mission-p3': 'I valori alla base del nostro modo di lavorare sono il nostro punto di forza che ci consente di superare il tempo e le sfide che il futuro ci presenterà.',
    'mission-p4': ', perché pensiamo di poter aiutare con metodo le organizzazioni nel raggiungimento dei loro e dei nostri obiettivi.',
    'mission-we-are-here': 'Ci siamo',
    'mission-p5': 'Ci piace vedere crescere i nostri progetti e le persone con le quali lavoriamo.',
    
    // Chi siamo page
    'chi-siamo-text': 'McBalance nasce come spin-off delle attività di consulenza e formazione dei soci fondatori, che a partire dall\'inizio degli anni 2000 si sono dedicati ai temi della Manutenzione, dell\'Affidabilità e della Sicurezza in ambito industriale e sia in ambito nazionale che internazionale.',
    'chi-siamo-card-description': 'La nostra storia e i nostri valori',
    
    // Overview page
    'overview-title': 'Il nostro metodo',
    'overview-paragraph-1': 'Le attività di McBalance sono finalizzate al supporto alle aziende nella implementazione / miglioramento /elaborazione di nuovi processi e pertanto si configurano, nella maggior parte dei casi, come attività di consulenza, sia di direzione che tecnica, e di formazione, sia manageriale che tecnica.',
    'overview-paragraph-2': 'Tutte le attività sia di breve che di medio-lungo termini seguono i principi della gestione orientata al miglioramento continuo (vedi ISO 9001) e pertanto prevedono sempre una fase preliminare di Pianificazione e Organizzazione (PLAN) e successivi steps di controllo e "aggiustamento" durante lo sviluppo o l\'implementazione dei servizi. In particolare, si preferisce dedicare il giusto tempo al Project Management e seguire i progetti di consulenza con un GANTT specifico e momento di revisione / verifica e riesame.',
    'overview-paragraph-3': 'Per i settori Pharma e Food, in tutte le fasi delle attività si tiene conto dei requisiti GMP e/o GXP e più in generale per ogni attività si garantisce quanto richiesto dalle normative di legge e dagli standard ISO, IEC, EN, UNI, CEI, regole tecniche aziendali e best practice di riferimento.',
    
    // Settori page - CORREZIONI QUI
    'settori-title': 'I nostri settori di competenza',
    'settori-description': 'McBalance opera con esperienza consolidata nei seguenti settori industriali',
    'settore-pharma': 'Farmaceutico',
    'settore-consumer': 'Consumo',
    'settore-food': 'Alimentare',
    'settore-oil-gas': 'Petrolio e Gas',
    'settore-medical': 'Medicale',
    'settore-educations': 'Formazione',
    'settore-compliance': 'Conformità e Sistemi di Gestione',
    'settore-standards': 'Standard e Regolamentazione',
    
    // Servizi page - CORREZIONI QUI
    'servizi-title': 'I nostri servizi',
    'servizio-reliability': 'Affidabilità',
    'servizio-maintenance-management': 'Gestione della Manutenzione',
    'servizio-asset-management': 'Gestione degli Asset',
    'servizio-cmms-digitalization': 'CMMS e Digitalizzazione dei Processi',
    'servizio-industrial-safety': 'Sicurezza Industriale',
    'servizio-management-systems': 'Sistemi di Gestione ISO 9001/45001',
    'servizio-training': 'Formazione',
    
    // Reliability page
    'RELIABILITY': 'AFFIDABILITÀ',
    'reliability': 'Affidabilità',
    'reliability-title': 'Affidabilità',
    'reliability-description': 'Le nostre attività di Reliability Engineering sono finalizzate a garantire l\'affidabilità dei sistemi, migliorare le prestazioni e ridurre i costi di manutenzione.',
    'reliability-services-intro': 'Ecco i principali servizi che offriamo:',
    'reliability-service-1': 'Studi di Affidabilità FMEA / FMECA / PFMEA / HAZOP / ETA / PFOD',
    'reliability-service-2': 'Studi RCM (Reliability Centre Maintenance)',
    'reliability-service-3': 'Problem Solving e Miglioramento (RCA)',
    'reliability-service-4': 'Algoritmi per la Gestione Materiali per la Manutenzione',
    'reliability-service-5': 'Sistemi per la Misurazione e Monitoraggio dei parametri affidabilistici (MTTR, MDT, MTBF, MOTBF, Availability, OEE, etc)',
    'reliability-service-6': 'Studi di Human Reliability & Human Errors',
    'reliability-conclusion': 'I nostri studi e le nostre soluzioni sono pensati per aiutare le organizzazioni a migliorare continuamente i propri asset e a garantire la massima sicurezza ed efficienza.',
    
    // Maintenance Management page
    'MAINTENANCE_MANAGEMENT': 'GESTIONE DELLA MANUTENZIONE',
    'maintenance-management': 'Gestione della Manutenzione',
    'maintenance-management-title': 'Gestione della Manutenzione',
    'maintenance-management-description': 'Le nostre attività di Maintenance Management sono finalizzate a ottimizzare i processi di manutenzione, migliorare l\'efficienza operativa e ridurre i costi attraverso strategie innovative.',
    'maintenance-management-services-intro': 'Ecco i principali servizi che offriamo:',
    'maintenance-management-service-1': 'Audit di prima e seconda parte (ISO 19011)',
    'maintenance-management-service-2': 'Analisi e rielaborazione dell\'Organizzazione e dei Processi',
    'maintenance-management-service-3': 'Piani di Manutenzione',
    'maintenance-management-service-4': 'Strumenti per la Gestione della Manutenzione Correttiva (a guasto)',
    'maintenance-management-service-5': 'Modelli per la Gestione ed Ottimizzazione delle Parti di Ricambio',
    'maintenance-management-service-6': 'Progetti TPM (Total Productive Maintenance)',
    'maintenance-management-service-7': 'Strumenti per la Misurazione e Monitoraggio delle Prestazioni (KPI)',
    'maintenance-management-service-8': 'Modelli per la Gestione delle Competenze del personale',
    'maintenance-management-service-9': 'Modelli per la Gestione del Budget',
    'maintenance-management-conclusion': 'I nostri servizi di gestione della manutenzione sono progettati per trasformare le operazioni di manutenzione in un vantaggio competitivo strategico.',
    
    // Asset Management page
    'ASSET_MANAGEMENT': 'GESTIONE DEGLI ASSET',
    'asset-management': 'Gestione degli Asset',
    'asset-management-title': 'Gestione degli Asset',
    'asset-management-description': 'Le nostre attività di Asset Management sono finalizzate a ottimizzare la gestione e il ciclo di vita degli asset aziendali, garantendo efficienza operativa e conformità normativa.',
    'asset-management-services-intro': 'Ecco i principali servizi che offriamo:',
    'asset-management-service-1': 'Sviluppo ed implementazione di Asset Register',
    'asset-management-service-2': 'Sviluppo ed implementazione di Asset Management System ISO 55001',
    'asset-management-service-3': 'Asset Critical Analysis',
    'asset-management-service-4': 'Audit di prima e seconda parte (ISO 19011)',
    'asset-management-conclusion': 'I nostri servizi di gestione degli asset sono progettati per massimizzare il valore degli investimenti e garantire la sostenibilità operativa a lungo termine.',
    
    // CMMS & Process digitalization page
    'CMMS_DIGITALIZATION': 'CMMS E DIGITALIZZAZIONE DEI PROCESSI',
    'cmms-digitalization': 'CMMS e Digitalizzazione dei Processi',
    'cmms-digitalization-title': 'CMMS e Digitalizzazione dei Processi',
    'cmms-digitalization-description': 'Le nostre attività di digitalizzazione sono finalizzate a modernizzare i processi di manutenzione attraverso l\'implementazione di sistemi CMMS avanzati e soluzioni software innovative.',
    'cmms-digitalization-services-intro': 'Ecco i principali servizi che offriamo:',
    'cmms-digitalization-service-1': 'Sviluppo App per la Manutenzione (es. Ticketing, Spare Part management, etc)',
    'cmms-digitalization-service-2': 'Sviluppo App per la Safety (es. Near Miss, Gemba, Audit, etc)',
    'cmms-digitalization-service-3': 'Sviluppo e/o Supporto per Applicativi software per la gestione della Manutenzione',
    'cmms-digitalization-conclusion': 'Le nostre soluzioni digitali trasformano i processi tradizionali in sistemi efficienti, tracciabili e orientati al miglioramento continuo.',
    
    // Industrial Safety page
    'INDUSTRIAL_SAFETY': 'SICUREZZA INDUSTRIALE',
    'industrial-safety': 'Sicurezza Industriale',
    'industrial-safety-title': 'Sicurezza Industriale',
    'industrial-safety-description': 'Le nostre attività di Industrial Safety sono finalizzate a garantire la massima sicurezza nei luoghi di lavoro attraverso valutazioni approfondite, formazione specializzata e consulenza personalizzata.',
    'industrial-safety-services-intro': 'Ecco i principali servizi che offriamo:',
    'industrial-safety-service-1': 'Valutazione dei rischi e documenti per la sicurezza',
    'industrial-safety-service-2': 'Sicurezza Macchine, Attrezzature di Lavoro e Impianti',
    'industrial-safety-service-3': 'Analisi dei processi produttivi per la sicurezza',
    'industrial-safety-service-4': 'Supporto normative e compliance',
    'industrial-safety-service-5': 'Formazione sulla sicurezza aziendale',
    'industrial-safety-service-6': 'Audit interni di sicurezza',
    'industrial-safety-service-7': 'Consulenza personalizzata',
    'industrial-safety-conclusion': 'I nostri servizi di sicurezza industriale sono progettati per creare ambienti di lavoro sicuri, conformi alle normative e orientati alla prevenzione.',
    
    // Management Systems page
    'MANAGEMENT_SYSTEMS': 'SISTEMI DI GESTIONE ISO 9001/45001',
    'management-systems': 'Sistemi di Gestione ISO 9001/45001',
    'management-systems-title': 'Sistemi di Gestione ISO 9001/45001',
    'management-systems-description': 'Le nostre attività sui Sistemi di Gestione sono finalizzate a supportare le organizzazioni nell\'implementazione e mantenimento di standard internazionali per la qualità e la sicurezza.',
    'management-systems-services-intro': 'Ecco i principali servizi che offriamo:',
    'management-systems-service-1': 'Sviluppo ed implementazione Sistemi di Gestione secondo le ISO 9001/14001/45001',
    'management-systems-service-2': 'Sviluppo ed implementazione Sistemi di Gestione per la Parità di Genere secondo UNI/PdR 125',
    'management-systems-conclusion': 'I nostri servizi per i sistemi di gestione garantiscono conformità normativa, miglioramento continuo e eccellenza operativa.',
    
    // Training page
    'TRAINING': 'FORMAZIONE',
    'training': 'Formazione',
    'training-title': 'Formazione',
    'training-description': 'Le nostre attività di Training sono finalizzate a sviluppare le competenze del personale attraverso corsi specializzati, certificazioni professionali e percorsi formativi personalizzati.',
    'training-services-intro': 'Ecco i principali servizi che offriamo:',
    'training-service-1': 'Corsi di formazione per la Qualifica del Personale di Manutenzione secondo lo standard UNI EN 15628: Specialist di Manutenzione (Livello 1), Supervisore/Ingegnere di Manutenzione (Livello 2), Responsabile di Manutenzione (Livello 3)',
    'training-service-2': 'Corsi di formazione in ambito Lavori e Sicurezza Elettrica: PES/PAV/"PEI" (CEI 11-27), Manutenzione Cabine (CEI 78-17), Arc Flash (NFPA 70E)',
    'training-service-3': 'Corsi di formazione in ambito Attrezzature e Macchine: Direttiva Macchine, Sistemi di Sollevamento',
    'training-service-4': 'Corsi di formazione "Human Reliability and Human Errors"',
    'training-conclusion': 'I nostri programmi formativi sono progettati per sviluppare competenze tecniche avanzate e garantire la crescita professionale del personale.',
    
    // Footer
    'footer-text': '© 2022 McBalance. Tutti i diritti riservati.'
  },
  en: {
    // Navbar
    'chi-siamo': 'About us',
    'cosa-facciamo': 'What we do',
    'nostre-competenze': 'Our expertise',
    'carriere': 'Careers',
    
    // Dropdown Chi siamo
    'nostra-storia': 'Our story',
    
    // Dropdown Cosa facciamo
    'overview': 'Overview',
    'settori': 'Industries',
    'servizi': 'Services',
    'nostri-servizi': 'Our services',
    'servizi-description': 'Innovative solutions for business growth',
    
    // Dropdown Competenze
    'competenze-tecniche': 'Technical skills',
    'trasformazione-digitale': 'Digital transformation',
    'sostenibilita': 'Sustainability',
    
    // Dropdown Carriere
    'opportunita-lavoro': 'Job opportunities',
    'stage-tirocini': 'Internships',
    'crescita-professionale': 'Professional growth',
    
    // Hero Section
    'hero-title': 'We help you look to the future!',
    'hero-subtitle': 'Think, develop, create, grow, change and face new challenges in balance and harmony with the elements.',
    
    // Mission Section (Homepage)
    'mission-title': 'Our mission',
    'mission-p1': 'was born to give life to professional activities aimed at innovation and continuous improvement.',
    'mission-p2': 'The approach to developing ideas and projects is based on two fundamental concepts. The first is, understood as a continuous search for a condition that guarantees harmony between the various elements involved in a project. The second is the, understood as a continuous search for sharing and integration of inspirations.',
    'mission-equilibrium': 'BALANCE',
    'mission-network': 'NETWORK',
    'mission-p3': 'The values that underlie our way of working are our strength that allows us to overcome time and the challenges that the future will present us.',
    'mission-p4': ', because we think we can methodically help organizations achieve their and our objectives.',
    'mission-we-are-here': 'We are here',
    'mission-p5': 'We like to see our projects and the people we work with grow.',
    
    // Chi siamo page
    'chi-siamo-text': 'McBalance was born as a spin-off of the consulting and training activities of the founding partners, who since the early 2000s have dedicated themselves to the themes of Maintenance, Reliability and Safety in industrial environments, both nationally and internationally.',
    'chi-siamo-card-description': 'Our story and our values',
    
    // Overview page
    'overview-title': ' Our method',
    'overview-paragraph-1': 'McBalance activities are aimed at supporting companies in the implementation / improvement / development of new processes and therefore are configured, in most cases, as consulting activities, both management and technical, and training, both managerial and technical.',
    'overview-paragraph-2': 'All activities, both short and medium-long term, follow the principles of continuous improvement-oriented management (see ISO 9001) and therefore always include a preliminary Planning and Organization phase (PLAN) and subsequent control and "adjustment" steps during the development or implementation of services. In particular, we prefer to dedicate the right time to Project Management and follow consulting projects with a specific GANTT and review / verification and examination moments.',
    'overview-paragraph-3': 'For the Pharma and Food sectors, in all phases of activities, GMP and/or GXP requirements are taken into account and more generally for every activity we guarantee what is required by legal regulations and ISO, IEC, EN, UNI, CEI standards, company technical rules and reference best practices.',
    
    // Settori page
    'settori-title': 'Our areas of expertise',
    'settori-description': 'McBalance operates with consolidated experience in the following industrial sectors',
    'settore-pharma': 'Pharma',
    'settore-consumer': 'Consumer',
    'settore-food': 'Food',
    'settore-oil-gas': 'Oil & Gas',
    'settore-medical': 'Medical',
    'settore-educations': 'Education',
    'settore-compliance': 'Compliance & Management Systems',
    'settore-standards': 'Standards & Regulation',
    
    // Servizi page
    'servizi-title': 'Our services',
    'servizio-reliability': 'Reliability',
    'servizio-maintenance-management': 'Maintenance Management',
    'servizio-asset-management': 'Asset Management',
    'servizio-cmms-digitalization': 'CMMS & Process digitalization',
    'servizio-industrial-safety': 'Industrial Safety',
    'servizio-management-systems': 'Management Systems ISO 9001/45001',
    'servizio-training': 'Training',
    
    // Reliability page
    'RELIABILITY': 'RELIABILITY',
    'reliability': 'Reliability',
    'reliability-title': 'Reliability',
    'reliability-description': 'Our Reliability Engineering activities are aimed at guaranteeing system reliability, improving performance and reducing maintenance costs.',
    'reliability-services-intro': 'Here are the main services we offer:',
    'reliability-service-1': 'Reliability Studies FMEA / FMECA / PFMEA / HAZOP / ETA / PFOD',
    'reliability-service-2': 'RCM Studies (Reliability Centre Maintenance)',
    'reliability-service-3': 'Problem Solving and Improvement (RCA)',
    'reliability-service-4': 'Algorithms for Material Management for Maintenance',
    'reliability-service-5': 'Systems for Measurement and Monitoring of reliability parameters (MTTR, MDT, MTBF, MOTBF, Availability, OEE, etc)',
    'reliability-service-6': 'Human Reliability & Human Errors Studies',
    'reliability-conclusion': 'Our studies and solutions are designed to help organizations continuously improve their assets and ensure maximum safety and efficiency.',
    
    // Maintenance Management page
    'MAINTENANCE_MANAGEMENT': 'MAINTENANCE MANAGEMENT',
    'maintenance-management': 'Maintenance Management',
    'maintenance-management-title': 'Maintenance Management',
    'maintenance-management-description': 'Our Maintenance Management activities are aimed at optimizing maintenance processes, improving operational efficiency and reducing costs through innovative strategies.',
    'maintenance-management-services-intro': 'Here are the main services we offer:',
    'maintenance-management-service-1': 'First and second party audits (ISO 19011)',
    'maintenance-management-service-2': 'Analysis and redesign of Organization and Processes',
    'maintenance-management-service-3': 'Maintenance Plans',
    'maintenance-management-service-4': 'Tools for Corrective Maintenance Management (breakdown)',
    'maintenance-management-service-5': 'Models for Spare Parts Management and Optimization',
    'maintenance-management-service-6': 'TPM Projects (Total Productive Maintenance)',
    'maintenance-management-service-7': 'Tools for Performance Measurement and Monitoring (KPI)',
    'maintenance-management-service-8': 'Models for Personnel Skills Management',
    'maintenance-management-service-9': 'Budget Management Models',
    'maintenance-management-conclusion': 'Our maintenance management services are designed to transform maintenance operations into a strategic competitive advantage.',
    
    // Asset Management page
    'ASSET_MANAGEMENT': 'ASSET MANAGEMENT',
    'asset-management': 'Asset Management',
    'asset-management-title': 'Asset Management',
    'asset-management-description': 'Our Asset Management activities are aimed at optimizing the management and lifecycle of company assets, ensuring operational efficiency and regulatory compliance.',
    'asset-management-services-intro': 'Here are the main services we offer:',
    'asset-management-service-1': 'Development and implementation of Asset Register',
    'asset-management-service-2': 'Development and implementation of Asset Management System ISO 55001',
    'asset-management-service-3': 'Asset Critical Analysis',
    'asset-management-service-4': 'First and second party audits (ISO 19011)',
    'asset-management-conclusion': 'Our asset management services are designed to maximize investment value and ensure long-term operational sustainability.',
    
    // CMMS & Process digitalization page
    'CMMS_DIGITALIZATION': 'CMMS & PROCESS DIGITALIZATION',
    'cmms-digitalization': 'CMMS & Process Digitalization',
    'cmms-digitalization-title': 'CMMS & Process Digitalization',
    'cmms-digitalization-description': 'Our digitalization activities are aimed at modernizing maintenance processes through the implementation of advanced CMMS systems and innovative software solutions.',
    'cmms-digitalization-services-intro': 'Here are the main services we offer:',
    'cmms-digitalization-service-1': 'Development of Maintenance Apps (e.g. Ticketing, Spare Part management, etc)',
    'cmms-digitalization-service-2': 'Development of Safety Apps (e.g. Near Miss, Gemba, Audit, etc)',
    'cmms-digitalization-service-3': 'Development and/or Support for Maintenance Management Software Applications',
    'cmms-digitalization-conclusion': 'Our digital solutions transform traditional processes into efficient, traceable systems oriented towards continuous improvement.',
    
    // Industrial Safety page
    'INDUSTRIAL_SAFETY': 'INDUSTRIAL SAFETY',
    'industrial-safety': 'Industrial Safety',
    'industrial-safety-title': 'Industrial Safety',
    'industrial-safety-description': 'Our Industrial Safety activities are aimed at ensuring maximum safety in the workplace through thorough assessments, specialized training and personalized consulting.',
    'industrial-safety-services-intro': 'Here are the main services we offer:',
    'industrial-safety-service-1': 'Risk assessment and safety documentation',
    'industrial-safety-service-2': 'Machine Safety, Work Equipment and Plant Safety',
    'industrial-safety-service-3': 'Analysis of production processes for safety',
    'industrial-safety-service-4': 'Regulatory support and compliance',
    'industrial-safety-service-5': 'Corporate safety training',
    'industrial-safety-service-6': 'Internal safety audits',
    'industrial-safety-service-7': 'Personalized consulting',
    'industrial-safety-conclusion': 'Our industrial safety services are designed to create safe work environments, compliant with regulations and prevention-oriented.',
    
    // Management Systems page
    'MANAGEMENT_SYSTEMS': 'MANAGEMENT SYSTEMS ISO 9001/45001',
    'management-systems': 'Management Systems ISO 9001/45001',
    'management-systems-title': 'Management Systems ISO 9001/45001',
    'management-systems-description': 'Our Management Systems activities are aimed at supporting organizations in the implementation and maintenance of international standards for quality and safety.',
    'management-systems-services-intro': 'Here are the main services we offer:',
    'management-systems-service-1': 'Development and implementation of Management Systems according to ISO 9001/14001/45001',
    'management-systems-service-2': 'Development and implementation of Gender Equality Management Systems according to UNI/PdR 125',
    'management-systems-conclusion': 'Our management systems services ensure regulatory compliance, continuous improvement and operational excellence.',
    
    // Training page
    'TRAINING': 'TRAINING',
    'training': 'Training',
    'training-title': 'Training',
    'training-description': 'Our Training activities are aimed at developing personnel skills through specialized courses, professional certifications and personalized training paths.',
    'training-services-intro': 'Here are the main services we offer:',
    'training-service-1': 'Training courses for Maintenance Personnel Qualification according to UNI EN 15628 standard: Maintenance Specialist (Level 1), Maintenance Supervisor/Engineer (Level 2), Maintenance Manager (Level 3)',
    'training-service-2': 'Training courses in Electrical Work and Safety: PES/PAV/"PEI" (CEI 11-27), Substation Maintenance (CEI 78-17), Arc Flash (NFPA 70E)',
    'training-service-3': 'Training courses in Equipment and Machinery: Machinery Directive, Lifting Systems',
    'training-service-4': 'Training courses "Human Reliability and Human Errors"',
    'training-conclusion': 'Our training programs are designed to develop advanced technical skills and ensure professional growth of personnel.',
    
    // Footer
    'footer-text': '© 2022 McBalance. All rights reserved.'
  },
  es: {
    // Navbar
    'chi-siamo': 'Quiénes somos',
    'cosa-facciamo': 'Qué hacemos',
    'nostre-competenze': 'Nuestra experiencia',
    'carriere': 'Carreras',
    
    // Dropdown Chi siamo
    'nostra-storia': 'Nuestra historia',
    
    // Dropdown Cosa facciamo
    'overview': 'Resumen',
    'settori': 'Sectores',
    'servizi': 'Servicios',
    'nostri-servizi': 'Nuestros servicios',
    'servizi-description': 'Soluciones innovadoras para el crecimiento empresarial',
    
    // Dropdown Competenze
    'competenze-tecniche': 'Habilidades técnicas',
    'trasformazione-digitale': 'Transformación digital',
    'sostenibilita': 'Sostenibilidad',
    
    // Dropdown Carriere
    'opportunita-lavoro': 'Oportunidades laborales',
    'stage-tirocini': 'Prácticas',
    'crescita-professionale': 'Crecimiento profesional',
    
    // Hero Section
    'hero-title': '¡Te ayudamos a mirar hacia el futuro!',
    'hero-subtitle': 'Pensar, desarrollar, crear, crecer, cambiar y enfrentar nuevos desafíos en equilibrio y armonía con los elementos.',
    
    // Mission Section (Homepage)
    'mission-title': 'Nuestra misión',
    'mission-p1': 'nace para dar vida a actividades profesionales orientadas a la innovación y la mejora continua.',
    'mission-p2': 'El enfoque para el desarrollo de ideas y proyectos se basa en dos conceptos fundamentales. El primero es el, entendido como búsqueda continua de una condición que garantice armonía entre los diversos elementos involucrados en un proyecto. El segundo es la, entendido como búsqueda continua de compartir e integrar inspiraciones.',
    'mission-equilibrium': 'EQUILIBRIO',
    'mission-network': 'RED',
    'mission-p3': 'Los valores que fundamentan nuestra forma de trabajar son nuestra fortaleza que nos permite superar el tiempo y los desafíos que el futuro nos presentará.',
    'mission-p4': ', porque pensamos que podemos ayudar metódicamente a las organizaciones a alcanzar sus objetivos y los nuestros.',
    'mission-we-are-here': 'Estamos aquí',
    'mission-p5': 'Nos gusta ver crecer nuestros proyectos y las personas con las que trabajamos.',
    
    // Chi siamo page
    'chi-siamo-text': 'McBalance nace como spin-off de las actividades de consultoría y formación de los socios fundadores, que desde principios de los años 2000 se han dedicado a los temas de Mantenimiento, Fiabilidad y Seguridad en el ámbito industrial, tanto nacional como internacional.',
    'chi-siamo-card-description': 'Nuestra historia y nuestros valores',
    
    // Overview page
    'overview-title': 'Nuestro método',
    'overview-paragraph-1': 'Las actividades de McBalance están dirigidas a apoyar a las empresas en la implementación / mejora / desarrollo de nuevos procesos y por lo tanto se configuran, en la mayoría de los casos, como actividades de consultoría, tanto directiva como técnica, y de formación, tanto gerencial como técnica.',
    'overview-paragraph-2': 'Todas las actividades, tanto de corto como de medio-largo plazo, siguen los principios de gestión orientada a la mejora continua (ver ISO 9001) y por lo tanto siempre incluyen una fase preliminar de Planificación y Organización (PLAN) y pasos posteriores de control y "ajuste" durante el desarrollo o implementación de servicios. En particular, preferimos dedicar el tiempo adecuado al Project Management y seguir los proyectos de consultoría con un GANTT específico y momentos de revisión / verificación y examen.',
    'overview-paragraph-3': 'Para los sectores Pharma y Food, en todas las fases de las actividades se tienen en cuenta los requisitos GMP y/o GXP y más en general para cada actividad garantizamos lo que requieren las normativas legales y los estándares ISO, IEC, EN, UNI, CEI, reglas técnicas empresariales y mejores prácticas de referencia.',
    
    // Settori page
    'settori-title': 'Nuestras áreas de competencia',
    'settori-description': 'McBalance opera con experiencia consolidada en los siguientes sectores industriales',
    'settore-pharma': 'Farmacéutico',
    'settore-consumer': 'Consumo',
    'settore-food': 'Alimentario',
    'settore-oil-gas': 'Petróleo y Gas',
    'settore-medical': 'Médico',
    'settore-educations': 'Educación',
    'settore-compliance': 'Cumplimiento y Sistemas de Gestión',
    'settore-standards': 'Estándares y Regulación',
    
    // Servizi page
    'servizi-title': 'Nuestros servicios',
    'servizio-reliability': 'Confiabilidad',
    'servizio-maintenance-management': 'Gestión de Mantenimiento',
    'servizio-asset-management': 'Gestión de Activos',
    'servizio-cmms-digitalization': 'CMMS y Digitalización de Procesos',
    'servizio-industrial-safety': 'Seguridad Industrial',
    'servizio-management-systems': 'Sistemas de Gestión ISO 9001/45001',
    'servizio-training': 'Formación',
    
    // Reliability page
    'RELIABILITY': 'CONFIABILIDAD',
    'reliability': 'Confiabilidad',
    'reliability-title': 'Confiabilidad',
    'reliability-description': 'Nuestras actividades de Ingeniería de Confiabilidad están dirigidas a garantizar la confiabilidad de los sistemas, mejorar el rendimiento y reducir los costos de mantenimiento.',
    'reliability-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'reliability-service-1': 'Estudios de Confiabilidad FMEA / FMECA / PFMEA / HAZOP / ETA / PFOD',
    'reliability-service-2': 'Estudios RCM (Reliability Centre Maintenance)',
    'reliability-service-3': 'Resolución de Problemas y Mejora (RCA)',
    'reliability-service-4': 'Algoritmos para la Gestión de Materiales para Mantenimiento',
    'reliability-service-5': 'Sistemas para Medición y Monitoreo de parámetros de confiabilidad (MTTR, MDT, MTBF, MOTBF, Disponibilidad, OEE, etc)',
    'reliability-service-6': 'Estudios de Confiabilidad Humana y Errores Humanos',
    'reliability-conclusion': 'Nuestros estudios y soluciones están diseñados para ayudar a las organizaciones a mejorar continuamente sus activos y garantizar la máxima seguridad y eficiencia.',
    
    // Maintenance Management page
    'MAINTENANCE_MANAGEMENT': 'GESTIÓN DE MANTENIMIENTO',
    'maintenance-management': 'Gestión de Mantenimiento',
    'maintenance-management-title': 'Gestión de Mantenimiento',
    'maintenance-management-description': 'Nuestras actividades de Gestión de Mantenimiento están dirigidas a optimizar los procesos de mantenimiento, mejorar la eficiencia operacional y reducir costos a través de estrategias innovadoras.',
    'maintenance-management-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'maintenance-management-service-1': 'Auditorías de primera y segunda parte (ISO 19011)',
    'maintenance-management-service-2': 'Análisis y reelaboración de la Organización y los Procesos',
    'maintenance-management-service-3': 'Planes de Mantenimiento',
    'maintenance-management-service-4': 'Herramientas para la Gestión del Mantenimiento Correctivo (por falla)',
    'maintenance-management-service-5': 'Modelos para la Gestión y Optimización de Repuestos',
    'maintenance-management-service-6': 'Proyectos TPM (Total Productive Maintenance)',
    'maintenance-management-service-7': 'Herramientas para Medición y Monitoreo del Rendimiento (KPI)',
    'maintenance-management-service-8': 'Modelos para la Gestión de Competencias del Personal',
    'maintenance-management-service-9': 'Modelos para la Gestión del Presupuesto',
    'maintenance-management-conclusion': 'Nuestros servicios de gestión de mantenimiento están diseñados para transformar las operaciones de mantenimiento en una ventaja competitiva estratégica.',
    
    // Asset Management page
    'ASSET_MANAGEMENT': 'GESTIÓN DE ACTIVOS',
    'asset-management': 'Gestión de Activos',
    'asset-management-title': 'Gestión de Activos',
    'asset-management-description': 'Nuestras actividades de Gestión de Activos están dirigidas a optimizar la gestión y el ciclo de vida de los activos empresariales, garantizando eficiencia operativa y cumplimiento normativo.',
    'asset-management-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'asset-management-service-1': 'Desarrollo e implementación de Registro de Activos',
    'asset-management-service-2': 'Desarrollo e implementación de Sistema de Gestión de Activos ISO 55001',
    'asset-management-service-3': 'Análisis Crítico de Activos',
    'asset-management-service-4': 'Auditorías de primera y segunda parte (ISO 19011)',
    'asset-management-conclusion': 'Nuestros servicios de gestión de activos están diseñados para maximizar el valor de las inversiones y garantizar la sostenibilidad operativa a largo plazo.',
    
    // CMMS & Process digitalization page
    'CMMS_DIGITALIZATION': 'CMMS Y DIGITALIZACIÓN DE PROCESOS',
    'cmms-digitalization': 'CMMS y Digitalización de Procesos',
    'cmms-digitalization-title': 'CMMS y Digitalización de Procesos',
    'cmms-digitalization-description': 'Nuestras actividades de digitalización están dirigidas a modernizar los procesos de mantenimiento a través de la implementación de sistemas CMMS avanzados y soluciones de software innovadoras.',
    'cmms-digitalization-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'cmms-digitalization-service-1': 'Desarrollo de Apps para Mantenimiento (ej. Ticketing, gestión de repuestos, etc)',
    'cmms-digitalization-service-2': 'Desarrollo de Apps para Seguridad (ej. Near Miss, Gemba, Audit, etc)',
    'cmms-digitalization-service-3': 'Desarrollo y/o Soporte para Aplicaciones de software para la gestión del Mantenimiento',
    'cmms-digitalization-conclusion': 'Nuestras soluciones digitales transforman los procesos tradicionales en sistemas eficientes, trazables y orientados a la mejora continua.',
    
    // Industrial Safety page
    'INDUSTRIAL_SAFETY': 'SEGURIDAD INDUSTRIAL',
    'industrial-safety': 'Seguridad Industrial',
    'industrial-safety-title': 'Seguridad Industrial',
    'industrial-safety-description': 'Nuestras actividades de Seguridad Industrial están dirigidas a garantizar la máxima seguridad en los lugares de trabajo a través de evaluaciones profundas, formación especializada y consultoría personalizada.',
    'industrial-safety-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'industrial-safety-service-1': 'Evaluación de riesgos y documentos para la seguridad',
    'industrial-safety-service-2': 'Seguridad de Máquinas, Equipos de Trabajo e Instalaciones',
    'industrial-safety-service-3': 'Análisis de los procesos productivos para la seguridad',
    'industrial-safety-service-4': 'Soporte normativo y cumplimiento',
    'industrial-safety-service-5': 'Formación sobre seguridad empresarial',
    'industrial-safety-service-6': 'Auditorías internas de seguridad',
    'industrial-safety-service-7': 'Consultoría personalizada',
    'industrial-safety-conclusion': 'Nuestros servicios de seguridad industrial están diseñados para crear ambientes de trabajo seguros, conformes a las normativas y orientados a la prevención.',
    
    // Management Systems page
    'MANAGEMENT_SYSTEMS': 'SISTEMAS DE GESTIÓN ISO 9001/45001',
    'management-systems': 'Sistemas de Gestión ISO 9001/45001',
    'management-systems-title': 'Sistemas de Gestión ISO 9001/45001',
    'management-systems-description': 'Nuestras actividades en Sistemas de Gestión están dirigidas a apoyar a las organizaciones en la implementación y mantenimiento de estándares internacionales para la calidad y la seguridad.',
    'management-systems-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'management-systems-service-1': 'Desarrollo e implementación de Sistemas de Gestión según ISO 9001/14001/45001',
    'management-systems-service-2': 'Desarrollo e implementación de Sistemas de Gestión para la Igualdad de Género según UNI/PdR 125',
    'management-systems-conclusion': 'Nuestros servicios para sistemas de gestión garantizan cumplimiento normativo, mejora continua y excelencia operativa.',
    
    // Training page
    'TRAINING': 'FORMACIÓN',
    'training': 'Formación',
    'training-title': 'Formación',
    'training-description': 'Nuestras actividades de Formación están dirigidas a desarrollar las competencias del personal a través de cursos especializados, certificaciones profesionales y rutas formativas personalizadas.',
    'training-services-intro': 'Estos son los principales servicios que ofrecemos:',
    'training-service-1': 'Cursos de formación para la Cualificación del Personal de Mantenimiento según el estándar UNI EN 15628: Especialista de Mantenimiento (Nivel 1), Supervisor/Ingeniero de Mantenimiento (Nivel 2), Responsable de Mantenimiento (Nivel 3)',
    'training-service-2': 'Cursos de formación en Trabajos y Seguridad Eléctrica: PES/PAV/"PEI" (CEI 11-27), Mantenimiento de Cabinas (CEI 78-17), Arc Flash (NFPA 70E)',
    'training-service-3': 'Cursos de formación en Equipos y Máquinas: Directiva de Máquinas, Sistemas de Elevación',
    'training-service-4': 'Cursos de formación "Human Reliability and Human Errors"',
    'training-conclusion': 'Nuestros programas formativos están diseñados para desarrollar competencias técnicas avanzadas y garantizar el crecimiento profesional del personal.',
    
    // Footer
    'footer-text': '© 2022 McBalance. Todos los derechos reservados.'
  },
  fr: {
    // Navbar
    'chi-siamo': 'Qui nous sommes',
    'cosa-facciamo': 'Ce que nous faisons',
    'nostre-competenze': 'Notre expertise',
    'carriere': 'Carrières',
    
    // Dropdown Chi siamo
    'nostra-storia': 'Notre histoire',
    
    // Dropdown Cosa facciamo
    'overview': 'Aperçu',
    'settori': 'Secteurs',
    'servizi': 'Services',
    'nostri-servizi': 'Nos services',
    'servizi-description': 'Solutions innovantes pour la croissance des entreprises',
    
    // Dropdown Competenze
    'competenze-tecniche': 'Compétences techniques',
    'trasformazione-digitale': 'Transformation numérique',
    'sostenibilita': 'Durabilité',
    
    // Dropdown Carriere
    'opportunita-lavoro': 'Opportunités d\'emploi',
    'stage-tirocini': 'Stages',
    'crescita-professionale': 'Croissance professionnelle',
    
    // Hero Section
    'hero-title': 'Nous vous aidons à regarder vers l\'avenir !',
    'hero-subtitle': 'Penser, développer, créer, grandir, changer et relever de nouveaux défis en équilibre et en harmonie avec les éléments.',
    
    // Mission Section (Homepage)
    'mission-title': 'Notre mission',
    'mission-p1': 'est né pour donner vie à des activités professionnelles visant l\'innovation et l\'amélioration continue.',
    'mission-p2': 'L\'approche pour développer des idées et des projets est basée sur deux concepts fondamentaux. Le premier est l\', compris comme une recherche continue d\'une condition qui garantit l\'harmonie entre les différents éléments impliqués dans un projet. Le second est le, compris comme une recherche continue de partage et d\'intégration d\'inspirations.',
    'mission-equilibrium': 'ÉQUILIBRE',
    'mission-network': 'RÉSEAU',
    'mission-p3': 'Les valeurs qui sous-tendent notre façon de travailler sont notre force qui nous permet de surmonter le temps et les défis que l\'avenir nous présentera.',
    'mission-p4': ', car nous pensons pouvoir aider méthodiquement les organisations à atteindre leurs objectifs et les nôtres.',
    'mission-we-are-here': 'Nous sommes là',
    'mission-p5': 'Nous aimons voir grandir nos projets et les personnes avec lesquelles nous travaillons.',
    
    // Chi siamo page
    'chi-siamo-text': 'McBalance est né comme spin-off des activités de conseil et de formation des associés fondateurs, qui depuis le début des années 2000 se sont consacrés aux thèmes de la Maintenance, de la Fiabilité et de la Sécurité dans le domaine industriel, tant au niveau national qu\'international.',
    'chi-siamo-card-description': 'Notre histoire et nos valeurs',
    
    // Overview page
    'overview-title': 'Notre méthode',
    'overview-paragraph-1': 'Les activités de McBalance visent à soutenir les entreprises dans l\'implémentation / amélioration / développement de nouveaux processus et se configurent donc, dans la plupart des cas, comme des activités de conseil, tant de direction que technique, et de formation, tant managériale que technique.',
    'overview-paragraph-2': 'Toutes les activités, tant à court qu\'à moyen-long terme, suivent les principes de gestion orientée vers l\'amélioration continue (voir ISO 9001) et incluent donc toujours une phase préliminaire de Planification et Organisation (PLAN) et des étapes ultérieures de contrôle et d\'"ajustement" pendant le développement ou l\'implémentation des services. En particulier, nous préférons consacrer le temps approprié au Project Management et suivre les projets de conseil avec un GANTT spécifique et des moments de révision / vérification et examen.',
    'overview-paragraph-3': 'Pour les secteurs Pharma et Food, dans toutes les phases des activités, les exigences GMP et/ou GXP sont prises en compte et plus généralement pour chaque activité nous garantissons ce qui est requis par les réglementations légales et les normes ISO, IEC, EN, UNI, CEI, règles techniques d\'entreprise et meilleures pratiques de référence.',
    
    // Settori page
    'settori-title': 'Nos domaines de compétence',
    'settori-description': 'McBalance opère avec une expérience consolidée dans les secteurs industriels suivants',
    'settore-pharma': 'Pharmaceutique',
    'settore-consumer': 'Consommation',
    'settore-food': 'Alimentaire',
    'settore-oil-gas': 'Pétrole et Gaz',
    'settore-medical': 'Médical',
    'settore-educations': 'Éducation',
    'settore-compliance': 'Conformité et Systèmes de Gestion',
    'settore-standards': 'Normes et Réglementation',
    
    // Servizi page
    'servizi-title': 'Nos services',
    'servizio-reliability': 'Fiabilité',
    'servizio-maintenance-management': 'Gestion de la Maintenance',
    'servizio-asset-management': 'Gestion des Actifs',
    'servizio-cmms-digitalization': 'CMMS et Digitalisation des Processus',
    'servizio-industrial-safety': 'Sécurité Industrielle',
    'servizio-management-systems': 'Systèmes de Gestion ISO 9001/45001',
    'servizio-training': 'Formation',
    
    // Reliability page
    'RELIABILITY': 'FIABILITÉ',
    'reliability': 'Fiabilité',
    'reliability-title': 'Fiabilité',
    'reliability-description': 'Nos activités d\'Ingénierie de Fiabilité visent à garantir la fiabilité des systèmes, améliorer les performances et réduire les coûts de maintenance.',
    'reliability-services-intro': 'Voici les principaux services que nous offrons :',
    'reliability-service-1': 'Études de Fiabilité FMEA / FMECA / PFMEA / HAZOP / ETA / PFOD',
    'reliability-service-2': 'Études RCM (Reliability Centre Maintenance)',
    'reliability-service-3': 'Résolution de Problèmes et Amélioration (RCA)',
    'reliability-service-4': 'Algorithmes pour la Gestion des Matériaux pour la Maintenance',
    'reliability-service-5': 'Systèmes pour la Mesure et le Monitoring des paramètres de fiabilité (MTTR, MDT, MTBF, MOTBF, Disponibilité, OEE, etc)',
    'reliability-service-6': 'Études de Fiabilité Humaine et Erreurs Humaines',
    'reliability-conclusion': 'Nos études et solutions sont conçues pour aider les organisations à améliorer continuellement leurs actifs et garantir la sécurité et l\'efficacité maximales.',
    
    // Maintenance Management page
    'MAINTENANCE_MANAGEMENT': 'GESTION DE LA MAINTENANCE',
    'maintenance-management': 'Gestion de la Maintenance',
    'maintenance-management-title': 'Gestion de la Maintenance',
    'maintenance-management-description': 'Nos activités de Gestion de la Maintenance visent à optimiser les processus de maintenance, améliorer l\'efficacité opérationnelle et réduire les coûts grâce à des stratégies innovantes.',
    'maintenance-management-services-intro': 'Voici les principaux services que nous offrons :',
    'maintenance-management-service-1': 'Audits de première et seconde partie (ISO 19011)',
    'maintenance-management-service-2': 'Analyse et refonte de l\'Organisation et des Processus',
    'maintenance-management-service-3': 'Plans de Maintenance',
    'maintenance-management-service-4': 'Outils pour la Gestion de la Maintenance Corrective (en panne)',
    'maintenance-management-service-5': 'Modèles pour la Gestion et l\'Optimisation des Pièces de Rechange',
    'maintenance-management-service-6': 'Projets TPM (Total Productive Maintenance)',
    'maintenance-management-service-7': 'Outils pour la Mesure et le Monitoring des Performances (KPI)',
    'maintenance-management-service-8': 'Modèles pour la Gestion des Compétences du Personnel',
    'maintenance-management-service-9': 'Modèles pour la Gestion du Budget',
    'maintenance-management-conclusion': 'Nos services de gestion de la maintenance sont conçus pour transformer les opérations de maintenance en un avantage concurrentiel stratégique.',
    
    // Asset Management page
    'ASSET_MANAGEMENT': 'GESTION DES ACTIFS',
    'asset-management': 'Gestion des Actifs',
    'asset-management-title': 'Gestion des Actifs',
    'asset-management-description': 'Nos activités de Gestion des Actifs visent à optimiser la gestion et le cycle de vie des actifs d\'entreprise, garantissant l\'efficacité opérationnelle et la conformité réglementaire.',
    'asset-management-services-intro': 'Voici les principaux services que nous offrons :',
    'asset-management-service-1': 'Développement et mise en œuvre de Registre des Actifs',
    'asset-management-service-2': 'Développement et mise en œuvre de Système de Gestion des Actifs ISO 55001',
    'asset-management-service-3': 'Analyse Critique des Actifs',
    'asset-management-service-4': 'Audits de première et seconde partie (ISO 19011)',
    'asset-management-conclusion': 'Nos services de gestion des actifs sont conçus pour maximiser la valeur des investissements et garantir la durabilité opérationnelle à long terme.',
    
    // CMMS & Process digitalization page
    'CMMS_DIGITALIZATION': 'CMMS ET DIGITALISATION DES PROCESSUS',
    'cmms-digitalization': 'CMMS et Digitalisation des Processus',
    'cmms-digitalization-title': 'CMMS et Digitalisation des Processus',
    'cmms-digitalization-description': 'Nos activités de digitalisation visent à moderniser les processus de maintenance grâce à l\'implémentation de systèmes CMMS avancés et de solutions logicielles innovantes.',
    'cmms-digitalization-services-intro': 'Voici les principaux services que nous offrons :',
    'cmms-digitalization-service-1': 'Développement d\'Apps pour la Maintenance (ex. Ticketing, gestion des pièces de rechange, etc)',
    'cmms-digitalization-service-2': 'Développement d\'Apps pour la Sécurité (ex. Near Miss, Gemba, Audit, etc)',
    'cmms-digitalization-service-3': 'Développement et/ou Support pour Applications logicielles pour la gestion de la Maintenance',
    'cmms-digitalization-conclusion': 'Nos solutions numériques transforment les processus traditionnels en systèmes efficaces, traçables et orientés vers l\'amélioration continue.',
    
    // Industrial Safety page
    'INDUSTRIAL_SAFETY': 'SÉCURITÉ INDUSTRIELLE',
    'industrial-safety': 'Sécurité Industrielle',
    'industrial-safety-title': 'Sécurité Industrielle',
    'industrial-safety-description': 'Nos activités de Sécurité Industrielle visent à garantir la sécurité maximale sur les lieux de travail grâce à des évaluations approfondies, une formation spécialisée et un conseil personnalisé.',
    'industrial-safety-services-intro': 'Voici les principaux services que nous offrons :',
    'industrial-safety-service-1': 'Évaluation des risques et documents pour la sécurité',
    'industrial-safety-service-2': 'Sécurité des Machines, Équipements de Travail et Installations',
    'industrial-safety-service-3': 'Analyse des processus productifs pour la sécurité',
    'industrial-safety-service-4': 'Support normatif et conformité',
    'industrial-safety-service-5': 'Formation sur la sécurité d\'entreprise',
    'industrial-safety-service-6': 'Audits internes de sécurité',
    'industrial-safety-service-7': 'Conseil personnalisé',
    'industrial-safety-conclusion': 'Nos services de sécurité industrielle sont conçus pour créer des environnements de travail sûrs, conformes aux réglementations et orientés vers la prévention.',
    
    // Management Systems page
    'MANAGEMENT_SYSTEMS': 'SYSTÈMES DE GESTION ISO 9001/45001',
    'management-systems': 'Systèmes de Gestion ISO 9001/45001',
    'management-systems-title': 'Systèmes de Gestion ISO 9001/45001',
    'management-systems-description': 'Nos activités sur les Systèmes de Gestion visent à soutenir les organisations dans l\'implémentation et le maintien de standards internationaux pour la qualité et la sécurité.',
    'management-systems-services-intro': 'Voici les principaux services que nous offrons :',
    'management-systems-service-1': 'Développement et mise en œuvre de Systèmes de Gestion selon ISO 9001/14001/45001',
    'management-systems-service-2': 'Développement et mise en œuvre de Systèmes de Gestion pour l\'Égalité des Sexes selon UNI/PdR 125',
    'management-systems-conclusion': 'Nos services pour les systèmes de gestion garantissent la conformité réglementaire, l\'amélioration continue et l\'excellence opérationnelle.',
    
    // Training page
    'TRAINING': 'FORMATION',
    'training': 'Formation',
    'training-title': 'Formation',
    'training-description': 'Nos activités de Formation visent à développer les compétences du personnel grâce à des cours spécialisés, des certifications professionnelles et des parcours formatifs personnalisés.',
    'training-services-intro': 'Voici les principaux services que nous offrons :',
    'training-service-1': 'Cours de formation pour la Qualification du Personnel de Maintenance selon le standard UNI EN 15628 : Spécialiste de Maintenance (Niveau 1), Superviseur/Ingénieur de Maintenance (Niveau 2), Responsable de Maintenance (Niveau 3)',
    'training-service-2': 'Cours de formation en Travaux et Sécurité Électrique : PES/PAV/"PEI" (CEI 11-27), Maintenance de Cabines (CEI 78-17), Arc Flash (NFPA 70E)',
    'training-service-3': 'Cours de formation en Équipements et Machines : Directive Machines, Systèmes de Levage',
    'training-service-4': 'Cours de formation "Human Reliability and Human Errors"',
    'training-conclusion': 'Nos programmes de formation sont conçus pour développer des compétences techniques avancées et garantir la croissance professionnelle du personnel.',
    
    // Footer
    'footer-text': '© 2022 McBalance. Tous droits réservés.'
  },
  de: {
    // Navbar
    'chi-siamo': 'Über uns',
    'cosa-facciamo': 'Was wir tun',
    'nostre-competenze': 'Unsere Expertise',
    'carriere': 'Karrieren',
    
    // Dropdown Chi siamo
    'nostra-storia': 'Unsere Geschichte',
    
    // Dropdown Cosa facciamo
    'overview': 'Überblick',
    'settori': 'Branchen',
    'servizi': 'Dienstleistungen',
    'nostri-servizi': 'Unsere Dienstleistungen',
    'servizi-description': 'Innovative Lösungen für Unternehmenswachstum',
    
    // Dropdown Competenze
    'competenze-tecniche': 'Technische Fähigkeiten',
    'trasformazione-digitale': 'Digitale Transformation',
    'sostenibilita': 'Nachhaltigkeit',
    
    // Dropdown Carriere
    'opportunita-lavoro': 'Stellenangebote',
    'stage-tirocini': 'Praktika',
    'crescita-professionale': 'Berufliche Entwicklung',
    
    // Hero Section
    'hero-title': 'Wir helfen Ihnen, in die Zukunft zu blicken!',
    'hero-subtitle': 'Denken, entwickeln, schaffen, wachsen, verändern und neue Herausforderungen in Gleichgewicht und Harmonie mit den Elementen angehen.',
    
    // Mission Section (Homepage)
    'mission-title': 'Unsere Mission',
    'mission-p1': 'entstand, um professionelle Aktivitäten zu schaffen, die auf Innovation und kontinuierliche Verbesserung ausgerichtet sind.',
    'mission-p2': 'Der Ansatz zur Entwicklung von Ideen und Projekten basiert auf zwei grundlegenden Konzepten. Das erste ist das, verstanden als kontinuierliche Suche nach einem Zustand, der Harmonie zwischen den verschiedenen Elementen eines Projekts gewährleistet. Das zweite ist das, verstanden als kontinuierliche Suche nach dem Teilen und der Integration von Inspirationen.',
    'mission-equilibrium': 'GLEICHGEWICHT',
    'mission-network': 'NETZWERK',
    'mission-p3': 'Die Werte, die unserer Arbeitsweise zugrunde liegen, sind unsere Stärke, die es uns ermöglicht, Zeit und die Herausforderungen zu überwinden, die uns die Zukunft stellen wird.',
    'mission-p4': ', weil wir denken, dass wir Organisationen methodisch dabei helfen können, ihre und unsere Ziele zu erreichen.',
    'mission-we-are-here': 'Wir sind da',
    'mission-p5': 'Wir sehen gerne unsere Projekte und die Menschen, mit denen wir arbeiten, wachsen.',
    
    // Chi siamo page
    'chi-siamo-text': 'McBalance entstand als Spin-off der Beratungs- und Ausbildungsaktivitäten der Gründungspartner, die sich seit Anfang der 2000er Jahre den Themen Wartung, Zuverlässigkeit und Sicherheit im industriellen Bereich sowohl national als auch international widmen.',
    'chi-siamo-card-description': 'Unsere Geschichte und unsere Werte',
    
    // Overview page
    'overview-title': 'Unsere Methode',
    'overview-paragraph-1': 'Die Aktivitäten von McBalance zielen darauf ab, Unternehmen bei der Implementierung / Verbesserung / Entwicklung neuer Prozesse zu unterstützen und konfigurieren sich daher in den meisten Fällen als Beratungsaktivitäten, sowohl Management- als auch technische, und Schulungen, sowohl Management- als auch technische.',
    'overview-paragraph-2': 'Alle Aktivitäten, sowohl kurz- als auch mittel-langfristige, folgen den Prinzipien des kontinuierlichen verbesserungsorientierten Managements (siehe ISO 9001) und umfassen daher immer eine vorläufige Planungs- und Organisationsphase (PLAN) und nachfolgende Kontroll- und "Anpassungs"-Schritte während der Entwicklung oder Implementierung von Dienstleistungen. Insbesondere bevorzugen wir es, die angemessene Zeit dem Projektmanagement zu widmen und Beratungsprojekte mit einem spezifischen GANTT und Überprüfungs- / Verifizierungs- und Prüfungsmomente zu verfolgen.',
    'overview-paragraph-3': 'Für die Pharma- und Food-Sektoren werden in allen Phasen der Aktivitäten GMP- und/oder GXP-Anforderungen berücksichtigt und allgemein für jede Aktivität garantieren wir, was von gesetzlichen Vorschriften und ISO-, IEC-, EN-, UNI-, CEI-Standards, Unternehmenstechnischen Regeln und Referenz-Best-Practices gefordert wird.',
    
    // Settori page
    'settori-title': 'Unsere Kompetenzbereiche',
    'settori-description': 'McBalance arbeitet mit konsolidierter Erfahrung in den folgenden Industriesektoren',
    'settore-pharma': 'Pharma',
    'settore-consumer': 'Konsumgüter',
    'settore-food': 'Lebensmittel',
    'settore-oil-gas': 'Öl & Gas',
    'settore-medical': 'Medizin',
    'settore-educations': 'Bildung',
    'settore-compliance': 'Compliance & Management-Systeme',
    'settore-standards': 'Standards & Regulierung',
    
    // Servizi page
    'servizi-title': 'Unsere Dienstleistungen',
    'servizio-reliability': 'Zuverlässigkeit',
    'servizio-maintenance-management': 'Wartungsmanagement',
    'servizio-asset-management': 'Anlagenmanagement',
    'servizio-cmms-digitalization': 'CMMS & Prozessdigitalisierung',
    'servizio-industrial-safety': 'Industriesicherheit',
    'servizio-management-systems': 'Managementsysteme ISO 9001/45001',
    'servizio-training': 'Schulung',
    
    // Reliability page
    'RELIABILITY': 'ZUVERLÄSSIGKEIT',
    'reliability': 'Zuverlässigkeit',
    'reliability-title': 'Zuverlässigkeit',
    'reliability-description': 'Unsere Zuverlässigkeitstechnik-Aktivitäten zielen darauf ab, die Systemzuverlässigkeit zu gewährleisten, die Leistung zu verbessern und die Wartungskosten zu reduzieren.',
    'reliability-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'reliability-service-1': 'Zuverlässigkeitsstudien FMEA / FMECA / PFMEA / HAZOP / ETA / PFOD',
    'reliability-service-2': 'RCM-Studien (Reliability Centre Maintenance)',
    'reliability-service-3': 'Problemlösung und Verbesserung (RCA)',
    'reliability-service-4': 'Algorithmen für Materialmanagement für Wartung',
    'reliability-service-5': 'Systeme zur Messung und Überwachung von Zuverlässigkeitsparametern (MTTR, MDT, MTBF, MOTBF, Verfügbarkeit, OEE, etc)',
    'reliability-service-6': 'Studien zu menschlicher Zuverlässigkeit und menschlichen Fehlern',
    'reliability-conclusion': 'Unsere Studien und Lösungen sind darauf ausgelegt, Organisationen dabei zu helfen, ihre Anlagen kontinuierlich zu verbessern und maximale Sicherheit und Effizienz zu gewährleisten.',
    
    // Maintenance Management page
    'MAINTENANCE_MANAGEMENT': 'WARTUNGSMANAGEMENT',
    'maintenance-management': 'Wartungsmanagement',
    'maintenance-management-title': 'Wartungsmanagement',
    'maintenance-management-description': 'Unsere Wartungsmanagement-Aktivitäten zielen darauf ab, Wartungsprozesse zu optimieren, die operative Effizienz zu verbessern und Kosten durch innovative Strategien zu reduzieren.',
    'maintenance-management-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'maintenance-management-service-1': 'Erst- und Zweitparteien-Audits (ISO 19011)',
    'maintenance-management-service-2': 'Analyse und Neugestaltung von Organisation und Prozessen',
    'maintenance-management-service-3': 'Wartungspläne',
    'maintenance-management-service-4': 'Werkzeuge für das Management korrektiver Wartung (bei Ausfall)',
    'maintenance-management-service-5': 'Modelle für Ersatzteilmanagement und -optimierung',
    'maintenance-management-service-6': 'TPM-Projekte (Total Productive Maintenance)',
    'maintenance-management-service-7': 'Werkzeuge für Leistungsmessung und -überwachung (KPI)',
    'maintenance-management-service-8': 'Modelle für Personalkompetenzverwaltung',
    'maintenance-management-service-9': 'Budget-Management-Modelle',
    'maintenance-management-conclusion': 'Unsere Wartungsmanagement-Dienstleistungen sind darauf ausgelegt, Wartungsoperationen in einen strategischen Wettbewerbsvorteil zu verwandeln.',
    
    // Asset Management page
    'ASSET_MANAGEMENT': 'ANLAGENMANAGEMENT',
    'asset-management': 'Anlagenmanagement',
    'asset-management-title': 'Anlagenmanagement',
    'asset-management-description': 'Unsere Anlagenmanagement-Aktivitäten zielen darauf ab, die Verwaltung und den Lebenszyklus von Unternehmensanlagen zu optimieren und operative Effizienz sowie Regelkonformität zu gewährleisten.',
    'asset-management-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'asset-management-service-1': 'Entwicklung und Implementierung von Anlagenregister',
    'asset-management-service-2': 'Entwicklung und Implementierung von Anlagenmanagement-System ISO 55001',
    'asset-management-service-3': 'Kritische Anlagenanalyse',
    'asset-management-service-4': 'Erst- und Zweitparteien-Audits (ISO 19011)',
    'asset-management-conclusion': 'Unsere Anlagenmanagement-Dienstleistungen sind darauf ausgelegt, den Investitionswert zu maximieren und langfristige operative Nachhaltigkeit zu gewährleisten.',
    
    // CMMS & Process digitalization page
    'CMMS_DIGITALIZATION': 'CMMS UND PROZESSDIGITALISIERUNG',
    'cmms-digitalization': 'CMMS und Prozessdigitalisierung',
    'cmms-digitalization-title': 'CMMS und Prozessdigitalisierung',
    'cmms-digitalization-description': 'Unsere Digitalisierungsaktivitäten zielen darauf ab, Wartungsprozesse durch die Implementierung fortschrittlicher CMMS-Systeme und innovativer Softwarelösungen zu modernisieren.',
    'cmms-digitalization-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'cmms-digitalization-service-1': 'Entwicklung von Wartungs-Apps (z.B. Ticketing, Ersatzteilmanagement, etc)',
    'cmms-digitalization-service-2': 'Entwicklung von Sicherheits-Apps (z.B. Near Miss, Gemba, Audit, etc)',
    'cmms-digitalization-service-3': 'Entwicklung und/oder Support für Softwareanwendungen für Wartungsmanagement',
    'cmms-digitalization-conclusion': 'Unsere digitalen Lösungen transformieren traditionelle Prozesse in effiziente, nachverfolgbare Systeme, die auf kontinuierliche Verbesserung ausgerichtet sind.',
    
    // Industrial Safety page
    'INDUSTRIAL_SAFETY': 'INDUSTRIESICHERHEIT',
    'industrial-safety': 'Industriesicherheit',
    'industrial-safety-title': 'Industriesicherheit',
    'industrial-safety-description': 'Unsere Industriesicherheitsaktivitäten zielen darauf ab, maximale Sicherheit am Arbeitsplatz durch gründliche Bewertungen, spezialisierte Schulungen und personalisierte Beratung zu gewährleisten.',
    'industrial-safety-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'industrial-safety-service-1': 'Risikobewertung und Sicherheitsdokumentation',
    'industrial-safety-service-2': 'Maschinensicherheit, Arbeitsgeräte und Anlagensicherheit',
    'industrial-safety-service-3': 'Analyse von Produktionsprozessen für Sicherheit',
    'industrial-safety-service-4': 'Normative Unterstützung und Compliance',
    'industrial-safety-service-5': 'Unternehmenssicherheitsschulung',
    'industrial-safety-service-6': 'Interne Sicherheitsaudits',
    'industrial-safety-service-7': 'Personalisierte Beratung',
    'industrial-safety-conclusion': 'Unsere Industriesicherheitsdienstleistungen sind darauf ausgelegt, sichere Arbeitsumgebungen zu schaffen, die den Vorschriften entsprechen und präventionsorientiert sind.',
    
    // Management Systems page
    'MANAGEMENT_SYSTEMS': 'MANAGEMENTSYSTEME ISO 9001/45001',
    'management-systems': 'Managementsysteme ISO 9001/45001',
    'management-systems-title': 'Managementsysteme ISO 9001/45001',
    'management-systems-description': 'Unsere Managementsystem-Aktivitäten zielen darauf ab, Organisationen bei der Implementierung und Aufrechterhaltung internationaler Standards für Qualität und Sicherheit zu unterstützen.',
    'management-systems-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'management-systems-service-1': 'Entwicklung und Implementierung von Managementsystemen nach ISO 9001/14001/45001',
    'management-systems-service-2': 'Entwicklung und Implementierung von Managementsystemen für Geschlechtergleichstellung nach UNI/PdR 125',
    'management-systems-conclusion': 'Unsere Managementsystem-Dienstleistungen gewährleisten Regelkonformität, kontinuierliche Verbesserung und operative Exzellenz.',
    
    // Training page
    'TRAINING': 'AUSBILDUNG',
    'training': 'Ausbildung',
    'training-title': 'Ausbildung',
    'training-description': 'Unsere Ausbildungsaktivitäten zielen darauf ab, Personalkompetenzen durch spezialisierte Kurse, berufliche Zertifizierungen und personalisierte Ausbildungswege zu entwickeln.',
    'training-services-intro': 'Hier sind die wichtigsten Dienstleistungen, die wir anbieten:',
    'training-service-1': 'Ausbildungskurse für Wartungspersonal-Qualifikation nach UNI EN 15628 Standard: Wartungsspezialist (Level 1), Wartungssupervisor/Ingenieur (Level 2), Wartungsmanager (Level 3)',
    'training-service-2': 'Ausbildungskurse in Elektroarbeiten und -sicherheit: PES/PAV/"PEI" (CEI 11-27), Unterstationswartung (CEI 78-17), Arc Flash (NFPA 70E)',
    'training-service-3': 'Ausbildungskurse in Ausrüstung und Maschinen: Maschinenrichtlinie, Hebesysteme',
    'training-service-4': 'Ausbildungskurse "Human Reliability and Human Errors"',
    'training-conclusion': 'Unsere Ausbildungsprogramme sind darauf ausgelegt, fortgeschrittene technische Fähigkeiten zu entwickeln und die berufliche Entwicklung des Personals zu gewährleisten.',
    
    // Footer
    'footer-text': '© 2022 McBalance. Alle Rechte vorbehalten.'
  }
};

export function TranslationProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('it');

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
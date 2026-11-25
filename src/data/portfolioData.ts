import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact,
  FaJava, FaPython, FaGitAlt, FaGithub,
  FaDatabase, FaProjectDiagram, FaSitemap,
} from 'react-icons/fa';
import {
  SiTypescript, SiSpringboot, SiDocker, SiMysql, SiMongodb,
  SiPostgresql, SiSupabase, SiScikitlearn,
} from 'react-icons/si';
import { TbChartDots3, TbChartLine } from 'react-icons/tb';
import { IconType } from 'react-icons';

export const personalInfo = {
  name: "KONAN KOUAKOU YVES YOXAN",
  firstName: "Yoxan",
  lastName: "KONAN KOUAKOU",
  title: "Développeur Full Stack Junior",
  subtitle: "Développeur Full Stack | Passionné d'Intelligence Artificielle | Big Data",
  tagline: "Je conçois et développe des solutions numériques modernes, performantes et adaptées aux besoins réels des utilisateurs.",
  email: "yoxankouakou@gmail.com",
  phone: "+225 0554751087",
  location: "Abidjan, Côte d'Ivoire",
  github: "https://github.com/Yoxan225",
  githubLabel: "github.com/Yoxan225",
  linkedin: "https://www.linkedin.com/in/yves-konan-0b9096297",
  linkedinLabel: "linkedin.com/in/yves-konan-0b9096297",
  cvName: "KONAN_KOUAKOU_YVES_YOXAN_CV.pdf",
};

export const aboutData = {
  description: "Titulaire d'une Licence en Génie Logiciel obtenue avec la mention Très Bien, je suis spécialisé dans la conception et le développement d'applications web. Je m'intéresse particulièrement à l'architecture logicielle, à l'intelligence artificielle et aux technologies permettant de créer des solutions numériques innovantes. Rigoureux et curieux, j'aime relever des défis techniques et transformer des besoins concrets en applications fiables et évolutives.",
  interests: [
    {
      title: "Développement Full Stack",
      description: "Conception et développement d'applications web"
    },
    {
      title: "Intelligence Artificielle",
      description: "Exploration des applications de l'IA"
    },
    {
      title: "Machine Learning",
      description: "Analyse de données et modèles prédictifs"
    },
    {
      title: "Génie Logiciel",
      description: "Conception, architecture et qualité logicielle"
    },
    {
      title: "Cloud Computing",
      description: "Déploiement et gestion d'applications"
    },
    {
      title: "DevOps",
      description: "Automatisation et intégration continue"
    },
  ],
};

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsCategories: SkillCategory[] = [
  {
    category: "Développement Web",
    icon: "globe",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    category: "Développement Logiciel",
    icon: "code",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "UML", icon: FaProjectDiagram, color: "#6366F1" },
      { name: "MERISE", icon: FaSitemap, color: "#8B5CF6" },
    ],
  },
  {
    category: "Intelligence Artificielle",
    icon: "brain",
    skills: [
      { name: "Machine Learning", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Régression Logistique", icon: TbChartLine, color: "#10B981" },
      { name: "Clustering", icon: TbChartDots3, color: "#F59E0B" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#6E7681" },
    ],
  },
  {
    category: "Bases de Données",
    icon: "database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Oracle Database", icon: FaDatabase, color: "#F80000" },
    ],
  },
];

export const technologyCount = skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

export const projects = [
  {
    id: "si-pser",
    title: "SI-PSER",
    subtitle: "Plateforme de planification, suivi-évaluation et reporting du Plan d'Action Annuel",
    description: "SI-PSER est une plateforme numérique développée pour la DEPSES du Ministère de l'Environnement et de la Transition Écologique, permettant de planifier, suivre et rapporter l'exécution du Plan d'Action Annuel issu du PND 2026-2030.",
    longDescription: "Réalisé dans le cadre de mon projet de fin de cycle Licence, SI-PSER remplace un suivi reposant sur des fichiers Word, Excel et des échanges par courrier par un système d'information centralisé, validé et traçable. La plateforme s'articule autour de six modules et de quatre profils d'utilisateurs (Super Administrateur, Administrateur DEPSES, Directeur, Point Focal). Architecture trois niveaux : interface React/TypeScript, API REST Spring Boot sécurisée par rôle, persistance PostgreSQL versionnée avec Flyway, le tout conteneurisé avec Docker. Projet conduit selon le Processus Unifié et Scrum, en huit sprints, avec modélisation UML et une suite de 332 tests automatisés (JUnit 5, Mockito, Testcontainers). Proposé comme projet pilote, SI-PSER a été validé par la Direction et attend la validation finale de la haute hiérarchie du ministère ainsi que le financement de son déploiement.",
    technologies: ["React", "TypeScript", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "Docker", "JUnit 5"],
    features: [
      "Authentification et gestion des accès par rôle",
      "Administration des structures et des utilisateurs",
      "Référentiel stratégique du PND et codification automatique",
      "Planification des activités, indicateurs, cibles et budgets",
      "Saisie bimestrielle des réalisations et circuit de validation",
      "Tableaux de bord, calcul des taux d'exécution et rapports de suivi",
    ],
    images: [
      "/assets/images/projects/sipser/1.webp",
      "/assets/images/projects/sipser/2.webp",
      "/assets/images/projects/sipser/3.webp",
      "/assets/images/projects/sipser/4.webp",
      "/assets/images/projects/sipser/5.webp",
    ],
    placeholder: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Projet de fin de cycle",
    badgeColor: "primary",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "gescourrier",
    title: "GESCOURRIER CI",
    subtitle: "Plateforme multi-postes de gestion électronique du courrier administratif",
    description: "GESCOURRIER CI est une application de gestion électronique des courriers arrivés et départ, conçue de ma propre initiative pour le service courrier de la DEPSES (MINETE), où tout était enregistré à la main. Un seul poste héberge l'application ; les autres y accèdent depuis un simple navigateur sur le réseau local.",
    longDescription: "Projet né pendant mon stage : lors de ma semaine d'immersion au service courrier, j'ai constaté que les enregistrements se faisaient dans un cahier. J'ai conçu et développé l'application de ma propre initiative, puis l'ai présentée au service ; elle a été validée par le Directeur, installée sur les postes, et elle est aujourd'hui utilisée au quotidien. J'en ai assuré le développement de A à Z, de la première version à la version 2 actuelle. La plateforme remplace le registre papier par un système traçable et partagé. L'application de bureau (Electron) héberge à la fois l'interface locale et une API REST Express accessible aux autres postes du réseau : aucun client à installer ailleurs qu'un navigateur. Les données résident dans une base SQLite locale, avec gestion documentaire, journalisation de chaque action sensible (utilisateur, date, adresse IP) et quatre rôles aux permissions distinctes. Lors du passage à la version 2, un import idempotent a permis de reprendre l'intégralité des données de la version 1 sans perte ni doublon.",
    technologies: ["React", "Electron", "Express", "SQLite", "JWT", "Tailwind CSS", "Recharts"],
    features: [
      "Courriers arrivés et départ : saisie, recherche, traitement en lot",
      "Gestion documentaire avec prévisualisation PDF et image",
      "Quatre rôles et permissions (administrateur, directeur, secrétaire, consultation)",
      "Archivage en dossiers et restauration",
      "Tableau de bord et graphiques de volumétrie",
      "Historique complet des actions pour la traçabilité",
      "Exports PDF, Excel et CSV avec filtre de période",
      "Accès multi-postes en réseau local, sans installation client",
    ],
    images: [
      "/assets/images/projects/gescourrier/1.webp",
      "/assets/images/projects/gescourrier/2.webp",
      "/assets/images/projects/gescourrier/3.webp",
      "/assets/images/projects/gescourrier/4.webp",
      "/assets/images/projects/gescourrier/5.webp",
      "/assets/images/projects/gescourrier/66.webp",
      "/assets/images/projects/gescourrier/7.webp",


    ],
    placeholder: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Projet de stage",
    badgeColor: "accent",
    github: "",
    demo: "",
    featured: true,
  },
/*
  {
    id: "techinnova",
    title: "TechInnova",
    subtitle: "Plateforme collaborative de gestion de projets R&D",
    description: "TechInnova est une plateforme web complète permettant de gérer collaborativement des projets de recherche et développement. Elle offre une suite d'outils pour la gestion de projets, la documentation, le workflow collaboratif, la gestion des idées et des tâches.",
    longDescription: "TechInnova a été conçu pour répondre aux besoins des équipes de R&D nécessitant un espace centralisé pour collaborer efficacement. La plateforme intègre un système de gestion de projets avec Kanban, un module documentaire avancé, un système de workflow personnalisable, et des outils de brainstorming.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML5"],
    features: [
      "Gestion de projets avec tableaux Kanban",
      "Système de gestion documentaire",
      "Workflow collaboratif en temps réel",
      "Brainstorming et gestion des idées",
      "Suivi des tâches et milestones",
      "Tableaux de bord analytiques",
    ],
    images: [
      "/assets/images/projects/techinnova/1.webp",
      "/assets/images/projects/techinnova/2.webp",
      "/assets/images/projects/techinnova/3.webp",
    ],
    placeholder: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Projet académique",
    badgeColor: "primary",
    github: "",
    demo: "",
    featured: true,
  },*/
  {
    id: "sinistreanalyser",
    title: "SINISTRE ANALYSER",
    subtitle: "Analyse NLP et clustering de 4 481 déclarations de sinistres automobiles",
    description: "SINISTRE ANALYSER analyse automatiquement les circonstances décrites dans des déclarations de sinistres automobiles : classification par catégorie, regroupement par K-Means et recherche des déclarations les plus similaires.",
    longDescription: "À partir d'un dataset de 4 481 déclarations textuelles, j'ai construit une chaîne complète d'analyse NLP. Les textes sont nettoyés puis vectorisés en TF-IDF (3 000 features, unigrammes et bigrammes). Le nombre de clusters a été choisi par consensus de quatre méthodes (Coude, Silhouette, Davies-Bouldin et GAP Statistic), qui retient K = 8. Les clusters K-Means sont visualisés en 2D par ACP (PCA), et une classification par règles métier du domaine de l'assurance répartit les déclarations en 7 catégories (collision, bris de glace, stationnement, incendie, projectile, vol, autre). La concordance entre règles métier et K-Means atteint 61,5 %. Un moteur de similarité cosinus retrouve, pour toute nouvelle déclaration, les cas les plus proches déjà enregistrés. Le tout est présenté dans un tableau de bord web.",
    technologies: ["Python", "Flask", "scikit-learn", "Matplotlib", "TF-IDF", "K-Means", "PCA"],
    features: [
      "Nettoyage NLP et vectorisation TF-IDF (3 000 features, uni et bigrammes)",
      "Choix du K optimal par consensus de 4 méthodes (Coude, Silhouette, Davies-Bouldin, GAP) → K = 8",
      "Clustering K-Means et visualisation 2D par ACP avec centroïdes",
      "Classification par règles métier en 7 catégories (61,5 % de concordance avec K-Means)",
      "Recherche de déclarations similaires par similarité cosinus",
      "Tableau de bord interactif, analyse et enregistrement de nouvelles déclarations",
      "Ré-entraînement du modèle depuis l'interface",
    ],
    images: [
      "/assets/images/projects/sinistre/1.webp",
      "/assets/images/projects/sinistre/2.webp",
      "/assets/images/projects/sinistre/3.webp",
      "/assets/images/projects/sinistre/4.webp",
    ],
    placeholder: "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Projet Data",
    badgeColor: "accent",
    github: "https://github.com/Yoxan225/ANALYSE-DE-SINISTRES",
    demo: "",
    featured: true,
  },
  {
    id: "sgde",
    title: "SGDE",
    subtitle: "Système de gestion documentaire distribué en microservices",
    description: "Projet d'équipe : un système de gestion documentaire distribué en microservices. J'ai développé le backend de deux microservices Spring Boot : le versioning des documents et le stockage des fichiers.",
    longDescription: "SGDE est un système de gestion documentaire distribué, réalisé en équipe selon une architecture en microservices. J'ai pris en charge le backend de deux d'entre eux. Le service de versioning gère l'historique des documents : création d'une nouvelle version, consultation des versions d'un document, suppression des anciennes versions et restauration d'une version antérieure. Le service de stockage gère les dossiers et les documents via une API REST complète, ainsi que l'envoi, le téléchargement et la suppression des fichiers dans Supabase Storage. Les deux services suivent une architecture en couches (contrôleurs, services, repositories, DTO et mappers) avec Spring Data JPA et PostgreSQL. Le reste du système a été développé par les autres membres de l'équipe.",
    technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Supabase Storage", "Gradle"],
    features: [
      "Microservice de versioning : créer, lister, supprimer et restaurer des versions",
      "Microservice de stockage : API REST des dossiers et des documents",
      "Envoi, téléchargement et suppression de fichiers dans Supabase Storage",
      "Architecture en couches : contrôleurs, services, repositories, DTO et mappers",
      "Persistance PostgreSQL avec Spring Data JPA",
    ],
    images: [] as string[],
    placeholder: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Backend · Microservices",
    badgeColor: "primary",
    github: "",
    demo: "",
    links: [
      { label: "Service Versioning", url: "https://github.com/Yoxan225/MicroServiceVersionning" },
      { label: "Service Stockage", url: "https://github.com/Yoxan225/MicroServiceStockage" },
      { label: "Projet complet", url: "https://github.com/Nathan-Josue/sgde" },
    ],
    featured: true,
  },
  {
    id: "oracle",
    title: "ADMINISTRATION ORACLE",
    subtitle: "Base Oracle 19c : accès distant, sauvegarde et restauration avec RMAN",
    description: "Projet de Base de données avancée : j'ai installé une base Oracle 19c accessible depuis un poste distant, puis je l'ai sauvegardée avec RMAN et restaurée intégralement sur une autre machine.",
    longDescription: "Réalisé dans le cadre du cours de Base de données avancée, ce projet couvre le cycle complet d'administration d'une base Oracle 19c sous Windows. D'abord, la création de la base, d'un tablespace, d'un utilisateur et de ses privilèges, puis la configuration réseau (ouverture du port 1521, listener.ora côté serveur, tnsnames.ora côté client) pour s'y connecter depuis un autre poste. Ensuite, la sauvegarde complète avec RMAN : fichiers de données, fichier de contrôle et SPFILE. Enfin, la restauration sur une seconde machine : PFILE minimal, démarrage en NOMOUNT, restauration du fichier de contrôle, catalogage des sauvegardes, restauration des fichiers de données avec redirection des chemins, déplacement des redo logs et ouverture en RESETLOGS. La base restaurée s'ouvre en lecture-écriture, avec tous ses fichiers aux bons emplacements.",
    technologies: ["Oracle Database 19c", "SQL*Plus", "RMAN", "Listener / TNS", "Windows"],
    features: [
      "Création de la base, d'un tablespace, d'un utilisateur et de ses privilèges",
      "Accès distant : port 1521, listener.ora et tnsnames.ora",
      "Sauvegarde RMAN : fichiers de données, fichier de contrôle et SPFILE",
      "Restauration sur une autre machine : NOMOUNT, contrôle, catalogage, redirection des fichiers",
      "Déplacement des redo logs et ouverture en RESETLOGS",
      "Vérification finale : base ouverte en READ WRITE",
    ],
    images: [
      "/assets/images/projects/oracle/1.webp",
      "/assets/images/projects/oracle/2.webp",
      "/assets/images/projects/oracle/3.webp",
      "/assets/images/projects/oracle/4.webp",
    ],
    placeholder: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Administration BD",
    badgeColor: "warning",
    github: "",
    demo: "",
    note: "Rapport technique disponible sur demande",
    featured: true,
  },
  {
    id: "amourauthentique",
    title: "AMOUR AUTHENTIQUE",
    subtitle: "Plateforme de rencontres dédiée à la communauté africaine",
    description: "AMOUR AUTHENTIQUE est une plateforme de rencontres en ligne pensée pour la communauté africaine. J'ai été chargé du développement de l'ensemble du frontend de l'application.",
    longDescription: "Au sein de l'équipe, j'ai pris en charge toute la partie frontend : conception des pages, des composants réutilisables et de la navigation, avec React et TypeScript. L'interface couvre le parcours complet de l'utilisateur, de la page d'accueil et de l'inscription jusqu'à la découverte de profils, la messagerie et l'espace Storytime où les membres partagent leurs histoires. Le projet est en cours de finalisation avant sa mise en ligne.",
    technologies: ["React", "TypeScript"],
    features: [
      "Page d'accueil, inscription et connexion",
      "Découverte de profils",
      "Messagerie entre membres",
      "Espace Storytime : publication d'histoires, réactions et commentaires",
      "Activités et gestion du profil",
      "Interface responsive",
    ],
    images: [
      "/assets/images/projects/amourauthentique/1.webp",
      "/assets/images/projects/amourauthentique/2.webp",
      "/assets/images/projects/amourauthentique/3.webp",
      "/assets/images/projects/amourauthentique/4.webp",
    ],
    placeholder: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Frontend",
    badgeColor: "success",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "bataillenavale",
    title: "BATAILLE NAVALE",
    subtitle: "Jeu de bataille navale : POO en Python et interface web React",
    description: "BATAILLE NAVALE est un jeu de combat naval contre l'ordinateur. Le projet m'a d'abord permis d'appliquer la programmation orientée objet en Python, puis de lui donner une interface web moderne avec React.",
    longDescription: "La logique du jeu (navires, grilles, tirs, tours de jeu) est modélisée en Python selon les principes de la programmation orientée objet : classes, encapsulation et responsabilités bien séparées. Une interface web React a ensuite été ajoutée pour rendre le jeu agréable à utiliser : flotte du joueur, grille ennemie cliquable, statut des navires et journal de combat.",
    technologies: ["Python", "POO", "React"],
    features: [
      "Logique du jeu modélisée en programmation orientée objet",
      "Flotte de cinq navires (porte-avions, croiseur, contre-torpilleur, sous-marin, torpilleur)",
      "Partie contre l'ordinateur, tour par tour",
      "Grilles de jeu interactives (touché / raté)",
      "Statut des flottes et journal de combat",
      "Interface web moderne",
    ],
    images: [
      "/assets/images/projects/bataillenavale/1.webp",
      "/assets/images/projects/bataillenavale/2.webp",
      "/assets/images/projects/bataillenavale/3.webp",
      "/assets/images/projects/bataillenavale/4.webp",
    ],
    placeholder: "https://images.pexels.com/photos/7144241/pexels-photo-7144241.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Python & React",
    badgeColor: "warning",
    github: "https://github.com/Yoxan225/Bataille-navale",
    demo: "",
    featured: false,
  },
];

export const stats = [
  { value: projects.length, suffix: "", label: "Projets réalisés" },
  { value: technologyCount, suffix: "", label: "Technologies" },
  { value: 332, suffix: "", label: "Tests automatisés" },
  { value: 2, suffix: "", label: "Projets en milieu pro" },
];

export const timeline = [
  {
    year: "Étape 01",
    title: "Fondamentaux du développement",
    description: "Construction de solides bases en programmation, algorithmique et résolution de problèmes. Apprentissage des méthodes permettant de concevoir des solutions informatiques.",
    icon: "code",
    color: "primary",
  },
  {
    year: "Étape 02",
    title: "Conception d'applications Web",
    description: "Développement d'une approche Full Stack avec la création d'interfaces interactives, la gestion des données et la mise en place de fonctionnalités côté serveur.",
    icon: "monitor",
    color: "accent",
  },
  {
    year: "Étape 03",
    title: "Ingénierie & Architecture logicielle",
    description: "Approfondissement de la conception logicielle, de la structuration des applications, des API REST, de la gestion des bases de données et des bonnes pratiques de développement.",
    icon: "layers",
    color: "success",
  },
  {
    year: "Étape 04",
    title: "Intelligence Artificielle & Data",
    description: "Exploration de l'Intelligence Artificielle, du Machine Learning et de l'analyse de données pour développer des solutions intelligentes.",
    icon: "brain",
    color: "warning",
  },
  {
    year: "Aujourd'hui",
    title: "Construire des solutions à impact",
    description: "Mettre mes compétences au service de projets concrets, continuer à apprendre et évoluer vers la conception de solutions numériques innovantes et performantes.",
    icon: "target",
    color: "primary",
  },
  {
    year: "Prochain objectif",
    title: "Formation en Big Data",
    description: "Approfondir mes connaissances en Big Data, me former aux technologies du traitement des données massives et développer des compétences en ingénierie des données.",
    icon: "database",
    color: "accent",
    isObjective: true,
  },
];


export const experiences = [
  {
    role: "Stagiaire Développeur Logiciel",
    organization: "DEPSES / MINETE",
    organizationFull: "Direction des Études, de la Planification, du Suivi-Évaluation et des Statistiques — Ministère de l'Environnement et de la Transition Écologique",
    period: "Juillet – Novembre 2026",
    duration: "5 mois",
    type: "Stage",

    highlights: [
      {
        title: "GESCOURRIER CI — Une initiative devenue un outil de travail",
        story: "Lors de mon immersion au sein des différents services, j'ai constaté que la gestion du courrier reposait essentiellement sur des registres papier. Face à ce besoin, j'ai pris l'initiative de concevoir une application de gestion électronique du courrier. Présentée à la Direction et validée, la solution a ensuite été installée sur les postes du service courrier. J'ai également assuré la formation des utilisateurs et leur accompagnement à la prise en main.",
        results: [
          "Digitalisation de l'enregistrement et du suivi du courrier",
          "Solution validée par la Direction",
          "Déploiement effectif au sein du service courrier",
          "Formation et accompagnement des utilisateurs"
        ],
      },
      {
        title: "SI-PSER — Conception d'un système d'information de suivi-évaluation",
        story: "Dans le cadre de mon projet de fin de cycle, j'ai conçu et développé SI-PSER, une plateforme destinée à améliorer la planification, le suivi-évaluation et le reporting du Plan d'Action Annuel du ministère. Le projet répond aux limites d'un suivi reposant sur des fichiers Word, Excel et des échanges de courriers. Il propose une gestion centralisée des activités, des indicateurs, des budgets et des réalisations, avec un circuit de validation, des tableaux de bord et des rapports. J'ai assuré l'ensemble du processus, de l'analyse des besoins à l'implémentation, en m'appuyant sur UML, le Processus Unifié et Scrum. La solution a reçu un accord de la Direction pour une expérimentation pilote et reste en attente de la validation hiérarchique finale et des moyens nécessaires à son déploiement.",
        results: [
          "6 modules fonctionnels et 4 profils d'utilisateurs",
          "8 sprints de développement avec Scrum",
          "Architecture Full Stack : React, Spring Boot et PostgreSQL",
          "Projet pilote présenté et validé par la Direction"
        ],
      },
    ],

    sections: [
      {
        title: "Développement de solutions",
        icon: "code",
        items: [
          "Analyse des besoins, conception et développement d'applications adaptées aux besoins des services",
          "Développement et évolution de GESCOURRIER CI, de la première version à la version 2",
          "Conception et implémentation d'une plateforme de suivi-évaluation avec une architecture Full Stack",
          "Réalisation de tests fonctionnels et vérification des fonctionnalités développées"
        ],
      },
      {
        title: "Accompagnement des utilisateurs",
        icon: "users",
        items: [
          "Installation et mise en service des solutions développées",
          "Formation et assistance des utilisateurs dans la prise en main des applications",
          "Accompagnement du personnel dans l'utilisation des outils informatiques"
        ],
      },
      {
        title: "Assistance et maintenance informatique",
        icon: "wrench",
        items: [
          "Immersion et découverte des processus de travail des différents services",
          "Participation aux ateliers et rédaction de comptes rendus",
          "Interventions de maintenance et assistance technique"
        ],
      },
    ],

    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Express",
      "SQLite",
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "Git",
      "GitHub",
      "UML",
      "Scrum"
    ],
  },
];

export const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Expérience", href: "#experience" },
  { name: "Parcours", href: "#parcours" },
  { name: "Contact", href: "#contact" },
];

export const aiResponses = {
  greeting: "Bonjour ! Je suis Yoxan AI, l'assistant virtuel de Yoxan. Comment puis-je vous aider à découvrir son profil ?",
  skills: [
    "Yoxan travaille avec plusieurs technologies :",
    "- Développement Web : HTML5, CSS3, JavaScript, TypeScript, React, PHP, Spring Boot",
    "- Développement Logiciel : Java, Python, UML, MERISE",
    "- Intelligence Artificielle : Machine Learning, régression logistique, clustering",
    "- Cloud & DevOps : Docker, Git, GitHub",
    "- Bases de Données : MySQL, PostgreSQL, MongoDB, Supabase, Oracle",
  ].join("\n"),
  projects: [
    "Voici les principaux projets de Yoxan :",
    "",
    "📊 SI-PSER - Suivi-évaluation du Plan d'Action Annuel (projet de fin de cycle)",
    "📬 GESCOURRIER CI - Gestion électronique du courrier administratif, conçue de A à Z en stage (V1 et V2)",
    "🚀 TechInnova - Gestion collaborative de projets R&D",
    "🚗 SINISTRE ANALYSER - NLP et clustering K-Means (K = 8) sur 4 481 déclarations de sinistres",
    "🗂️ SGDE - Gestion documentaire distribuée : backend des microservices de versioning et de stockage (Spring Boot)",
    "🛢️ ADMINISTRATION ORACLE - Base Oracle 19c distante, sauvegarde et restauration avec RMAN",
    "❤️ AMOUR AUTHENTIQUE - Site de rencontres (frontend React/TypeScript)",
    "⚓ BATAILLE NAVALE - Jeu en Python orienté objet avec interface React",
  ].join("\n"),
  contact: [
    "Vous pouvez contacter Yoxan via :",
    `- Email : ${personalInfo.email}`,
    `- LinkedIn : ${personalInfo.linkedinLabel}`,
    `- GitHub : ${personalInfo.githubLabel}`,
    `- Téléphone : ${personalInfo.phone}`,
    `- Localisation : ${personalInfo.location}`,
  ].join("\n"),
  education: "Yoxan est titulaire d'une Licence en Génie Logiciel obtenue avec la mention Très Bien. De juillet à novembre 2026, il a effectué un stage de Stagiaire Informaticien en Génie Logiciel à la DEPSES du Ministère de l'Environnement et de la Transition Écologique. Il y a conçu, de sa propre initiative, GESCOURRIER CI (aujourd'hui utilisé par le service courrier), réalisé SI-PSER (son projet de fin de cycle), accompagné le personnel sur les outils informatiques, rédigé des comptes rendus d'ateliers et assuré de la maintenance. Son prochain objectif est de se former au Big Data et à l'ingénierie des données.",
  default: "Je suis là pour vous aider à découvrir le profil de Yoxan. Vous pouvez me poser des questions sur ses compétences, projets, parcours ou comment le contacter.",
};

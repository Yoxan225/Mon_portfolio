import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, 
  FaJava, FaPython,
  FaDocker, FaGitAlt, FaGithub,
  FaDatabase
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export const personalInfo = {
  name: "KONAN KOUAKOU YVES YOXAN",
  firstName: "Yoxan",
  lastName: "KONAN KOUAKOU",
  title: "Étudiant en Génie Logiciel",
  subtitle: "Développeur Full Stack | Passionné d'Intelligence Artificielle | Futur Ingénieur Logiciel",
  tagline: "Je transforme des idées ambitieuses en solutions logicielles intelligentes, performantes et centrées sur l'utilisateur.",
  email: "konany379@gmail.com",
  phone: "+225 05 54 75 10 87",
  location: "Abidjan, Côte d'Ivoire",
  github: "https://github.com/yoxan225",
  linkedin: "https://linkedin.com/in/yoxankonan",
  cvName: "KONAN_KOUAKOU_YVES_YOXAN_CV.pdf",
};

export const stats = [
  { value: 15, suffix: "+", label: "Projets réalisés" },
  { value: 20, suffix: "K+", label: "Lignes de code" },
  { value: 10, suffix: "+", label: "Technologies maîtrisées" },
  { value: 100, suffix: "%", label: "Passion" },
];

export const aboutData = {
  description: "Je suis étudiant en Licence 3 Génie Logiciel passionné par le développement d'applications modernes, les architectures logicielles distribuées, le cloud computing et l'intelligence artificielle. J'aime transformer des idées innovantes en produits numériques performants et utiles.",
  interests: [
    { title: "Développement Full Stack", description: "Création d'applications web complètes" },
    { title: "Intelligence Artificielle", description: "Machine Learning " },
    { title: "Big Data", description: "Analyse de données et prédictions" },
    { title: "Génie Logiciel", description: "Architectures et bonnes pratiques" },
    { title: "Cloud Computing", description: "Déploiement et scalabilité" },
    { title: "DevOps", description: "CI/CD et automatisation" },
  ],
};

interface Skill {
  name: string;
  level: number;
  icon: IconType | null;
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
      { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", level: 88, icon: FaJs, color: "#F7DF1E" },
      { name: "PHP", level: 80, icon: FaPhp, color: "#777BB4" },
      { name: "React", level: 85, icon: FaReact, color: "#61DAFB" },
      { name: "Spring boot", level: 75, icon: FaJava, color: "#FF2D20" },
    ],
  },
  {
    category: "Développement Logiciel",
    icon: "code",
    skills: [
      { name: "Java", level: 82, icon: FaJava, color: "#007396" },
      { name: "Python", level: 90, icon: FaPython, color: "#3776AB" },
      { name: "UML", level: 85, icon: null, color: "#6366F1" },
      { name: "MERISE", level: 80, icon: null, color: "#8B5CF6" },
    ],
  },
  {
    category: "Intelligence Artificielle",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: 78, icon: null, color: "#FF6F00" },
      { name: "Régression Logistique", level: 72, icon: null, color: "#10B981" },
      { name: "Clustering", level: 68, icon: null, color: "#F59E0B" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Docker", level: 80, icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", level: 65, icon: null, color: "#326CE5" },
      { name: "Git", level: 92, icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", level: 90, icon: FaGithub, color: "#181717" },
    ],
  },
  {
    category: "Bases de Données",
    icon: "database",
    skills: [
      { name: "MySQL", level: 88, icon: FaDatabase, color: "#4479A1" },
      { name: "MongoDB", level: 60, icon: FaDatabase, color: "#47A248" },
      { name: "PostgreSQL", level: 75, icon: FaDatabase, color: "#4169E1" },
      { name: "Supabase", level: 85, icon: FaDatabase, color: "#4169E1" },
      { name: "Oracle Database", level: 55, icon: FaDatabase, color: "#F05032" },
    ],
  },
];

export const projects = [
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
    images: [] as string[],
    badge: "Projet académique majeur",
    badgeColor: "primary",
    github: "https://github.com/yoxankonan/techinnova",
    demo: "#",
    featured: true,
  },
  {
    id: "detectwaste",
    title: "DetectWaste AI",
    subtitle: "Système intelligent de détection des déchets",
    description: "DetectWaste AI est un système innovant utilisant le Machine Learning pour détecter automatiquement les types de déchets à partir d'images, facilitant ainsi le tri sélectif et la gestion environnementale.",
    longDescription: "Ce projet d'intelligence artificielle utilise des techniques avancées de vision par ordinateur pour identifier et classifier différents types de déchets. Le modèle est entraîné sur un dataset diversifié et peut reconnaître plastiques, métaux, verre, papier et déchets organiques avec une précision élevée.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    features: [
      "Détection en temps réel par caméra",
      "Classification multi-classes de déchets",
      "API REST pour l'intégration",
      "Dashboard de suivi des détections",
      "Modèle optimisé pour edge devices",
      "Dataset annoté de 10 000+ images",
    ],
    images: [] as string[],
    badge: "Projet IA",
    badgeColor: "accent",
    github: "https://github.com/yoxankonan/detectwaste",
    demo: "#",
    featured: true,
  },
  {
    id: "nexmart",
    title: "NEXMART",
    subtitle: "Plateforme e-commerce microservices",
    description: "NEXMART est une plateforme e-commerce moderne construite sur une architecture microservices, garantissant scalabilité, performance et maintenabilité optimales.",
    longDescription: "NEXMART démontre une architecture microservices complète avec services d'authentification, catalogue produits, panier, commandes et paiements. Chaque service est conteneurisé avec Docker et orchestré pour une mise en production simplifiée.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Redis", "RabbitMQ"],
    features: [
      "Architecture microservices complète",
      "Authentification JWT sécurisée",
      "Catalogue produits avec recherche avancée",
      "Panier et checkout optimisés",
      "Paiements Stripe intégrés",
      "Monitoring et logging centralisés",
    ],
    images: [] as string[],
    badge: "Cloud & Web",
    badgeColor: "success",
    github: "https://github.com/yoxankonan/nexmart",
    demo: "#",
    featured: true,
  },
  {
    id: "rentyourcar",
    title: "RentYourCar",
    subtitle: "Plateforme de location de véhicules",
    description: "RentYourCar est une application web moderne permettant aux utilisateurs de rechercher, réserver et louer des véhicules en toute simplicité.",
    longDescription: "Une solution complète pour la location de véhicules avec système de réservation en ligne, gestion de flotte automobile, système de paiement intégré et interface Administrateur complète pour la gestion des locations.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "REST API"],
    features: [
      "Recherche avancée de véhicules",
      "Réservation en ligne 24/7",
      "Gestion de flotte automobile",
      "Système de paiement sécurisé",
      "Espace client personnalisé",
      "Dashboard Administrateur",
    ],
    images: [] as string[],
    badge: "Projet Web Moderne",
    badgeColor: "warning",
    github: "https://github.com/yoxankonan/rentyourcar",
    demo: "#",
    featured: false,
  },
];

export const timeline = [
  {
    year: "2023",
    title: "Début Licence Génie Logiciel",
    description: "Admission en Licence 3 Génie Logiciel. Découverte des fondamentaux du développement logiciel avancé.",
    icon: "graduation",
    color: "primary",
  },
  {
    year: "2024",
    title: "Premiers projets Full Stack",
    description: "Réalisation des premiers projets web complets. Maîtrise de React et des architectures modernes.",
    icon: "code",
    color: "accent",
  },
  {
    year: "2025",
    title: "Développement de TechInnova",
    description: "Conception et développement de TechInnova, projet académique majeur. Application des méthodologies agiles.",
    icon: "rocket",
    color: "success",
  },
  {
    year: "2026",
    title: "IA et Cloud Computing",
    description: "Spécialisation en Intelligence Artificielle et Cloud Computing. Projets Machine Learning avancés.",
    icon: "brain",
    color: "warning",
  },
  {
    year: "Objectif",
    title: "Ingénieur Logiciel spécialisé IA",
    description: "Integration du marché professionnel en tant qu'ingénieur logiciel spécialisé en Intelligence Artificielle.",
    icon: "target",
    color: "primary",
    isObjective: true,
  },
];

export const blogArticles = [
  {
    id: 1,
    title: "Comment j'ai conçu TechInnova",
    excerpt: "Découvrez le processus de conception et de développement de TechInnova, de l'idéation au déploiement.",
    date: "2025-03-15",
    readTime: "8 min",
    category: "Architecture",
    image: null as string | null,
  },
  {
    id: 2,
    title: "Déployer une application avec Docker",
    excerpt: "Guide complet pour conteneuriser et déployer votre application web avec Docker et docker-compose.",
    date: "2025-04-20",
    readTime: "12 min",
    category: "DevOps",
    image: null as string | null,
  },
  {
    id: 3,
    title: "Comprendre la régression logistique",
    excerpt: "Une plongée approfondie dans l'algorithme de régression logistique et ses applications en ML.",
    date: "2025-05-10",
    readTime: "10 min",
    category: "Machine Learning",
    image: null as string | null,
  },
  {
    id: 4,
    title: "Mon expérience avec React",
    excerpt: "Retour d'expérience sur 2 ans de développement React et les bonnes pratiques acquises.",
    date: "2025-05-25",
    readTime: "6 min",
    category: "Frontend",
    image: null as string | null,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford",
    date: "2025",
    credential: "XXXXXXX",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "XXXXXXX",
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta - Coursera",
    date: "2024",
    credential: "XXXXXXX",
  },
  {
    id: 4,
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2025",
    credential: "XXXXXXX",
  },
];

export const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Compétences", href: "#competences" },
  { name: "Projets", href: "#projets" },
  { name: "Parcours", href: "#parcours" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const cvDownloadCount = 247;

export const aiResponses = {
  greeting: "Bonjour ! Je suis Yoxan AI, l'assistant virtuel de Yoxan. Comment puis-je vous aider à découvrir son profil ?",
  skills: [
    "Yoxan maîtrise plusieurs technologies dans différents domaines :",
    "- **Développement Web** : HTML5, CSS3, JavaScript, PHP, React, Laravel",
    "- **Développement Logiciel** : Java, Python, UML, MERISE",
    "- **Intelligence Artificielle** : Machine Learning, TensorFlow, OpenCV",
    "- **Cloud & DevOps** : Docker, Kubernetes, Git, GitHub",
    "- **Bases de Données** : MySQL, MongoDB, PostgreSQL",
  ].join("\n"),
  projects: [
    "Voici les principaux projets de Yoxan :",
    "",
    "🚀 **TechInnova** - Plateforme collaborative de gestion de projets R&D",
    "🤖 **DetectWaste AI** - Système intelligent de détection des déchets",
    "🛒 **NEXMART** - Plateforme e-commerce en architecture microservices",
    "🚗 **RentYourCar** - Plateforme moderne de location de véhicules",
  ].join("\n"),
  experience: "Yoxan est actuellement étudiant en Licence 3 Génie Logiciel. Il a réalisé de nombreux projets académiques et personnels, notamment TechInnova (projet académique majeur), des projets en Intelligence Artificielle comme DetectWaste AI, et des plateformes web modernes comme NEXMART.",
  contact: "Vous pouvez contacter Yoxan via :\n- Email : konany379@gmail.com\n- LinkedIn : linkedin.com/in/yoxankonan\n- GitHub : github.com/yoxankonan\n- Téléphone : +225 XX XX XX XX XX\n- Localisation : Abidjan, Côte d'Ivoire",
  education: "Yoxan poursuit actuellement une Licence 3 en Génie Logiciel (2023-2026). Il se spécialise en développement logiciel, intelligence artificielle et cloud computing. Son objectif est de devenir ingénieur logiciel spécialisé en IA.",
  default: "Je suis là pour vous aider à découvrir le profil de Yoxan. Vous pouvez me poser des questions sur ses compétences, projets, parcours ou comment le contacter."
};

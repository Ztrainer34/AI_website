import { FaPhone, FaComments, FaRobot, FaUsers, FaCog, FaChartLine } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  benefits: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  results: string[];
  category: string;
  image?: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const services: Service[] = [
  {
    id: 'receptionists',
    title: 'Réceptionnistes IA',
    description: 'Des réceptionnistes intelligents 24h/24 et 7j/7 qui gèrent les appels et conversations par chat avec des interactions naturelles et humaines.',
    icon: FaPhone,
    features: [
      'Support multicanal (Téléphone & Chat)',
      'Compréhension du langage naturel',
      'Transfert fluide vers des agents humains',
      'Support multilingue',
      'Personnalité et ton personnalisables'
    ],
    benefits: [
      'Ne ratez plus jamais un lead ou une demande client',
      'Réduisez les coûts opérationnels jusqu\'à 80 %',
      'Réponses instantanées 24h/24 et 7j/7',
      'Scalez le support client sans augmenter les coûts'
    ]
  },
  {
    id: 'assistants',
    title: 'Assistants IA',
    description: 'Des assistants intelligents qui aident votre équipe à travailler plus efficacement, que ce soit en interne ou auprès de vos clients.',
    icon: FaRobot,
    features: [
      'Automatisation des flux de travail internes',
      'Assistants de support orientés clients',
      'Intégration avec vos outils existants',
      'Bases de connaissances personnalisées',
      'Analyse de données en temps réel'
    ],
    benefits: [
      'Boostez la productivité de votre équipe',
      'Améliorez la satisfaction client',
      'Automatisez les tâches répétitives',
      'Prenez des décisions basées sur les données'
    ]
  },
  {
    id: 'custom-ai',
    title: 'IA sur mesure + Automatisations',
    description: 'Solutions IA et workflows d\'automatisation sur mesure conçus pour éliminer les points de friction des PME et agences.',
    icon: FaCog,
    features: [
      'Développement IA sur mesure',
      'Automatisation des processus',
      'Optimisation des workflows',
      'Intégrations API',
      'Support et optimisation continus'
    ],
    benefits: [
      'Résolvez des défis métier uniques',
      'Simplifiez vos opérations',
      'Augmentez l\'efficacité et réduisez les erreurs',
      'Un avantage concurrentiel grâce à l\'innovation'
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Transformation du support client 24h/24',
    description: 'Une agence de taille moyenne a déployé notre solution de réceptionniste IA pour gérer les demandes en dehors des heures ouvrables.',
    results: [
      '95 % de taux de réponse aux demandes',
      '80 % de réduction des coûts de support',
      'Disponibilité 24h/24 et 7j/7 atteinte'
    ],
    category: 'Réceptionnistes IA'
  },
  {
    id: '2',
    title: 'Automatisation des opérations internes',
    description: 'Une entreprise en croissance a automatisé ses workflows internes avec des assistants IA sur mesure, libérant du temps pour le travail stratégique.',
    results: [
      '40 heures économisées par semaine',
      '60 % de réduction des erreurs manuelles',
      '200 % d\'augmentation de la productivité'
    ],
    category: 'Assistants IA'
  },
  {
    id: '3',
    title: 'Automatisation e-commerce sur mesure',
    description: 'Une entreprise e-commerce avait besoin de solutions IA pour la gestion des stocks et la personnalisation client.',
    results: [
      '50 % de traitement des commandes plus rapide',
      '30 % d\'augmentation du taux de conversion',
      'Intégration fluide avec les systèmes existants'
    ],
    category: 'IA sur mesure + Automatisations'
  },
  {
    id: '4',
    title: 'Système de support multilingue',
    description: 'Un prestataire de services mondial nécessitait des réceptionnistes IA capables de gérer les demandes en plusieurs langues.',
    results: [
      'Support pour 12 langues',
      '99 % de satisfaction client',
      'Zéro barrière linguistique'
    ],
    category: 'Réceptionnistes IA'
  }
];

export const navigationLinks: NavigationLink[] = [
  { name: 'Accueil', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const companyInfo: CompanyInfo = {
  name: 'AIXecute',
  email: 'ziagulzar5@gmail.com',
  phone: '+32 492426671',
  address: '',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/your-ai-company',
    twitter: 'https://twitter.com/your-ai-company',
    github: 'https://github.com/your-ai-company'
  }
};


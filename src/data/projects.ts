export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  duration: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
}

// Import actual images from assets
import rosterHubImg from '../assets/images/Roster-hub.png';
import techIntImg from '../assets/images/Tech-int.png';
import emotionamicImg from '../assets/images/emotionamic.png';
import heroImg from '../assets/images/hero.png';

// Array of available images for random assignment
const projectImages = [rosterHubImg, techIntImg, emotionamicImg, heroImg];

// Function to get a random image (seeded by project id for consistency)
const getProjectImage = (projectId: string): string => {
  const index = (parseInt(projectId) - 1) % projectImages.length;
  return projectImages[index];
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce solution with modern UI/UX',
    description: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. The platform includes real-time inventory management and order tracking.',
    image: getProjectImage('1'),
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Tailwind CSS'],
    startDate: '2024-01-15',
    endDate: '2024-04-20',
    duration: '3 months',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order management and tracking',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
      'Email notifications for orders'
    ],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management with real-time updates',
    description: 'A modern task management application that allows teams to collaborate effectively. Built with React and Firebase, it features real-time updates, drag-and-drop functionality, and comprehensive project tracking.',
    image: getProjectImage('2'),
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript', 'React DnD'],
    startDate: '2024-05-01',
    endDate: '2024-07-15',
    duration: '2.5 months',
    features: [
      'Real-time collaboration',
      'Drag and drop task management',
      'Project timeline visualization',
      'Team member assignment',
      'File attachments and comments',
      'Progress tracking and analytics',
      'Mobile-responsive design',
      'Offline functionality'
    ],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    category: 'web',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    shortDescription: 'Beautiful weather app with forecast and maps',
    description: 'An elegant weather dashboard that provides detailed weather information, forecasts, and interactive maps. Built with modern web technologies and integrated with multiple weather APIs for accurate data.',
    image: getProjectImage('3'),
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Leaflet', 'Sass'],
    startDate: '2024-08-01',
    endDate: '2024-09-30',
    duration: '2 months',
    features: [
      'Current weather conditions',
      '7-day weather forecast',
      'Interactive weather maps',
      'Location-based weather data',
      'Weather alerts and notifications',
      'Historical weather data',
      'Beautiful data visualizations',
      'Geolocation integration'
    ],
    githubUrl: 'https://github.com/example/weather-app',
    liveUrl: 'https://weather-dashboard-demo.com',
    category: 'web',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    shortDescription: 'Analytics dashboard for social media insights',
    description: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms to provide insights into engagement, reach, and performance metrics.',
    image: getProjectImage('4'),
    technologies: ['React', 'D3.js', 'Python', 'Django', 'PostgreSQL', 'Redis'],
    startDate: '2024-10-01',
    endDate: '2024-12-15',
    duration: '2.5 months',
    features: [
      'Multi-platform data aggregation',
      'Interactive data visualizations',
      'Engagement metrics tracking',
      'Automated report generation',
      'Real-time analytics updates',
      'Custom dashboard widgets',
      'Export functionality',
      'Team collaboration tools'
    ],
    githubUrl: 'https://github.com/example/social-analytics',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Mobile Fitness Tracker',
    shortDescription: 'Cross-platform fitness tracking mobile app',
    description: 'A comprehensive fitness tracking mobile application built with React Native. Features workout planning, progress tracking, and social features to motivate users.',
    image: getProjectImage('5'),
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'AsyncStorage'],
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    duration: '4 months',
    features: [
      'Workout planning and tracking',
      'Progress visualization',
      'Social features and challenges',
      'Nutrition tracking',
      'Wearable device integration',
      'Offline workout capability',
      'Personal trainer connection',
      'Achievement system'
    ],
    githubUrl: 'https://github.com/example/fitness-tracker',
    category: 'mobile',
    status: 'completed'
  },
  {
    id: '6',
    title: 'AI Code Assistant',
    shortDescription: 'AI-powered code completion and analysis tool',
    description: 'An intelligent code assistant that provides AI-powered code completion, analysis, and suggestions. Built as a VS Code extension with machine learning capabilities.',
    image: getProjectImage('6'),
    technologies: ['TypeScript', 'VS Code API', 'Python', 'TensorFlow', 'OpenAI API'],
    startDate: '2024-07-01',
    endDate: '2024-11-30',
    duration: '5 months',
    features: [
      'Intelligent code completion',
      'Code quality analysis',
      'Bug detection and suggestions',
      'Automated documentation',
      'Code refactoring assistance',
      'Multiple language support',
      'Learning from codebase',
      'Integration with popular IDEs'
    ],
    githubUrl: 'https://github.com/example/ai-code-assistant',
    category: 'desktop',
    status: 'in-progress'
  },
  {
    id: '7',
    title: 'Blockchain Voting System',
    shortDescription: 'Secure voting platform using blockchain technology',
    description: 'A decentralized voting system built on blockchain technology ensuring transparency, security, and immutability of votes. Features smart contracts and modern web interface.',
    image: getProjectImage('7'),
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    startDate: '2024-09-01',
    endDate: '2024-12-31',
    duration: '4 months',
    features: [
      'Blockchain-based vote storage',
      'Smart contract automation',
      'Voter identity verification',
      'Real-time vote counting',
      'Transparent audit trail',
      'Decentralized result verification',
      'Mobile-friendly interface',
      'Multi-language support'
    ],
    githubUrl: 'https://github.com/example/blockchain-voting',
    category: 'web',
    status: 'in-progress'
  },
  {
    id: '8',
    title: 'IoT Home Automation',
    shortDescription: 'Smart home control system with IoT integration',
    description: 'A comprehensive home automation system that integrates various IoT devices for smart home control. Features include voice control, scheduling, and energy monitoring.',
    image: getProjectImage('8'),
    technologies: ['Arduino', 'Raspberry Pi', 'Node.js', 'MQTT', 'React', 'MongoDB'],
    startDate: '2024-11-01',
    endDate: '2025-03-31',
    duration: '5 months',
    features: [
      'Device control and monitoring',
      'Voice command integration',
      'Automated scheduling',
      'Energy consumption tracking',
      'Security system integration',
      'Mobile app control',
      'Cloud synchronization',
      'Custom automation rules'
    ],
    githubUrl: 'https://github.com/example/iot-home',
    category: 'fullstack',
    status: 'planned'
  }
];

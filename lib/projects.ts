export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  stack: string[];
  liveLink: string;
  gitLink: string;
  images: string[];
  features: string[];
}
export const projects: Project[] = [

  {
    id: '01',
    title: 'Site Watcher Engine',
    description: 'Real-time website uptime monitoring API built with Go, featuring concurrent health checks, WebSocket updates, and JWT authentication.',
    fullDescription: 'Site Watcher Engine is a backend API built with Go for monitoring the availability and health status of websites and web services. The system uses goroutines to perform periodic website checks concurrently, while WebSocket connections provide real-time status updates to connected clients. JWT is used for secure authentication, and Swagger provides interactive API documentation. The application uses MySQL for persistent monitoring data, with the database environment running through Docker for consistent local development and deployment.',
    stack: ['Go', 'MySQL', 'JWT', 'WebSocket', 'Swagger', 'Docker'],
    liveLink: '#',
    gitLink: 'https://github.com/Jkz1/site-watcher-backend',
    images: [
      './SiteWatcherAPI/1.png'
    ],
    features: [
      'Periodic website health checks executed concurrently using Go goroutines',
      'Real-time monitoring updates delivered through WebSocket connections',
      'JWT-based authentication for protected API endpoints',
      'RESTful API with interactive Swagger documentation',
      'MySQL database for storing monitored sites and status history',
      'Dockerized MySQL environment for consistent development setup'
    ]
  },
  {
    id: '02',
    title: 'Camera-Based Translation Mobile App',
    description: 'Cross-platform translation app that extracts text from images using Tesseract OCR and translates detected text through Google Translate.',
    fullDescription: 'A Flutter-based mobile application designed to help users translate text captured through their device camera. The application uses Tesseract OCR to detect and extract text from images, then processes the extracted content through Google Translate for language conversion. It also includes speech-to-text functionality to allow users to provide text through voice input, creating a more flexible translation experience. Built with Flutter and Dart to support both Android and iOS platforms.',
    stack: ['Flutter', 'Dart', 'Tesseract OCR', 'Google Translate', 'Speech-to-Text'],
    liveLink: '#',
    gitLink: 'https://github.com/Jkz1/Camera_Based_Translation',
    images: [
      './CameraBasedTranslation/1.png',
      './CameraBasedTranslation/2.png',
      './CameraBasedTranslation/3.png'
    ],
    features: [
      'Camera-based text detection and extraction using Tesseract OCR',
      'Text translation through Google Translate',
      'Speech-to-text input for voice-based translation',
      'Flutter-based cross-platform mobile application',
      'Support for translating text captured from real-world objects and documents'
    ]
  },
  {
    id: '03',
    title: 'Cafe Management API',
    description: 'Backend API and administrative system for managing cafe operations, authentication, inventory, orders, and staff management.',
    fullDescription: 'A full-featured backend API and administrative platform designed to support small-scale cafe operations. Built with Laravel and MySQL, the system follows a service-layer architecture and DTO pattern to maintain clean, structured, and maintainable business logic. Authentication and authorization are implemented using Laravel Sanctum and Spatie Permission, while Filament provides an intuitive administrative dashboard. The system also includes email verification through Mailtrap and a bulk email feature powered by PHP queues for efficient background processing.',
    stack: ['Laravel', 'Filament', 'MySQL', 'Sanctum', 'Spatie Permission'],
    liveLink: '#',
    gitLink: 'https://github.com/Jkz1/my_cafe_backend',
    images: [
      '/CafeManagementAPI/1.png',
      '/CafeManagementAPI/2.png',
      '/CafeManagementAPI/3.png',
      '/CafeManagementAPI/4.png',
    ],
    features: [
      'RESTful API for cafe operations and data management',
      'Authentication and authorization using Laravel Sanctum and Spatie Permission',
      'Email verification integrated with Mailtrap',
      'Clean service-layer architecture with DTO pattern',
      'Filament-based administrative dashboard',
      'Inventory, stock, and order management',
      'Bulk email processing using PHP queues',
      'Role and permission management for staff and administrators'
    ]
  },
{
  id: '04',
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce platform built with React and Express.js, featuring secure authentication, online payment processing, and comprehensive admin management.',
  fullDescription: 'A full-stack e-commerce application designed to handle the core workflow of an online store, from user authentication and product browsing to checkout and payment processing. The application uses React.js for the frontend and Express.js for the backend, with JWT-based authentication and securely hashed passwords for user accounts. An administrative dashboard provides centralized management of products, categories, and customer orders, while an integrated payment gateway handles online transactions. The project demonstrates a complete client-server architecture with dedicated functionality for both customers and administrators.',
  stack: ['React.js', 'Express.js', 'Node.js', 'JWT', 'Payment Gateway'],
  liveLink: '#',
  gitLink: '#',
  images: [
    '/Dinar/1.png',
    '/Dinar/2.png',
    '/Dinar/3.png',
    '/Dinar/4.png',
    '/Dinar/5.png',
    '/Dinar/6.png',
    '/Dinar/7.png',
    '/Dinar/8.png',
    '/Dinar/9.png',
  ],
  features: [
    'User registration and login with JWT-based authentication',
    'Secure password hashing for user credentials',
    'Product browsing and shopping workflow',
    'Integrated payment gateway for online transactions',
    'Admin dashboard for product and category management',
    'Admin order management and order status handling',
    'RESTful backend API built with Express.js',
    'React.js frontend for the customer shopping experience'
  ]
},

];

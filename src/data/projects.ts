import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "wms",
    title: "Warehouse Management System",
    description:
      "A full-stack WMS with real-time inventory tracking for 1,000+ SKUs. Features Socket.IO-based live stock synchronization, barcode scanning (USB/Bluetooth), 18-digit automated barcode generation, thermal printer support, and demand forecasting analyzing 90-day consumption patterns.",
    techStack: ["Node.js", "React.js", "MySQL", "Redis", "Socket.IO"],
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Package",
        label: "1,000+ SKUs",
        detail: "Real-time inventory tracking with live stock synchronization",
      },
      {
        icon: "ScanBarcode",
        label: "Barcode Scanning",
        detail: "USB/Bluetooth scanning with 18-digit auto-generation",
      },
      {
        icon: "TrendingUp",
        label: "Demand Forecasting",
        detail: "Analyzes 90-day consumption patterns for predictions",
      },
      {
        icon: "Zap",
        label: "Optimized Performance",
        detail: "Redis caching and database connection pooling",
      },
    ],
  },
  {
    id: "exocall",
    title: "Call Campaign CRM (Exocall)",
    description:
      "A contact center CRM integrated with Exotel API for inbound/outbound call management, dual-channel recording, and webhook-driven status tracking. Features bulk Excel upload with intelligent column mapping, agent assignment workflows, and analytics dashboards.",
    techStack: ["Node.js", "React.js", "MySQL", "Sequelize", "Tailwind CSS", "Exotel API"],
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Phone",
        label: "Exotel Integration",
        detail: "Inbound/outbound call management with dual-channel recording",
      },
      {
        icon: "FileSpreadsheet",
        label: "Bulk Upload",
        detail: "Excel upload with intelligent column mapping",
      },
      {
        icon: "ShieldCheck",
        label: "RBAC & JWT Auth",
        detail: "Role-based access control with secure authentication",
      },
      {
        icon: "Server",
        label: "Production Deployed",
        detail: "Deployed with PM2 and Nginx on VPS",
      },
    ],
  },
  {
    id: "innovation-ecosystem",
    title: "Innovation Ecosystem",
    description:
      "A scalable real-time messaging platform supporting 500+ concurrent users using Redis pub/sub architecture. Features RESTful APIs for authentication and notification delivery with optimized event handling that reduced message latency by 35%.",
    techStack: ["Node.js", "Socket.IO", "Redis"],
    liveUrl: "https://innolinked.in",
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "Users",
        label: "500+ Concurrent Users",
        detail: "Scalable real-time messaging with Redis pub/sub",
      },
      {
        icon: "Zap",
        label: "35% Faster",
        detail: "Reduced message latency through optimized event handling",
      },
    ],
  },
  {
    id: "aec",
    title: "AEC Dashboard",
    description:
      "A multi-role dashboard for students, counselors, and admins with granular role-based access control and dynamic UI rendering. Achieved 95% code coverage with 700+ unit/integration test cases, reducing regression bugs by 40%.",
    techStack: ["React.js", "Redux", "React Testing Library"],
    image: "/projects/placeholder.jpg",
    featured: true,
    highlights: [
      {
        icon: "ShieldCheck",
        label: "Granular RBAC",
        detail: "Multi-role access for students, counselors, and admins",
      },
      {
        icon: "TestTube",
        label: "95% Coverage",
        detail: "700+ unit/integration test cases, 40% fewer regression bugs",
      },
    ],
  },
  {
    id: "first-performance",
    title: "First Performance",
    description:
      "An automated data extraction system using Python and Selenium scrapers that reduced manual entry time by 70%. Includes a secure Node.js REST API for managing files on AWS S3 with pre-signed URLs.",
    techStack: ["Python", "Selenium", "Node.js", "AWS S3"],
    image: "/projects/placeholder.jpg",
    featured: false,
    highlights: [
      {
        icon: "Bot",
        label: "70% Time Saved",
        detail: "Automated data extraction from third-party portals",
      },
      {
        icon: "Cloud",
        label: "AWS S3 Integration",
        detail: "Secure file management with pre-signed URLs",
      },
    ],
  },
  {
    id: "sujata-appliances",
    title: "Sujata Appliances",
    description:
      "A cross-platform (Web + Desktop) product management system sharing a unified Node.js backend. Features Redis TTL-based caching that reduced API response times by 45% and TypeScript backend modules that reduced runtime errors by 30%.",
    techStack: ["React.js", "Python Tkinter", "Node.js", "Redis", "TypeScript"],
    image: "/projects/placeholder.jpg",
    featured: false,
    highlights: [
      {
        icon: "Monitor",
        label: "Cross-Platform",
        detail: "Web and desktop sharing a unified Node.js backend",
      },
      {
        icon: "Zap",
        label: "45% Faster APIs",
        detail: "Redis TTL-based caching for optimized response times",
      },
    ],
  },
];


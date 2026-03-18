import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Softregent Technologies",
    role: "Full Stack Developer (MERN)",
    period: "December 2025 - Present",
    location: "Pune",
    highlights: [
      "Architected a full-stack Warehouse Management System with real-time inventory tracking for 1,000+ SKUs using Socket.IO",
      "Implemented barcode scanning (USB/Bluetooth) with 18-digit automated barcode generation and thermal printer support",
      "Developed demand forecasting analyzing 90-day consumption patterns with Redis caching and database connection pooling",
      "Integrated Exotel API for a Call Campaign CRM with inbound/outbound call management, dual-channel recording, and webhook-driven status tracking",
      "Built bulk Excel upload with intelligent column mapping and agent assignment workflows",
      "Implemented RBAC with JWT authentication and deployed using PM2 and Nginx",
    ],
    techUsed: ["Node.js", "React.js", "MySQL", "Redis", "Socket.IO", "Exotel API", "Sequelize", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "Navyug Infosolutions Pvt. Ltd.",
    role: "Software Engineer",
    period: "May 2022 – October 2024",
    location: "Noida",
    highlights: [
      "Architected a scalable real-time messaging backend supporting 500+ concurrent users using Redis pub/sub, reducing message latency by 35%",
      "Spearheaded a multi-role dashboard (students, counselors, admins) with granular RBAC and dynamic UI rendering",
      "Achieved 95% code coverage with 700+ unit/integration test cases, reducing regression bugs by 40%",
      "Automated data extraction using Python/Selenium scrapers, reducing manual entry time by 70%",
      "Developed a Node.js REST API for AWS S3 file management with pre-signed URLs",
      "Launched a cross-platform (web and desktop) system with a unified Node.js backend, reducing API response times by 45% using Redis TTL-based caching",
    ],
    techUsed: ["React.js", "Node.js", "Redux", "Python", "Selenium", "Redis", "AWS S3", "TypeScript", "React Testing Library"],
  },
];

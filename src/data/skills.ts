import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Redux", icon: `${DI}/redux/redux-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Material UI", icon: `${DI}/materialui/materialui-original.svg` },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
      { name: "Socket.IO", icon: `${SI}/socketdotio/white` },
      { name: "GraphQL", icon: `${DI}/graphql/graphql-plain.svg` },
      { name: "Sequelize", icon: `${DI}/sequelize/sequelize-original.svg` },
    ],
  },
  {
    category: "Databases & Caching",
    skills: [
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "PM2", icon: `${SI}/pm2/2B037A` },
      { name: "Nginx", icon: `${DI}/nginx/nginx-original.svg` },
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Jest", icon: `${DI}/jest/jest-plain.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "Jira", icon: `${DI}/jira/jira-original.svg` },
      { name: "Vite", icon: `${DI}/vitejs/vitejs-original.svg` },
    ],
  },
];

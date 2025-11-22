"use client";
import React, { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Code2,
  Database,
  Cloud,
  Globe,
  Server,
  GitBranch,
  Cpu,
  Layers,
  Package,
  Shield,
  Zap,
  Terminal,
  Box,
  Settings,
  ChevronDown,
  Check,
  X,
} from "lucide-react";

// Types
type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Tools"
  | "Languages"
  | "Cloud"
  | "Testing";
type ProficiencyLevel = "Expert" | "Advanced" | "Intermediate" | "Learning";

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  experience: string;
  gradient: string;
}

// All Skills Data - 60+ skills
const ALL_SKILLS: Skill[] = [
  // Frontend Skills
  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    level: "Expert",
    experience: "2+ years",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: 3,
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-green-400 to-green-600",
  },
  {
    id: 4,
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frontend",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 5,
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
    level: "Expert",
    experience: "2+ years",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 8,
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: 9,
    name: "Material-UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 10,
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-pink-500 to-pink-700",
  },

  // Backend Skills
  {
    id: 11,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-green-500 to-green-700",
  },
  {
    id: 12,
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: 13,
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    category: "Backend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 14,
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    category: "Backend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 15,
    name: "REST API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    category: "Backend",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: 16,
    name: "Socket.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    category: "Backend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-gray-700 to-black",
  },
  {
    id: 17,
    name: "Fastify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    category: "Backend",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 18,
    name: "Microservices",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "Backend",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-600 to-purple-600",
  },

  // Databases
  {
    id: 19,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-green-500 to-green-700",
  },
  {
    id: 20,
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 21,
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 22,
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    category: "Database",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 23,
    name: "Elasticsearch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    category: "Database",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    id: 24,
    name: "DynamoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
    category: "Database",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: 25,
    name: "Cassandra",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
    category: "Database",
    level: "Learning",
    experience: "<1 year",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 26,
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    category: "Database",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-gray-700 to-gray-900",
  },

  // DevOps & Cloud
  {
    id: 27,
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 28,
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 29,
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 30,
    name: "GitLab CI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 31,
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "DevOps",
    level: "Expert",
    experience: "2+ years",
    gradient: "from-gray-700 to-black",
  },
  {
    id: 32,
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: 33,
    name: "Ansible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    category: "DevOps",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-red-500 to-gray-700",
  },
  {
    id: 34,
    name: "Prometheus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 35,
    name: "Grafana",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    id: 36,
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    category: "DevOps",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-green-600 to-green-800",
  },
  {
    id: 37,
    name: "Apache",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    category: "DevOps",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-red-600 to-purple-600",
  },

  // Cloud Platforms
  {
    id: 38,
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    category: "Cloud",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    id: 39,
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    category: "Cloud",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 40,
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: "Cloud",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    id: 41,
    name: "Digital Ocean",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    category: "Cloud",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 42,
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    category: "Cloud",
    level: "Expert",
    experience: "2+ years",
    gradient: "from-gray-700 to-black",
  },
  {
    id: 43,
    name: "Netlify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    category: "Cloud",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    id: 44,
    name: "Heroku",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    category: "Cloud",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-purple-600 to-purple-800",
  },

  // Programming Languages
  {
    id: 45,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Languages",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    id: 46,
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Languages",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 47,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Languages",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-yellow-500",
  },
  {
    id: 48,
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    category: "Languages",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 49,
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "Languages",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: 50,
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Languages",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-blue-600 to-blue-800",
  },

  // Tools & Others
  {
    id: 51,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 52,
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-gray-700 to-black",
  },
  {
    id: 53,
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "Tools",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 54,
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "Tools",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    id: 55,
    name: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    category: "Tools",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 56,
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Tools",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 57,
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    category: "Tools",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 58,
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    category: "Tools",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-purple-500 to-yellow-500",
  },
  {
    id: 59,
    name: "Babel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
    category: "Tools",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    id: 60,
    name: "ESLint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    category: "Tools",
    level: "Expert",
    experience: "3+ years",
    gradient: "from-purple-600 to-blue-600",
  },

  // Testing
  {
    id: 61,
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    category: "Testing",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 62,
    name: "Cypress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    category: "Testing",
    level: "Advanced",
    experience: "2+ years",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 63,
    name: "Mocha",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
    category: "Testing",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-brown-500 to-brown-700",
  },
  {
    id: 64,
    name: "Selenium",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    category: "Testing",
    level: "Intermediate",
    experience: "1+ year",
    gradient: "from-green-500 to-green-700",
  },
  {
    id: 65,
    name: "Playwright",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    category: "Testing",
    level: "Learning",
    experience: "<1 year",
    gradient: "from-red-500 to-green-500",
  },
];

// Category icons mapping
const CATEGORY_ICONS: Record<SkillCategory, React.ElementType> = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Tools: Settings,
  Languages: Code2,
  Cloud: Cloud,
  Testing: Shield,
};

// Level colors
const LEVEL_COLORS: Record<ProficiencyLevel, string> = {
  Expert: "from-green-500 to-emerald-500",
  Advanced: "from-blue-500 to-cyan-500",
  Intermediate: "from-yellow-500 to-orange-500",
  Learning: "from-purple-500 to-pink-500",
};

// Category Button Component
interface CategoryButtonProps {
  category: SkillCategory | "All";
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  count: number;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  active,
  onClick,
  icon: Icon,
  count,
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
      active
        ? "bg-primary text-primary-foreground shadow-lg"
        : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground border"
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{category}</span>
    <span
      className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-primary-foreground/20" : "bg-muted"}`}
    >
      {count}
    </span>
  </motion.button>
);

// Skill Card Component
interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="bg-card border-border hover:border-primary/30 relative h-full overflow-hidden rounded-2xl border p-6 shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        />

        {/* Top gradient bar */}
        <motion.div
          className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${skill.gradient}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Large background icon */}
        <div className="absolute -right-4 -bottom-4 opacity-5 transition-all duration-500 group-hover:opacity-10">
          <motion.img
            src={skill.icon}
            alt=""
            className="h-24 w-24 grayscale filter"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
          {/* Icon */}
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.gradient} opacity-20 blur-lg`}
            />
            <div className="bg-background border-border relative rounded-xl border p-3 shadow-md">
              <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            </div>
          </motion.div>

          {/* Name */}
          <h3
            className={`text-foreground text-lg font-bold group-hover:bg-gradient-to-r ${skill.gradient} transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent`}
          >
            {skill.name}
          </h3>

          {/* Level Badge */}
          <div
            className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold ${LEVEL_COLORS[skill.level]} text-white shadow-md`}
          >
            {skill.level}
          </div>

          {/* Experience */}
          <div className="text-muted-foreground text-sm">{skill.experience}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const SkillsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "All">("All");
  const [selectedLevels, setSelectedLevels] = useState<ProficiencyLevel[]>([]);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState<boolean>(false);

  const levelDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (levelDropdownRef.current && !levelDropdownRef.current.contains(event.target as Node)) {
        setIsLevelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_SKILLS.length };
    ALL_SKILLS.forEach((skill) => {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter skills
  const filteredSkills = useMemo(() => {
    return ALL_SKILLS.filter((skill) => {
      // Category filter
      if (selectedCategory !== "All" && skill.category !== selectedCategory) {
        return false;
      }

      // Level filter
      if (selectedLevels.length > 0 && !selectedLevels.includes(skill.level)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return skill.name.toLowerCase().includes(query);
      }

      return true;
    });
  }, [selectedCategory, selectedLevels, searchQuery]);

  const toggleLevel = (level: ProficiencyLevel) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedLevels([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "All" || selectedLevels.length > 0;

  return (
    <section className="bg-background min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-foreground mb-2 text-4xl font-black md:text-5xl">
                Skills & Technologies
              </h1>
              <p className="text-muted-foreground text-lg">
                My technical expertise across {ALL_SKILLS.length}+ technologies
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-card border-border rounded-xl border px-6 py-3">
                <div className="text-muted-foreground text-sm">Total Skills</div>
                <div className="text-foreground text-3xl font-black">{ALL_SKILLS.length}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 w-full rounded-xl border py-4 pr-4 pl-12 transition-all focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Category Filters & Level Dropdown */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <CategoryButton
                category="All"
                active={selectedCategory === "All"}
                onClick={() => setSelectedCategory("All")}
                icon={Layers}
                count={categoryCounts["All"]}
              />
              <CategoryButton
                category="Frontend"
                active={selectedCategory === "Frontend"}
                onClick={() => setSelectedCategory("Frontend")}
                icon={Globe}
                count={categoryCounts["Frontend"] || 0}
              />
              <CategoryButton
                category="Backend"
                active={selectedCategory === "Backend"}
                onClick={() => setSelectedCategory("Backend")}
                icon={Server}
                count={categoryCounts["Backend"] || 0}
              />
              <CategoryButton
                category="Database"
                active={selectedCategory === "Database"}
                onClick={() => setSelectedCategory("Database")}
                icon={Database}
                count={categoryCounts["Database"] || 0}
              />
              <CategoryButton
                category="DevOps"
                active={selectedCategory === "DevOps"}
                onClick={() => setSelectedCategory("DevOps")}
                icon={Cloud}
                count={categoryCounts["DevOps"] || 0}
              />
              <CategoryButton
                category="Cloud"
                active={selectedCategory === "Cloud"}
                onClick={() => setSelectedCategory("Cloud")}
                icon={Cloud}
                count={categoryCounts["Cloud"] || 0}
              />
              <CategoryButton
                category="Languages"
                active={selectedCategory === "Languages"}
                onClick={() => setSelectedCategory("Languages")}
                icon={Code2}
                count={categoryCounts["Languages"] || 0}
              />
              <CategoryButton
                category="Tools"
                active={selectedCategory === "Tools"}
                onClick={() => setSelectedCategory("Tools")}
                icon={Settings}
                count={categoryCounts["Tools"] || 0}
              />
              <CategoryButton
                category="Testing"
                active={selectedCategory === "Testing"}
                onClick={() => setSelectedCategory("Testing")}
                icon={Shield}
                count={categoryCounts["Testing"] || 0}
              />
            </div>

            {/* Proficiency Level Multi-Select Dropdown */}
            <div className="lg:ml-auto" ref={levelDropdownRef}>
              <div className="relative">
                <button
                  onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
                  className="bg-card border-border text-foreground hover:border-primary/50 flex min-w-[200px] items-center justify-between gap-2 rounded-xl border px-6 py-3 transition-all"
                >
                  <span className="text-sm font-semibold">
                    {selectedLevels.length > 0
                      ? `${selectedLevels.length} Level${selectedLevels.length > 1 ? "s" : ""}`
                      : "Filter by Level"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isLevelDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLevelDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border-border absolute top-full right-0 left-0 z-50 mt-2 rounded-xl border shadow-2xl"
                  >
                    <div className="p-2">
                      {selectedLevels.length > 0 && (
                        <div className="border-border mb-2 border-b px-3 py-2">
                          <button
                            onClick={() => setSelectedLevels([])}
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors"
                          >
                            <X className="h-3 w-3" />
                            Clear Selection
                          </button>
                        </div>
                      )}
                      {(
                        ["Expert", "Advanced", "Intermediate", "Learning"] as ProficiencyLevel[]
                      ).map((level) => {
                        const isSelected = selectedLevels.includes(level);
                        return (
                          <button
                            key={level}
                            onClick={() => toggleLevel(level)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                              isSelected
                                ? "bg-primary/10 text-primary font-semibold"
                                : "hover:bg-muted text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-3 w-3 rounded-full bg-gradient-to-r ${LEVEL_COLORS[level]}`}
                              />
                              <span>{level}</span>
                            </div>
                            {isSelected && <Check className="h-4 w-4" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {selectedLevels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-muted-foreground text-sm font-medium">Active levels:</span>
              {selectedLevels.map((level) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 text-primary flex items-center gap-1 rounded-lg px-3 py-1 text-sm font-medium"
                >
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${LEVEL_COLORS[level]}`} />
                  {level}
                  <button
                    onClick={() => toggleLevel(level)}
                    className="hover:bg-primary/20 rounded p-0.5 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Clear All Filters & Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Showing <span className="text-foreground font-bold">{filteredSkills.length}</span> of{" "}
              <span className="text-foreground font-bold">{ALL_SKILLS.length}</span> skills
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors"
              >
                <X className="h-4 w-4" />
                Clear All Filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center"
          >
            <div className="bg-card border-border inline-block rounded-3xl border p-12">
              <Search className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
              <h3 className="text-foreground mb-2 text-2xl font-bold">No skills found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearFilters}
                className="bg-primary text-primary-foreground rounded-xl px-6 py-3 font-semibold transition-all hover:shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            {
              label: "Expert Level",
              value: ALL_SKILLS.filter((s) => s.level === "Expert").length,
              icon: Zap,
              gradient: "from-green-500 to-emerald-500",
            },
            {
              label: "Advanced Level",
              value: ALL_SKILLS.filter((s) => s.level === "Advanced").length,
              icon: Cpu,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              label: "Total Categories",
              value: Object.keys(categoryCounts).length - 1,
              icon: Package,
              gradient: "from-purple-500 to-pink-500",
            },
            {
              label: "Years Experience",
              value: "3+",
              icon: Terminal,
              gradient: "from-orange-500 to-red-500",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border-border group relative overflow-hidden rounded-2xl border p-6 text-center shadow-lg"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />
              <stat.icon
                className={`mx-auto mb-3 h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                strokeWidth={2.5}
              />
              <div className="text-foreground mb-1 text-3xl font-black">{stat.value}</div>
              <div className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Breakdown by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card border-border mt-12 rounded-2xl border p-8"
        >
          <h3 className="text-foreground mb-6 text-2xl font-bold">Skills Distribution</h3>
          <div className="space-y-4">
            {Object.entries(categoryCounts)
              .filter(([key]) => key !== "All")
              .sort(([, a], [, b]) => b - a)
              .map(([category, count], idx) => {
                const Icon = CATEGORY_ICONS[category as SkillCategory];
                const percentage = Math.round((count / ALL_SKILLS.length) * 100);
                return (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="text-muted-foreground h-5 w-5" />
                        <span className="text-foreground font-semibold">{category}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground text-sm">{count} skills</span>
                        <span className="text-foreground text-sm font-bold">{percentage}%</span>
                      </div>
                    </div>
                    <div className="bg-muted h-2 overflow-hidden rounded-full">
                      <motion.div
                        className="from-chart-2 to-chart-3 h-full rounded-full bg-gradient-to-r"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;

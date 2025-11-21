"use client";
import React, { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Code2,
  Github,
  ExternalLink,
  X,
  Layers,
  Database,
  Cloud,
  Globe,
  ChevronDown,
  Check,
} from "lucide-react";

// Types
type ProjectCategory = "Frontend" | "Backend" | "DevOps" | "Full Stack";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
  gradient: string;
}

// Animated Code Icon SVG
const AnimatedCodeIcon: React.FC = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto mb-6">
    <defs>
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="[stop-color:hsl(var(--chart-2))]" />
        <stop offset="100%" className="[stop-color:hsl(var(--chart-3))]" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="60"
      cy="60"
      r="50"
      fill="none"
      stroke="url(#codeGrad)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M 40 45 L 30 60 L 40 75"
      fill="none"
      stroke="url(#codeGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <motion.path
      d="M 80 45 L 90 60 L 80 75"
      fill="none"
      stroke="url(#codeGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    <motion.line
      x1="55"
      y1="45"
      x2="65"
      y2="75"
      stroke="url(#codeGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    />
  </svg>
);

// Animated SVG Background
const AnimatedBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:hsl(var(--chart-2))]" stopOpacity="0.15" />
          <stop offset="100%" className="[stop-color:hsl(var(--chart-3))]" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="[stop-color:hsl(var(--chart-4))]" stopOpacity="0.15" />
          <stop offset="100%" className="[stop-color:hsl(var(--chart-5))]" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="10%"
        cy="20%"
        r="300"
        fill="url(#grad1)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.circle
        cx="90%"
        cy="80%"
        r="250"
        fill="url(#grad2)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
);

// Floating Particles
const FloatingParticles: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-chart-2 absolute h-1 w-1 rounded-full opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 0.6, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Projects Data
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "Smart task management app powered by AI to prioritize and organize your daily workflow efficiently.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Comprehensive analytics dashboard for managing multiple social media accounts with detailed insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Automation",
    description:
      "Scalable cloud infrastructure with automated CI/CD pipelines, monitoring, and containerized deployments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    category: "DevOps",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description:
      "Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "Mapbox", "AWS", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description:
      "Community-driven recipe platform where users can share, rate, and discover new culinary experiences.",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&h=600&fit=crop",
    tags: ["React", "GraphQL", "PostgreSQL", "Docker"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-lime-500/20 via-green-500/20 to-emerald-500/20",
  },
  {
    id: 7,
    title: "RESTful API Service",
    description:
      "Scalable RESTful API with authentication, rate limiting, and comprehensive documentation using Swagger.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    id: 8,
    title: "Portfolio Website Builder",
    description:
      "Drag-and-drop portfolio builder with customizable themes and one-click deployment to various platforms.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    id: 9,
    title: "Microservices Architecture",
    description:
      "Event-driven microservices architecture with message queues, service discovery, and distributed tracing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Node.js", "RabbitMQ", "Docker", "Kubernetes", "PostgreSQL"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: 10,
    title: "CI/CD Pipeline Platform",
    description:
      "Custom CI/CD platform with automated testing, deployment strategies, and rollback capabilities.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    tags: ["Jenkins", "Docker", "Kubernetes", "Ansible", "GitLab"],
    category: "DevOps",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    id: 11,
    title: "Interactive Data Visualization",
    description:
      "Real-time data visualization dashboard with customizable charts, graphs, and interactive widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "WebSocket"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
  {
    id: 12,
    title: "Monitoring & Observability Stack",
    description:
      "Complete monitoring solution with metrics collection, log aggregation, and alerting system.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    tags: ["Prometheus", "Grafana", "ELK Stack", "Docker"],
    category: "DevOps",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
  },
];

// Category Filter Button Component
interface CategoryButtonProps {
  category: ProjectCategory | "All";
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  active,
  onClick,
  icon: Icon,
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
      active
        ? "bg-primary text-primary-foreground shadow-lg"
        : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground border"
    }`}
  >
    <Icon className="h-4 w-4" />
    {category}
  </motion.button>
);

// Project Card Component
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="bg-card border-border hover:border-primary/30 relative overflow-hidden rounded-3xl border shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Image Container */}
        <div className="bg-muted relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="from-card via-card/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-90" />

          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href={project.github}
              className="bg-background/95 hover:bg-primary hover:text-primary-foreground rounded-xl p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={project.demo}
              className="bg-background/95 hover:bg-primary hover:text-primary-foreground rounded-xl p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110"
              aria-label="View Live Demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* Category Badge */}
          <div className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold shadow-lg backdrop-blur-md">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-4 p-6">
          <h3 className="text-foreground group-hover:text-primary text-2xl font-bold transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-secondary/80 text-secondary-foreground border-border/50 rounded-lg border px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="via-primary/5 absolute inset-0 translate-x-[-200%] -skew-x-12 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category filter
      if (selectedCategory !== "All" && project.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const hasSelectedTag = selectedTags.some((tag) => project.tags.includes(tag));
        if (!hasSelectedTag) return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesDescription = project.description.toLowerCase().includes(query);
        return matchesTitle || matchesTags || matchesDescription;
      }

      return true;
    });
  }, [selectedCategory, selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "All" || selectedTags.length > 0;

  return (
    <section className="bg-background relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-foreground mb-2 text-4xl font-black md:text-5xl">All Projects</h1>
              <p className="text-muted-foreground text-lg">
                Explore my complete portfolio of {PROJECTS.length} projects
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-card border-border rounded-xl border px-6 py-3">
                <div className="text-muted-foreground text-sm">Total Projects</div>
                <div className="text-foreground text-3xl font-black">{PROJECTS.length}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 w-full rounded-xl border py-4 pr-4 pl-12 transition-all focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Category Filters & Technology Dropdown */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <CategoryButton
                category="All"
                active={selectedCategory === "All"}
                onClick={() => setSelectedCategory("All")}
                icon={Globe}
              />
              <CategoryButton
                category="Frontend"
                active={selectedCategory === "Frontend"}
                onClick={() => setSelectedCategory("Frontend")}
                icon={Code2}
              />
              <CategoryButton
                category="Backend"
                active={selectedCategory === "Backend"}
                onClick={() => setSelectedCategory("Backend")}
                icon={Database}
              />
              <CategoryButton
                category="DevOps"
                active={selectedCategory === "DevOps"}
                onClick={() => setSelectedCategory("DevOps")}
                icon={Cloud}
              />
              <CategoryButton
                category="Full Stack"
                active={selectedCategory === "Full Stack"}
                onClick={() => setSelectedCategory("Full Stack")}
                icon={Layers}
              />
            </div>

            {/* Technology Multi-Select Dropdown */}
            <div className="md:ml-auto" ref={dropdownRef}>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-card border-border text-foreground hover:border-primary/50 flex min-w-[200px] items-center justify-between gap-2 rounded-xl border px-6 py-3 transition-all"
                >
                  <span className="text-sm font-semibold">
                    {selectedTags.length > 0 ? `${selectedTags.length} Selected` : "Filter by Tech"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border-border absolute top-full right-0 left-0 z-50 mt-2 max-h-[400px] overflow-y-auto rounded-xl border shadow-2xl"
                  >
                    <div className="p-2">
                      {selectedTags.length > 0 && (
                        <div className="border-border mb-2 border-b px-3 py-2">
                          <button
                            onClick={() => setSelectedTags([])}
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors"
                          >
                            <X className="h-3 w-3" />
                            Clear Selection
                          </button>
                        </div>
                      )}
                      {allTags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                              isSelected
                                ? "bg-primary/10 text-primary font-semibold"
                                : "hover:bg-muted text-foreground"
                            }`}
                          >
                            <span>{tag}</span>
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
          {selectedTags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-muted-foreground text-sm font-medium">Active filters:</span>
              {selectedTags.map((tag) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 text-primary flex items-center gap-1 rounded-lg px-3 py-1 text-sm font-medium"
                >
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="hover:bg-primary/20 rounded p-0.5 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Clear All Filters */}
          {hasActiveFilters && (
            <div className="flex justify-end">
              <button
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors"
              >
                <X className="h-4 w-4" />
                Clear All Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-bold">{filteredProjects.length}</span>{" "}
              of <span className="text-foreground font-bold">{PROJECTS.length}</span> projects
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
              <h3 className="text-foreground mb-2 text-2xl font-bold">No projects found</h3>
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
      </div>
    </section>
  );
};

export default ProjectsPage;

"use client";
import React, { useRef } from "react";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  Briefcase,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// Project data constant
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    icon: Code2,
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "Smart task management app powered by AI to prioritize and organize your daily workflow efficiently.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Comprehensive analytics dashboard for managing multiple social media accounts with detailed insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    icon: Database,
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud infrastructure with automated CI/CD pipelines, monitoring, and containerized deployments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: Cloud,
  },
];

// Animated Code Icon SVG
const AnimatedCodeIcon = () => (
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

// Animated SVG Background Component
const AnimatedBackground = () => (
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
import { useMemo } from "react";
// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: ((i * 37) % 100) + 2,
    top: ((i * 53) % 100) + 2,
    duration: 3 + (i % 5) * 0.4,
    delay: (i % 7) * 0.2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="bg-chart-2 absolute h-1 w-1 rounded-full opacity-60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-background relative min-h-screen w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <AnimatedCodeIcon />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isHeaderInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="bg-secondary text-secondary-foreground border-border mb-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 shadow-md"
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-bold tracking-wide uppercase">My Work</span>
          </motion.div>

          <motion.h2
            className="text-foreground mb-6 text-5xl font-black md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured{" "}
            <span className="from-chart-2 via-chart-3 to-chart-2 animate-[gradient_3s_ease_infinite] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Innovative solutions showcasing{" "}
            <span className="text-chart-2 font-bold">full-stack development</span> & DevOps
            excellence
          </motion.p>

          {/* See All Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <button className="bg-primary text-primary-foreground hover:shadow-primary/20 group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg">
              <span className="relative z-10">See All Projects</span>
              <ArrowRight className="relative z-10 h-5 w-5" />
              <div className="from-primary to-primary/80 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-card border-border hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Tech Icon Background */}
                <div className="absolute top-6 right-6 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-10">
                  <Icon className="text-foreground h-48 w-48" strokeWidth={0.5} />
                </div>

                {/* Code Pattern SVG */}
                <div className="absolute right-0 bottom-0 opacity-5 transition-all duration-500 group-hover:opacity-10">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="text-foreground">
                    <text
                      x="10"
                      y="30"
                      fontSize="14"
                      fill="currentColor"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      {"<div>"}
                    </text>
                    <text
                      x="20"
                      y="50"
                      fontSize="14"
                      fill="currentColor"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      {"const app ="}
                    </text>
                    <text
                      x="30"
                      y="70"
                      fontSize="14"
                      fill="currentColor"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      {"() => {...}"}
                    </text>
                    <text
                      x="10"
                      y="90"
                      fontSize="14"
                      fill="currentColor"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      {"</div>"}
                    </text>
                    <GitBranch
                      className="absolute right-8 bottom-8 h-16 w-16"
                      strokeWidth={1}
                      opacity={0.3}
                    />
                  </svg>
                </div>

                {/* Image Container */}
                <div className="bg-muted relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                  />
                  <div className="from-card via-card/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Floating Tech Decorations */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex animate-pulse gap-6">
                      <Layers className="text-primary-foreground/80 h-12 w-12" />
                      <Database className="text-primary-foreground/80 h-12 w-12" />
                      <GitBranch className="text-primary-foreground/80 h-12 w-12" />
                    </div>
                  </div>

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

                  {/* Project Number Badge */}
                  <div className="bg-primary/90 text-primary-foreground absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold shadow-lg backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4 p-8">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="text-foreground group-hover:text-primary text-2xl font-bold transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-secondary/80 text-secondary-foreground border-border/50 hover:border-primary/50 rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4">
                    <button className="text-primary flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all group-hover:gap-3">
                      Explore Project
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="via-primary/5 absolute inset-0 translate-x-[-200%] -skew-x-12 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile See All Button */}
        <div className="mt-16 flex justify-center lg:hidden">
          <button className="bg-primary text-primary-foreground hover:shadow-primary/20 flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg">
            See All Projects
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

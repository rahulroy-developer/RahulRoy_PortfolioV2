"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  User,
  Code2,
  Zap,
  Target,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";

// Types
interface ProjectImage {
  id: number;
  url: string;
  alt: string;
}

interface ProjectFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ProjectChallenge {
  id: number;
  challenge: string;
  solution: string;
}

interface ProjectMetric {
  id: number;
  label: string;
  value: string;
  icon: React.ElementType;
}

interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  role: string;
  duration: string;
  team: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  mainImage: string;
  images: ProjectImage[];
  overview: string;
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  outcomes: string[];
  metrics: ProjectMetric[];
  gradient: string;
}

// Static Project Data
const PROJECT_DATA: ProjectData = {
  title: "E-Commerce Platform",
  tagline: "Modern full-stack e-commerce solution with real-time features",
  description:
    "A comprehensive e-commerce platform built with the MERN stack, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
  role: "Full Stack Developer & DevOps Engineer",
  duration: "6 months",
  team: "4 members",
  category: "Full Stack",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Stripe",
    "AWS S3",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ],
  githubUrl: "https://github.com/example/ecommerce-platform",
  liveUrl: "https://ecommerce-demo.example.com",
  mainImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      alt: "Dashboard View",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      alt: "Analytics Panel",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      alt: "Product Management",
    },
  ],
  overview:
    "This e-commerce platform was designed to provide a seamless shopping experience for customers while offering powerful tools for store administrators. The application handles everything from product catalog management to order processing and customer analytics. Built with scalability in mind, it leverages modern cloud infrastructure and containerization to ensure high availability and performance.",
  features: [
    {
      id: 1,
      title: "Real-time Inventory",
      description:
        "Live inventory tracking with automatic stock updates and low-stock alerts to prevent overselling.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Secure Payments",
      description:
        "Integration with Stripe for secure payment processing with support for multiple payment methods.",
      icon: CheckCircle2,
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description:
        "Comprehensive admin panel with sales analytics, order management, and customer insights.",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "Search & Filters",
      description:
        "Advanced product search with filters, sorting, and personalized recommendations.",
      icon: Target,
    },
  ],
  challenges: [
    {
      id: 1,
      challenge:
        "Handling concurrent transactions and preventing race conditions in inventory management",
      solution:
        "Implemented Redis-based distributed locking and optimistic concurrency control to ensure data consistency across multiple server instances.",
    },
    {
      id: 2,
      challenge: "Optimizing image loading and storage for thousands of product images",
      solution:
        "Leveraged AWS S3 with CloudFront CDN for efficient image delivery, implemented lazy loading, and used Next.js Image optimization for automatic responsive images.",
    },
    {
      id: 3,
      challenge: "Ensuring zero-downtime deployments in production environment",
      solution:
        "Set up blue-green deployment strategy using Kubernetes with health checks and automated rollback mechanisms via GitHub Actions CI/CD pipeline.",
    },
  ],
  outcomes: [
    "Reduced page load time by 60% through optimized image delivery and code splitting",
    "Achieved 99.9% uptime with automated scaling and monitoring",
    "Processed 10,000+ transactions in the first month with zero payment failures",
    "Decreased cart abandonment rate by 35% with improved checkout flow",
    "Implemented automated testing achieving 85% code coverage",
  ],
  metrics: [
    {
      id: 1,
      label: "Page Load Time",
      value: "1.2s",
      icon: Zap,
    },
    {
      id: 2,
      label: "Uptime",
      value: "99.9%",
      icon: TrendingUp,
    },
    {
      id: 3,
      label: "Transactions",
      value: "10K+",
      icon: Award,
    },
    {
      id: 4,
      label: "Code Coverage",
      value: "85%",
      icon: CheckCircle2,
    },
  ],
  gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
};

// Feature Card Component
interface FeatureCardProps {
  feature: ProjectFeature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card border-border hover:border-primary/30 h-full rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg">
        <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-3">
          <Icon className="text-primary h-6 w-6" />
        </div>
        <h3 className="text-foreground mb-2 text-xl font-bold">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

// Challenge Card Component
interface ChallengeCardProps {
  challenge: ProjectChallenge;
  index: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border-border rounded-2xl border p-6"
    >
      <div className="space-y-4">
        <div>
          <div className="text-primary mb-2 text-sm font-bold tracking-wider uppercase">
            Challenge
          </div>
          <p className="text-foreground leading-relaxed font-semibold">{challenge.challenge}</p>
        </div>
        <div>
          <div className="text-chart-3 mb-2 text-sm font-bold tracking-wider uppercase">
            Solution
          </div>
          <p className="text-muted-foreground leading-relaxed">{challenge.solution}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const ProjectDetailPage: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="from-primary/5 to-chart-3/5 absolute inset-0 bg-gradient-to-br via-transparent" />

        <div className="relative px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <button className="text-muted-foreground hover:text-foreground group flex items-center gap-2 transition-colors">
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">Back to Projects</span>
              </button>
            </motion.div>

            {/* Project Header */}
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-primary/10 border-primary/20 text-primary inline-block rounded-full border px-4 py-1.5 text-sm font-bold">
                  {PROJECT_DATA.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-foreground mb-4 text-4xl font-black md:text-6xl">
                {PROJECT_DATA.title}
              </h1>
              <p className="text-muted-foreground mb-8 max-w-3xl text-xl md:text-2xl">
                {PROJECT_DATA.tagline}
              </p>

              {/* Project Meta */}
              <div className="mb-8 flex flex-wrap gap-6">
                <div className="text-muted-foreground flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{PROJECT_DATA.role}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">{PROJECT_DATA.duration}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  <span className="text-sm font-medium">{PROJECT_DATA.team}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={PROJECT_DATA.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all hover:shadow-lg"
                >
                  <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
                  View Live Demo
                </a>
                <a
                  href={PROJECT_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border-border text-foreground hover:border-primary/50 inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition-all"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-border relative overflow-hidden rounded-3xl border shadow-2xl"
            >
              <img
                src={PROJECT_DATA.mainImage}
                alt={PROJECT_DATA.title}
                className="h-auto w-full"
              />
              <div className="from-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-8 text-3xl font-black">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {PROJECT_DATA.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-secondary text-secondary-foreground border-border hover:border-primary/50 rounded-lg border px-4 py-2 font-semibold transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-6 text-3xl font-black">Project Overview</h2>
            <div className="bg-card border-border rounded-2xl border p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {PROJECT_DATA.overview}
              </p>
            </div>
          </motion.section>

          {/* Key Features */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECT_DATA.features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </section>

          {/* Project Images */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black"
            >
              Project Screenshots
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PROJECT_DATA.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-border group relative overflow-hidden rounded-2xl border shadow-lg transition-shadow hover:shadow-xl"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="from-background/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-foreground font-semibold">{image.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black"
            >
              Challenges & Solutions
            </motion.h2>
            <div className="space-y-6">
              {PROJECT_DATA.challenges.map((challenge, index) => (
                <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black"
            >
              Outcomes & Impact
            </motion.h2>
            <div className="bg-card border-border rounded-2xl border p-8">
              <ul className="space-y-4">
                {PROJECT_DATA.outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-chart-3 mt-0.5 h-6 w-6 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* Metrics */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black"
            >
              Key Metrics
            </motion.h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {PROJECT_DATA.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border-border rounded-2xl border p-6 text-center shadow-lg"
                  >
                    <Icon className="text-primary mx-auto mb-3 h-8 w-8" />
                    <div className="text-foreground mb-1 text-3xl font-black">{metric.value}</div>
                    <div className="text-muted-foreground text-sm font-semibold">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="from-primary/10 via-chart-2/10 to-chart-3/10 border-primary/20 rounded-3xl border bg-gradient-to-br p-12 text-center"
          >
            <Sparkles className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="text-foreground mb-4 text-3xl font-black">
              Interested in This Project?
            </h3>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Check out the live demo or explore the source code on GitHub to see how it was built.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PROJECT_DATA.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold transition-all hover:shadow-lg"
              >
                <ExternalLink className="h-5 w-5" />
                View Live Demo
              </a>
              <a
                href={PROJECT_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border-border text-foreground hover:border-primary/50 inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 font-bold transition-all"
              >
                <Github className="h-5 w-5" />
                View Source Code
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

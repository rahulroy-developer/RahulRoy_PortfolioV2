"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Code,
  Layers,
  Sparkles,
  Zap,
  Rocket,
  LucideIcon,
} from "lucide-react";

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

// Animated Connection Lines
const ConnectionLines = ({ index }: { index: number }) => (
  <svg
    className="pointer-events-none absolute top-0 left-0 hidden h-full w-full md:block"
    style={{ zIndex: 0 }}
  >
    <motion.path
      d={`M 24 ${index * 350 + 100} Q 100 ${index * 350 + 150}, 200 ${index * 350 + 200}`}
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      strokeDasharray="5,5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 1.5, delay: index * 0.2 }}
    />
  </svg>
);

// Type definitions
interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  colorClass: string;
  icon: LucideIcon;
}

// Experience data
const experiences: Experience[] = [
  {
    id: 1,
    company: "Company C",
    role: "Full Stack Developer",
    period: "2023 – Present",
    location: "Remote",
    current: true,
    description: "Leading full-stack product development with focus on scalable architecture",
    highlights: [
      "Full-stack product development",
      "Architecture & system design",
      "Developed high-impact features in production",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    colorClass: "from-chart-2 to-chart-3",
    icon: Rocket,
  },
  {
    id: 2,
    company: "Company B",
    role: "Full Stack Developer",
    period: "2022 – 2023",
    location: "Hybrid",
    current: false,
    description: "Built modern UI systems and led engineering initiatives",
    highlights: [
      "Created UI systems with React/Next.js",
      "API design & integrations",
      "Led small engineering initiatives",
    ],
    technologies: ["React", "Next.js", "REST APIs", "MongoDB", "Docker"],
    colorClass: "from-chart-4 to-chart-1",
    icon: Zap,
  },
  {
    id: 3,
    company: "Company A",
    role: "Full Stack Developer",
    period: "2021 – 2022",
    location: "On-site",
    current: false,
    description: "Contributed to scalable web applications with performance focus",
    highlights: [
      "Worked on scalable web applications",
      "Built reusable components",
      "Improved backend performance",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "Redis"],
    colorClass: "from-chart-5 to-chart-1",
    icon: Sparkles,
  },
];

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = exp.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <ConnectionLines index={index} />

      {/* Enhanced Timeline connector with gradient */}
      <div className="via-chart-2/40 absolute top-0 bottom-0 left-0 hidden w-px bg-gradient-to-b from-transparent to-transparent md:block" />

      {/* Animated Timeline dot */}
      <motion.div
        className="bg-card border-chart-2 absolute top-8 left-0 z-10 -ml-1.5 hidden h-3 w-3 rounded-full border-2 shadow-lg md:block"
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            "0 0 0 0 hsl(var(--chart-2) / 0.4)",
            "0 0 0 8px hsl(var(--chart-2) / 0)",
            "0 0 0 0 hsl(var(--chart-2) / 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="bg-chart-2 absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <div className="mb-12 last:mb-0 md:pl-12">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="group bg-card border-border relative overflow-hidden rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          {/* Animated background gradient on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${exp.colorClass} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
          />

          {/* Enhanced gradient accent with animation */}
          <motion.div
            className={`absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b ${exp.colorClass} rounded-l-2xl`}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Floating icon decoration */}
          <motion.div
            className="absolute -top-8 -right-8 opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <IconComponent className="text-foreground h-32 w-32" />
          </motion.div>

          {/* Enhanced current badge */}
          {exp.current && (
            <motion.div
              className="absolute -top-3 right-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="from-chart-2 via-chart-3 to-chart-2 text-primary-foreground inline-flex animate-[gradient_3s_ease_infinite] items-center gap-1.5 rounded-full bg-gradient-to-r bg-[length:200%_100%] px-4 py-1.5 text-xs font-bold shadow-lg">
                <TrendingUp className="h-3 w-3" />
                Current Role
              </span>
            </motion.div>
          )}

          {/* Header */}
          <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-4">
                <motion.div
                  className={`rounded-xl bg-gradient-to-br p-3 ${exp.colorClass} shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="text-primary-foreground h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-foreground group-hover:from-chart-2 group-hover:to-chart-3 text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-base font-medium">{exp.role}</p>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex flex-col gap-2 text-sm">
              <motion.div
                className="bg-muted flex items-center gap-2 rounded-lg px-3 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="text-chart-2 h-4 w-4" />
                <span className="font-medium">{exp.period}</span>
              </motion.div>
              <motion.div
                className="bg-muted flex items-center gap-2 rounded-lg px-3 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="text-chart-2 h-4 w-4" />
                <span>{exp.location}</span>
              </motion.div>
            </div>
          </div>

          {/* Description with better spacing */}
          <p className="text-muted-foreground relative z-10 mb-6 text-lg leading-relaxed">
            {exp.description}
          </p>

          {/* Highlights with better animations */}
          <div className="relative z-10 mb-6">
            <div className="mb-4 flex items-center gap-2">
              <Layers className="text-chart-2 h-5 w-5" />
              <span className="text-foreground text-sm font-bold tracking-wider uppercase">
                Key Contributions
              </span>
            </div>
            <ul className="space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + 0.1 * idx }}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground group/item flex items-start gap-3"
                >
                  <motion.span
                    className={`mt-2 h-2 w-2 rounded-full bg-gradient-to-r ${exp.colorClass} flex-shrink-0`}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover/item:text-foreground leading-relaxed transition-colors">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Enhanced Technologies */}
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-2">
              <Code className="text-chart-2 h-5 w-5" />
              <span className="text-foreground text-sm font-bold tracking-wider uppercase">
                Tech Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.05 * idx }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-secondary text-secondary-foreground border-border hover:border-chart-2 cursor-default rounded-lg border px-4 py-2 text-sm font-semibold transition-all hover:shadow-md"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-background relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-5xl">
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
            <span className="text-sm font-bold tracking-wide uppercase">Professional Journey</span>
          </motion.div>

          <motion.h2
            className="text-foreground mb-6 text-5xl font-black md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Work{" "}
            <span className="from-chart-2 via-chart-3 to-chart-2 animate-[gradient_3s_ease_infinite] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building scalable solutions and leading initiatives across the full stack with{" "}
            <span className="text-chart-2 font-bold">3+ years</span> of experience
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Enhanced Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              label: "Years Experience",
              value: "3+",
              icon: TrendingUp,
              colorClass: "from-chart-2 to-chart-3",
            },
            {
              label: "Companies",
              value: "3",
              icon: Briefcase,
              colorClass: "from-chart-4 to-chart-1",
            },
            {
              label: "Tech Stack",
              value: "10+",
              icon: Code,
              colorClass: "from-chart-5 to-chart-1",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border-border group relative overflow-hidden rounded-2xl border p-8 text-center shadow-lg"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.colorClass} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <stat.icon
                  className={`mx-auto mb-4 h-10 w-10 bg-gradient-to-r ${stat.colorClass} bg-clip-text text-transparent`}
                  strokeWidth={2.5}
                />
              </motion.div>
              <div className="text-foreground mb-2 text-4xl font-black">{stat.value}</div>
              <div className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

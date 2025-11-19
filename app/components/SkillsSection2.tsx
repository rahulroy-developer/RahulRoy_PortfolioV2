"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Sparkles, ArrowRight, Zap } from "lucide-react";

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

// Floating Particles Component
const FloatingParticles = () => (
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

// Skills data constant
const SKILLS = [
  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 95,
    category: "Frontend",
    gradient: "from-cyan-400 to-blue-500",
    description: "Building interactive UIs",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 90,
    category: "Framework",
    gradient: "from-gray-700 to-gray-900",
    description: "Full-stack React framework",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 88,
    category: "Backend",
    gradient: "from-green-400 to-green-600",
    description: "Server-side JavaScript",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 92,
    category: "Language",
    gradient: "from-yellow-400 to-yellow-600",
    description: "Core programming language",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 85,
    category: "Language",
    gradient: "from-blue-500 to-blue-700",
    description: "Type-safe JavaScript",
  },
  {
    id: 6,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 80,
    category: "Database",
    gradient: "from-green-500 to-green-700",
    description: "NoSQL database",
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: 78,
    category: "Database",
    gradient: "from-blue-600 to-indigo-600",
    description: "Relational database",
  },
  {
    id: 8,
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 82,
    category: "DevOps",
    gradient: "from-blue-400 to-blue-600",
    description: "Containerization platform",
  },
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="bg-card border-border hover:border-primary/30 relative overflow-hidden rounded-3xl border p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        {/* Animated background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        />

        {/* Gradient accent bar */}
        <motion.div
          className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${skill.gradient} rounded-t-3xl`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${skill.gradient}`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Large background icon */}
        <div className="absolute -right-8 -bottom-8 opacity-5 transition-all duration-500 group-hover:opacity-10">
          <motion.img
            src={skill.icon}
            alt=""
            className="h-48 w-48 grayscale filter"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon container */}
          <motion.div
            className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-20 blur-xl`}
            />
            <div className="bg-background border-border relative rounded-2xl border p-6 shadow-lg">
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Orbiting particles */}
            <motion.div
              className={`absolute h-2 w-2 rounded-full bg-gradient-to-r ${skill.gradient}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "70px 0px" }}
            />
          </motion.div>

          {/* Skill name */}
          <h3
            className={`text-foreground mb-2 text-2xl font-bold group-hover:bg-gradient-to-r ${skill.gradient} transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent`}
          >
            {skill.name}
          </h3>

          {/* Category badge */}
          <div className="mb-4">
            <span className="bg-secondary text-secondary-foreground inline-block rounded-full px-4 py-1 text-sm font-semibold">
              {skill.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{skill.description}</p>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-medium">Proficiency</span>
              <motion.span
                className={`bg-gradient-to-r font-bold ${skill.gradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="bg-muted h-2 overflow-hidden rounded-full">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.gradient} relative rounded-full`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
          style={{ zIndex: -1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function SkillsSection2() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const featuredSkills = SKILLS.slice(0, 5);

  return (
    <section className="bg-background relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
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
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-bold tracking-wide uppercase">Tech Stack</span>
          </motion.div>

          <motion.h2
            className="text-foreground mb-6 text-5xl font-black md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Skills &{" "}
            <span className="from-chart-2 via-chart-3 to-chart-2 animate-[gradient_3s_ease_infinite] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mastering modern technologies to build{" "}
            <span className="text-chart-2 font-bold">scalable</span> and{" "}
            <span className="text-chart-3 font-bold">performant</span> applications
          </motion.p>

          {/* See All Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <button className="bg-primary text-primary-foreground hover:shadow-primary/20 group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg">
              <span className="relative z-10">See All Skills</span>
              <ArrowRight className="relative z-10 h-5 w-5" />
              <div className="from-primary to-primary/80 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Mobile See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center lg:hidden"
        >
          <button className="bg-primary text-primary-foreground hover:shadow-primary/20 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg">
            See All Skills
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              label: "Technologies",
              value: "8+",
              icon: Code2,
              gradient: "from-chart-2 to-chart-3",
            },
            {
              label: "Years Coding",
              value: "3+",
              icon: Zap,
              gradient: "from-chart-4 to-chart-1",
            },
            {
              label: "Projects Built",
              value: "20+",
              icon: Sparkles,
              gradient: "from-chart-5 to-chart-1",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border-border group relative overflow-hidden rounded-2xl border p-8 text-center shadow-lg"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <stat.icon
                  className={`mx-auto mb-4 h-10 w-10 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
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

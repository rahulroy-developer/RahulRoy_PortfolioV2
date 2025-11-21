"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  Code2,
  Cloud,
  Database,
  GitBranch,
  Rocket,
  Award,
  Target,
  Heart,
  Coffee,
} from "lucide-react";

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

// Expertise areas
const EXPERTISE = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern frameworks and best practices",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "DevOps Engineering",
    description:
      "Implementing CI/CD pipelines, containerization, and cloud infrastructure automation",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting scalable database solutions with SQL and NoSQL technologies",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GitBranch,
    title: "System Architecture",
    description: "Designing robust, scalable, and maintainable software architectures",
    gradient: "from-orange-500 to-red-500",
  },
];

// Values
const VALUES = [
  { icon: Rocket, label: "Innovation", gradient: "from-chart-2 to-chart-3" },
  { icon: Target, label: "Precision", gradient: "from-chart-4 to-chart-1" },
  { icon: Heart, label: "Passion", gradient: "from-chart-5 to-chart-1" },
  { icon: Award, label: "Excellence", gradient: "from-chart-2 to-chart-4" },
];

const ExpertiseCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="bg-card border-border hover:border-primary/30 relative overflow-hidden rounded-3xl border p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        />

        {/* Top gradient bar */}
        <motion.div
          className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${item.gradient}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Background icon */}
        <div className="absolute -right-4 -bottom-4 opacity-5 transition-all duration-500 group-hover:opacity-10">
          <Icon className="text-foreground h-32 w-32" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className={`inline-flex rounded-2xl bg-gradient-to-br p-4 ${item.gradient} mb-6 shadow-lg`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="h-8 w-8 text-white" strokeWidth={2} />
          </motion.div>

          <h3
            className={`text-foreground mb-3 text-2xl font-bold group-hover:bg-gradient-to-r ${item.gradient} transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent`}
          >
            {item.title}
          </h3>

          <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
        </div>

        {/* Shine effect */}
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 translate-x-[-200%] -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function AboutSection() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

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
            <User className="h-5 w-5" />
            <span className="text-sm font-bold tracking-wide uppercase">Get To Know Me</span>
          </motion.div>

          <motion.h2
            className="text-foreground mb-6 text-5xl font-black md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About{" "}
            <span className="from-chart-2 via-chart-3 to-chart-2 animate-[gradient_3s_ease_infinite] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate about crafting exceptional digital experiences through code and automation
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mb-20">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-card border-border relative overflow-hidden rounded-3xl border p-12 shadow-2xl"
          >
            {/* Gradient accent */}
            <motion.div
              className="from-chart-2 via-chart-3 to-chart-4 absolute top-0 left-0 h-full w-2 bg-gradient-to-b"
              initial={{ height: 0 }}
              animate={isContentInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                className="h-full w-full"
              />
            </div>

            <div className="relative z-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-foreground mb-4 flex items-center gap-3 text-3xl font-bold">
                  <span className="from-chart-2 to-chart-3 inline-block bg-gradient-to-r bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <span className="text-muted-foreground">&</span>
                  <span className="from-chart-4 to-chart-5 inline-block bg-gradient-to-r bg-clip-text text-transparent">
                    DevOps Engineer
                  </span>
                </h3>
              </motion.div>

              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I'm a passionate developer who loves building scalable web applications and
                automating infrastructure. With expertise spanning both frontend and backend
                development, combined with DevOps practices, I bring a holistic approach to software
                engineering.
              </motion.p>

              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                My journey in tech has been driven by curiosity and a constant desire to learn. I
                thrive on solving complex problems, optimizing performance, and creating seamless
                user experiences. Whether it's architecting cloud infrastructure or crafting elegant
                UIs, I'm committed to delivering high-quality solutions that make a real impact.
              </motion.p>

              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community. I believe
                in continuous learning and staying ahead of the curve in this ever-evolving tech
                landscape.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { label: "Years Experience", value: "3+" },
                  { label: "Projects Delivered", value: "20+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Coffee Consumed", value: "∞" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-xl p-4 text-center">
                    <div className="text-foreground mb-1 text-3xl font-black">{stat.value}</div>
                    <div className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-center"
          >
            <h3 className="text-foreground mb-4 text-4xl font-black">Areas of Expertise</h3>
            <p className="text-muted-foreground text-lg">
              Specialized skills that drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {EXPERTISE.map((item, index) => (
              <ExpertiseCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h3 className="text-foreground mb-4 text-4xl font-black">Core Values</h3>
            <p className="text-muted-foreground text-lg">Principles that guide my work</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card border-border group relative overflow-hidden rounded-2xl border p-8 text-center shadow-lg"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon
                      className={`mx-auto mb-4 h-10 w-10 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                  <div className="text-foreground text-lg font-bold">{value.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

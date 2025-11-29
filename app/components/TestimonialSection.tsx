"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, Briefcase } from "lucide-react";

// Types
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
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

// Animated SVG Background Component
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

// Floating Particles Component
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

// Testimonials Data
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Working with John was an absolute pleasure. His expertise in full-stack development and DevOps helped us scale our platform to handle 10x traffic. The code quality and documentation were exceptional.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "John's DevOps skills are top-notch. He set up our entire CI/CD pipeline and reduced deployment time by 80%. His attention to detail and problem-solving abilities are remarkable. Highly recommended!",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "CloudNine Apps",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "I've worked with many developers, but John stands out. He understands both the technical and business aspects perfectly. Our project was delivered ahead of schedule with zero bugs. Simply amazing!",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content:
      "John transformed our MVP into a production-ready application. His knowledge of React, Node.js, and AWS is outstanding. Communication was smooth, and he always went the extra mile. 10/10 would hire again!",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  // Duplicate for infinite scroll
  {
    id: 5,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Working with John was an absolute pleasure. His expertise in full-stack development and DevOps helped us scale our platform to handle 10x traffic. The code quality and documentation were exceptional.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "John's DevOps skills are top-notch. He set up our entire CI/CD pipeline and reduced deployment time by 80%. His attention to detail and problem-solving abilities are remarkable. Highly recommended!",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 7,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "CloudNine Apps",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "I've worked with many developers, but John stands out. He understands both the technical and business aspects perfectly. Our project was delivered ahead of schedule with zero bugs. Simply amazing!",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 8,
    name: "David Park",
    role: "Founder",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content:
      "John transformed our MVP into a production-ready application. His knowledge of React, Node.js, and AWS is outstanding. Communication was smooth, and he always went the extra mile. 10/10 would hire again!",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
];

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="mx-4 w-[400px] flex-shrink-0 py-8">
      <motion.div
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-card border-border group relative h-full overflow-hidden rounded-3xl border p-8 shadow-xl"
      >
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        />

        {/* Top Accent Bar */}
        <div
          className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${testimonial.gradient}`}
        />

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
          <Quote className="text-foreground h-20 w-20" fill="currentColor" />
        </div>

        <div className="relative z-10 space-y-6">
          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <p className="text-muted-foreground text-base leading-relaxed">"{testimonial.content}"</p>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r ${testimonial.gradient} opacity-20`} />

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-70`}
              />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="border-border relative h-14 w-14 rounded-full border-2 object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-foreground text-lg font-bold">{testimonial.name}</h4>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <span>{testimonial.role}</span>
                <span className="bg-muted-foreground h-1 w-1 rounded-full" />
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="via-primary/5 absolute inset-0 translate-x-[-200%] -skew-x-12 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
        </div>
      </motion.div>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonialSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [isPaused, setIsPaused] = React.useState(false);

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
            <Star className="h-5 w-5" />
            <span className="text-sm font-bold tracking-wide uppercase">Testimonials</span>
          </motion.div>

          <motion.h2
            className="text-foreground mb-6 text-5xl font-black md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What Clients{" "}
            <span className="from-chart-2 via-chart-3 to-chart-2 animate-[gradient_3s_ease_infinite] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't just take my word for it. Here's what clients and colleagues have to say about
            working together.
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent" />
          <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l to-transparent" />

          {/* Scrolling Container */}
          <div
            className="overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex will-change-transform"
              animate={{
                x: isPaused ? undefined : [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{
                willChange: isPaused ? "auto" : "transform",
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              label: "Happy Clients",
              value: "30+",
              gradient: "from-chart-2 to-chart-3",
            },
            {
              label: "5-Star Reviews",
              value: "100%",
              gradient: "from-chart-4 to-chart-1",
            },
            {
              label: "Projects Delivered",
              value: "50+",
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
};

export default TestimonialSection;

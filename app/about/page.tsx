"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Coffee,
  Music,
  BookOpen,
  Globe,
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Calendar,
  TrendingUp,
  Target,
  Zap,
  Users,
  Rocket,
  Sparkles,
  Download,
} from "lucide-react";

// Types
interface Stat {
  id: number;
  label: string;
  value: string;
  icon: React.ElementType;
  gradient: string;
}

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education";
  current?: boolean;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

interface Interest {
  id: number;
  name: string;
  icon: React.ElementType;
  description: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.ElementType;
  color: string;
}

interface AboutData {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  longBio: string[];
  stats: Stat[];
  timeline: TimelineItem[];
  values: Value[];
  interests: Interest[];
  services: Service[];
  socialLinks: SocialLink[];
}

// Static About Data
const ABOUT_DATA: AboutData = {
  name: "John Doe",
  role: "Full Stack Developer & DevOps Engineer",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  bio: "Passionate full-stack developer and DevOps engineer with 3+ years of experience building scalable web applications and cloud infrastructure. I love solving complex problems and creating seamless user experiences.",
  longBio: [
    "I'm a passionate technologist who thrives at the intersection of development and operations. My journey in tech started with a curiosity about how things work under the hood, which led me to explore both frontend elegance and backend robustness.",
    "Over the years, I've worked on diverse projects ranging from e-commerce platforms to real-time data analytics systems. I believe in writing clean, maintainable code and building systems that scale. My approach combines modern development practices with DevOps principles to deliver reliable, high-performance solutions.",
    "Beyond coding, I'm an advocate for continuous learning and knowledge sharing. I regularly contribute to open-source projects, write technical articles, and mentor aspiring developers. I believe that technology should be accessible and empowering for everyone.",
    "When I'm not coding, you'll find me exploring new technologies, attending tech meetups, or working on side projects that solve real-world problems. I'm always excited about the next challenge and the opportunity to learn something new.",
  ],
  stats: [
    {
      id: 1,
      label: "Years Experience",
      value: "3+",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      label: "Projects Completed",
      value: "50+",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      label: "Happy Clients",
      value: "30+",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      label: "Technologies",
      value: "65+",
      icon: Code2,
      gradient: "from-orange-500 to-red-500",
    },
  ],
  timeline: [
    {
      id: 1,
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      organization: "Tech Corp Inc.",
      description:
        "Leading development of cloud-native applications and implementing DevOps practices. Managing a team of 5 developers and architecting scalable solutions.",
      type: "work",
      current: true,
    },
    {
      id: 2,
      year: "2022 - 2023",
      title: "Full Stack Developer",
      organization: "StartUp XYZ",
      description:
        "Developed MERN stack applications, implemented CI/CD pipelines, and reduced deployment time by 60%. Built RESTful APIs and responsive UIs.",
      type: "work",
    },
    {
      id: 3,
      year: "2021 - 2022",
      title: "Junior Developer",
      organization: "Digital Solutions Ltd.",
      description:
        "Worked on frontend development using React and backend services with Node.js. Participated in code reviews and agile ceremonies.",
      type: "work",
    },
    {
      id: 4,
      year: "2021",
      title: "Bachelor's in Computer Science",
      organization: "University of Technology",
      description:
        "Graduated with honors. Specialized in web development and cloud computing. Led the university coding club.",
      type: "education",
    },
    {
      id: 5,
      year: "2020",
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      description:
        "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in cloud architecture and best practices.",
      type: "education",
    },
  ],
  values: [
    {
      id: 1,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and approaches to solve problems in creative ways.",
      icon: Sparkles,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 2,
      title: "Excellence",
      description: "Committed to delivering high-quality work and continuously improving my craft.",
      icon: Award,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Collaboration",
      description:
        "Believing in the power of teamwork and open communication to achieve great results.",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "Impact",
      description:
        "Focused on creating solutions that make a real difference for users and businesses.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
    },
  ],
  interests: [
    {
      id: 1,
      name: "Open Source",
      icon: Code2,
      description: "Contributing to open-source projects",
    },
    {
      id: 2,
      name: "Reading",
      icon: BookOpen,
      description: "Tech blogs and sci-fi novels",
    },
    {
      id: 3,
      name: "Music",
      icon: Music,
      description: "Playing guitar and producing beats",
    },
    {
      id: 4,
      name: "Travel",
      icon: Globe,
      description: "Exploring new places and cultures",
    },
    {
      id: 5,
      name: "Coffee",
      icon: Coffee,
      description: "Brewing the perfect cup",
    },
    {
      id: 6,
      name: "Fitness",
      icon: TrendingUp,
      description: "Gym workouts and running",
    },
  ],
  services: [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "End-to-end web application development with modern frameworks and best practices.",
      icon: Code2,
      features: [
        "MERN Stack Applications",
        "RESTful & GraphQL APIs",
        "Real-time Features",
        "Database Design",
      ],
    },
    {
      id: 2,
      title: "DevOps & Cloud",
      description: "Cloud infrastructure setup, CI/CD pipelines, and deployment automation.",
      icon: Zap,
      features: [
        "Docker & Kubernetes",
        "AWS/Azure/GCP",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
    },
    {
      id: 3,
      title: "Consulting & Mentoring",
      description: "Technical consulting and mentoring for teams and individual developers.",
      icon: Users,
      features: ["Code Reviews", "Architecture Planning", "Team Training", "Best Practices"],
    },
  ],
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      id: 4,
      name: "Email",
      url: "mailto:john.doe@example.com",
      icon: Mail,
      color: "hover:text-red-500",
    },
  ],
};

// Timeline Item Component
interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="from-border via-primary/40 to-border absolute top-0 bottom-0 left-0 hidden w-px bg-gradient-to-b md:block" />

      {/* Timeline dot */}
      <motion.div
        className={`absolute top-8 left-0 z-10 -ml-1.5 hidden h-3 w-3 rounded-full border-2 shadow-lg md:block ${
          item.current ? "border-primary bg-primary" : "border-chart-2 bg-card"
        }`}
        animate={
          item.current
            ? {
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 hsl(var(--primary) / 0.4)",
                  "0 0 0 8px hsl(var(--primary) / 0)",
                  "0 0 0 0 hsl(var(--primary) / 0)",
                ],
              }
            : {}
        }
        transition={item.current ? { duration: 2, repeat: Infinity } : {}}
      />

      <div className="mb-12 last:mb-0 md:pl-12">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="group bg-card border-border hover:border-primary/30 relative overflow-hidden rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          {/* Gradient accent */}
          <div
            className={`absolute top-0 left-0 h-full w-1.5 rounded-l-2xl ${
              item.type === "work"
                ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                : "bg-gradient-to-b from-purple-500 to-pink-500"
            }`}
          />

          {/* Current badge */}
          {item.current && (
            <div className="absolute -top-3 right-8">
              <span className="from-primary via-chart-3 to-primary text-primary-foreground inline-flex animate-[gradient_3s_ease_infinite] items-center gap-1 rounded-full bg-gradient-to-r bg-[length:200%_100%] px-4 py-1.5 text-xs font-bold shadow-lg">
                <TrendingUp className="h-3 w-3" />
                Current
              </span>
            </div>
          )}

          <div className="relative z-10">
            {/* Year & Type Badge */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-muted-foreground text-sm font-bold">{item.year}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  item.type === "work"
                    ? "bg-blue-500/10 text-blue-500"
                    : "bg-purple-500/10 text-purple-500"
                }`}
              >
                {item.type === "work" ? "Work" : "Education"}
              </span>
            </div>

            {/* Title & Organization */}
            <h3 className="text-foreground mb-1 text-xl font-bold">{item.title}</h3>
            <p className="text-primary mb-3 font-semibold">{item.organization}</p>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Service Card Component
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className="bg-card border-border hover:border-primary/30 h-full rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
      >
        <div className="mb-6">
          <div className="bg-primary/10 mb-4 inline-flex rounded-2xl p-4">
            <Icon className="text-primary h-8 w-8" />
          </div>
          <h3 className="text-foreground mb-3 text-2xl font-bold">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </div>

        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-muted-foreground flex items-center gap-3">
              <div className="bg-primary h-1.5 w-1.5 flex-shrink-0 rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const filteredTimeline = ABOUT_DATA.timeline.filter((item) =>
    activeTab === "experience" ? item.type === "work" : item.type === "education"
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="from-primary/5 to-chart-3/5 absolute inset-0 bg-gradient-to-br via-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          >
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-md">
                {/* Gradient border effect */}
                <div className="from-primary via-chart-2 to-chart-3 absolute inset-0 rounded-3xl bg-gradient-to-br opacity-30 blur-2xl" />
                <div className="bg-card border-primary/20 relative overflow-hidden rounded-3xl border-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt={ABOUT_DATA.name}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="bg-primary/10 border-primary/20 text-primary mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-bold">
                  👋 Hello, I'm
                </span>
                <h1 className="text-foreground mb-4 text-4xl font-black md:text-6xl">
                  {ABOUT_DATA.name}
                </h1>
                <h2 className="from-primary via-chart-2 to-chart-3 mb-6 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {ABOUT_DATA.role}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {ABOUT_DATA.bio}
                </p>

                {/* Quick Info */}
                <div className="mb-8 flex flex-col gap-3">
                  <div className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="text-primary h-5 w-5" />
                    <span>{ABOUT_DATA.location}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2">
                    <Mail className="text-primary h-5 w-5" />
                    <a
                      href={`mailto:${ABOUT_DATA.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {ABOUT_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all hover:shadow-lg">
                    <Download className="h-5 w-5" />
                    Download CV
                  </button>
                  <button className="bg-card border-border text-foreground hover:border-primary/50 inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition-all">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </button>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-4">
                  {ABOUT_DATA.socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`bg-card border-border text-muted-foreground rounded-xl border p-3 transition-all ${social.color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ABOUT_DATA.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border-border group relative overflow-hidden rounded-2xl border p-6 text-center shadow-lg"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />
                  <Icon
                    className={`mx-auto mb-3 h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    strokeWidth={2.5}
                  />
                  <div className="text-foreground mb-1 text-3xl font-black">{stat.value}</div>
                  <div className="text-muted-foreground text-sm font-semibold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {/* My Story */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black md:text-4xl"
            >
              My Story
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {ABOUT_DATA.longBio.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border-border rounded-2xl border p-6"
                >
                  <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-foreground mb-6 text-3xl font-black md:text-4xl">My Journey</h2>
              {/* Tab Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    activeTab === "experience"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card border-border text-muted-foreground hover:border-primary/50 border"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    activeTab === "education"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card border-border text-muted-foreground hover:border-primary/50 border"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                  Education
                </button>
              </div>
            </motion.div>

            <div className="relative">
              {filteredTimeline.map((item, index) => (
                <TimelineItemComponent key={item.id} item={item} index={index} />
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black md:text-4xl"
            >
              Core Values
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ABOUT_DATA.values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-card border-border group hover:border-primary/30 rounded-2xl border p-6 text-center shadow-lg transition-all"
                  >
                    <div
                      className={`inline-flex bg-gradient-to-br p-4 ${value.gradient} mb-4 rounded-2xl`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-foreground mb-2 text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Interests */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black md:text-4xl"
            >
              Beyond Code
            </motion.h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {ABOUT_DATA.interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border-border group hover:border-primary/30 rounded-2xl border p-6 text-center shadow-lg transition-all"
                  >
                    <Icon className="text-primary mx-auto mb-3 h-8 w-8" />
                    <h4 className="text-foreground mb-1 font-bold">{interest.name}</h4>
                    <p className="text-muted-foreground text-xs">{interest.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Services */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-8 text-3xl font-black md:text-4xl"
            >
              What I Offer
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {ABOUT_DATA.services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
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
            <Heart className="text-primary mx-auto mb-4 h-12 w-12" />
            <h3 className="text-foreground mb-4 text-3xl font-black">Let's Work Together</h3>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              I'm always interested in hearing about new projects and opportunities. Whether you
              have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold transition-all hover:shadow-lg">
                <Mail className="h-5 w-5" />
                Send Message
              </button>
              <button className="bg-card border-border text-foreground hover:border-primary/50 inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 font-bold transition-all">
                <Download className="h-5 w-5" />
                Download Resume
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

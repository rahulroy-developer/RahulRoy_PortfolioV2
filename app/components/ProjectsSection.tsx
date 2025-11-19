import React from "react";
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
} from "lucide-react";

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

const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="bg-background relative min-h-screen w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full blur-3xl" />
        <div
          className="bg-accent/5 absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="bg-secondary/5 absolute top-1/2 left-1/3 h-64 w-64 animate-pulse rounded-full blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="bg-primary/10 border-primary/20 mb-4 inline-block rounded-full border px-4 py-2">
              <span className="text-primary text-sm font-semibold">PORTFOLIO</span>
            </div>
            <h2 className="text-foreground from-foreground via-foreground to-foreground/60 mb-4 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent lg:text-7xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Innovative solutions showcasing full-stack development & DevOps excellence
            </p>
          </div>

          <button className="bg-primary text-primary-foreground hover:shadow-primary/20 group relative hidden items-center gap-2 overflow-hidden rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg lg:flex">
            <span className="relative z-10">See All Projects</span>
            <ArrowRight className="relative z-10 h-5 w-5" />
            <div className="from-primary to-primary/80 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>

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

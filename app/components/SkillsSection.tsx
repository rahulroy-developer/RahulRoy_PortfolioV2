import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      color: "from-[#61DAFB]/20 to-[#61DAFB]/5",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "from-foreground/20 to-foreground/5",
    },
    {
      name: "Node.js",
      icon: "◆",
      color: "from-[#339933]/20 to-[#339933]/5",
    },
    {
      name: "JavaScript",
      icon: "JS",
      color: "from-[#F7DF1E]/20 to-[#F7DF1E]/5",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "from-[#3178C6]/20 to-[#3178C6]/5",
    },
  ];

  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto">
        {/* Header with View All Button */}
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Technologies I work with to build modern web applications
            </p>
          </div>

          {/* View All Button - Always visible on top right */}
          <Button
            variant="outline"
            size="lg"
            className="group border-border bg-card flex items-center gap-2 shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
          >
            <span className="hidden sm:inline">View All</span>
            <span className="sm:hidden">All</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Single Card with All Skills */}
        <div className="border-border from-card via-card to-accent/5 relative rounded-2xl border bg-gradient-to-br p-8 shadow-lg sm:p-12">
          {/* Decorative elements */}
          <div className="from-primary/10 absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br to-transparent blur-2xl" />
          <div className="from-chart-1/10 absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-gradient-to-tr to-transparent blur-2xl" />

          {/* Skills Grid inside the card */}
          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center space-y-4"
              >
                {/* Icon Circle */}
                <div
                  className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br sm:h-24 sm:w-24 ${skill.color} border-border/50 flex items-center justify-center border shadow-md transition-all group-hover:scale-105 group-hover:shadow-xl`}
                >
                  <span className="text-foreground text-3xl font-bold sm:text-4xl">
                    {skill.icon}
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Skill Name */}
                <div className="text-center">
                  <h3 className="text-foreground text-sm font-semibold sm:text-base">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="via-border absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

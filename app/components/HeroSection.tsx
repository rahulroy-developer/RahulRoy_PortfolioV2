import { Button } from "@/components/ui/button";
import { Code2, Cloud, Layers, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-background relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="from-primary/5 via-background to-accent/5 absolute inset-0 bg-gradient-to-br" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="bg-primary/10 absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-chart-1/10 absolute top-1/3 -right-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-chart-3/10 absolute -bottom-20 left-1/3 h-80 w-80 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative flex h-full w-full items-center justify-center px-4">
        <div className="max-w-6xl space-y-6 text-center">
          {/* Status badge */}
          <div className="border-border bg-card/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium shadow-lg backdrop-blur-sm">
            <div className="bg-chart-1 h-2 w-2 rounded-full" />
            Exploring New Things Everyday
          </div>

          {/* Brand Name - Biggest element */}
          <div className="space-y-2">
            <h1 className="text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
              <span className="from-foreground via-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-transparent">
                TheAbhiPatel
              </span>
            </h1>
          </div>

          {/* Role/Tagline - Medium size */}
          <div className="space-y-3">
            <h2 className="text-foreground text-2xl font-semibold sm:text-3xl md:text-4xl">
              Full Stack & DevOps Engineer
            </h2>
          </div>

          {/* Tech stack icons */}
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="border-border bg-card/50 flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg">
              <Code2 className="text-chart-1 h-4 w-4" />
              <span className="text-foreground text-xs font-medium">Full Stack</span>
            </div>
            <div className="border-border bg-card/50 flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg">
              <Layers className="text-chart-2 h-4 w-4" />
              <span className="text-foreground text-xs font-medium">Development</span>
            </div>
            <div className="border-border bg-card/50 flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg">
              <Cloud className="text-chart-3 h-4 w-4" />
              <span className="text-foreground text-xs font-medium">DevOps</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mx-auto max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl">
            Turning concepts into functional web experiences from{" "}
            <span className="text-foreground relative font-semibold">
              code
              <span className="from-chart-1 to-chart-2 absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r"></span>
            </span>{" "}
            to{" "}
            <span className="text-foreground relative font-semibold">
              cloud
              <span className="from-chart-2 to-chart-3 absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r"></span>
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <Button
              size="lg"
              className="group min-w-[160px] shadow-lg transition-all hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px] shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
            >
              About Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

//###########################################
//########### Just a Structure code
//###########################################

// import { Button } from "@/components/ui/button";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="h-screen w-full">
//       <div className="flex h-full w-full items-center justify-center">
//         <div className="text-center">
//           <span>TheAbhiPatel</span>
//           <h1>
//             <span className="hidden">TheAbhiPatel</span> A Full Stack and DevOps Engineer
//           </h1>
//           <p>Turning concepts into functional web experience from code to cloud.</p>
//           <div className="flex justify-center gap-2">
//             <Button>Projects</Button>
//             <Button>About Me</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

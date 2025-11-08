"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code2, Server, Layers } from "lucide-react";
import fluidCursor from "@/hooks/use-FluidCursor";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fluidCursor();
  }, []);

  // Calculate navbar position based on scroll
  const navbarBottom = Math.max(32, 32 - scrollY * 0.5);
  const navbarTop = scrollY > 140 ? 16 : undefined;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="fixed z-0 h-screen">
        <canvas id="fluid" className="h-screen w-screen" />
      </div>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/20 blur-[128px]"></div>
      <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-[128px]"></div>
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[128px]"></div>

      {/* Animated Floating Navbar */}
      <nav
        className="fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ease-out"
        style={{
          bottom: navbarTop === undefined ? `${navbarBottom}px` : undefined,
          top: navbarTop !== undefined ? `${navbarTop}px` : undefined,
        }}
      >
        <div className="rounded-full border border-white/10 bg-white/5 px-8 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="group relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
            >
              Home
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="group relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
            >
              About
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="group relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="group relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          {/* Tech Icons Floating */}
          <div className="absolute top-20 -left-20 animate-pulse opacity-20">
            <Code2 className="h-16 w-16 text-blue-400" />
          </div>
          <div className="absolute top-32 -right-20 animate-pulse opacity-20 delay-300">
            <Server className="h-16 w-16 text-purple-400" />
          </div>
          <div className="absolute bottom-20 left-10 animate-pulse opacity-20 delay-700">
            <Layers className="h-16 w-16 text-cyan-400" />
          </div>

          {/* Main Heading with Glitch Effect */}
          <div className="animate-in fade-in slide-in-from-bottom-6 mb-6 duration-1000">
            <h1 className="mb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl lg:text-9xl">
              TheAbhiPatel
            </h1>
            <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>

          {/* Tagline with Badge Style */}
          <div className="animate-in fade-in slide-in-from-bottom-6 mb-12 delay-200 duration-1000">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
              <p className="text-lg font-semibold tracking-wide text-gray-200 sm:text-xl">
                Full Stack & DevOps Engineer
              </p>
            </div>
          </div>

          {/* Description - Single Line */}
          <div className="animate-in fade-in slide-in-from-bottom-6 mb-16 delay-300 duration-1000">
            <p className="mx-auto max-w-5xl text-xl leading-relaxed font-light text-gray-300 sm:text-2xl lg:text-3xl">
              Turning Concepts into Functional Web Experiences from Front to Back
            </p>
          </div>

          {/* CTA Buttons with Glow Effect */}
          <div className="animate-in fade-in slide-in-from-bottom-6 mb-16 flex flex-col items-center justify-center gap-6 delay-500 duration-1000 sm:flex-row">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
            <button className="rounded-full border-2 border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10">
              Get In Touch
            </button>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="animate-in fade-in slide-in-from-bottom-6 flex justify-center gap-6 delay-700 duration-1000">
            <a
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-6 rounded-full border-2 border-gray-600 p-1">
              <div className="mx-auto h-3 w-1.5 animate-pulse rounded-full bg-gray-400"></div>
            </div>
            <span className="text-xs font-medium text-gray-500">Scroll</span>
          </div>
        </div>
      </main>

      {/* Additional sections for scroll demonstration */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="z-10 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent text-white">
            Keep Scrolling
          </h2>
          <p className="text-xl text-gray-400">Watch the navbar smoothly transition to the top</p>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center">
          <h2 className="mb-6 text-5xl font-bold text-white">Projects Coming Soon</h2>
          <p className="text-xl text-gray-400">Amazing work portfolio</p>
        </div>
      </section>
    </div>
  );
}

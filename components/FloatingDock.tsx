"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Briefcase, GitBranch, User, Phone } from "lucide-react";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home size={20} />,
    href: "/",
  },
  {
    id: "projects",
    label: "Projects",
    icon: <GitBranch size={20} />,
    href: "/projects",
  },
  {
    id: "skills",
    label: "Skills",
    icon: <BookOpen size={20} />,
    href: "/skills",
  },
  {
    id: "about",
    label: "About",
    icon: <User size={20} />,
    href: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Phone size={20} />,
    href: "/contact",
  },
];

const FloatingDock = (): React.ReactNode => {
  const isVisible = useScrollVisibility({ threshold: 50, hideDelay: 200 });
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Set active tab based on current pathname
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/projects") {
      setActiveTab("projects");
    } else if (pathname.includes("about")) {
      setActiveTab("about");
    } else if (pathname.includes("skills")) {
      setActiveTab("skills");
    }
  }, [pathname]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            mass: 1.2,
          }}
          className="pointer-events-none fixed right-0 bottom-0 left-0 z-50 flex items-end justify-center pb-6"
        >
          <div className="pointer-events-auto relative">
            {/* Background glow effect */}
            <div className="from-primary/20 via-accent/20 to-primary/20 absolute inset-0 -z-10 scale-150 rounded-full bg-linear-to-r opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Main dock container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.1,
              }}
              className="bg-background/80 border-border/40 group relative flex items-center gap-2 rounded-full border px-4 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Animated background */}
              <div className="from-primary/5 to-accent/5 absolute inset-0 rounded-full bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Nav items */}
              <div className="relative flex items-center gap-1">
                {navItems.map((item, index) => {
                  const isActive = activeTab === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        delay: 0.05 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={item.href} scroll={item.href.startsWith("#") ? false : true}>
                        <motion.div
                          className="relative flex cursor-pointer items-center justify-center"
                          whileHover={{ y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {/* Active indicator background */}
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="bg-primary/15 absolute inset-0 rounded-full"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}

                          {/* Icon wrapper */}
                          <div
                            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                              isActive
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            {/* Icon glow on hover */}
                            <div className="bg-primary/0 group-hover:bg-primary/5 absolute inset-0 rounded-full transition-colors duration-300" />
                            <span className="relative z-10">{item.icon}</span>

                            {/* Active dot indicator */}
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="bg-primary absolute right-1 bottom-1 h-1.5 w-1.5 rounded-full"
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 15,
                                }}
                              />
                            )}
                          </div>

                          {/* Tooltip */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-foreground text-background pointer-events-none absolute bottom-full mb-2 rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap"
                          >
                            {item.label}
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="bg-border/40 mx-1 h-6 w-px" />

              {/* Status indicator */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="h-2 w-2 rounded-full bg-green-500"
                />
                <span className="text-muted-foreground text-xs font-medium">Available</span>
              </motion.div>
            </motion.div>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                delay: 0.3,
              }}
              className="from-primary/0 via-primary/60 to-primary/0 absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-linear-to-r blur-sm"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDock;

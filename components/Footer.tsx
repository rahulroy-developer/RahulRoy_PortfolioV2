import React from "react";
import { Heart, Linkedin, Github, Mail } from "lucide-react";
import FooterSparkles from "./FooterSparkles";
import { SparklesCore } from "./ui/sparkles";

// Types
interface NavigationLink {
  label: string;
  href: string;
}

interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

interface ContactInfo {
  name: string;
  linkedin: string;
  github: string;
  githubAlt?: string;
  email: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

// Constants
const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Experience", href: "/experience" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Blinkit Clone", href: "/projects/blinkit-clone" },
      { label: "AIAgriculture", href: "/projects/ai-agriculture" },
      { label: "Tik Tok", href: "/projects/tiktok" },
      { label: "Ecommerce", href: "/projects/ecommerce" },
      { label: "Portfolio", href: "/projects/portfolio" },
      { label: "EMS System", href: "/projects/ems-system" },
      { label: "Blogger", href: "/projects/blogger" },
    ],
  },
  {
    title: "React Native",
    links: [
      { label: "WhatsApp Clone", href: "/projects/whatsapp-clone" },
      { label: "Instagram Clone", href: "/projects/instagram-clone" },
      { label: "PDF Reader", href: "/projects/pdf-reader" },
      { label: "Giriraj Mart", href: "/projects/giriraj-mart" },
    ],
  },
];

const CONTACT_INFO: ContactInfo = {
  name: "TheAbhiPatel",
  linkedin: "/in/theabhipatel",
  github: "/theabhipatel",
  githubAlt: "/codingwithcod",
  email: "theabhipatel.co@gmail.com",
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/theabhipatel",
    label: "LinkedIn",
  },
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/theabhipatel",
    label: "GitHub",
  },
];

// Component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border relative">
      <div className="top-0 w-full">
        <FooterSparkles />
      </div>
      <div className="absolute top-22 z-50 mx-auto w-full max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Navigation Sections */}
          {NAVIGATION_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-foreground mb-4 text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">Contact Info :</h3>
            <p className="text-destructive mb-4 font-semibold">{CONTACT_INFO.name}</p>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors">
                <Linkedin className="h-4 w-4" />
                <a href={`https://linkedin.com${CONTACT_INFO.linkedin}`}>{CONTACT_INFO.linkedin}</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors">
                <Github className="h-4 w-4" />
                <a href={`https://github.com${CONTACT_INFO.github}`}>{CONTACT_INFO.github}</a>
              </li>
              {CONTACT_INFO.githubAlt && (
                <li className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors">
                  <Github className="h-4 w-4" />
                  <a href={`https://github.com${CONTACT_INFO.githubAlt}`}>
                    {CONTACT_INFO.githubAlt}
                  </a>
                </li>
              )}
              <li className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-border border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Made with Love */}
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="text-destructive fill-destructive h-4 w-4" />
              <span>by {CONTACT_INFO.name}</span>
            </div>

            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              Copyright © {currentYear} {CONTACT_INFO.name} | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

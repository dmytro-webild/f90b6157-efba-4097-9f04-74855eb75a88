"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "/about" },
            { name: "AI Design", id: "/ai-design" },
            { name: "Home", id: "/" },
          ]}
          brandName="BlackArtTech"
          button={{ text: "Get Started", href: "#contact" }}
        />
        <SplitAbout
          title="Our Story & Mission"
          description="We are a team of visionary engineers and artists dedicated to pushing the boundaries of digital creativity. Founded on the principle of empowerment, we build the tools that let creators shape the future."
          textboxLayout="split"
          useInvertedBackground={false}
          bulletPoints={[
            { title: "Vision", description: "Building a global standard for digital expression." },
            { title: "Team", description: "Experts in AI, cloud engineering, and fine arts." },
            { title: "Impact", description: "Supporting over 45,000 artists in their production pipelines." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/team-of-architects-working-in-modern-office_23-2148762512.jpg"
        />
        <FooterCard
          logoText="BlackArtTech"
          copyrightText="© 2025 BlackArtTech Technologies. All rights reserved."
          socialLinks={[
            { icon: Github, href: "#", ariaLabel: "Github" },
            { icon: Twitter, href: "#", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "#", ariaLabel: "Linkedin" },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
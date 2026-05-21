"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterCard from '@/components/sections/footer/FooterCard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingInline
            navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Contact", id: "/contact" }]}
            brandName="BlackArtTech"
            button={{ text: "Get Started", href: "/contact" }}
        />
        <div className="pt-24">
            <SplitAbout
                title="Our Story"
                description="Founded on the belief that technology should empower rather than replace the artist, BlackArtTech is a hub for innovation."
                textboxLayout="default"
                bulletPoints={[
                    { title: "Mission", description: "Building the next era of creative tools." },
                    { title: "Vision", description: "A world where tech removes barriers to expression." },
                ]}
            />
        </div>
        <FooterCard
            logoText="BlackArtTech"
            socialLinks={[{ icon: Github, href: "#", ariaLabel: "Github" }, { icon: Twitter, href: "#", ariaLabel: "Twitter" }, { icon: Linkedin, href: "#", ariaLabel: "Linkedin" }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
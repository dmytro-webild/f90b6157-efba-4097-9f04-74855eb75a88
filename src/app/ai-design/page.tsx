"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function AIDesignPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "AI Design", id: "/ai-design" },
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="BlackArtTech"
          button={{ text: "Get Started", href: "/contact" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="AI Design Solutions"
          description="Premium, gold-standard AI-driven design services for modern creators. Let our intelligent algorithms transform your artistic vision into high-fidelity digital reality."
          background={{ variant: "plain" }}
          buttons={[{ text: "WhatsApp Us", href: "https://wa.me/your-number" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="BlackArtTech"
          socialLinks={[{ icon: Github, href: "#", ariaLabel: "Github" }, { icon: Twitter, href: "#", ariaLabel: "Twitter" }, { icon: Linkedin, href: "#", ariaLabel: "Linkedin" }]}
        />
      </div>
    </ThemeProvider>
  );
}
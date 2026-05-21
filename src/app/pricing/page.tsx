"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function PricingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
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
      <PricingCardFive
        animationType="slide-up"
        textboxLayout="default"
        title="Premium Pricing Tiers"
        description="Gold-tier design services for elite projects. Select your plan below."
        useInvertedBackground={false}
        plans={[
          { id: "p1", tag: "Premium Gold", price: "$999", period: "/project", description: "High-end AI design curation.", button: { text: "WhatsApp Now", href: "https://wa.me/your-number" }, featuresTitle: "Service Features", features: ["24/7 Priority Support", "Exclusive Asset Access", "Dedicated Design Lead"] },
          { id: "p2", tag: "Pro Tier", price: "$499", period: "/project", description: "Advanced design automation.", button: { text: "WhatsApp Now", href: "https://wa.me/your-number" }, featuresTitle: "Service Features", features: ["Standard Priority", "AI Model Training", "Unlimited Revisions"] }
        ]}
      />
      <FooterCard
        logoText="BlackArtTech"
        socialLinks={[{ icon: Github, href: "#", ariaLabel: "Github" }, { icon: Twitter, href: "#", ariaLabel: "Twitter" }, { icon: Linkedin, href: "#", ariaLabel: "Linkedin" }]}
      />
    </ThemeProvider>
  );
}
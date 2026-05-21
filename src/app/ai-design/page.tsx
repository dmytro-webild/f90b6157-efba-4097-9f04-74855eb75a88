"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Zap, Shield, Sparkles, Star } from "lucide-react";

export default function AIDesignPage() {
  return (
    <ThemeProvider
        background="none"
        cardStyle="glass-elevated"
    >
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
        <FeatureCardTen
          animationType="slide-up"
          textboxLayout="split-description"
          useInvertedBackground={false}
          title="AI-Powered Design Services"
          description="Leveraging premium gold-standard AI models to revolutionize your creative design workflow. Our service brings unparalleled efficiency and aesthetic depth to your projects."
          features={[
            {
              title: "Generative Asset Creation",              description: "Instantly generate high-fidelity assets using our proprietary AI pipeline.",              media: { imageSrc: "http://img.b2bpic.net/free-photo/abstract-luxury-background-with-gold-elements_23-2148810696.jpg" },
              items: [{ text: "Gold-Standard Models", icon: Star }, { text: "High Fidelity", icon: Zap }],
              reverse: false,
            },
            {
              title: "Automated Design Systems",              description: "Scale your creative output with systems that learn and adapt to your style.",              media: { imageSrc: "http://img.b2bpic.net/free-photo/digital-art-with-golden-geometric-shapes_23-2148810672.jpg" },
              items: [{ text: "Adaptive Styling", icon: Shield }, { text: "Predictive Logic", icon: Sparkles }],
              reverse: true,
            }
          ]}
        />
        <FooterCard
          logoText="BlackArtTech"
          copyrightText="© 2025 BlackArtTech Technologies. All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
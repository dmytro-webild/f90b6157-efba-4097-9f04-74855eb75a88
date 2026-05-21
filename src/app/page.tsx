"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, CheckCircle, Github, Linkedin, Shield, Sparkles, Star, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="BlackArtTech"
      button={{ text: "Get Started", href: "/contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      title="Black Art Tech"
      description="Maximize your creative ROI with enterprise-grade tools built to accelerate professional production and streamline your art-to-market pipeline."
      background={{ variant: "plain" }}
      buttons={[{ text: "Explore Platforms", href: "#products" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1H0csljJm0pGYMqLxSVNxfuDO/uploaded-1779341956401-7puxwe93.png"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Redefining Digital Creativity"
      description="Our team combines deep artistic insight with robust technological frameworks to build scalable, high-performance platforms for modern creators."
      bulletPoints={[
        { title: "Cultural Depth", description: "Technology that reflects human history and future potential." },
        { title: "Advanced Engineering", description: "Built on industry-leading stacks for maximum performance." },
        { title: "Creative Empowerment", description: "Tools that remove technical barriers for artists." },
      ]}
      imageSrc="https://img.b2bpic.net/premium-photo/digital-circuitry-connectivity-technology_1359-85411.jpg?id=424866438"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "AI Art Integration",          description: "Seamlessly integrate generated assets into your pipeline.",          media: { imageSrc: "https://img.b2bpic.net/free-photo/business-people-shaking-hands-together_53876-20488.jpg?id=2825692", imageAlt: "tech software dashboard creative" },
          items: [{ text: "Smart Layers", icon: Zap }, { text: "Instant Rendering", icon: CheckCircle }],
          reverse: false,
        },
        {
          title: "Cultural Nodes",          description: "Collaborate within our secure digital workspace environments.",          media: { imageSrc: "https://img.b2bpic.net/premium-photo/meeting-colleagues-business-partners-brainstorm-discuss-strategy-analysis-investment-scenarios-planning-new-business-projects_1016675-8320.jpg?id=372537056", imageAlt: "tech software dashboard creative" },
          items: [{ text: "Real-time Sync", icon: Star }, { text: "Version Control", icon: Award }],
          reverse: true,
        },
        {
          title: "Scalable Cloud",          description: "Host your masterpieces on globally distributed infrastructures.",          media: { imageSrc: "https://img.b2bpic.net/premium-photo/dynamic-office-meeting-with-business-team-cityscape-overlook-night-stylish-interior-design_937679-77490.jpg?id=382404609", imageAlt: "tech software dashboard creative" },
          items: [{ text: "Global CDN", icon: Shield }, { text: "Auto-Scaling", icon: Sparkles }],
          reverse: false,
        },
      ]}
      title="Engineered for Expression"
      description="Features designed to amplify your creative workflow."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "ArtCore Engine", price: "$199", imageSrc: "http://img.b2bpic.net/free-photo/minimal-style-device-screen_23-2151913297.jpg" },
        { id: "2", name: "VR Vision Lens", price: "$499", imageSrc: "http://img.b2bpic.net/free-photo/virtual-reality-headset-desk_23-2148912813.jpg" },
        { id: "3", name: "Toolkit Prime", price: "$99", imageSrc: "http://img.b2bpic.net/free-photo/people-using-mobile-phone_53876-26374.jpg" },
        { id: "4", name: "CloudArt Hub", price: "$29", imageSrc: "http://img.b2bpic.net/free-photo/closeup-photo-turned-digital-midi-controller_400718-29.jpg" },
        { id: "5", name: "Generative Station", price: "$899", imageSrc: "http://img.b2bpic.net/free-photo/black-creative-person-using-pencil-draw-vase-design-canvas-easel-workshop-space-home-african-american-artist-drawing-modern-masterpiece-successful-fine-art-hobby_482257-33994.jpg" },
        { id: "6", name: "SculptMaster Pro", price: "$349", imageSrc: "http://img.b2bpic.net/free-photo/vr-glasses-cell-phone-wooden-desk_1387-986.jpg" },
      ]}
      title="Professional Tools for Modern Creators"
      description="Discover high-performance software and hardware for creators."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic", tag: "Starter", price: "$49", period: "/mo", description: "For individual artists starting out.", button: { text: "Start Basic" }, featuresTitle: "Included", features: ["Core Access", "Cloud Storage", "Email Support"]
        },
        {
          id: "pro", tag: "Professional", price: "$149", period: "/mo", description: "For power users & studio designers.", button: { text: "Get Pro" }, featuresTitle: "Everything in Basic, plus:", features: ["Advanced AI", "Collaborative Tools", "Priority Support"]
        },
        {
          id: "ent", tag: "Enterprise", price: "$499", period: "/mo", description: "For enterprise team workflows.", button: { text: "Contact Us" }, featuresTitle: "Everything in Pro, plus:", features: ["On-premise Options", "Dedicated Agent", "SLA Support"]
        },
      ]}
      title="Flexible Scaling"
      description="Plans for individual creators to professional studios."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Milestones"
      metrics={[
        { id: "m1", value: "1.2M+", description: "Assets Created" },
        { id: "m2", value: "45K+", description: "Community Artists" },
        { id: "m3", value: "99.9%", description: "Platform Uptime" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Miller", handle: "@sarahart", testimonial: "The integration is seamless and powerful.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-office_23-2148452664.jpg" },
        { id: "t2", name: "Marcus Chen", handle: "@mchen_studio", testimonial: "Finally, a platform that understands our needs.", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-with-diagram_23-2147669294.jpg" },
        { id: "t3", name: "Elena Rodriguez", handle: "@elena_design", testimonial: "Simply the best tech for creative projects.", imageSrc: "http://img.b2bpic.net/free-photo/startup-worker-uses-laptop-open-space-reviewing-project-data-documents-workstation-executive-assistant-working-marketing-strategy-business-development-ai-developer_482257-65810.jpg" },
        { id: "t4", name: "David Okafor", handle: "@d_okafor", testimonial: "High performance and intuitive UI. Highly recommended.", imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278643.jpg" },
        { id: "t5", name: "Jasmine Lee", handle: "@jlee_art", testimonial: "Changed how I approach digital production forever.", imageSrc: "http://img.b2bpic.net/free-photo/leadership-leader-authoritarian-management-trainer-concept_53876-123784.jpg" },
      ]}
      title="Creators Trust Us"
      description="See why artists around the globe are building with BlackArtTech."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Journey"
      description="Have questions? Reach out to our team of specialists."
      inputs={[
        { name: "name", type: "text", placeholder: "Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
      ]}
      textarea={{ name: "requirements", placeholder: "Describe your creative needs or project requirements", rows: 5 }}
      buttonText="Send Message"
      imageSrc="http://img.b2bpic.net/free-photo/empty-ai-tech-agency-workspace-providing-custom-software-development-services_482257-120228.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="BlackArtTech"
      copyrightText="© 2025 BlackArtTech Technologies. All rights reserved."
      socialLinks={[
        { icon: Github, href: "#", ariaLabel: "Github" },
        { icon: Twitter, href: "#", ariaLabel: "Twitter" },
        { icon: Linkedin, href: "#", ariaLabel: "Linkedin" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

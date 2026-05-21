"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingInline
            navItems={[{ name: "Home", id: "/" }, { name: "About", id: "/about" }, { name: "Contact", id: "/contact" }]}
            brandName="BlackArtTech"
            button={{ text: "Get Started", href: "/contact" }}
        />
        <div className="pt-24">
            <ContactSplitForm
                title="Contact Us"
                description="Let's collaborate on your next creative masterpiece."
                inputs={[{ name: "name", type: "text", placeholder: "Name", required: true }, { name: "email", type: "email", placeholder: "Email", required: true }]}
                textarea={{ name: "message", placeholder: "Your message", rows: 5 }}
                buttonText="Send"
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
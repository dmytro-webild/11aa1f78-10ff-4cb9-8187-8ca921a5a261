"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Building, Droplets, Grid, Home, Leaf, Play, Sun } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Quote", id: "contact" },
      ]}
      brandName="Restoration Pressure Washing"
      logoSrc="https://img.b2bpic.net/free-photo/shiny-logo-icon_23-2149557712.jpg"
      logoAlt="Company Logo"
      logoClassName="w-16 h-16"
      button={{
        text: "Get a Free Quote", href: "#contact"
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars"}}
      title="Restore Your Property's Original Beauty"
      description="Professional pressure washing services for homes and businesses. Bring your surfaces back to life with our expert care."
      buttons={[
        {
          text: "Get a Free Quote",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-washing-her-car-outdoors_23-2148958773.jpg"
      imageAlt="Professional Pressure Washing"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Droplets,
          title: "Concrete",          description: "Driveways, sidewalks, and garage floors."},
        {
          icon: Home,
          title: "Siding",          description: "Vinyl, brick, and stucco cleaning."},
        {
          icon: Sun,
          title: "Roofs",          description: "Safe, low-pressure roof washing."},
        {
          icon: Grid,
          title: "Fences",          description: "Wood, vinyl, and metal fences."},
        {
          icon: Play,
          title: "Playgrounds",          description: "Kid-safe surface cleaning."},
        {
          icon: Building,
          title: "Commercial",          description: "Storefronts, parking lots, and buildings."},
        {
          icon: Leaf,
          title: "Patios",          description: "Decks, pavers, and outdoor living spaces."},
      ]}
      title="Our Services"
      description="Comprehensive cleaning solutions for all your property exterior needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="Frequently Asked Questions"
      description="Common questions about our cleaning processes and services."
      faqsAnimation="slide-up"
      faqs={[
        {
          id: "1",          title: "Is pressure washing safe for my home?",          content: "Yes, we use professional-grade equipment and customize the pressure level based on the surface material to ensure no damage occurs."},
        {
          id: "2",          title: "Do I need to be home during the service?",          content: "Not at all. As long as we have access to the water spigot and the area to be cleaned, we can handle the rest."},
        {
          id: "3",          title: "How often should I have my house cleaned?",          content: "Most homeowners benefit from a professional cleaning once every 12 to 18 months to prevent mold and grime buildup."},
        {
          id: "4",          title: "Are your cleaning solutions eco-friendly?",          content: "We prioritize environmentally safe, biodegradable cleaners that effectively remove stains without harming your lawn or pets."},
        {
          id: "5",          title: "Do you offer a satisfaction guarantee?",          content: "Your satisfaction is our top priority. We offer a 100% satisfaction guarantee on all our cleaning services."},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Request Your Free Quote"
      description="Ready to restore your property? Contact us today for a free, no-obligation quote."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project...",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358977.jpg"
      buttonText="Get My Free Quote"
      imageAlt="Professional pressure washing service"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Contact",          items: [
            {
              label: "(555) 123-4567",              href: "tel:5551234567"},
            {
              label: "contact@restorationwash.com",              href: "mailto:contact@restorationwash.com"},
          ],
        },
        {
          title: "Quick Links",          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Free Quote",              href: "#contact"},
          ],
        },
      ]}
      bottomLeftText="© 2025 Restoration Pressure Washing"
      bottomRightText="Serving your local community with pride."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
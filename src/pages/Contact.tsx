import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/ScrollReveal";
import { Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us"
        description="Get in touch with MAISON. We'd love to hear from you about our luxury leather bags and artisan craftsmanship."
        canonical="/contact"
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cream">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Contact <span className="italic">Us</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              We'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                Whether you have a question about your order, need help choosing the right bag, 
                or just want to say hello — we're here.
              </p>

              <div className="bg-card border border-border p-8 md:p-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                    Email
                  </span>
                </div>
                <a 
                  href="mailto:hottoddy227@gmail.com"
                  className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors"
                >
                  hottoddy227@gmail.com
                </a>
                <p className="font-body text-sm text-muted-foreground mt-6">
                  We aim to respond within 24–48 hours, Monday to Friday.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

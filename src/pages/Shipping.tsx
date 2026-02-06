import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, ScrollReveal } from "@/components/animations/ScrollReveal";
import { Truck, RotateCcw, Shield } from "lucide-react";

const Shipping: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cream">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Policies
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Shipping & <span className="italic">Returns</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* Shipping */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light">Shipping</h2>
                </div>
                <div className="pl-16 space-y-4">
                  <p className="font-body text-lg text-foreground">
                    We offer <span className="font-semibold">FREE shipping</span> on all orders.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Orders are usually processed within 2–3 business days.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Delivery timelines may vary depending on your location.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Returns & Exchanges */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <RotateCcw className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light">Returns & Exchanges</h2>
                </div>
                <div className="pl-16 space-y-4">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    We offer a hassle-free return policy in case of manufacturing defects or damage during transit.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    To initiate a return, please contact us within <span className="text-foreground font-medium">48 hours</span> of delivery with images of the issue.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Warranty */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light">Warranty</h2>
                </div>
                <div className="pl-16 space-y-4">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    All Hot Toddy bags come with a <span className="text-foreground font-medium">3-month warranty</span> covering manufacturing defects.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Normal wear and tear, misuse, or accidental damage are not covered.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    For any concerns, reach out to us at{" "}
                    <a 
                      href="mailto:hottoddy227@gmail.com" 
                      className="text-accent hover:underline"
                    >
                      hottoddy227@gmail.com
                    </a>
                    {" "}and we'll make it right.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;

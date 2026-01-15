import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&q=80"
          alt="Luxury leather bag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-6 animate-fade-in">
            New Collection 2026
          </span>
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Timeless
            <br />
            <span className="italic font-normal">Elegance</span>
          </h1>
          <p 
            className="font-body text-lg md:text-xl text-muted-foreground max-w-md mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Discover our curated collection of artisan-crafted bags, designed for the modern woman who values both style and substance.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              size="lg" 
              className="font-body text-sm tracking-widest uppercase bg-primary hover:bg-primary/90 px-8"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-body text-sm tracking-widest uppercase border-foreground/20 hover:bg-foreground/5 px-8"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/50 animate-pulse" />
      </div>
    </section>
  );
};

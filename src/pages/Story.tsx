import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShopProductCard } from "@/components/ShopProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allProducts } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { SlidersHorizontal, X } from "lucide-react";

export const Story: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <Header />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"
                alt="Craftsmanship detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-muted-foreground leading-relaxed">
                At Hot Toddy, we believe that a bag is more than an accessory—it's a companion for life's moments. Each piece is meticulously crafted by skilled artisans using the finest materials sourced from trusted tanneries.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our designs honor traditional craftsmanship while embracing contemporary aesthetics, creating pieces that transcend seasonal trends and become cherished staples in your collection.
              </p>
            </div>

            <Button 
              variant="outline" 
              className="font-body text-sm tracking-widest uppercase border-foreground/20 hover:bg-foreground/5"
            >
              Discover Our Process
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="font-display text-3xl md:text-4xl font-light text-accent mb-1">
      {value}
    </p>
    <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
      {label}
    </p>
  </div>
);

export default Story;
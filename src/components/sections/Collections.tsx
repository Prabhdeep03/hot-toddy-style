import { collections } from "@/data/products";
import type { CollectionItem } from "@/types/product";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export const Collections: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Our <span className="italic">Collections</span>
          </h2>
        </ScrollReveal>

        {/* Collections Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {collections.map((collection) => (
            <StaggerItem key={collection.id}>
              <CollectionCard collection={collection} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  collection: CollectionItem;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <a 
      href={`/collections/${collection.slug}`}
      className="group relative overflow-hidden block"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
          {collection.title}
        </h3>
        <p className="font-body text-sm text-primary-foreground/80 mb-4">
          {collection.description}
        </p>
        <span className="inline-flex items-center font-body text-xs tracking-widest uppercase text-primary-foreground group-hover:text-accent transition-colors">
          Explore Collection
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};

import { collections } from "@/data/products";
import type { CollectionItem } from "@/types/product";
import { ArrowRight } from "lucide-react";

export const Collections: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Our <span className="italic">Collections</span>
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={collection.id} 
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  collection: CollectionItem;
  index: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, index }) => {
  return (
    <a 
      href={`/collections/${collection.slug}`}
      className="group relative overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

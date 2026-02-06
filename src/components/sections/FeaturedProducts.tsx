import { Link } from "react-router-dom";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Curated Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Featured <span className="italic">Pieces</span>
          </h2>
        </ScrollReveal>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <StaggerItem key={product.id}>
              <ProductCard 
                product={product} 
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Link */}
        <ScrollReveal className="text-center mt-16" delay={0.3}>
          <Link 
            to="/shop" 
            className="inline-flex items-center font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All Products
            <span className="ml-2 w-8 h-px bg-current transition-all group-hover:w-12" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

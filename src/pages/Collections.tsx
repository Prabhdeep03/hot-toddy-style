import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { collections, allProducts } from "@/data/products";
import type { CollectionItem, Product } from "@/types/product";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

// Map collection slugs to product categories
const collectionCategoryMap: Record<string, string[]> = {
  essentials: ["tote", "shoulder", "crossbody"],
  evening: ["clutch", "mini"],
};

const getCollectionProducts = (slug: string): Product[] => {
  const categories = collectionCategoryMap[slug] || [];
  return allProducts.filter((product) => categories.includes(product.category));
};

const Collections: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Curated Selection
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light mb-6">
                Our <span className="italic">Collections</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto">
                Explore our thoughtfully curated collections, each designed to complement 
                your unique style and elevate every occasion.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <StaggerContainer className="space-y-24" staggerDelay={0.2}>
              {collections.map((collection, index) => (
                <StaggerItem key={collection.id}>
                  <CollectionShowcase 
                    collection={collection} 
                    products={getCollectionProducts(collection.slug)}
                    reverse={index % 2 === 1}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Browse All Categories */}
        <section className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Browse By Category
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
                Shop by <span className="italic">Style</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {categories.map((category) => (
                <StaggerItem key={category.slug}>
                  <CategoryCard category={category} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal direction="up">
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                Can't decide? <span className="italic">Explore all</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Browse our complete selection of handcrafted bags.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

// Collection Showcase Component
interface CollectionShowcaseProps {
  collection: CollectionItem;
  products: Product[];
  reverse?: boolean;
}

const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ 
  collection, 
  products, 
  reverse = false 
}) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Collection Image */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <Link 
          to={`/shop?collection=${collection.slug}`}
          className="group relative block overflow-hidden"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7 }}
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
      </div>

      {/* Collection Info */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Collection
        </span>
        <h3 className="font-display text-4xl md:text-5xl font-light mb-4">
          {collection.title}
        </h3>
        <p className="font-body text-lg text-muted-foreground mb-8">
          {collection.description}
        </p>

        {/* Preview Products */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {products.slice(0, 3).map((product) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden bg-secondary/50 mb-2">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-xs text-muted-foreground truncate group-hover:text-foreground transition-colors">
                {product.name}
              </p>
            </Link>
          ))}
        </div>

        <Link
          to={`/shop?collection=${collection.slug}`}
          className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors group"
        >
          Explore Collection
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

// Category Data
const categories = [
  {
    name: "Totes",
    slug: "tote",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
    count: allProducts.filter(p => p.category === "tote").length,
  },
  {
    name: "Crossbody",
    slug: "crossbody",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    count: allProducts.filter(p => p.category === "crossbody").length,
  },
  {
    name: "Clutches",
    slug: "clutch",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80",
    count: allProducts.filter(p => p.category === "clutch").length,
  },
  {
    name: "Shoulder Bags",
    slug: "shoulder",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
    count: allProducts.filter(p => p.category === "shoulder").length,
  },
];

// Category Card Component
interface CategoryCardProps {
  category: {
    name: string;
    slug: string;
    image: string;
    count: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/shop?category=${category.slug}`}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden mb-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl text-primary-foreground">
            {category.name}
          </span>
        </div>
      </div>
      <p className="font-body text-sm text-muted-foreground text-center">
        {category.count} {category.count === 1 ? "item" : "items"}
      </p>
    </Link>
  );
};

export default Collections;

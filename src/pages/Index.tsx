import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { Newsletter } from "@/components/sections/Newsletter";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Collections />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

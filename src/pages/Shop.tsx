import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShopProductCard } from "@/components/ShopProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allProducts } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { SlidersHorizontal, X } from "lucide-react";

type SortOption = "featured" | "price-low" | "price-high" | "newest";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All Bags" },
  { value: "tote", label: "Totes" },
  { value: "crossbody", label: "Crossbody" },
  { value: "shoulder", label: "Shoulder" },
  { value: "clutch", label: "Clutches" },
  { value: "mini", label: "Mini Bags" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const validCategories = categories.map(c => c.value);

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Get category from URL or default to "all"
  const categoryParam = searchParams.get("category");
  const selectedCategory: ProductCategory | "all" = 
    categoryParam && validCategories.includes(categoryParam as ProductCategory | "all")
      ? (categoryParam as ProductCategory | "all")
      : "all";

  const setSelectedCategory = (category: ProductCategory | "all") => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        products.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return products;
  }, [selectedCategory, sortBy]);

  const clearFilters = (): void => {
    setSelectedCategory("all");
    setSortBy("featured");
  };

  const hasActiveFilters = selectedCategory !== "all" || sortBy !== "featured";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
              The Collection
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light">
              Shop <span className="italic">All Bags</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-lg mx-auto">
              Discover our curated selection of artisan-crafted bags for every occasion.
            </p>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="border-b border-border sticky top-16 md:top-20 bg-background z-30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden font-body text-xs tracking-widest uppercase"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              {/* Desktop Category Filters */}
              <div className="hidden md:flex items-center gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={selectedCategory === cat.value ? "default" : "ghost"}
                    size="sm"
                    className="font-body text-xs tracking-widest uppercase"
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>

              {/* Sort & Clear */}
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-body text-xs text-muted-foreground"
                    onClick={clearFilters}
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear
                  </Button>
                )}
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                  <SelectTrigger className="w-[180px] font-body text-sm">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    {sortOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value} className="font-body text-sm">
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden pt-4 pb-2 border-t border-border mt-4 animate-fade-in">
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? "default" : "outline"}
                      size="sm"
                      className="font-body text-xs"
                      onClick={() => {
                        setSelectedCategory(cat.value);
                        setShowFilters(false);
                      }}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <p className="font-body text-sm text-muted-foreground mb-8">
              {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? "product" : "products"}
            </p>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredAndSortedProducts.map((product, index) => (
                  <ShopProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-display text-2xl text-muted-foreground mb-4">
                  No products found
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;

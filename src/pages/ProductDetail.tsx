import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { SEO } from "@/components/SEO";
import type { Product } from "@/types/product";

type ProductColor = {
  name: string;
  value: string;
  hex: string;
};

type ProductSize = {
  name: string;
  dimensions: string;
};

const productColors: ProductColor[] = [
  { name: "Black", value: "black", hex: "#1a1a1a" },
  { name: "Cognac", value: "cognac", hex: "#8B4513" },
  { name: "Cream", value: "cream", hex: "#F5F5DC" },
  { name: "Burgundy", value: "burgundy", hex: "#722F37" },
];

const productSizes: ProductSize[] = [
  { name: "Small", dimensions: '10" × 7" × 3"' },
  { name: "Medium", dimensions: '12" × 9" × 4"' },
  { name: "Large", dimensions: '14" × 11" × 5"' },
];

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};

// Generate gallery images (using the main image with different crops for demo)
const getGalleryImages = (product: Product): string[] => {
  return [
    product.image,
    product.image.replace("w=600", "w=800"),
    product.image.replace("q=80", "q=90"),
    product.image,
  ];
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  
  const product = allProducts.find((p) => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState<ProductColor>(productColors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(productSizes[1]);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = getGalleryImages(product);

  const handleAddToCart = (): void => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const decrementQuantity = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = (): void => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={product.name}
        description={`${product.description}. Handcrafted luxury ${product.category} bag — ${formatPrice(product.price)}.`}
        canonical={`/product/${product.id}`}
        type="product"
        image={product.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square overflow-hidden bg-secondary transition-all duration-300 ${
                      activeImageIndex === index 
                        ? "ring-2 ring-accent ring-offset-2 ring-offset-background" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground font-body text-[10px] tracking-widest uppercase">
                      New
                    </Badge>
                  )}
                  {product.isBestseller && (
                    <Badge variant="secondary" className="font-body text-[10px] tracking-widest uppercase">
                      Bestseller
                    </Badge>
                  )}
                </div>
                
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium">
                  {product.name}
                </h1>
                
                <p className="font-display text-2xl md:text-3xl text-accent">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}. Each piece is meticulously handcrafted by our artisans using 
                  time-honored techniques passed down through generations. The supple Italian leather 
                  develops a beautiful patina over time, making each bag uniquely yours.
                </p>
              </div>

              <Separator className="bg-border/50" />

              {/* Color Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm tracking-wider uppercase">Color</span>
                  <span className="font-body text-sm text-muted-foreground">{selectedColor.name}</span>
                </div>
                <div className="flex gap-3">
                  {productColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 ${
                        selectedColor.value === color.value 
                          ? "ring-2 ring-accent ring-offset-2 ring-offset-background scale-110" 
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm tracking-wider uppercase">Size</span>
                  <span className="font-body text-sm text-muted-foreground">{selectedSize.dimensions}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {productSizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 font-body text-sm tracking-wider uppercase transition-all duration-300 border ${
                        selectedSize.name === size.name 
                          ? "border-accent bg-accent/10 text-accent" 
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <span className="font-body text-sm tracking-wider uppercase">Quantity</span>
                <div className="flex gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-border">
                    <button
                      onClick={decrementQuantity}
                      className="p-3 hover:bg-secondary transition-colors disabled:opacity-50"
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-body">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-3 hover:bg-secondary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm tracking-widest uppercase py-6"
                  >
                    Add to Bag
                  </Button>

                  {/* Wishlist Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`border-border h-12 w-12 ${isWishlisted ? "text-red-500 border-red-500" : ""}`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>

              <Separator className="bg-border/50" />

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm">Complimentary Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm">2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm">30-Day Returns</span>
                </div>
              </div>

              {/* Share */}
              <Button
                variant="ghost"
                size="sm"
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

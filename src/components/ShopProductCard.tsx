import { Link } from "react-router-dom";
import type { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

interface ShopProductCardProps {
  product: Product;
  index: number;
}

export const ShopProductCard: React.FC<ShopProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <article 
        className="group cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
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

        {/* Add to Cart Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary/95 hover:bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase"
            size="sm"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Bag
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-display text-base md:text-lg font-medium group-hover:text-accent transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="font-body text-sm tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
    </Link>
  );
};

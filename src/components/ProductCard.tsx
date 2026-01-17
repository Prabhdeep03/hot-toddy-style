import { Link } from "react-router-dom";
import type { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <article 
        className="group cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 0.1}s` }}
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
        <div className="absolute top-4 left-4 flex flex-col gap-2">
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

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
          <span className="font-body text-xs tracking-widest uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary px-4 py-2">
            Quick View
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-display text-xl font-medium group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="font-body text-sm tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
    </Link>
  );
};

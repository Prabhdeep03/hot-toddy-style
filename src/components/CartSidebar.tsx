import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import type { CartItem } from "@/types/cart";

export const CartSidebar: React.FC = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-light flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Bag ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="font-display text-xl text-muted-foreground mb-2">Your bag is empty</p>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Discover our collection and add your favorites.
            </p>
            <Button onClick={closeCart} variant="outline" className="font-body text-sm tracking-widest uppercase">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemCard
                    key={item.product.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                    formatPrice={formatPrice}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-2xl">{formatPrice(subtotal)}</span>
              </div>

              <p className="font-body text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Actions */}
              <div className="space-y-2">
                <Button 
                  className="w-full font-body text-sm tracking-widest uppercase bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full font-body text-sm tracking-widest uppercase"
                  onClick={closeCart}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  formatPrice: (price: number) => string;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  formatPrice,
}) => {
  const { product, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="flex gap-4 animate-fade-in">
      {/* Image */}
      <div className="w-20 h-24 bg-secondary overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h4 className="font-display text-base font-medium truncate">{product.name}</h4>
            <p className="font-body text-xs text-muted-foreground capitalize">{product.category}</p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-between items-end mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center border border-border">
            <button
              onClick={() => onUpdateQuantity(product.id, quantity - 1)}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-3 font-body text-sm min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Price */}
          <span className="font-body text-sm">{formatPrice(itemTotal)}</span>
        </div>
      </div>
    </div>
  );
};

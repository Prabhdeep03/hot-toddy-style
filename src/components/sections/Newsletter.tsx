import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold-muted mb-6">
            Stay Connected
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Join the <span className="italic">Inner Circle</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and stories from our atelier.
          </p>

          {isSubmitted ? (
            <div className="animate-fade-in">
              <p className="font-body text-gold">
                Thank you for subscribing. Welcome to Hot Toddy.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
              />
              <Button 
                type="submit"
                className="bg-gold hover:bg-gold/90 text-espresso font-body text-sm tracking-widest uppercase"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="font-body text-xs text-primary-foreground/50 mt-6">
            By subscribing, you agree to receive marketing communications from Hot Toddy.
          </p>
        </div>
      </div>
    </section>
  );
};

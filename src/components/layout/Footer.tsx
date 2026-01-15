import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "All Bags", href: "/shop" },
      { label: "Totes", href: "/shop/totes" },
      { label: "Crossbody", href: "/shop/crossbody" },
      { label: "Clutches", href: "/shop/clutches" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Care Guide", href: "/care" },
    ],
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="font-display text-3xl font-semibold tracking-wide text-foreground">
              Hot Toddy
            </a>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
              Semi-luxury bags crafted with intention for the modern woman. Timeless elegance meets everyday functionality.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} Hot Toddy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-accent transition-colors"
  >
    {icon}
  </a>
);

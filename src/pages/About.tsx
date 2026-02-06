import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem, FadeIn } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Crafted with
              <br />
              <span className="italic">Purpose</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Hot Toddy was born from a simple belief: that luxury should be intentional, 
              sustainable, and designed to accompany you through life's most cherished moments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
                    alt="Artisan crafting leather"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="lg:pl-8">
                <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
                  The Beginning
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                The Start of 
                  <br />
                  <span className="italic">The Blend</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="font-body text-muted-foreground leading-relaxed">
                  Hot Toddy was created with one simple idea: great bags should fit real life.
                    Not just special occasions, not just trends, but the everyday moments in between.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                  We started by paying attention to what people actually carry, how they move, and what they expect from a bag they reach for every day. The goal wasn’t to chase luxury or fast fashion, but to sit comfortably in the middle. Well-designed, dependable, and accessible.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                  From the beginning, our focus has been on clean design, practical details, 
                  and materials that make sense for modern living. Every Hot Toddy piece is designed to look current, 
                  feel easy to use, and hold up to daily wear.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                  Today, Hot Toddy stands for thoughtful design without the fuss. Bags made to keep up with you, wherever the day takes you.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 md:py-32 bg-espresso text-cream">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              The Art
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Craftsmanship Details
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-12" staggerDelay={0.15}>
            <StaggerItem>
              <CraftCard
                number="01"
                title="Material Selection"
                description="Our materials are selected for real life. Durable PU that holds up to daily use, easy to care for, and designed to look good wherever the day takes you."
                image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              />
            </StaggerItem>
            <StaggerItem>
              <CraftCard
                number="02"
                title="Stitching"
                description="Our construction focuses on reliable stitching and clean finishing, so every bag holds up to real-world use."
                image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80"
              />
            </StaggerItem>
            <StaggerItem>
              <CraftCard
                number="03"
                title="Clean & Modern"
                description="Our edges are cleanly finished using modern techniques to ensure smoothness, durability, and a polished look that holds up to everyday use."
                image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-cream/20" staggerDelay={0.1}>
            
            <StaggerItem>
              <Stat value="2" label="Awesome Founders" />
            </StaggerItem>
            <StaggerItem>
              <Stat value="100%" label="Animal free leather" />
            </StaggerItem>
            <StaggerItem>
              <Stat value="3 Month" label="Warranty" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
                  Our Values
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
                  What We
                  <br />
                  <span className="italic">Stand For</span>
                </h2>
                <div className="space-y-6">
                  <ValueItem
                    title="Sustainability"
                    description="We use high-quality PU to reduce environmental harm while creating bags built to last."
                  />
                  <ValueItem
                    title="Built Right"
                    description="Thoughtful design, dependable quality, made to show up every day."
                  />
                  <ValueItem
                    title="Fashion Forward"
                    description="We pick what matters and leave the noise behind, creating designs that feel current without trying too hard."
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
                    alt="Sustainable craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/30 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Experience the <span className="italic">Difference</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Discover the world of Hot Toddy and find your perfect companion.
            </p>
            <Button 
              asChild
              className="font-body text-sm tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface CraftCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const CraftCard: React.FC<CraftCardProps> = ({ number, title, description, image }) => (
  <motion.div 
    className="group"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="aspect-[4/3] overflow-hidden mb-6">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span className="font-display text-gold text-sm">{number}</span>
    <h3 className="font-display text-2xl font-light mt-2 mb-3">{title}</h3>
    <p className="font-body text-cream/70 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
  <motion.div 
    className="text-center group"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="aspect-[3/4] overflow-hidden mb-6">
      <motion.img
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
        src={image}
        alt={name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
    </div>
    <h3 className="font-display text-xl font-light">{name}</h3>
    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
      {role}
    </p>
  </motion.div>
);

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="font-display text-3xl md:text-4xl font-light text-gold mb-1">
      {value}
    </p>
    <p className="font-body text-[10px] tracking-widest uppercase text-cream/70">
      {label}
    </p>
  </div>
);

interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description }) => (
  <div className="border-l-2 border-accent/30 pl-6">
    <h3 className="font-display text-xl font-light mb-2">{title}</h3>
    <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export default About;

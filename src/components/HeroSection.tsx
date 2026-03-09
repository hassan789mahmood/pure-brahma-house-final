import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Zap } from 'lucide-react';

const words = ['Genetics', 'Standards', 'Quality'];

const marqueeItems = [
  'Selective Breeding',
  'Limited Production',
  'Premium Lines',
  'Professional Support',
  'Garden Town, Lahore',
  'Isabel Brahma',
  'Advance Booking',
  'Direct Pricing',
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-50" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Radial center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />
      </motion.div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity, scale }} className="relative z-10 container mx-auto px-6 lg:px-12 pt-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-bright rounded-full px-4 py-2 mb-10"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                Pakistan's Premium Brahma Breeders
              </span>
            </motion.div>

            {/* Title lines */}
            <div className="space-y-2 mb-10">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight"
                >
                  Pure Brahma
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4"
                >
                  <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight text-gold-gradient">
                    {words[wordIndex]}
                  </span>
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="hidden md:inline-block w-4 h-4 rounded-full bg-primary animate-pulse"
                  />
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-12"
            >
              Specializing in Isabel Brahma lines. Premium chicks and fertile eggs available on advance booking. Limited batches only.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a href="#contact" className="btn-gold rounded-full px-8 py-4 text-primary-foreground font-medium flex items-center gap-2 group">
                Book Now
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline rounded-full px-8 py-4 text-primary font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.79l4.925-1.29A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.156 0-4.162-.672-5.813-1.819l-.417-.25-2.917.764.779-2.842-.273-.434A9.697 9.697 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl scale-110" />
              
              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border border-border/50">
                <img
                  src="https://www.purebrahmahouse.com/images/brahma-hen.png"
                  alt="Premium Isabel Brahma - Pure Brahma House"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-8 top-1/4 glass-card rounded-2xl p-4 min-w-[160px]"
              >
                <div className="font-mono text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-xs text-muted-foreground">Premium Varieties</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -right-8 bottom-1/4 glass-card rounded-2xl p-4 min-w-[160px]"
              >
                <div className="font-mono text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Selective Breeding</div>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <div className="absolute top-0 right-0 w-full h-px bg-primary/50" />
                <div className="absolute top-0 right-0 w-px h-full bg-primary/50" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8">
                <div className="absolute bottom-0 left-0 w-full h-px bg-primary/50" />
                <div className="absolute bottom-0 left-0 w-px h-full bg-primary/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Bottom marquee bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 py-3 glass-surface overflow-hidden z-10">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-xs font-mono uppercase tracking-wider text-muted-foreground/60 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

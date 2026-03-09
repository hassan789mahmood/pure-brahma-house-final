import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Zap } from 'lucide-react';

const rotatingWords = ['Genetics', 'Standards', 'Quality', 'Excellence'];
const marquee = ['Selective Breeding', 'Limited Production', 'Premium Lines', 'Professional Support', 'Garden Town, Lahore', 'Isabel Brahma', 'Advance Booking'];

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIdx((i) => (i + 1) % rotatingWords.length), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <motion.div style={{ y }} className="absolute inset-0 grid-bg" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      {/* Vertical lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 glass-light rounded-full px-5 py-2.5"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                Pakistan's Premium Brahma Breeders
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight"
                >
                  Pure Brahma
                </motion.h1>
              </div>
              <div className="overflow-hidden h-[1.1em]">
                <motion.div
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.45 }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    key={wordIdx}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight text-neon text-glow"
                  >
                    {rotatingWords[wordIdx]}
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Specializing in Isabel Brahma lines. Premium chicks and fertile eggs available on advance booking. Limited batches only.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-neon rounded-full px-8 py-4 text-primary-foreground font-semibold flex items-center gap-2 group">
                Book Now
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="https://wa.me/923454489123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-full px-8 py-4 text-primary font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border/50 gradient-border">
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://www.purebrahmahouse.com/images/brahma-hen.png"
                    alt="Isabel Brahma - Pure Brahma House"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-10 top-1/4 glass rounded-2xl p-5 border border-border/50"
              >
                <div className="mono text-3xl font-bold text-neon mb-1">4+</div>
                <div className="text-xs text-muted-foreground">Premium Varieties</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-10 bottom-1/3 glass rounded-2xl p-5 border border-border/50"
              >
                <div className="mono text-3xl font-bold text-neon mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Selective Breeding</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 py-4 glass z-10 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((item, i) => (
            <span key={i} className="mx-8 mono text-xs uppercase tracking-wider text-muted-foreground/60 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

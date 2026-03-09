import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowUpRight, ChevronDown, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const rotatingWords = ['Genetics', 'Standards', 'Quality', 'Excellence'];
const marquee = ['Selective Breeding', 'Limited Production', 'Premium Lines', 'Professional Support', 'Advance Booking'];

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [wordIdx, setWordIdx] = useState(0);
  
  // Mouse parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [driftAngle, setDriftAngle] = useState(0);
  const isMouseActive = useRef(false);
  const mouseTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const interval = setInterval(() => setWordIdx((i) => (i + 1) % rotatingWords.length), 2500);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
    isMouseActive.current = true;
    
    clearTimeout(mouseTimeout.current);
    mouseTimeout.current = setTimeout(() => {
      isMouseActive.current = false;
    }, 150);
  }, []);

  // Smooth animation loop: fast follow on mouse, slow drift without
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setSmoothPos(prev => {
        if (isMouseActive.current) {
          // Fast lerp toward mouse
          return {
            x: prev.x + (mousePos.x - prev.x) * 0.12,
            y: prev.y + (mousePos.y - prev.y) * 0.12,
          };
        } else {
          // Slow autonomous drift in a circle
          const driftX = Math.sin(driftAngle) * 0.15;
          const driftY = Math.cos(driftAngle * 0.7) * 0.1;
          return {
            x: prev.x + (driftX - prev.x) * 0.008,
            y: prev.y + (driftY - prev.y) * 0.008,
          };
        }
      });
      setDriftAngle(a => a + 0.008);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [mousePos, driftAngle]);

  const bgX = smoothPos.x * 30;
  const bgY = smoothPos.y * 20;
  const overlayX = smoothPos.x * -15;
  const overlayY = smoothPos.y * -10;

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-size background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute -inset-4 bg-cover bg-center transition-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translate3d(${bgX}px, ${bgY}px, 0) scale(1.02)`,
          }}
        />
      </motion.div>

      {/* Dark overlay for readability */}
      <div
        className="absolute -inset-10 bg-background/70 backdrop-blur-[2px]"
        style={{
          transform: `translate3d(${overlayX}px, ${overlayY}px, 0)`,
        }}
      />

      {/* Grid background */}
      <motion.div style={{ y }} className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Gradient orbs with mouse parallax */}
      <div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] pointer-events-none"
        style={{ transform: `translate3d(${smoothPos.x * 50}px, ${smoothPos.y * 40}px, 0)` }}
      />
      <div
        className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
        style={{ transform: `translate3d(${smoothPos.x * -40}px, ${smoothPos.y * -30}px, 0)` }}
      />

      {/* Vertical lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="max-w-3xl space-y-10">
          {/* Left content */}
          <div className="space-y-10">
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
            <div className="space-y-3">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight whitespace-nowrap"
              >
                Pure Brahma House
              </motion.h1>
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex items-center gap-4 min-h-[1.2em]"
              >
                <motion.span
                  key={wordIdx}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neon text-glow"
                >
                  {rotatingWords[wordIdx]}
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Specializing in Isabel Brahma lines. Premium chicks and fertile eggs available on advance booking. Limited batches only.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-neon rounded-full px-6 py-3 text-sm text-primary-foreground font-semibold flex items-center gap-2 whitespace-nowrap group">
                Book Now
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="https://wa.me/923454489123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-full px-6 py-3 text-sm text-primary font-semibold flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>
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

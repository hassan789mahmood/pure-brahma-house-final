import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import aboutBrahma from '@/assets/about-brahma.jpg';

const stats = [
  { value: 4, suffix: '+', label: 'Premium Varieties' },
  { value: 100, suffix: '%', label: 'Selective Breeding' },
  { value: 2, suffix: '', label: 'Lines Available' },
  { prefix: '', value: 0, suffix: '', label: 'Direct Pricing', display: 'PKR' },
];

const Counter = ({ value, prefix = '', suffix = '', display, inView }: { value: number; prefix?: string; suffix?: string; display?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="mono text-3xl md:text-4xl font-bold text-neon">
      {prefix}{display || count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-0 right-0 line-h" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="mono text-xs uppercase tracking-[0.2em] text-primary">ABOUT US</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-6"
            >
              Breeding Excellence,{' '}
              <span className="text-neon">Line by Line</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-muted-foreground leading-relaxed mb-5"
            >
              Pure Brahma House operates on a philosophy of precision. We do not produce in excess — every chick, every fertile egg is the result of deliberate, selective pairing designed for structural integrity and true-to-type color standards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-muted-foreground leading-relaxed mb-8"
            >
              Based in Garden Town, Lahore, we serve serious breeders across Pakistan who value quality over quantity. Our communication is transparent, our process is structured, and our commitment to the breed is unwavering.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#products"
              className="inline-flex items-center gap-3 text-primary font-semibold group"
            >
              <span className="underline-reveal">Our Story & Standards</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/50 gradient-border">
              <div className="aspect-[4/5]">
                <img
                  src={aboutBrahma}
                  alt="Isabel Brahma"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 max-w-[260px] border border-border/50"
            >
              <div className="w-8 h-px bg-primary mb-4" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Every chick is the result of deliberate, selective pairing."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-28"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-8 text-center hover-lift border border-border/30 group">
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} display={stat.display} inView={inView} />
              <div className="w-10 h-px bg-primary/30 mx-auto my-4 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

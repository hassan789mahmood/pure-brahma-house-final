import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: 4, suffix: '+', label: 'Premium Varieties', mono: true },
  { value: 100, suffix: '%', label: 'Selective Breeding', mono: true },
  { value: 2, suffix: '', label: 'Lines Available', mono: true },
  { prefix: 'PKR', value: 0, suffix: '', label: 'Direct Pricing', mono: true },
];

const CountUp = ({ value, prefix = '', suffix = '', inView }: { value: number; prefix?: string; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-mono text-5xl md:text-6xl font-bold text-gold-gradient">
      {prefix}{value === 0 ? 'PKR' : count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1 to-background" />
        <div className="absolute top-0 left-0 right-0 gradient-line" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-12 relative"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">001 / About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Large text */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8"
            >
              Breeding
              <br />
              Excellence,{' '}
              <span className="text-gold-gradient italic">
                Line by Line
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-6">
              Pure Brahma House operates on a philosophy of precision. We do not produce in excess — every chick, every fertile egg is the result of deliberate, selective pairing designed for structural integrity and true-to-type color standards.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-10">
              Based in Garden Town, Lahore, we serve serious breeders across Pakistan who value quality over quantity. Our communication is transparent, our process is structured, and our commitment to the breed is unwavering.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="#products"
              className="inline-flex items-center gap-3 text-primary font-medium group"
            >
              <span className="reveal-line">Our Story & Standards</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </div>

          {/* Right - Image + floating elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-border/30">
              <img
                src="https://www.purebrahmahouse.com/images/brahma-hen.png"
                alt="Isabel Brahma Hen - Pure Brahma House"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 max-w-[280px]"
            >
              <div className="w-8 h-px bg-primary mb-4" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Every chick, every fertile egg is the result of deliberate, selective pairing."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-8 text-center hover-lift group"
            >
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={isInView} />
              <div className="w-8 h-px bg-primary/30 mx-auto my-4 group-hover:w-16 transition-all duration-500" />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

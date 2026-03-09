import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 4, suffix: '+', label: 'Premium Varieties' },
  { value: 100, suffix: '%', label: 'Selective Breeding' },
  { value: 2, suffix: '', label: 'Lines Now Available' },
  { value: 0, prefix: 'PKR', suffix: '', label: 'Direct Breeder Pricing' },
];

const AnimatedCounter = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) {
      setCount(0);
      return;
    }
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-gradient-gold font-medium">
      {prefix}{count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">About Us</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Breeding Excellence,
            <br />
            <span className="text-gradient-gold italic">Line by Line</span>
          </h2>
          <div className="section-divider mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://www.purebrahmahouse.com/images/brahma-hen.png"
                alt="Isabel Brahma Hen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 max-w-xs"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Every chick, every fertile egg is the result of deliberate, selective pairing."
              </p>
            </motion.div>

            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Pure Brahma House operates on a philosophy of precision. We do not produce in excess — every chick, every fertile egg is the result of deliberate, selective pairing designed for structural integrity and true-to-type color standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Based in Garden Town, Lahore, we serve serious breeders across Pakistan who value quality over quantity. Our communication is transparent, our process is structured, and our commitment to the breed is unwavering.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="text-center p-6 glass rounded-xl"
                >
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#products"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-flex items-center gap-2 mt-10 text-primary underline-animate font-medium"
            >
              Our Story & Standards
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

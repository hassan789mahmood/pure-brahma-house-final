import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Clock, Signal } from 'lucide-react';

const available = [
  {
    title: 'Isabel Brahma Chicks',
    description: 'Selectively bred Isabel Brahma chicks with focused genetics, proper feather structure, and controlled early-stage care.',
    image: 'https://www.purebrahmahouse.com/images/isabel-chicks.png',
    tag: 'Available',
  },
  {
    title: 'Isabel Brahma Eggs',
    description: 'Fertile eggs collected from controlled Isabel Brahma breeding pairs. Ideal for breeders who prefer to hatch their own stock.',
    image: 'https://www.purebrahmahouse.com/images/fertile-eggs.png',
    tag: 'Available',
  },
];

const waitlist = [
  { title: 'Light Columbian Brahma', description: 'Striking white plumage with black hackle markings.', image: 'https://www.purebrahmahouse.com/images/brahma-rooster.png' },
  { title: 'Blue Columbian Brahma', description: 'Rare variety with distinctive blue-laced feathering.', image: 'https://www.purebrahmahouse.com/images/brahma-hen.png' },
  { title: 'BSO Brahma', description: 'Premium BSO variety bred to standard expectations.', image: 'https://www.purebrahmahouse.com/images/farm-environment.png' },
  { title: 'Dark Brahma', description: 'Classic variety with bold, intricate feather patterning.', image: 'https://www.purebrahmahouse.com/images/brahma-rooster.png' },
];

export const ProductsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="products" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">002 / Lines</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Available for{' '}
            <span className="text-gold-gradient italic">Booking</span>
          </h2>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Two premium Isabel Brahma lines. Limited batch production ensures quality.
          </p>
        </motion.div>

        {/* Available - Large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {available.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-700 hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Status badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 glass-card rounded-full px-4 py-2">
                  <Signal className="w-3 h-3 text-primary animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">{product.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-gold-gradient transition-all duration-500">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href="#contact" className="btn-gold rounded-full px-6 py-3 text-sm text-primary-foreground font-medium flex items-center gap-2 group/btn">
                    Book Now
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://wa.me/923454489123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline rounded-full px-6 py-3 text-sm text-primary font-medium"
                  >
                    WhatsApp Order
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ boxShadow: 'inset 0 0 80px -20px hsl(45, 100%, 55%, 0.1)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Currently Out of Stock — Join Waitlist</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {waitlist.map((item, i) => (
            <motion.a
              key={item.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover-lift block"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full">Waitlist</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-mono">
                  Join <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

const availableProducts = [
  {
    title: 'Isabel Brahma Chicks',
    description: 'Selectively bred Isabel Brahma chicks with focused genetics, proper feather structure, and controlled early-stage care. Advance booking required.',
    image: 'https://www.purebrahmahouse.com/images/isabel-chicks.png',
    status: 'Available on Booking',
    available: true,
  },
  {
    title: 'Isabel Brahma Eggs',
    description: 'Fertile eggs collected from controlled Isabel Brahma breeding pairs. Ideal for breeders who prefer to hatch their own stock.',
    image: 'https://www.purebrahmahouse.com/images/fertile-eggs.png',
    status: 'Available on Booking',
    available: true,
  },
];

const waitlistProducts = [
  {
    title: 'Light Columbian Brahma Chicks',
    description: 'Striking white plumage with black hackle markings. A highly sought-after Brahma variety.',
    image: 'https://www.purebrahmahouse.com/images/brahma-rooster.png',
  },
  {
    title: 'Blue Columbian Brahma Chicks',
    description: 'A rare and elegant variety with distinctive blue-laced feathering. Limited production when available.',
    image: 'https://www.purebrahmahouse.com/images/brahma-hen.png',
  },
  {
    title: 'BSO Brahma Chicks',
    description: 'Premium BSO Brahma variety bred to standard expectations. A valued line among serious breeders.',
    image: 'https://www.purebrahmahouse.com/images/farm-environment.png',
  },
  {
    title: 'Dark Brahma Chicks',
    description: 'A classic and distinguished Brahma variety with bold, intricate feather patterning.',
    image: 'https://www.purebrahmahouse.com/images/brahma-rooster.png',
  },
];

export const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="products" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Our Lines</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Available for <span className="text-gradient-gold italic">Booking</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two premium Isabel Brahma lines currently accepting advance bookings. Limited batch production ensures quality is never compromised.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Available Products */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {availableProducts.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="group relative glass rounded-3xl overflow-hidden card-3d"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="btn-premium rounded-full group/btn"
                  >
                    <span className="flex items-center gap-2 text-primary-foreground font-medium px-6 py-3">
                      Book Now
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </span>
                  </a>
                  <a
                    href="https://wa.me/923454489123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold rounded-full px-6 py-3 font-medium"
                  >
                    WhatsApp Order
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Currently Out of Stock
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mb-4">Join the Waitlist</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {waitlistProducts.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-primary mt-4 underline-animate"
                >
                  Join Waitlist <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

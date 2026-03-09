import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layers, MessageSquare, Dna } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Selective Pairing',
    description: 'Every breeding pair is selected based on structure, feather quality, and color accuracy. We breed with intent.',
  },
  {
    icon: Layers,
    title: 'Limited Production',
    description: 'We deliberately limit batch sizes to maintain standards. Scarcity here is a quality guarantee, not a marketing tactic.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'No exaggerated claims. No vague promises. We communicate clearly about availability, timelines, and expectations.',
  },
  {
    icon: Dna,
    title: 'Genetic Integrity',
    description: 'Our Isabel Brahma lines are maintained with strict genetic discipline. True-to-type birds, consistent across batches.',
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Why Pure Brahma House</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Standards That Set Us <span className="text-gradient-gold italic">Apart</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_60px_-15px_hsl(43,74%,49%,0.3)]">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-6 right-6 w-8 h-[1px] bg-gradient-to-r from-transparent to-primary" />
                  <div className="absolute top-6 right-6 w-[1px] h-8 bg-gradient-to-b from-transparent to-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

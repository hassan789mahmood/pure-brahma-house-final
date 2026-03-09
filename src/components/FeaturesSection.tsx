import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layers, MessageSquare, Dna } from 'lucide-react';

const features = [
  { icon: Target, title: 'Selective Pairing', description: 'Every breeding pair is selected based on structure, feather quality, and color accuracy. We breed with intent.', number: '01' },
  { icon: Layers, title: 'Limited Production', description: 'We deliberately limit batch sizes to maintain standards. Scarcity is a quality guarantee, not a marketing tactic.', number: '02' },
  { icon: MessageSquare, title: 'Transparent Communication', description: 'No exaggerated claims. No vague promises. We communicate clearly about availability, timelines, and expectations.', number: '03' },
  { icon: Dna, title: 'Genetic Integrity', description: 'Our Isabel Brahma lines are maintained with strict genetic discipline. True-to-type birds, consistent across batches.', number: '04' },
];

export const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="features" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 right-0 gradient-line" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">003 / Standards</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-20 max-w-3xl"
        >
          Standards That Set Us{' '}
          <span className="text-gold-gradient italic">Apart</span>
        </motion.h2>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
              className="group glass-card rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all duration-700 hover-lift relative overflow-hidden radial-hover"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 font-mono text-6xl font-bold text-border/50 group-hover:text-primary/10 transition-colors duration-700">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-8 group-hover:glow-sm transition-all duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-gold-gradient transition-all duration-500">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {feature.description}
              </p>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

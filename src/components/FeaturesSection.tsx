import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layers, MessageSquare, Dna } from 'lucide-react';

const features = [
  { icon: Target, title: 'Selective Pairing', desc: 'Every breeding pair is selected based on structure, feather quality, and color accuracy. We breed with intent.', num: '01' },
  { icon: Layers, title: 'Limited Production', desc: 'We deliberately limit batch sizes to maintain standards. Scarcity is a quality guarantee, not a marketing tactic.', num: '02' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'No exaggerated claims. No vague promises. We communicate clearly about availability, timelines, and expectations.', num: '03' },
  { icon: Dna, title: 'Genetic Integrity', desc: 'Our Isabel Brahma lines are maintained with strict genetic discipline. True-to-type birds, consistent across batches.', num: '04' },
];

export const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 right-0 line-h" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="mono text-xs uppercase tracking-[0.2em] text-primary">003 / Standards</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-16      >
          Standards That Set Us <span className="text-neon">Apart</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
              className="group glass rounded-3xl p-8 md:p-10 border border-border/30 hover:border-primary/40 transition-all duration-500 hover-lift relative overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-6 mono text-6xl font-bold text-border/30 group-hover:text-primary/10 transition-colors">
                {f.num}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-8 group-hover:neon-glow transition-all duration-500">
                <f.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-2xl font-bold xl font-bold mb-3ext-neon transition-colors">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

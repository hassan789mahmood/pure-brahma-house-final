import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: '01', title: 'Submit Request', desc: 'Fill the booking form or contact us via WhatsApp.' },
  { num: '02', title: 'Confirm Availability', desc: 'We verify current batch status and batch size.' },
  { num: '03', title: 'Booking Confirmed', desc: 'Receive your official booking confirmation.' },
  { num: '04', title: 'Finalize via WhatsApp', desc: 'Coordinate logistics, timing, and final details.' },
  { num: '05', title: 'Pickup / Dispatch', desc: 'Collect from Garden Town or coordinated dispatch.' },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="process" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-surface-1 to-card" />
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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">004 / Process</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-20 max-w-3xl"
        >
          How Booking{' '}
          <span className="text-gold-gradient italic">Works</span>
        </motion.h2>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-[72px] bottom-0 w-px gradient-line-v" />
              )}

              <div className="flex items-start gap-8 py-8 border-b border-border/30 group-hover:border-primary/20 transition-all duration-500">
                {/* Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:glow-sm transition-all duration-500">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">{step.num}</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-gold-gradient transition-all duration-500">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">{step.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-2 transition-all duration-500 flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <a href="#contact" className="btn-gold rounded-full px-10 py-4 text-primary-foreground font-medium inline-flex items-center gap-2 group">
            Start Your Booking
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

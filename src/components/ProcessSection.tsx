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
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-secondary to-card" />
      <div className="absolute top-0 left-0 right-0 line-h" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="mono text-xs uppercase tracking-[0.2em] text-primary">004 / Process</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-16      >
          How Booking <span className="text-neon">Works</span>
        </motion.h2>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="group relative"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-[70px] bottom-0 w-px line-v" />
              )}

              <div className="flex items-start gap-8 py-7 border-b border-border/30 group-hover:border-primary/30 transition-all">
                {/* Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:neon-glow transition-all">
                  <span className="mono text-sm text-muted-foreground group-hover:text-primary transition-colors">{step.num}</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xllg md:text-roup-hover:text-neon transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-20"
        >
          <a href="#contact" className="btn-neon rounded-full px-10 py-4 text-primary-foreground font-semibold inline-flex items-center gap-2 group">
            Start Your Booking
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

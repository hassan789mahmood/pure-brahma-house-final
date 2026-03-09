import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Submit Request',
    description: 'Fill the booking form or contact us via WhatsApp.',
  },
  {
    number: '02',
    title: 'Confirm Availability',
    description: 'We verify current batch status and batch size.',
  },
  {
    number: '03',
    title: 'Booking Confirmed',
    description: 'Receive your official booking confirmation.',
  },
  {
    number: '04',
    title: 'Finalize via WhatsApp',
    description: 'Coordinate logistics, timing, and final details.',
  },
  {
    number: '05',
    title: 'Pickup / Dispatch',
    description: 'Collect from Garden Town or coordinated dispatch.',
  },
];

export const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-secondary/10 to-card" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">The Process</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            How Booking <span className="text-gradient-gold italic">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A clear, structured process from inquiry to delivery.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number Circle */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_-5px_hsl(43,74%,49%)]">
                  <span className="font-serif text-xl text-primary-foreground font-medium">{step.number}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-28 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
                  <h3 className="font-serif text-2xl mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-premium rounded-full inline-block">
            <span className="flex items-center gap-2 text-primary-foreground font-medium px-10 py-4">
              Start Your Booking
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

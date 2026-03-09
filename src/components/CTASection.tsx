import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="contact" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-bright rounded-full px-4 py-2 mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Limited Availability</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.95] mb-8">
            Ready to Secure
            <br />
            <span className="text-gold-gradient italic">Your Booking?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            Isabel Brahma chicks and fertile eggs are available now. Batch sizes are intentionally limited — book early to avoid disappointment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I%20would%20like%20to%20inquire%20about%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-10 py-5 text-primary-foreground font-medium text-lg flex items-center justify-center gap-2 group"
            >
              Request Booking
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wa.me/923454489123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline rounded-full px-10 py-5 text-primary font-medium text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.79l4.925-1.29A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.156 0-4.162-.672-5.813-1.819l-.417-.25-2.917.764.779-2.842-.273-.434A9.697 9.697 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap justify-center gap-8">
            {['Direct Breeder Pricing', 'Quality Guaranteed', 'Professional Support'].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="text-sm text-muted-foreground font-mono">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

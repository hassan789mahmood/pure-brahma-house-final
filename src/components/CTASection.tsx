import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute inset-0 dots-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 line-h" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Limited Availability</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] mb-6">
            Ready to Secure
            <br />
            <span className="text-neon text-glow">Your Booking?</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Isabel Brahma chicks and fertile eggs are available now. Batch sizes are intentionally limited — book early to avoid disappointment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I%20would%20like%20to%20inquire%20about%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon rounded-full px-8 py-3 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrapwhitespace-nowrap group"
            >
              Request Booking
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://wa.me/923454489123"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 text-white font-semibold text-sm flex items-center justify-center gap-3 whitespace-nowrap bg-[#25D366] hover:bg-[#1ebe5a] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap justify-center gap-8">
            {['Direct Breeder Pricing', 'Quality Guaranteed', 'Professional Support'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/60 pulse-dot" />
                <span className="mono text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

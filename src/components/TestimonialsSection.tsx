import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  { content: "Received my Isabel Brahma chicks in excellent condition. The feather structure was exactly as described — these birds clearly come from a serious breeding program.", author: "Ahmad Khan", location: "Islamabad, Pakistan", initials: "AK" },
  { content: "The fertile eggs were packed carefully. Hatch rate was satisfying. Communication was professional throughout. Will definitely book again next season.", author: "Salman Raza", location: "Karachi, Pakistan", initials: "SR" },
  { content: "What impressed me most was the transparency. No inflated claims. They told me exactly what to expect. The chicks matched the description perfectly.", author: "Usman Malik", location: "Faisalabad, Pakistan", initials: "UM" },
];

export const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 right-0 line-h" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-primary" />
          <span className="mono text-xs uppercase tracking-[0.2em] text-primary">005 / Reviews</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-16      >
          What Breeders Are <span className="text-neon">Saying</span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-14 border border-border/50 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary/30" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[180px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-2xl md:text-3xxl md:text-2xl leading-[1.4] mb-8 font-semi        >
                  "{testimonials[active].content}"
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                      <span className="mono text-sm text-primary">{testimonials[active].initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonials[active].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[active].location}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <ArrowLeft className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button onClick={() => setActive((a) => (a + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-primary' : 'w-4 bg-border'}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

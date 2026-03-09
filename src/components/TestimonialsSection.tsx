import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Received my Isabel Brahma chicks in excellent condition. The feather structure was exactly as described — these birds clearly come from a serious breeding program.",
    author: "Ahmad Khan",
    location: "Islamabad, Pakistan",
    initials: "AK",
  },
  {
    content: "The fertile eggs were packed carefully. Hatch rate was satisfying. Communication was professional throughout. Will definitely book again next season.",
    author: "Salman Raza",
    location: "Karachi, Pakistan",
    initials: "SR",
  },
  {
    content: "What impressed me most was the transparency. No inflated claims. They told me exactly what to expect. The chicks matched the description perfectly.",
    author: "Usman Malik",
    location: "Faisalabad, Pakistan",
    initials: "UM",
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Client Feedback</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            What Breeders Are <span className="text-gradient-gold italic">Saying</span>
          </h2>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative glass rounded-3xl p-8 md:p-12 lg:p-16"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10 text-foreground">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="font-serif text-lg text-primary">{testimonials[activeIndex].initials}</span>
                </div>
                <div>
                  <p className="font-medium text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-primary' : 'w-4 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

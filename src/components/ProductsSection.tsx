import { motion, useInView } from 'framer-motion';
import { useRef, useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock, Radio } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import blueColumbianImg from '@/assets/blue-columbian-brahma.png';
import bsoBrahmaImg from '@/assets/bso-brahma.png';
import lightColumbianImg from '@/assets/light-columbian-brahma.png';
import darkBrahmaImg from '@/assets/dark-brahma.png';
import isabelBrahmaImg from '@/assets/isabel-brahma.jpg';
import isabelBrahmaEggsImg from '@/assets/isabel-brahma-eggs.png';

type Product = {
  title: string;
  description: string;
  image: string;
  imgClass?: string;
  status: 'available' | 'waitlist';
  originalPrice?: number;
  discountedPrice?: number;
};

const products: Product[] = [
  // ── Available ──
  {
    title: 'Isabel Brahma - One Week Old Chicks',
    description: 'Selectively bred Isabel Brahma chicks with focused genetics, proper feather structure, and controlled early-stage care.',
    image: 'https://www.purebrahmahouse.com/images/isabel-chicks.png',
    status: 'available',
    originalPrice: 4000,
    discountedPrice: 3500,
  },
  {
    title: 'Isabel Brahma Eggs',
    description: 'Fertile eggs collected from controlled Isabel Brahma breeding pairs. Ideal for breeders who prefer to hatch their own stock.',
    image: isabelBrahmaEggsImg,
    status: 'available',
    originalPrice: 1800,
    discountedPrice: 1500,
  },

  // ── Waitlist ──
  { title: 'Light Columbian Brahma', description: 'Striking white plumage with black hackle markings.', image: lightColumbianImg, status: 'waitlist' },
  { title: 'Blue Columbian Brahma', description: 'Rare variety with distinctive blue-laced feathering.', image: blueColumbianImg, imgClass: 'object-[center_30%]', status: 'waitlist' },
  { title: 'BSO Brahma', description: 'Premium BSO variety bred to standard expectations.', image: bsoBrahmaImg, imgClass: 'object-[center_35%]', status: 'waitlist' },
  { title: 'Dark Brahma', description: 'Classic variety with bold, intricate feather patterning.', image: darkBrahmaImg, status: 'waitlist' },
  { title: 'Isabel Brahma', description: 'Premium Isabel variety with refined golden-buff coloring.', image: isabelBrahmaImg, status: 'waitlist' },
];

const formatPrice = (n: number) => `Rs.${n.toLocaleString()}`;

export const ProductsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const available = products.filter(p => p.status === 'available');
  const waitlist = products.filter(p => p.status === 'waitlist');

  // Available carousel
  const [availRef, availApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [availPrev, setAvailPrev] = useState(false);
  const [availNext, setAvailNext] = useState(true);
  const scrollAvailPrev = useCallback(() => availApi?.scrollPrev(), [availApi]);
  const scrollAvailNext = useCallback(() => availApi?.scrollNext(), [availApi]);

  useEffect(() => {
    if (!availApi) return;
    const onSelect = () => { setAvailPrev(availApi.canScrollPrev()); setAvailNext(availApi.canScrollNext()); };
    availApi.on('select', onSelect);
    onSelect();
    return () => { availApi.off('select', onSelect); };
  }, [availApi]);

  // Waitlist carousel
  const [waitRef, waitApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const [waitPrev, setWaitPrev] = useState(false);
  const [waitNext, setWaitNext] = useState(true);
  const scrollWaitPrev = useCallback(() => waitApi?.scrollPrev(), [waitApi]);
  const scrollWaitNext = useCallback(() => waitApi?.scrollNext(), [waitApi]);

  useEffect(() => {
    if (!waitApi) return;
    const onSelect = () => { setWaitPrev(waitApi.canScrollPrev()); setWaitNext(waitApi.canScrollNext()); };
    waitApi.on('select', onSelect);
    onSelect();
    return () => { waitApi.off('select', onSelect); };
  }, [waitApi]);

  return (
    <section id="products" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
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
          <span className="mono text-xs uppercase tracking-[0.2em] text-primary">LINES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold leading-[1.1] mb-16"
        >
          Available for <span className="text-neon">Booking</span>
        </motion.h2>

        {/* ── Available Products Carousel ── */}
        <div className="relative mb-28">
          <div className="overflow-hidden" ref={availRef}>
            <div className="flex gap-6">
              {available.map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover-lift gradient-border bg-card flex-[0_0_calc(50%-12px)] min-w-0 max-sm:flex-[0_0_85%] max-lg:flex-[0_0_calc(50%-12px)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.imgClass || ''}`}
                    />
                    {/* Status */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                      <Radio className="w-3 h-3 text-primary animate-pulse" />
                      <span className="mono text-[10px] sm:text-xs uppercase tracking-wider text-primary">Available</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-8">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-neon transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-5 line-clamp-2">{product.description}</p>

                    {/* Pricing */}
                    {product.originalPrice && product.discountedPrice && (
                      <div className="flex items-center gap-3 mb-5 sm:mb-8">
                        <span className="mono text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="mono text-lg sm:text-xl font-bold text-primary">
                          {formatPrice(product.discountedPrice)}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2 sm:gap-3">
                      <a href="/booking" className="btn-neon rounded-full px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-primary-foreground font-semibold flex-1 flex items-center justify-center gap-1.5 whitespace-nowrap group/btn">
                        Book Now <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 flex-shrink-0" />
                      </a>
                      <a href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I'm%20interested%20in%20your%20Brahma%20birds%20and%20would%20like%20to%20place%20an%20order.%20Please%20share%20further%20information.%20Thank%20you." target="_blank" rel="noopener noreferrer" className="rounded-full px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-white font-medium flex-1 flex items-center justify-center gap-1.5 whitespace-nowrap bg-[#20b858] hover:bg-[#1ba94f] transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="hidden sm:inline">WhatsApp Order</span>
                        <span className="sm:hidden">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Available nav buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button onClick={scrollAvailPrev} disabled={!availPrev} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollAvailNext} disabled={!availNext} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Waitlist ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Currently Out of Stock — Join Waitlist</span>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={waitRef}>
            <div className="flex gap-5">
              {waitlist.map((item, i) => (
                <motion.a
                  key={item.title}
                  href="/booking"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                  className="group glass rounded-2xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-500 hover-lift block flex-[0_0_calc(25%-15px)] min-w-0 max-sm:flex-[0_0_80%] max-lg:flex-[0_0_calc(50%-10px)]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img src={item.image} alt={item.title} className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${item.imgClass || ''}`} />
                    <div className="absolute top-3 left-3">
                      <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full">Waitlist</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1 mono text-xs text-primary mt-3">
                      Join Waitlist <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Waitlist nav buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button onClick={scrollWaitPrev} disabled={!waitPrev} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollWaitNext} disabled={!waitNext} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

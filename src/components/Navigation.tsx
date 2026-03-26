import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Lines', href: '#products' },
  { name: 'Standards', href: '#features' },
  { name: 'Process', href: '#process' },
  { name: 'Reviews', href: '#testimonials' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > prev && latest > 400);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mb-0 ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pure Brahma House"
              className="w-14 h-14 rounded-lg object-contain cursor-pointer"
              onClick={(e) => { e.preventDefault(); setShowLogo(true); }}
            />
            <div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Pure<span className="text-primary">Brahma</span>House
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-sm text-foreground hover:text-primary transition-colors underline-reveal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/booking"
              className="btn-neon rounded-full px-6 py-2.5 text-sm text-primary-foreground flex items-center gap-2 whitespace-nowrap"
            >
              Book Now <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background lg:hidden flex flex-col items-center justify-center"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-4xl font-display font-black py-3 hover:text-neon transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/booking"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-neon rounded-full px-10 py-4 mt-10 text-primary-foreground font-semibold whitespace-nowrap"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Lightbox */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center cursor-pointer"
            onClick={() => setShowLogo(false)}
          >
            <motion.img
              src={logo}
              alt="Pure Brahma House"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

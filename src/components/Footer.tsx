import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const links = {
  'Quick Links': [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Lines', href: '#products' },
    { name: 'Standards', href: '#features' },
  ],
};

export const Footer = () => {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-background" />
      <div className="absolute top-0 left-0 right-0 line-h" />

      <div className="container mx-auto px-10 lg:px-32 relative">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16 place-items-start md:justify-items-center">
          {/* Brand */}
          <div className="md:justify-self-start">
            <a href="#home" className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); setShowLogo(true); }}>
                <img
                  src={logo}
                  alt="Pure Brahma House"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Pure<span className="text-primary">Brahma</span>House
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pakistan's premium Brahma breeders. Specializing in Isabel, Light Columbian, Blue Columbian, BSO, and Dark Brahma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links['Quick Links'].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors underline-reveal">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="https://www.google.com/maps/search/Abu+Bakar+Block,+New+Garden+Town,+Lahore" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Garden Town, Lahore, Pakistan</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I'm%20interested%20in%20your%20Brahma%20birds%20and%20would%20like%20to%20place%20an%20order.%20Please%20share%20further%20information.%20Thank%20you." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>0345 4489123</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Pure Brahma House. All rights reserved.
            </p>
            <p className="mono text-xs text-muted-foreground">
              Pakistan's Premium Brahma Breeders
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I'm%20interested%20in%20your%20Brahma%20birds%20and%20would%20like%20to%20place%20an%20order.%20Please%20share%20further%20information.%20Thank%20you."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform neon-glow"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
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
    </footer>
  );
};

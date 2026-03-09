import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

const links = {
  'Quick Links': [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Lines', href: '#products' },
    { name: 'Standards', href: '#features' },
  ],
  'Products': [
    { name: 'Isabel Brahma Chicks', href: '#products' },
    { name: 'Isabel Brahma Eggs', href: '#products' },
    { name: 'Light Columbian', href: '#products' },
    { name: 'Blue Columbian', href: '#products' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-background" />
      <div className="absolute top-0 left-0 right-0 line-h" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Pure<span className="text-primary">Brahma</span>House
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pakistan's premium Brahma breeders. Specializing in Isabel Brahma lines with selective breeding standards.
            </p>
            <a
              href="https://wa.me/923454489123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-bold mb-6">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors underline-reveal">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com/?q=Garden+Town+Lahore" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Garden Town, Lahore, Pakistan</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923454489123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+92 345 4489123</span>
                </a>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 btn-outline rounded-full px-6 py-3 text-sm text-primary font-medium mt-6">
              Book Now <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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
        href="https://wa.me/923454489123"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform neon-glow"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.79l4.925-1.29A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.156 0-4.162-.672-5.813-1.819l-.417-.25-2.917.764.779-2.842-.273-.434A9.697 9.697 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z" />
        </svg>
      </motion.a>
    </footer>
  );
};

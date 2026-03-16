import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        toast({ title: 'Booking Request Sent!', description: 'We will get back to you shortly.' });
        form.reset();
      } else {
        toast({ title: 'Something went wrong', description: 'Please try again or contact us via WhatsApp.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Network error', description: 'Please check your connection and try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground noise">
      {/* Background effects */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="fixed top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-2xl mx-auto mt-12 lg:mt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Limited Availability</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4">
              Book Your <span className="text-neon text-glow">Brahma</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
              Fill in the form below and we'll confirm availability and get back to you promptly.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-light rounded-3xl p-8 md:p-10 space-y-6 border border-border/50"
            >
              <input type="hidden" name="access_key" value="6c743dac-eb7a-49ea-bcbf-571ee828b16c" />
              <input type="hidden" name="subject" value="New Booking Request — Pure Brahma House" />

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  maxLength={20}
                  placeholder="+92 345 4489123"
                  className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Booking Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  placeholder="Which breed are you interested in? How many chicks/eggs? Any other details..."
                  className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon rounded-full py-3.5 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>

          {/* WhatsApp fallback */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm mb-3">Or reach us directly</p>
            <a
              href="https://wa.me/923454489123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold text-sm bg-[#20b858] hover:bg-[#1ba94f] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Booking;

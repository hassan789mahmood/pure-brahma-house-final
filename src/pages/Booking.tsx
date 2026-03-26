import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // stay on form
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-background text-foreground noise">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="fixed top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-2xl mx-auto mt-0 my-0">
          {isSubmitted ? (
            /* ───── Success State ───── */ <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="mx-auto mb-8 w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4">
                  Booking <span className="text-neon text-glow">Confirmed!</span>
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-3">
                  Thank you for your booking request. We've received your details and will get back to you within 24
                  hours.
                </p>
              </motion.div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="glass-light rounded-2xl p-6 md:p-8 border border-border/50 mt-10 mb-8 text-left"
              >
                <h3 className="mono text-xs uppercase tracking-[0.15em] text-primary mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  {[
                    "We will review your request and confirm availability.",
                    "You'll receive a confirmation via email or WhatsApp.",
                    "For faster response, message us directly on WhatsApp.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mono text-xs text-primary font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I'm%20interested%20in%20your%20Brahma%20birds%20and%20would%20like%20to%20place%20an%20order.%20Please%20share%20further%20information.%20Thank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white font-semibold text-sm bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with us on WhatsApp
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            /* ───── Form State ───── */
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center mb-12 mt-0"
              >
                <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Limited Availability
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-4">
                  Book Your <span className="text-neon text-glow">Brahma</span>
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
                  Fill in the form below and we'll confirm availability and get back to you promptly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="glass-light rounded-3xl px-8 md:px-10 pt-6 md:pt-8 pb-8 md:pb-10 space-y-6 border border-border/50"
                >
                  <input type="hidden" name="access_key" value="6c743dac-eb7a-49ea-bcbf-571ee828b16c" />
                  <input type="hidden" name="subject" value="New Booking Request — Pure Brahma House" />

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

                  <div className="space-y-2">
                    <label htmlFor="phone" className="mono text-xs uppercase tracking-widest text-muted-foreground">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      maxLength={20}
                      placeholder="0300 1234567"
                      className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-sm"
                    />
                  </div>

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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-neon rounded-full py-3.5 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Booking Request"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8"
              >
                <p className="text-muted-foreground text-sm mb-3">Or reach us directly</p>
                <a
                  href="https://wa.me/923454489123?text=Hello%20Pure%20Brahma%20House%2C%20I'm%20interested%20in%20your%20Brahma%20birds%20and%20would%20like%20to%20place%20an%20order.%20Please%20share%20further%20information.%20Thank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold text-sm bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Booking;

import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';

const AboutSection = lazy(() => import('@/components/AboutSection').then(m => ({ default: m.AboutSection })));
const ProductsSection = lazy(() => import('@/components/ProductsSection').then(m => ({ default: m.ProductsSection })));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const ProcessSection = lazy(() => import('@/components/ProcessSection').then(m => ({ default: m.ProcessSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const CTASection = lazy(() => import('@/components/CTASection').then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden noise">
      <Navigation />
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;

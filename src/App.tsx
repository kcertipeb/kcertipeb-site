import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import FacebookButton from './components/FacebookButton';
import Home from './pages/Home';
import ApartmentPEB from './pages/ApartmentPEB';
import HousePEB from './pages/HousePEB';
import EnergyAudit from './pages/EnergyAudit';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LandingPage from './pages/LandingPage';
import ThankYou from './pages/ThankYou';
import BlogPage from './pages/BlogPage';
import BlogPostCertificatPEB from './pages/BlogPostCertificatPEB';
import BlogPostCopropriete from './pages/BlogPostCopropriete';
import ImmeubelePEB from './pages/ImmeubelePEB';
import CommunePage from './pages/CommunePage';
import { LanguageProvider } from './lib/language';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppShell() {
  const { pathname } = useLocation();
  const isStandalonePage = pathname === '/lp' || pathname === '/merci';

  return (
    <div className="min-h-screen bg-white">
      {!isStandalonePage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificat-peb-appartement-bruxelles" element={<ApartmentPEB />} />
        <Route path="/certificat-peb-maison-bruxelles" element={<HousePEB />} />
        <Route path="/audit-energetique-bruxelles" element={<EnergyAudit />} />
        <Route path="/tarifs" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/certificat-peb-bruxelles-guide-complet-2026" element={<BlogPostCertificatPEB />} />
        <Route path="/blog/certificat-peb-copropriete-bruxelles" element={<BlogPostCopropriete />} />
        <Route path="/certificat-peb-immeuble-bruxelles" element={<ImmeubelePEB />} />
        <Route path="/certificat-peb/:slug" element={<CommunePage />} />
        <Route path="/lp" element={<LandingPage />} />
        <Route path="/merci" element={<ThankYou />} />
      </Routes>
      {!isStandalonePage && <Footer />}
      {!isStandalonePage && <CallButton />}
      {!isStandalonePage && <FacebookButton />}
      {!isStandalonePage && <WhatsAppButton />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </LanguageProvider>
  );
}

export default App;

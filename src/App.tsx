import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import Home from './pages/Home';
import ApartmentPEB from './pages/ApartmentPEB';
import HousePEB from './pages/HousePEB';
import EnergyAudit from './pages/EnergyAudit';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PricingPage from './pages/PricingPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificat-peb-appartement-bruxelles" element={<ApartmentPEB />} />
          <Route path="/certificat-peb-maison-bruxelles" element={<HousePEB />} />
          <Route path="/audit-energetique-bruxelles" element={<EnergyAudit />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
        <CallButton />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

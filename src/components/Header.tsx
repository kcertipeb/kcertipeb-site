import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+32486987484" className="flex items-center hover:text-emerald-200 transition">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">+32 486 98 74 84</span>
              </a>
              <a href="mailto:info@kcertipeb.be" className="flex items-center hover:text-emerald-200 transition">
                <Mail className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">info@kcertipeb.be</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              Intervention rapide à Bruxelles
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-emerald-700 hover:text-emerald-600 transition"
            >
              KcertiPEB
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-700 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-emerald-700 transition">
              Avantages
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-emerald-700 transition">
              Notre Processus
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-emerald-700 transition">
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Devis Gratuit
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Avantages
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Notre Processus
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium text-center"
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

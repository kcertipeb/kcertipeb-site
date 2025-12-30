import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      window.history.pushState(null, '', `#${id}`);
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
            <a
              href="#accueil"
              onClick={(e) => handleNavClick(e, 'accueil')}
              className="flex items-center hover:opacity-80 transition gap-3"
            >
              <img
                src="/logo.png"
                alt="KcertiPEB"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-emerald-700">KcertiPEB</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-emerald-700 transition">
              Services
            </a>
            <a href="#avantages" onClick={(e) => handleNavClick(e, 'avantages')} className="text-gray-700 hover:text-emerald-700 transition">
              Avantages
            </a>
            <a href="#processus" onClick={(e) => handleNavClick(e, 'processus')} className="text-gray-700 hover:text-emerald-700 transition">
              Notre Processus
            </a>
            <a href="#tarifs" onClick={(e) => handleNavClick(e, 'tarifs')} className="text-gray-700 hover:text-emerald-700 transition">
              Tarifs
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Devis Gratuit
            </a>
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
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Services
              </a>
              <a href="#avantages" onClick={(e) => handleNavClick(e, 'avantages')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Avantages
              </a>
              <a href="#processus" onClick={(e) => handleNavClick(e, 'processus')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Notre Processus
              </a>
              <a href="#tarifs" onClick={(e) => handleNavClick(e, 'tarifs')} className="text-gray-700 hover:text-emerald-700 transition text-left">
                Tarifs
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium text-center"
              >
                Devis Gratuit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

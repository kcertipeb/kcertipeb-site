import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition gap-3"
            >
              <img
                src="/logo.png"
                alt="KcertiPEB"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-emerald-700">KcertiPEB</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-emerald-700 transition flex items-center gap-1 py-2">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <Link
                      to="/certificat-peb-appartement-bruxelles"
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      Certificat PEB Appartement
                    </Link>
                    <Link
                      to="/certificat-peb-maison-bruxelles"
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      Certificat PEB Maison
                    </Link>
                    <Link
                      to="/audit-energetique-bruxelles"
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      Audit Énergétique
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/tarifs" className="text-gray-700 hover:text-emerald-700 transition">
              Tarifs
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-emerald-700 transition">
              FAQ
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Devis Gratuit
            </Link>
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
              <Link to="/certificat-peb-appartement-bruxelles" className="text-gray-700 hover:text-emerald-700 transition text-left" onClick={() => setMobileMenuOpen(false)}>
                Certificat PEB Appartement
              </Link>
              <Link to="/certificat-peb-maison-bruxelles" className="text-gray-700 hover:text-emerald-700 transition text-left" onClick={() => setMobileMenuOpen(false)}>
                Certificat PEB Maison
              </Link>
              <Link to="/audit-energetique-bruxelles" className="text-gray-700 hover:text-emerald-700 transition text-left" onClick={() => setMobileMenuOpen(false)}>
                Audit Énergétique
              </Link>
              <Link to="/tarifs" className="text-gray-700 hover:text-emerald-700 transition text-left" onClick={() => setMobileMenuOpen(false)}>
                Tarifs
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-emerald-700 transition text-left" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackPhoneCallConversion } from '../lib/tracking';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../lib/language';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        topLabel: 'Snelle interventie in Brussel',
        services: 'Diensten',
        apartment: 'EPB-certificaat appartement',
        house: 'EPB-certificaat woning',
        audit: 'Energie-audit',
        pricing: 'Tarieven',
        faq: 'FAQ',
        cta: 'Bekijk mijn prijs',
      }
    : {
        topLabel: 'Intervention rapide à Bruxelles',
        services: 'Services',
        apartment: 'Certificat PEB Appartement',
        house: 'Certificat PEB Maison',
        audit: 'Audit énergétique',
        pricing: 'Tarifs',
        faq: 'FAQ',
        cta: 'Voir mon prix',
      };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="bg-emerald-700 py-2 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="flex items-center transition hover:text-emerald-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">+32 486 98 74 84</span>
              </a>
              <a href="mailto:info@kcertipeb.be" className="flex items-center transition hover:text-emerald-200">
                <Mail className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">info@kcertipeb.be</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-xs sm:text-sm md:block">{content.topLabel}</div>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 transition hover:opacity-80">
              <img src="/logo.png" alt="KcertiPEB" className="h-12 w-auto object-contain" />
              <span className="text-2xl font-bold text-emerald-700">KcertiPEB</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 transition hover:text-emerald-700">
                {content.services}
                <ChevronDown className="h-4 w-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    <Link
                      to="/certificat-peb-appartement-bruxelles"
                      className="block px-4 py-3 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {content.apartment}
                    </Link>
                    <Link
                      to="/certificat-peb-maison-bruxelles"
                      className="block px-4 py-3 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {content.house}
                    </Link>
                    <Link
                      to="/audit-energetique-bruxelles"
                      className="block px-4 py-3 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {content.audit}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/tarifs" className="text-gray-700 transition hover:text-emerald-700">
              {content.pricing}
            </Link>
            <Link to="/faq" className="text-gray-700 transition hover:text-emerald-700">
              {content.faq}
            </Link>
            <Link
              to="/contact"
              className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition hover:bg-emerald-700"
            >
              {content.cta}
            </Link>
          </div>

          <button className="text-gray-700 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <div className="pb-2">
                <LanguageSelector />
              </div>
              <Link
                to="/certificat-peb-appartement-bruxelles"
                className="text-left text-gray-700 transition hover:text-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.apartment}
              </Link>
              <Link
                to="/certificat-peb-maison-bruxelles"
                className="text-left text-gray-700 transition hover:text-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.house}
              </Link>
              <Link
                to="/audit-energetique-bruxelles"
                className="text-left text-gray-700 transition hover:text-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.audit}
              </Link>
              <Link
                to="/tarifs"
                className="text-left text-gray-700 transition hover:text-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.pricing}
              </Link>
              <Link
                to="/faq"
                className="text-left text-gray-700 transition hover:text-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.faq}
              </Link>
              <Link
                to="/contact"
                className="rounded-lg bg-emerald-600 px-6 py-2 text-center font-medium text-white transition hover:bg-emerald-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.cta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

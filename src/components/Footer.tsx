import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-kcertipeb.png" alt="KcertiPEB Logo" className="w-8 h-8 object-contain mr-3" />
              <span className="text-2xl font-bold">KcertiPEB</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Expert certifié en performance énergétique des bâtiments. Votre partenaire de confiance pour tous vos certificats PEB à Bruxelles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-500 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/certificat-peb-appartement-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  PEB Appartement
                </Link>
              </li>
              <li>
                <Link to="/certificat-peb-maison-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  PEB Maison
                </Link>
              </li>
              <li>
                <Link to="/audit-energetique-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  Audit Énergétique
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-400 hover:text-emerald-500 transition">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/certificat-peb-appartement-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  Certificat PEB Appartement
                </Link>
              </li>
              <li>
                <Link to="/certificat-peb-maison-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  Certificat PEB Maison
                </Link>
              </li>
              <li>
                <Link to="/audit-energetique-bruxelles" className="text-gray-400 hover:text-emerald-500 transition">
                  Audit Énergétique Complet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+32486987484"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag('event', 'conversion', {
                        send_to: 'AW-17839824839/9dHFCOCL0fkbEMe_2LpC',
                        value: 1.0,
                        currency: 'EUR'
                      });
                    }
                  }}
                  className="text-gray-400 hover:text-emerald-500 transition"
                >
                  +32 486 98 74 84
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@kcertipeb.be" className="text-gray-400 hover:text-emerald-500 transition">
                  info@kcertipeb.be
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Région de Bruxelles-Capitale<br />Belgique
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo-kcertipeb.png"
                  alt="KcertiPEB Logo"
                  className="w-10 h-10 object-contain"
                />
                <p>&copy; 2024 KcertiPEB. Tous droits réservés.</p>
              </div>
              <div className="mt-2 space-x-4">
                <Link to="/politique-confidentialite" className="hover:text-emerald-500 transition">Politique de Confidentialité</Link>
                <span>•</span>
                <Link to="/politique-confidentialite" className="hover:text-emerald-500 transition">Protection RGPD</Link>
              </div>
            </div>
            <div className="md:text-right">
              <p>
                Certificateur agréé par Bruxelles Environnement | TVA BE 0XXX.XXX.XXX
              </p>
              <p className="mt-2 text-xs">
                Vos données personnelles sont protégées conformément au Règlement Général sur la Protection des Données (RGPD)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-sm">
          <p>
            <strong>Certification PEB obligatoire</strong> - Conforme à l'Arrêté du Gouvernement de la Région de Bruxelles-Capitale
          </p>
        </div>
      </div>
    </footer>
  );
}

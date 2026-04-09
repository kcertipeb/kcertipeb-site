import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

const VAT_NUMBER = '0800.521.796';
const ACCREDITATION_NUMBER = '001859432';

export default function Footer() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        description:
          'EPC -certificaat in Brussel voor appartementen en woningen. Snelle interventie, duidelijke prijzen en eenvoudige begeleiding van het eerste contact tot het certificaat.',
        navigation: 'Navigatie',
        home: 'Home',
        apartment: 'EPC Appartement',
        house: 'EPC Woning',
        audit: 'Energie-audit',
        pricing: 'Tarieven',
        faq: 'FAQ',
        blog: 'Blog',
        contact: 'Contact',
        services: 'Diensten',
        cta: 'Bekijk mijn prijs',
        details: 'Contactgegevens',
        region: 'Brussels Hoofdstedelijk Gewest, België',
        privacy: 'Privacybeleid',
        gdpr: 'AVG-bescherming',
        accredited: 'Erkend certificateur door Leefmilieu Brussel',
        accreditation: 'Erkenningsnummer',
        compliance: 'EPC-certificering conform de regelgeving van het Brussels Hoofdstedelijk Gewest',
      }
    : {
        description:
          'Certificateur PEB à Bruxelles pour appartements et maisons. Intervention rapide, prix clairs et accompagnement simple du premier contact jusqu’au certificat.',
        navigation: 'Navigation',
        home: 'Accueil',
        apartment: 'PEB Appartement',
        house: 'PEB Maison',
        audit: 'Audit énergétique',
        pricing: 'Tarifs',
        faq: 'FAQ',
        blog: 'Blog',
        contact: 'Contact',
        services: 'Services',
        cta: 'Voir mon prix',
        details: 'Coordonnées',
        region: 'Région de Bruxelles-Capitale, Belgique',
        privacy: 'Politique de confidentialité',
        gdpr: 'Protection RGPD',
        accredited: 'Certificateur agréé par Bruxelles Environnement',
        accreditation: "N° d'agrément",
        compliance: 'Certification PEB conforme à la réglementation de la Région de Bruxelles-Capitale',
      };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-kcertipeb.png" alt="Logo KcertiPEB" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold">KcertiPEB</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">{content.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">{content.navigation}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link to="/" className="transition hover:text-emerald-400">{content.home}</Link></li>
              <li><Link to="/certificat-peb-appartement-bruxelles" className="transition hover:text-emerald-400">{content.apartment}</Link></li>
              <li><Link to="/certificat-peb-maison-bruxelles" className="transition hover:text-emerald-400">{content.house}</Link></li>
              <li><Link to="/audit-energetique-bruxelles" className="transition hover:text-emerald-400">{content.audit}</Link></li>
              <li><Link to="/tarifs" className="transition hover:text-emerald-400">{content.pricing}</Link></li>
              <li><Link to="/faq" className="transition hover:text-emerald-400">{content.faq}</Link></li>
              <li><Link to="/blog" className="transition hover:text-emerald-400">{content.blog}</Link></li>
              <li><Link to="/contact" className="transition hover:text-emerald-400">{content.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{content.services}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link to="/certificat-peb-appartement-bruxelles" className="transition hover:text-emerald-400">{content.apartment}</Link></li>
              <li><Link to="/certificat-peb-maison-bruxelles" className="transition hover:text-emerald-400">{content.house}</Link></li>
              <li><Link to="/audit-energetique-bruxelles" className="transition hover:text-emerald-400">{content.audit}</Link></li>
              <li><Link to="/contact" className="transition hover:text-emerald-400">{content.cta}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{content.details}</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="transition hover:text-emerald-400"
                >
                  +32 486 98 74 84
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a href="mailto:info@kcertipeb.be" className="transition hover:text-emerald-400">
                  info@kcertipeb.be
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <span>{content.region}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-medium text-slate-200">© {new Date().getFullYear()} KcertiPEB</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link to="/politique-confidentialite" className="transition hover:text-emerald-400">{content.privacy}</Link>
                <span>•</span>
                <Link to="/politique-confidentialite" className="transition hover:text-emerald-400">{content.gdpr}</Link>
              </div>
            </div>

            <div className="space-y-1 lg:text-right">
              <p>{content.accredited}</p>
              <p>{content.accreditation} {ACCREDITATION_NUMBER}</p>
              <p>TVA BE {VAT_NUMBER}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-500/30 bg-emerald-700/90">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm text-white sm:px-6 lg:px-8">
          {content.compliance}
        </div>
      </div>
    </footer>
  );
}

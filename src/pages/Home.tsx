import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import BrusselsCommunes from '../components/BrusselsCommunes';
import SEO from '../components/SEO';
import GoogleReviews from '../components/GoogleReviews';
import { useLanguage } from '../lib/language';

export default function Home() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'Energieprestatiecertificaat Brussel' : 'Certificat PEB à Bruxelles'}
        description={
          isDutch
            ? 'Erkend EPC-certificateur in Brussel. Interventie binnen 48u, attest in 48u, vanaf 120 € incl. btw. Actief in alle 19 Brusselse gemeenten.'
            : 'Certificateur PEB agréé à Bruxelles. Intervention en 48h, certificat en 48h, dès 120 € TVAC. Couvre les 19 communes bruxelloises.'
        }
        keywords={
          isDutch
            ? 'energieprestatiecertificaat, EPC certificaat Brussel, EPC Brussel, EPC appartement, EPC woning, energie-audit Brussel, prijs EPC certificaat'
            : 'certificat PEB bruxelles, PEB bruxelles, certificat PEB appartement, certificat PEB maison, audit énergétique bruxelles, prix certificat PEB'
        }
        canonical="https://kcertipeb.be"
      />

      <Hero />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">
            {isDutch ? 'EPC-certificaat in Brussel — kies uw type pand' : 'Certificat PEB à Bruxelles — choisissez votre type de bien'}
          </h2>
          <p className="mb-10 text-center text-lg text-gray-600">
            {isDutch
              ? 'Erkend certificateur actief in alle 19 Brusselse gemeenten. Tarieven vanaf 120 € incl. btw.'
              : 'Certificateur agréé actif dans les 19 communes bruxelloises. Tarifs dès 120 € TVAC.'}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to="/certificat-peb-appartement-bruxelles"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🏢</div>
              <h3 className="mb-1 text-xl font-bold text-gray-900">
                {isDutch ? 'EPC-certificaat appartement' : 'Certificat PEB appartement'}
              </h3>
              <p className="mb-4 text-gray-500">{isDutch ? 'Vanaf 120 € incl. btw' : 'Dès 120 € TVAC'}</p>
              <span className="font-semibold text-emerald-600 group-hover:underline">
                {isDutch ? 'Meer info →' : 'En savoir plus →'}
              </span>
            </Link>
            <Link
              to="/certificat-peb-maison-bruxelles"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-1 text-xl font-bold text-gray-900">
                {isDutch ? 'EPC-certificaat woning' : 'Certificat PEB maison'}
              </h3>
              <p className="mb-4 text-gray-500">{isDutch ? 'Vanaf 210 € incl. btw' : 'Dès 210 € TVAC'}</p>
              <span className="font-semibold text-emerald-600 group-hover:underline">
                {isDutch ? 'Meer info →' : 'En savoir plus →'}
              </span>
            </Link>
            <Link
              to="/certificat-peb-immeuble-bruxelles"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🏗️</div>
              <h3 className="mb-1 text-xl font-bold text-gray-900">
                {isDutch ? 'EPC-certificaat appartementsgebouw' : 'Certificat PEB immeuble'}
              </h3>
              <p className="mb-4 text-gray-500">{isDutch ? 'Prijs op offerte' : 'Sur devis'}</p>
              <span className="font-semibold text-emerald-600 group-hover:underline">
                {isDutch ? 'Meer info →' : 'En savoir plus →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Benefits />
      <Process />
      <GoogleReviews />
      <BrusselsCommunes />
    </>
  );
}

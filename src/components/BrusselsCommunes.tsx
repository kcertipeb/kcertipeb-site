import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language';
import { communes as communesData } from '../data/communes';

const communes = communesData.map((c) => ({ name: c.name, nameNl: c.nameNl, slug: c.slug }));

export default function BrusselsCommunes() {
  const { isDutch } = useLanguage();

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <MapPin className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {isDutch
              ? 'EPC-certificaat in alle Brusselse gemeenten'
              : 'Certificat PEB dans toutes les communes de Bruxelles'}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {isDutch
              ? 'Wij komen tussen in de 19 gemeenten van het Brussels Hoofdstedelijk Gewest voor EPC-certificaten van appartementen en woningen, evenals energie-audits.'
              : "Nous intervenons dans les 19 communes de la Région de Bruxelles-Capitale pour vos certificats PEB d'appartement, de maison et vos audits énergétiques."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {communes.map((commune) => (
            <Link
              key={commune.slug}
              to={`/certificat-peb/${commune.slug}`}
              className="rounded-lg border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:shadow-md hover:border-emerald-200 hover:text-emerald-700"
            >
              <p className="font-medium text-gray-800 hover:text-emerald-700">
                {isDutch ? commune.nameNl : commune.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-emerald-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            {isDutch
              ? 'Snelle en professionele EPC-certificering'
              : 'Service de certification PEB rapide et professionnel'}
          </h3>
          <div className="grid gap-6 text-gray-700 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">
                {isDutch ? 'Voor appartementen' : 'Pour les appartements'}
              </h4>
              <p>
                {isDutch
                  ? 'Verplicht EPC-certificaat voor verkoop of verhuur van uw appartement in Brussel. Tarieven vanaf 120 € inclusief btw.'
                  : 'Certificat PEB obligatoire pour la vente ou location de votre appartement à Bruxelles. Tarifs à partir de 120 € TVAC.'}
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">{isDutch ? 'Voor woningen' : 'Pour les maisons'}</h4>
              <p>
                {isDutch
                  ? 'Energiecertificering voor eengezinswoningen in Brussel. Tarieven vanaf 210 € inclusief btw met officieel certificaat.'
                  : 'Certification énergétique pour maisons unifamiliales à Bruxelles. Tarifs à partir de 210 € TVAC avec certificat officiel.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

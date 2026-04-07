import { MapPin } from 'lucide-react';

const communes = [
  "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles-Ville",
  "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
  "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode",
  "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"
];

export default function BrusselsCommunes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Certificat PEB dans toutes les communes de Bruxelles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous intervenons dans les 19 communes de la Région de Bruxelles-Capitale pour vos certificats PEB d'appartement,
            de maison et vos audits énergétiques. Service rapide, professionnel et conforme aux normes de Bruxelles Environnement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {communes.map((commune) => (
            <div
              key={commune}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-100"
            >
              <p className="text-gray-800 font-medium">{commune}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Service de certification PEB rapide et professionnel
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Pour les appartements</h4>
              <p>
                Certificat PEB obligatoire pour la vente ou location de votre appartement à Bruxelles.
                Tarifs à partir de 120€ TVAC. Visite sur place, analyse complète et certificat officiel
                délivré sous 3 à 5 jours ouvrables.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pour les maisons</h4>
              <p>
                Certification énergétique pour maisons unifamiliales à Bruxelles. Tarifs à partir de 210€ TVAC.
                Expert certifié agrée par Bruxelles Environnement. Rapport détaillé avec recommandations
                d'amélioration énergétique.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Besoin d'un certificat PEB à Bruxelles ? Contactez-nous pour un devis gratuit et un rendez-vous rapide
            dans votre commune. Nous nous déplaçons partout à Bruxelles et dans toutes ses communes.
          </p>
        </div>
      </div>
    </section>
  );
}

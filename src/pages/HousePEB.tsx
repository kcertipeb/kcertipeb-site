import { Home, Clock, CheckCircle2, Euro, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function HousePEB() {
  return (
    <>
      <SEO
        title="Certificat PEB Maison Bruxelles - Expert Agréé - Dès 210€"
        description="Certificat PEB pour maison unifamiliale à Bruxelles. Certificateur agréé, tarif à partir de 210€ selon métrage, intervention sous 48h dans toutes les communes. Devis gratuit en ligne."
        keywords="certificat peb maison bruxelles, peb maison unifamiliale, certificat énergétique maison, peb vente maison bruxelles, peb location maison bruxelles, expert peb maison, certificateur maison bruxelles, peb maison uccle, peb maison woluwe, peb maison ixelles, prix peb maison bruxelles, peb maison unifamiliale prix, certificat peb obligatoire maison"
        canonical="https://kcertipeb.be/certificat-peb-maison-bruxelles"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Certificat PEB Maison
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Certificat PEB pour Votre Maison à Bruxelles
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Spécialiste des maisons unifamiliales à Bruxelles. Expertise complète, rapport détaillé et recommandations personnalisées incluses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+32486987484"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maison unifamiliale moderne à Bruxelles"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-blue-600">210€</p>
                <p className="text-gray-600">À partir de</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Spécialistes des Maisons à Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous certifions tous types de maisons : maison de maître, maison mitoyenne, villa, cottage... Expertise reconnue et service professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intervention Rapide</h3>
              <p className="text-gray-600">
                Rendez-vous sous 48h pour toutes les maisons de Bruxelles et environs. Flexibilité horaire garantie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Complète</h3>
              <p className="text-gray-600">
                Analyse détaillée de tous les éléments : isolation, chauffage, ventilation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garantie Officielle</h3>
              <p className="text-gray-600">
                Certificat agréé par la Région de Bruxelles-Capitale. Valable 10 ans pour vente et location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Expert PEB inspectant une maison"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ce Qui Est Inclus dans Notre Service Maison
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visite complète de la maison</h4>
                    <p className="text-gray-600">Inspection détaillée de toutes les pièces, combles, cave, garage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Évaluation des installations</h4>
                    <p className="text-gray-600">Chaudière, système de ventilation, panneaux solaires si présents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Recommandations personnalisées</h4>
                    <p className="text-gray-600">Conseils pour améliorer la performance énergétique de votre maison.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certificat officiel</h4>
                    <p className="text-gray-600">Document légal déposé sur la plateforme régionale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types de Maisons Certifiées
            </h2>
            <p className="text-xl text-gray-600">Nous intervenons sur tous types de biens immobiliers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600 transition-all">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Maison Mitoyenne</h3>
              <p className="text-gray-600 text-sm">La plus courante à Bruxelles</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600 transition-all">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Maison de Maître</h3>
              <p className="text-gray-600 text-sm">Expertise des bâtiments anciens</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600 transition-all">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Villa / Cottage</h3>
              <p className="text-gray-600 text-sm">Maisons individuelles isolées</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 hover:border-blue-600 transition-all">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Maison Passive</h3>
              <p className="text-gray-600 text-sm">Constructions récentes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tarifs Transparents pour Maisons
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Petite maison</h3>
              <p className="text-gray-600 mb-4">Moins de 150 m²</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">210€</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl border-2 border-blue-700 transform scale-105">
              <div className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Populaire
              </div>
              <h3 className="text-xl font-bold mb-2">Maison standard</h3>
              <p className="text-blue-100 mb-4">151 - 250 m²</p>
              <p className="text-4xl font-bold mb-6">240€</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grande maison</h3>
              <p className="text-gray-600 mb-4">Plus de 250 m²</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">275€</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un Certificat PEB pour Votre Maison ?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Contactez nos experts dès maintenant pour un service rapide et professionnel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+32486987484"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all border-2 border-white"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import { Zap, TrendingDown, CheckCircle2, Lightbulb, Euro, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EnergyAudit() {
  return (
    <>
      <SEO
        title="Audit énergétique à Bruxelles | Réduisez vos factures"
  description="Audit énergétique complet à Bruxelles. Analyse détaillée et recommandations concrètes pour réduire vos factures d'énergie. Devis gratuit."
  keywords="audit énergétique bruxelles, audit énergétique maison, rénovation énergétique bruxelles, primes énergie bruxelles, économie d'énergie, audit thermique bruxelles, bilan énergétique maison, amélioration performance énergétique"
  canonical="https://kcertipeb.be/audit-energetique-bruxelles"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Audit Énergétique
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Audit Énergétique Complet à Bruxelles
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Réduisez vos factures d'énergie jusqu'à 50 % grâce à notre audit énergétique à Bruxelles, avec recommandations concrètes et primes incluses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Voir mon prix
                </Link>
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
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  Appeler maintenant
                </a>

              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Audit énergétique d'une maison à Bruxelles avec caméra thermique"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-amber-600">-50%</p>
                <p className="text-gray-600">Sur vos factures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Qu'est-ce qu'un Audit Énergétique ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'audit énergétique est une analyse approfondie de votre habitation pour identifier les sources de déperditions énergétiques et proposer des solutions concrètes d'amélioration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analyse Complète</h3>
              <p className="text-gray-600">
                Inspection détaillée de l'isolation, du chauffage, de la ventilation, des menuiseries et de tous les équipements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommandations Concrètes</h3>
              <p className="text-gray-600">
                Plan d'action personnalisé avec solutions priorisées par rapport coût/bénéfice et temps de retour sur investissement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Euro className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primes & Aides</h3>
              <p className="text-gray-600">
                Information sur toutes les primes régionales disponibles et aide au montage des dossiers de subsides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Les Bénéfices d'un Audit Énergétique
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Réduction des factures énergétiques</h4>
                    <p className="text-gray-600">Économisez jusqu'à 50% sur vos factures de chauffage et d'électricité</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Amélioration du confort</h4>
                    <p className="text-gray-600">Température homogène, moins d'humidité, meilleure qualité de l'air</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Valorisation du bien immobilier</h4>
                    <p className="text-gray-600">Un bien performant se vend mieux et plus cher</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accès aux primes régionales</h4>
                    <p className="text-gray-600">L'audit est souvent nécessaire pour obtenir des primes à la rénovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Réduction de l'empreinte carbone</h4>
                    <p className="text-gray-600">Contribuez à la transition énergétique et à la protection de l'environnement</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maison économe en énergie"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Méthodologie d'Audit
            </h2>
            <p className="text-xl text-gray-600">Un processus rigoureux en 5 étapes</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prise de Contact</h3>
              <p className="text-gray-600 text-sm">Première discussion sur vos besoins et objectifs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visite Sur Place</h3>
              <p className="text-gray-600 text-sm">Inspection complète avec caméra thermique et appareils de mesure</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Analyse Données</h3>
              <p className="text-gray-600 text-sm">Traitement des mesures et calculs énergétiques</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rapport Détaillé</h3>
              <p className="text-gray-600 text-sm">Document complet avec recommandations priorisées</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-amber-200 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suivi & Conseils</h3>
              <p className="text-gray-600 text-sm">Accompagnement pour la mise en œuvre des travaux</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce Que Contient Notre Rapport d'Audit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingDown className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Diagnostic Énergétique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Bilan énergétique complet
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Identification des ponts thermiques
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Consommations détaillées
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Plan d'Action</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Travaux recommandés par priorité
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Estimation des coûts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Économies prévisionnelles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  Primes et aides disponibles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Réduire Vos Factures d'Énergie ?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Demandez votre audit énergétique personnalisé dès aujourd'hui.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Voir mon prix
            </Link>
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
              className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all border-2 border-white"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

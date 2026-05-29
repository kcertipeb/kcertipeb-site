import { Zap, TrendingDown, CheckCircle2, Lightbulb, ClipboardCheck, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EnergyAudit() {
  return (
    <>
      <SEO
        title="Audit énergétique à Bruxelles"
        description="Audit énergétique complet à Bruxelles. Réduisez vos factures jusqu'à 50 %, obtenez un rapport officiel avec plan de rénovation sur mesure. Devis gratuit."
        keywords="audit énergétique bruxelles, audit énergétique maison, rénovation énergétique bruxelles, économie d'énergie, audit thermique bruxelles, bilan énergétique maison, amélioration performance énergétique"
        canonical="https://kcertipeb.be/audit-energetique-bruxelles"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Audit énergétique Bruxelles',
          serviceType: 'Audit énergétique',
          provider: { '@type': 'LocalBusiness', name: 'K Certipeb', url: 'https://kcertipeb.be' },
          areaServed: { '@type': 'City', name: 'Bruxelles' },
          description: "Audit énergétique complet avec rapport officiel et recommandations de travaux personnalisées à Bruxelles.",
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
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
                Réduisez vos factures d'énergie jusqu'à 50 % grâce à notre audit énergétique à Bruxelles — analyse approfondie, rapport officiel et recommandations sur mesure.
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
                        currency: 'EUR',
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
                alt="Audit énergétique d'une maison à Bruxelles"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-amber-100">
                <p className="text-3xl font-bold text-amber-600">-50%</p>
                <p className="text-gray-600 text-sm font-medium">Sur vos factures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un audit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Qu'est-ce qu'un Audit Énergétique ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une analyse approfondie de votre habitation pour identifier les sources de déperditions énergétiques et proposer des solutions concrètes d'amélioration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analyse Complète</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspection détaillée de l'isolation, du chauffage, de la ventilation, des menuiseries et de tous les équipements du bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recommandations Concrètes</h3>
              <p className="text-gray-600 leading-relaxed">
                Plan d'action personnalisé avec solutions priorisées par rapport coût/bénéfice et temps de retour sur investissement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapport Officiel</h3>
              <p className="text-gray-600 leading-relaxed">
                Document complet et certifié remis après la visite, détaillant chaque point d'amélioration et les économies potentielles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Les Bénéfices d'un Audit Énergétique
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Réduction des factures énergétiques</h4>
                    <p className="text-gray-600">Économisez jusqu'à 50 % sur vos factures de chauffage et d'électricité grâce à des travaux ciblés.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Valorisation du bien immobilier</h4>
                    <p className="text-gray-600">Un bien performant se vend mieux et plus cher — l'audit est un investissement rentable à long terme.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Travaux priorisés selon votre budget</h4>
                    <p className="text-gray-600">Concentrez vos investissements sur les actions les plus rentables, classées par ordre de priorité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Réduction de l'empreinte carbone</h4>
                    <p className="text-gray-600">Contribuez à la transition énergétique et à la protection de l'environnement tout en réduisant vos coûts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maison économe en énergie à Bruxelles"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Méthodologie d'Audit
            </h2>
            <p className="text-xl text-gray-600">Un processus rigoureux en 5 étapes</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[6%] right-[6%] h-0.5 bg-amber-200 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {[
                { num: 1, title: 'Prise de Contact', desc: 'Première discussion sur vos besoins et objectifs énergétiques' },
                { num: 2, title: 'Visite Sur Place', desc: 'Inspection complète de tous les éléments du bâtiment avec appareils de mesure professionnels' },
                { num: 3, title: 'Analyse des Données', desc: 'Traitement des mesures et calculs énergétiques détaillés' },
                { num: 4, title: 'Rapport Détaillé', desc: 'Document complet remis avec toutes les recommandations priorisées' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                    {num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu du rapport */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce Que Contient Notre Rapport d'Audit
            </h2>
            <p className="text-lg text-gray-600">Un document complet pour piloter votre rénovation en toute clarté</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Diagnostic Énergétique</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Bilan énergétique complet du bâtiment',
                  "Analyse détaillée des parois et de l'enveloppe du bâtiment",
                  'État des équipements de chauffage et ventilation',
                  'Consommations détaillées par usage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Plan d'Action</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Travaux recommandés classés par priorité',
                  'Estimation des coûts de rénovation',
                  'Économies prévisionnelles par intervention',
                  'Délai de retour sur investissement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Réduire Vos Factures d'Énergie ?
          </h2>
          <p className="text-xl mb-10 text-amber-100">
            Demandez votre audit énergétique personnalisé dès aujourd'hui. Intervention sous 48 h à Bruxelles.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg"
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
                    currency: 'EUR',
                  });
                }
              }}
              className="bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition-all border-2 border-white/50"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

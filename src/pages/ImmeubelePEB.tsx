import { Building2, Clock, CheckCircle2, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion } from '../lib/tracking';

export default function ImmeubelePEB() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'EPC-certificaat gebouw in Brussel',
        seoDescription: 'EPC-certificering voor gebouwen en mede-eigendom in Brussel. Gecoördineerde aanpak per eenheid, erkende certificateur. Prijs op offerte.',
        badge: 'EPC-certificaat Gebouw',
        title: 'EPC-certificaat voor gebouw in Brussel',
        intro: 'Gespecialiseerd in residentiële gebouwen en mede-eigendom in Brussel. Gecoördineerde aanpak, één aanspreekpunt, officieel certificaat per eenheid.',
        cta: 'Offerte aanvragen',
        call: 'Bel nu',
        price: 'Op offerte',
        priceNote: 'Prijs op maat volgens het aantal eenheden',
        strengthsTitle: 'Specialist in gebouwen en mede-eigendom in Brussel',
        strengthsText: 'Wij coördineren de EPC-certificering van alle wooneenheden in één aanpak. Eén afspraakplanning, één aanspreekpunt voor de syndicus.',
        cards: [
          { title: 'Gecoördineerde aanpak', text: 'Planning aangepast aan alle bewoners, in overleg met de syndicus.' },
          { title: 'Erkend certificateur', text: 'Erkend door Leefmilieu Brussel, ervaren in mede-eigendom.' },
          { title: 'Prijs op offerte', text: 'Groepstarief op maat van uw gebouw en het aantal eenheden.' },
        ],
        includedTitle: 'Wat is inbegrepen',
        included: [
          'Gedetailleerde offerte binnen 2 uur',
          'Bezoek per wooneenheid (45 min - 1u)',
          'Officieel EPC-certificaat per eenheid',
          'Overzicht per gebouw voor de syndicus',
          'Geldig 10 jaar, geregistreerd bij Leefmilieu Brussel',
        ],
        obligationsTitle: 'Uw verplichtingen als eigenaar of syndicus',
        obligationsText: 'Elk appartement in een mede-eigendom moet een individueel EPC-certificaat hebben. Tegen 2030 voor alle woningen, tegen 2033 voor alle passief aandelen.',
        obligationPoints: [
          'Verplicht bij verkoop of verhuur (geldt al)',
          'Verplicht voor alle woningen tegen 31/12/2030',
          'VME mede-aansprakelijk voor conformiteit vanaf 2033',
          'Boete: 2,5 €/kWh/jaar bij overschrijding van het objectief',
        ],
        blogTitle: 'Meer weten over PEB in mede-eigendom?',
        blogText: 'Lees onze volledige gids voor syndici en mede-eigenaars in Brussel.',
        blogCta: 'Gids lezen →',
        finalTitle: 'EPC-certificering nodig voor uw gebouw?',
        finalText: 'Neem nu contact op voor een gratis groepsofferte. Wij coördineren alles voor u.',
      }
    : {
        seoTitle: 'Certificat PEB immeuble à Bruxelles',
        seoDescription: 'Certification PEB pour immeubles et copropriétés à Bruxelles. Démarche coordonnée par unité, certificateur agréé. Prix sur devis.',
        badge: 'Certificat PEB Immeuble',
        title: 'Certificat PEB pour immeuble à Bruxelles',
        intro: 'Spécialisé dans les immeubles résidentiels et copropriétés à Bruxelles. Démarche coordonnée, un seul interlocuteur, certificat officiel par unité.',
        cta: 'Demander un devis',
        call: 'Appeler maintenant',
        price: 'Sur devis',
        priceNote: "Tarif adapté au nombre d'unités",
        strengthsTitle: 'Spécialiste des immeubles et copropriétés à Bruxelles',
        strengthsText: 'Nous coordonnons la certification PEB de toutes les unités résidentielles en une seule démarche. Un planning, un interlocuteur pour le syndic.',
        cards: [
          { title: 'Démarche coordonnée', text: 'Planning adapté à tous les occupants, en concertation avec le syndic.' },
          { title: 'Expert agréé', text: 'Agréé Bruxelles Environnement, expérimenté en copropriété.' },
          { title: 'Prix sur devis', text: "Tarif groupé adapté à votre immeuble et au nombre d'unités." },
        ],
        includedTitle: 'Ce qui est inclus',
        included: [
          'Devis détaillé sous 2h',
          'Visite par unité résidentielle (45 min - 1h)',
          'Certificat PEB officiel par unité',
          'Récapitulatif global pour le syndic',
          'Valable 10 ans, enregistré chez Bruxelles Environnement',
        ],
        obligationsTitle: 'Vos obligations en tant que propriétaire ou syndic',
        obligationsText: "Chaque appartement d'une copropriété doit avoir son propre certificat PEB individuel. D'ici 2030 pour tous les logements, d'ici 2033 pour éliminer les passoires énergétiques.",
        obligationPoints: [
          'Obligatoire à la vente ou location (déjà en vigueur)',
          "Obligatoire pour tous les logements d'ici le 31/12/2030",
          'ACP co-responsable de la conformité à partir de 2033',
          "Amende : 2,5 €/kWh/an en cas de dépassement de l'objectif",
        ],
        blogTitle: 'En savoir plus sur le PEB en copropriété ?',
        blogText: 'Lisez notre guide complet pour syndics et copropriétaires à Bruxelles.',
        blogCta: 'Lire le guide →',
        finalTitle: "Besoin d'une certification PEB pour votre immeuble ?",
        finalText: 'Contactez-nous dès maintenant pour un devis groupé gratuit. Nous coordonnons tout pour vous.',
      };

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        canonical="https://kcertipeb.be/certificat-peb-immeuble-bruxelles"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">{content.badge}</div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{content.title}</h1>
              <p className="mb-8 text-xl text-gray-600">{content.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                  {content.cta}
                </Link>
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="rounded-lg border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  {content.call}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
                alt={content.title}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-xl">
                <p className="text-2xl font-bold text-blue-600">{content.price}</p>
                <p className="text-sm text-gray-600">{content.priceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{content.strengthsTitle}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{content.strengthsText}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[Clock, Award, Shield].map((Icon, index) => (
              <div key={content.cards[index].title} className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{content.cards[index].title}</h3>
                <p className="text-gray-600">{content.cards[index].text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included + Obligations */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">{content.includedTitle}</h2>
              <div className="space-y-4">
                {content.included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{content.obligationsTitle}</h2>
              <p className="mb-6 text-gray-600">{content.obligationsText}</p>
              <div className="space-y-3">
                {content.obligationPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-orange-100 bg-orange-50 p-4">
                    <span className="mt-0.5 text-orange-500">⚠️</span>
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-blue-600" />
            <h3 className="mb-2 text-2xl font-bold text-gray-900">{content.blogTitle}</h3>
            <p className="mb-6 text-gray-600">{content.blogText}</p>
            <Link
              to="/blog/certificat-peb-copropriete-bruxelles"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {content.blogCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Building2 className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-3xl font-bold">{content.finalTitle}</h2>
          <p className="mb-8 text-xl text-blue-50">{content.finalText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50">
              {content.cta}
            </Link>
            <a
              href="tel:+32486987484"
              onClick={trackPhoneCallConversion}
              className="rounded-lg border-2 border-white bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

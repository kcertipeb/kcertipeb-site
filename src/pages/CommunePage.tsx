import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Shield, Phone, ArrowRight, CheckCircle, FileText, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { getCommuneBySlug, communes } from '../data/communes';

export default function CommunePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isDutch } = useLanguage();
  const commune = getCommuneBySlug(slug || '');

  if (!commune) {
    return (
      <div className="pt-40 text-center">
        <p className="text-gray-500">Commune introuvable.</p>
        <Link to="/" className="text-emerald-700 hover:underline mt-4 inline-block">← Retour à l'accueil</Link>
      </div>
    );
  }

  const name = isDutch ? commune.nameNl : commune.name;

  // 4 autres communes aléatoires pour le maillage interne
  const autresCommunes = communes.filter((c) => c.slug !== commune.slug).slice(0, 6);

  const communeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isDutch ? `EPC-certificaat ${name}` : `Certificat PEB ${name}`,
        description: isDutch ? commune.descriptionNl : commune.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'KCertiPEB',
          url: 'https://kcertipeb.be',
          telephone: '+32486987484',
        },
        areaServed: {
          '@type': 'City',
          name: commune.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Région de Bruxelles-Capitale',
          },
        },
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: '120',
            priceCurrency: 'EUR',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isDutch ? 'Home' : 'Accueil',
            item: 'https://kcertipeb.be/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isDutch ? `EPC-certificaat ${name}` : `Certificat PEB ${name}`,
            item: `https://kcertipeb.be/certificat-peb/${commune.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: isDutch
              ? `Is een EPC-certificaat verplicht voor mijn woning in ${name}?`
              : `Le certificat PEB est-il obligatoire pour mon bien à ${name} ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: isDutch
                ? `Ja, het EPC-certificaat is verplicht voor elke verkoop of verhuur in ${name} en in alle 19 gemeenten van het Brussels Gewest, conform de COBRACE-ordonnantie van 2013. Zonder geldig certificaat riskeert u boetes van 200 tot 3 000 €.`
                : `Oui, le certificat PEB est obligatoire pour toute vente ou location à ${name} et dans les 19 communes de la Région bruxelloise, conformément à l'ordonnance COBRACE de 2013. Sans certificat valide, vous risquez des amendes de 200 à 3 000 €.`,
            },
          },
          {
            '@type': 'Question',
            name: isDutch
              ? `Wat kost een EPC-certificaat in ${name}?`
              : `Quel est le prix d'un certificat PEB à ${name} ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: isDutch
                ? `De prijs van een EPC-certificaat in ${name} begint vanaf 120 € incl. btw voor een appartement van minder dan 50 m². Voor een woning beginnen de tarieven vanaf 210 € incl. btw.`
                : `Le prix d'un certificat PEB à ${name} commence dès 120 € TVAC pour un appartement de moins de 50 m². Pour une maison, les tarifs démarrent à partir de 210 € TVAC.`,
            },
          },
          {
            '@type': 'Question',
            name: isDutch
              ? `Hoe snel kan KCertiPEB langskomen in ${name}?`
              : `Quel est le délai d'intervention de KCertiPEB à ${name} ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: isDutch
                ? `KCertiPEB komt langs in ${name} binnen 24 tot 48 uur na uw aanvraag. Het officiële EPC-certificaat wordt afgeleverd binnen 48u na het bezoek.`
                : `KCertiPEB intervient à ${name} sous 24 à 48h après votre demande. Le certificat PEB officiel est remis sous 48h après la visite.`,
            },
          },
        ],
      },
    ],
  };

  const keywords = isDutch
    ? `EPC-certificaat ${name}, EPC ${name}, EPC Brussel, erkend certificateur ${name}, energiecertificaat ${name}, EPC-attest ${name}`
    : `certificat PEB ${name}, PEB ${name}, certificat PEB Bruxelles, certificateur agréé ${name}, certificat énergétique ${name}, prix PEB ${name}`;

  return (
    <>
      <SEO
        title={isDutch
          ? `EPC-certificaat ${name} — Vanaf 120€ | KCertiPEB`
          : `Certificat PEB ${name} — Dès 120€ | KCertiPEB`}
        description={isDutch ? commune.metaDescriptionNl : commune.metaDescription}
        keywords={keywords}
        canonical={`https://kcertipeb.be/certificat-peb/${commune.slug}`}
        extraSchema={communeSchema}
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-emerald-700 transition-colors">
              {isDutch ? 'Home' : 'Accueil'}
            </Link>
            <span>/</span>
            <span className="text-gray-800">{isDutch ? `EPC ${name}` : `PEB ${name}`}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-sm">
                  {isDutch ? 'Brussels Hoofdstedelijk Gewest' : 'Région de Bruxelles-Capitale'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {isDutch ? `EPC-certificaat ${name}` : `Certificat PEB ${name}`}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {isDutch ? commune.descriptionNl : commune.description}
              </p>
              {/* Étoiles */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5</span>
                <span className="text-sm text-gray-500">(127 avis Google)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-700 transition"
                >
                  {isDutch ? 'Gratis offerte aanvragen' : 'Demander un devis gratuit'}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+32486987484"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-8 py-4 font-bold text-emerald-700 hover:bg-emerald-50 transition"
                >
                  <Phone className="h-5 w-5" />
                  +32 486 98 74 84
                </a>
              </div>
            </div>

            {/* Carte info */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {isDutch ? `EPC in ${name} — Overzicht` : `PEB à ${name} — En bref`}
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: <Clock className="h-5 w-5 text-emerald-600" />, label: isDutch ? 'Resultaat' : 'Résultat', value: isDutch ? 'Binnen 48u' : 'Sous 48h' },
                  { icon: <Shield className="h-5 w-5 text-emerald-600" />, label: isDutch ? 'Erkend door' : 'Agréé par', value: isDutch ? 'Leefmilieu Brussel' : 'Bruxelles Environnement' },
                  { icon: <MapPin className="h-5 w-5 text-emerald-600" />, label: isDutch ? 'Dekking' : 'Couverture', value: isDutch ? `Heel ${name}` : `Toute la commune de ${name}` },
                  { icon: <CheckCircle className="h-5 w-5 text-emerald-600" />, label: isDutch ? 'Dominante klasse' : 'Classe dominante', value: commune.classeDominante },
                  { icon: <FileText className="h-5 w-5 text-emerald-600" />, label: isDutch ? 'Geldigheid' : 'Validité', value: isDutch ? '10 jaar' : '10 ans' },
                ].map(({ icon, label, value }) => (
                  <li key={label} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="font-semibold text-gray-900">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBLIGATIONS ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isDutch
                  ? `EPC-certificaat verplicht in ${name} ?`
                  : `Certificat PEB obligatoire à ${name} ?`}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isDutch
                  ? `Ja, het EPC-certificaat is verplicht voor elke verkoop of verhuur van een woning of appartement in ${name} sinds 2011. Het certificaat is 10 jaar geldig en moet worden opgesteld door een erkend certificateur zoals KCertiPEB.`
                  : `Oui, le certificat PEB est obligatoire pour toute vente ou location d'un appartement ou d'une maison à ${name} depuis 2011. Il est valable 10 ans et doit être établi par un certificateur agréé comme KCertiPEB.`}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isDutch ? commune.contextLocalNl : commune.contextLocal}
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 text-sm text-gray-700">
                <strong className="text-red-700">
                  {isDutch ? 'Sancties zonder EPC :' : 'Sanctions sans certificat PEB :'}
                </strong>
                <ul className="mt-2 space-y-1">
                  <li>— {isDutch ? 'Niet verstrekt : 200 € tot 1 000 €' : 'Non fourni : 200 € à 1 000 €'}</li>
                  <li>— {isDutch ? 'Verlopen : 300 € tot 3 000 €' : 'Périmé : 300 € à 3 000 €'}</li>
                  <li>— {isDutch ? 'Doelstellingen 2033 niet gehaald : tot 26 562 €' : 'Objectifs 2033 non respectés : jusqu\'à 26 562 €'}</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isDutch ? 'Woningpark' : 'Parc immobilier'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isDutch ? commune.parkImmobilierNl : commune.parkImmobilier}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-emerald-200 pl-4">
                {isDutch ? commune.specificiteNl : commune.specificite}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                {isDutch ? 'Gedekte wijken' : 'Quartiers couverts'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(isDutch ? commune.quartiersNl : commune.quartiers).map((q) => (
                  <span key={q} className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-sm font-medium text-emerald-700">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSEIL RENOVATION ── */}
      <section className="py-12 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isDutch ? `Renovatieadvies voor ${name}` : `Conseil rénovation à ${name}`}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isDutch ? commune.conseilRenovationNl : commune.conseilRenovation}
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isDutch ? `EPC in ${name} : hoe werkt het ?` : `Certificat PEB à ${name} : comment ça marche ?`}
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                n: '1',
                title: isDutch ? 'Offerte aanvragen' : 'Demande de devis',
                desc: isDutch ? 'Online of per telefoon. Antwoord binnen 2u, afspraak binnen 24-48u.' : 'En ligne ou par téléphone. Réponse sous 2h, rendez-vous sous 24-48h.',
              },
              {
                n: '2',
                title: isDutch ? 'Technisch bezoek' : 'Visite technique',
                desc: isDutch ? `De expert bezoekt uw woning in ${name} : isolatie, verwarming, beglazing, ventilatie.` : `L'expert visite votre bien à ${name} : isolation, chauffage, vitrages, ventilation.`,
              },
              {
                n: '3',
                title: isDutch ? 'Berekening & controle' : 'Calcul & contrôle',
                desc: isDutch ? 'Invoer in de officiële software van Leefmilieu Brussel. Kwaliteitscontrole vóór verzending.' : 'Encodage dans le logiciel officiel de Bruxelles Environnement. Contrôle qualité avant envoi.',
              },
              {
                n: '4',
                title: isDutch ? 'Officieel certificaat' : 'Certificat officiel',
                desc: isDutch ? 'Uniek nummer + QR-code. Geldig 10 jaar. Geregistreerd bij Leefmilieu Brussel.' : 'Numéro unique + QR code. Valable 10 ans. Enregistré chez Bruxelles Environnement.',
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg">
                  {n}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {isDutch ? `Onze diensten in ${name}` : `Nos services à ${name}`}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: isDutch ? 'EPC Appartement' : 'Certificat PEB Appartement',
                price: isDutch ? 'Vanaf 120 € incl. btw' : 'Dès 120 € TVAC',
                desc: isDutch
                  ? `Verplicht EPC voor de verkoop of verhuur van uw appartement in ${name}.`
                  : `Certificat PEB obligatoire pour la vente ou location de votre appartement à ${name}.`,
                link: '/certificat-peb-appartement-bruxelles',
              },
              {
                title: isDutch ? 'EPC Woning' : 'Certificat PEB Maison',
                price: isDutch ? 'Vanaf 210 € incl. btw' : 'Dès 210 € TVAC',
                desc: isDutch
                  ? `EPC voor uw woning in ${name}. Resultaat binnen 48u, officieel attest.`
                  : `Certificat PEB pour votre maison à ${name}. Résultat sous 48h, attestation officielle.`,
                link: '/certificat-peb-maison-bruxelles',
              },
              {
                title: isDutch ? 'Energie-audit' : 'Audit énergétique',
                price: isDutch ? 'Op aanvraag' : 'Sur devis',
                desc: isDutch
                  ? `Volledige energie-audit voor uw woning in ${name}. Prioritaire werken en subsidies.`
                  : `Audit énergétique complet pour votre bien à ${name}. Travaux prioritaires et primes.`,
                link: '/audit-energetique-bruxelles',
              },
            ].map(({ title, price, desc, link }) => (
              <Link
                key={title}
                to={link}
                className="group rounded-2xl bg-gray-50 border border-gray-100 p-6 hover:shadow-xl hover:border-emerald-200 transition-all"
              >
                <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 mb-3">{price}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
                  {isDutch ? 'Meer info' : 'En savoir plus'} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {isDutch ? `FAQ — EPC in ${name}` : `FAQ — Certificat PEB à ${name}`}
          </h2>
          <dl className="space-y-4">
            {[
              {
                q: isDutch ? `Is een EPC-certificaat verplicht voor mijn woning in ${name} ?` : `Le certificat PEB est-il obligatoire pour mon bien à ${name} ?`,
                a: isDutch
                  ? `Ja, het EPC-certificaat is verplicht voor elke verkoop of verhuur in ${name} en in alle 19 gemeenten van het Brussels Gewest, conform de COBRACE-ordonnantie van 2013. Zonder geldig certificaat riskeert u boetes van 200 tot 3 000 €.`
                  : `Oui, le certificat PEB est obligatoire pour toute vente ou location à ${name} et dans les 19 communes de la Région bruxelloise, conformément à l'ordonnance COBRACE de 2013. Sans certificat valide, vous risquez des amendes de 200 à 3 000 €.`,
              },
              {
                q: isDutch ? `Wat kost een EPC-certificaat in ${name} ?` : `Quel est le prix d'un certificat PEB à ${name} ?`,
                a: isDutch
                  ? `De prijs van een EPC-certificaat in ${name} begint vanaf 120 € incl. btw voor een appartement van minder dan 50 m². Voor een woning beginnen de tarieven vanaf 210 € incl. btw. Vraag een gratis offerte aan op onze website.`
                  : `Le prix d'un certificat PEB à ${name} commence dès 120 € TVAC pour un appartement de moins de 50 m². Pour une maison, les tarifs démarrent à partir de 210 € TVAC. Demandez un devis gratuit sur notre site.`,
              },
              {
                q: isDutch ? `Hoe snel kan KCertiPEB langskomen in ${name} ?` : `Quel est le délai d'intervention de KCertiPEB à ${name} ?`,
                a: isDutch
                  ? `KCertiPEB komt langs in ${name} binnen 24 tot 48 uur na uw aanvraag. Het officiële EPC-certificaat wordt afgeleverd binnen 48u na het bezoek.`
                  : `KCertiPEB intervient à ${name} sous 24 à 48h après votre demande. Le certificat PEB officiel est remis sous 48h après la visite.`,
              },
              {
                q: isDutch
                  ? `Mijn woning in ${name} is klasse ${commune.classeDominante.split('–')[1]?.trim() || 'F'} — wat moet ik doen ?`
                  : `Mon bien à ${name} est en classe ${commune.classeDominante.split('–')[1]?.trim() || 'F'} — que faire ?`,
                a: isDutch
                  ? `Een woning in klasse ${commune.classeDominante} heeft renovatiepotentieel. Prioriteiten: 1) dakisolatie (15-20 €/m²), 2) vervanging enkel glas, 3) modernisering verwarming. Vraag een energie-audit aan bij KCertiPEB om de prioritaire werken te identificeren.`
                  : `Un bien en classe ${commune.classeDominante} a un fort potentiel de rénovation. Priorités : 1) Isolation des combles (15-20 €/m²), 2) Remplacement des vitrages simple, 3) Modernisation du chauffage. Demandez un audit énergétique à KCertiPEB pour identifier les travaux prioritaires.`,
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <dt className="font-bold text-gray-900 mb-2">{q}</dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-emerald-700">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isDutch ? `EPC-certificaat nodig in ${name} ?` : `Besoin d'un certificat PEB à ${name} ?`}
          </h2>
          <p className="text-emerald-100 mb-8">
            {isDutch
              ? `KCertiPEB, erkend door Leefmilieu Brussel. Gratis offerte, resultaat binnen 48u in heel ${name}.`
              : `KCertiPEB, agréé par Bruxelles Environnement. Devis gratuit, résultat sous 48h dans toute la commune de ${name}.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 hover:bg-emerald-50 transition">
              {isDutch ? 'Gratis offerte' : 'Devis gratuit'} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/tarifs" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-emerald-600 transition">
              {isDutch ? 'Tarieven bekijken' : 'Voir les tarifs'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── MAILLAGE INTERNE — Autres communes ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {isDutch ? 'KCertiPEB in andere gemeenten' : 'KCertiPEB dans les autres communes'}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {autresCommunes.map((c) => (
              <Link
                key={c.slug}
                to={`/certificat-peb/${c.slug}`}
                className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center text-sm font-medium text-gray-700 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50 transition"
              >
                {isDutch ? c.nameNl : c.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/" className="text-sm text-emerald-700 hover:underline font-medium">
              {isDutch ? 'Alle 19 gemeenten bekijken →' : 'Voir les 19 communes →'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

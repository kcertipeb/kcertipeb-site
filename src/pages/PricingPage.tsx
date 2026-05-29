import { Home, Building2, ClipboardCheck, CheckCircle2, Star, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

const appartementOptions = [
  { size: '< 50 m²', price: '120', label: 'Studio / T1', popular: false },
  { size: '50 – 75 m²', price: '165', label: 'T2 / petit T3', popular: true },
  { size: '76 – 100 m²', price: '185', label: 'Grand T3', popular: false },
  { size: '> 100 m²', price: '205', label: 'Penthouse', popular: false },
];

const maisonOptions = [
  { size: '< 100 m²', price: '210', label: '', popular: true },
  { size: '101 – 200 m²', price: '240', label: '', popular: false },
  { size: '> 200 m²', price: '275', label: '', popular: false },
];

export default function PricingPage() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'Tarieven EPC-certificaat Brussel 2026 — Vanaf 120 €',
        seoDescription:
          'EPC-certificaat in Brussel vanaf 120 € incl. btw. Duidelijke tarieven voor appartement, woning of gebouw — zonder verborgen kosten. Gratis offerte in 24u.',
        title: 'Tarieven EPC-certificaat Brussel 2026',
        subtitle: 'Vaste prijzen · Geen verborgen kosten · Btw inbegrepen',
        jumpAppt: 'Appartement — vanaf 120 €',
        jumpMaison: 'Woning — vanaf 210 €',
        jumpImmeuble: 'Gebouw — op offerte',
        popular: 'Populair',
        order: 'Bestellen',
        apptTitle: 'Prijs EPC appartement Brussel',
        apptIntro: 'Vaste prijs per oppervlakte, btw inbegrepen.',
        apptFrom: 'Appartement · vanaf',
        maisonTitle: 'Prijs EPC woning Brussel',
        maisonIntro: 'Tarieven voor rijwoningen en vrijstaande woningen in Brussel.',
        maisonFrom: 'Woning · vanaf',
        immeubleTitle: 'Tarief EPC gebouw Brussel',
        immeubleIntro:
          'Voor appartementsgebouwen hangt het tarief af van het aantal eenheden en de totale oppervlakte.',
        immeubleNote: 'Offerte op maat — gratis binnen 24u',
        immeubleSub: 'Elk gebouw is anders. Wij analyseren uw situatie en sturen u een gedetailleerde offerte.',
        immeubleCta: 'Vraag een gratis offerte aan',
        immeubleLink: 'Meer info over EPC voor gebouwen →',
        included: 'Alles inbegrepen in de prijs',
        includedItems: [
          { icon: '🏠', text: 'Volledig plaatsbezoek' },
          { icon: '📄', text: 'Officieel EPC-certificaat' },
          { icon: '✅', text: 'Officiële registratie' },
          { icon: '🔍', text: 'Gedetailleerde energieanalyse' },
          { icon: '⚡', text: 'Attest in 48u' },
          { icon: '💬', text: 'Ondersteuning en advies' },
        ],
        trustReviews: '6 beoordelingen',
        trustRating: '5/5',
        trustCount: '+50 certificaten',
        trustSpeed: 'Interventie binnen 48u',
        prosTitle: 'Aangepaste tarieven voor professionelen',
        prosText:
          'Bent u makelaar, projectontwikkelaar of architect? Dan kunnen wij u aangepaste tarieven voorstellen voor meerdere certificeringen.',
        cta: 'Contacteer ons',
        vatLabel: 'incl. btw',
        vatShort: '€ incl. btw',
        labelAppt: 'Appartement',
        labelMaison: isDutch ? 'Woning' : 'Maison',
      }
    : {
        seoTitle: 'Tarifs Certificat PEB Bruxelles 2026 — Dès 120 €',
        seoDescription:
          'Certificat PEB à Bruxelles dès 120 € TVAC. Tarifs clairs pour appartement, maison ou immeuble — sans frais cachés. Devis gratuit en 24h.',
        title: 'Tarifs Certificat PEB Bruxelles 2026',
        subtitle: 'Prix fixes · Sans frais cachés · TVAC incluse',
        jumpAppt: 'Appartement — dès 120 €',
        jumpMaison: 'Maison — dès 210 €',
        jumpImmeuble: 'Immeuble — sur devis',
        popular: 'Populaire',
        order: 'Commander',
        apptTitle: 'Prix PEB appartement Bruxelles',
        apptIntro: 'Tarif fixe par superficie, TVAC incluse.',
        apptFrom: 'Appartement · dès',
        maisonTitle: 'Prix PEB maison Bruxelles',
        maisonIntro: 'Tarifs pour maisons mitoyennes et 4-façades à Bruxelles.',
        maisonFrom: 'Maison · dès',
        immeubleTitle: 'Tarif PEB immeuble Bruxelles',
        immeubleIntro:
          "Pour les immeubles à appartements, le tarif dépend du nombre d'unités et de la superficie totale.",
        immeubleNote: 'Devis sur mesure — gratuit en 24h',
        immeubleSub: "Chaque immeuble est unique. Nous analysons votre situation et vous envoyons une offre détaillée.",
        immeubleCta: 'Demander un devis gratuit',
        immeubleLink: 'En savoir plus sur le PEB immeuble →',
        included: 'Tout inclus dans le prix',
        includedItems: [
          { icon: '🏠', text: 'Visite complète du bien' },
          { icon: '📄', text: 'Certificat PEB officiel' },
          { icon: '✅', text: 'Enregistrement officiel' },
          { icon: '🔍', text: 'Analyse énergétique détaillée' },
          { icon: '⚡', text: 'Certificat en 48h' },
          { icon: '💬', text: 'Support et conseils' },
        ],
        trustReviews: '6 avis',
        trustRating: '5/5',
        trustCount: '+50 certificats',
        trustSpeed: 'Intervention sous 48h',
        prosTitle: 'Tarifs adaptés pour les professionnels',
        prosText:
          'Vous êtes agent immobilier, promoteur ou architecte ? Nous pouvons vous proposer des tarifs adaptés pour plusieurs certifications.',
        cta: 'Nous contacter',
        vatLabel: 'TVAC',
        vatShort: '€ TVAC',
        labelAppt: 'Appartement',
        labelMaison: 'Maison',
      };

  const apptLabels = isDutch
    ? ['Studio / T1', 'T2 / kleine T3', 'Grote T3', 'Penthouse']
    : ['Studio / T1', 'T2 / petit T3', 'Grand T3', 'Penthouse'];

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        keywords={
          isDutch
            ? 'tarieven EPC Brussel, prijs EPC appartement Brussel, prijs EPC woning Brussel, tarief EPC gebouw Brussel'
            : 'tarifs certificat PEB bruxelles, prix PEB appartement bruxelles, prix PEB maison bruxelles, tarif PEB immeuble bruxelles'
        }
        canonical="https://kcertipeb.be/tarifs"
        extraSchema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: isDutch ? 'EPC-certificering Brussel' : 'Certification PEB Bruxelles',
          serviceType: isDutch ? 'EPC-certificering' : 'Certification PEB',
          provider: { '@type': 'LocalBusiness', name: 'K Certipeb', url: 'https://kcertipeb.be' },
          areaServed: { '@type': 'City', name: isDutch ? 'Brussel' : 'Bruxelles' },
          offers: [
            { '@type': 'Offer', name: isDutch ? 'EPC appartement < 50m²' : 'PEB appartement < 50m²', price: '120', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement 50-75m²' : 'PEB appartement 50-75m²', price: '165', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement 76-100m²' : 'PEB appartement 76-100m²', price: '185', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC appartement > 100m²' : 'PEB appartement > 100m²', price: '205', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning < 100m²' : 'PEB maison < 100m²', price: '210', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning 101-200m²' : 'PEB maison 101-200m²', price: '240', priceCurrency: 'EUR' },
            { '@type': 'Offer', name: isDutch ? 'EPC woning > 200m²' : 'PEB maison > 200m²', price: '275', priceCurrency: 'EUR' },
          ],
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 pb-12 pt-36 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            {content.subtitle}
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">{content.title}</h1>

          {/* Quick-jump anchors */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { href: '#appartement', label: content.jumpAppt, icon: <Home className="h-4 w-4" /> },
              { href: '#maison', label: content.jumpMaison, icon: <Building2 className="h-4 w-4" /> },
              { href: '#immeuble', label: content.jumpImmeuble, icon: <ClipboardCheck className="h-4 w-4" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="mt-12 overflow-hidden">
          <svg viewBox="0 0 1440 48" className="w-full text-gray-50" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,48 L1440,48 L1440,0 Q720,48 0,0 Z" />
          </svg>
        </div>
      </section>

      <div className="bg-gray-50">

        {/* ── Trust strip ── */}
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 py-4 text-sm">
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {content.trustRating} · {content.trustReviews}
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <Shield className="h-4 w-4 text-emerald-600" />
              {content.trustCount}
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <Zap className="h-4 w-4 text-emerald-600" />
              {content.trustSpeed}
            </span>
            <span className="hidden h-4 w-px bg-gray-300 sm:block" />
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <Clock className="h-4 w-4 text-emerald-600" />
              {isDutch ? 'Attest in 48u' : 'Certificat en 48h'}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

          {/* ── #appartement ── */}
          <section id="appartement" className="mb-20 scroll-mt-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
                    <Home className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">{content.labelAppt}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">{content.apptTitle}</h2>
                <p className="mt-1 text-gray-500">{content.apptIntro}</p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700 sm:inline-block">
                {content.apptFrom} 120 {content.vatShort}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {appartementOptions.map((option, i) => (
                option.popular ? (
                  <div key={option.size} className="relative flex flex-col rounded-2xl bg-emerald-600 p-6 text-white shadow-2xl ring-4 ring-emerald-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-900 shadow">
                      {content.popular}
                    </div>
                    <p className="mb-1 text-sm font-semibold text-emerald-200">{option.size}</p>
                    <p className="mb-2 text-sm text-emerald-100">{apptLabels[i]}</p>
                    <div className="my-4 flex items-end gap-1">
                      <span className="text-5xl font-extrabold">{option.price}</span>
                      <span className="mb-1 text-lg font-semibold text-emerald-200">€</span>
                    </div>
                    <p className="mb-5 text-xs text-emerald-200">{content.vatLabel}</p>
                    <Link
                      to="/contact"
                      className="mt-auto block rounded-xl bg-white py-3 text-center text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      {content.order}
                    </Link>
                  </div>
                ) : (
                  <div key={option.size} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-emerald-300">
                    <p className="mb-1 text-sm font-semibold text-gray-500">{option.size}</p>
                    <p className="mb-2 text-sm text-gray-400">{apptLabels[i]}</p>
                    <div className="my-4 flex items-end gap-1">
                      <span className="text-5xl font-extrabold text-gray-900">{option.price}</span>
                      <span className="mb-1 text-lg font-semibold text-gray-400">€</span>
                    </div>
                    <p className="mb-5 text-xs text-gray-400">{content.vatLabel}</p>
                    <Link
                      to="/contact"
                      className="mt-auto block rounded-xl border-2 border-emerald-600 py-3 text-center text-sm font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                    >
                      {content.order}
                    </Link>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* ── #maison ── */}
          <section id="maison" className="mb-20 scroll-mt-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                    <Building2 className="h-5 w-5 text-blue-700" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{content.labelMaison}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">{content.maisonTitle}</h2>
                <p className="mt-1 text-gray-500">{content.maisonIntro}</p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-700 sm:inline-block">
                {content.maisonFrom} 210 {content.vatShort}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {maisonOptions.map((option) => (
                option.popular ? (
                  <div key={option.size} className="relative flex flex-col rounded-2xl bg-blue-600 p-6 text-white shadow-2xl ring-4 ring-blue-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-0.5 text-xs font-extrabold uppercase tracking-wide text-amber-900 shadow">
                      {content.popular}
                    </div>
                    <p className="mb-1 text-sm font-semibold text-blue-200">{option.size}</p>
                    <div className="my-4 flex items-end gap-1">
                      <span className="text-5xl font-extrabold">{option.price}</span>
                      <span className="mb-1 text-lg font-semibold text-blue-200">€</span>
                    </div>
                    <p className="mb-5 text-xs text-blue-200">{content.vatLabel}</p>
                    <Link
                      to="/contact"
                      className="mt-auto block rounded-xl bg-white py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                    >
                      {content.order}
                    </Link>
                  </div>
                ) : (
                  <div key={option.size} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-blue-300">
                    <p className="mb-1 text-sm font-semibold text-gray-500">{option.size}</p>
                    <div className="my-4 flex items-end gap-1">
                      <span className="text-5xl font-extrabold text-gray-900">{option.price}</span>
                      <span className="mb-1 text-lg font-semibold text-gray-400">€</span>
                    </div>
                    <p className="mb-5 text-xs text-gray-400">{content.vatLabel}</p>
                    <Link
                      to="/contact"
                      className="mt-auto block rounded-xl border-2 border-blue-600 py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                    >
                      {content.order}
                    </Link>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* ── #immeuble ── */}
          <section id="immeuble" className="mb-20 scroll-mt-24">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="p-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      <ClipboardCheck className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Immeuble</span>
                  </div>
                  <h2 className="mb-3 text-3xl font-extrabold">{content.immeubleTitle}</h2>
                  <p className="mb-6 text-gray-300">{content.immeubleIntro}</p>
                  <div className="mb-8">
                    <p className="text-4xl font-extrabold text-emerald-400">{content.immeubleNote}</p>
                    <p className="mt-2 text-sm text-gray-400">{content.immeubleSub}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block rounded-xl bg-emerald-500 px-8 py-3.5 font-bold text-white transition hover:bg-emerald-400"
                  >
                    {content.immeubleCta}
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-4 border-t border-white/10 bg-white/5 p-10 md:border-l md:border-t-0">
                  {[
                    isDutch ? 'Appartementsgebouwen met meerdere units' : 'Immeubles à appartements (multi-unités)',
                    isDutch ? 'Tarief per unit — meer units = lagere prijs per unit' : 'Tarif par unité — plus il y a d\'unités, plus le prix unitaire baisse',
                    isDutch ? 'Alle types: studio, T1, T2, T3, penthouse' : 'Tous types : studio, T1, T2, T3, penthouse',
                    isDutch ? 'Gratis offerte op maat binnen 24u' : 'Devis gratuit sur mesure en 24h',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                      <p className="text-sm text-gray-200">{item}</p>
                    </div>
                  ))}
                  <p className="mt-4 text-sm">
                    <Link to="/certificat-peb-immeuble-bruxelles" className="font-semibold text-emerald-400 hover:underline">
                      {content.immeubleLink}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Ce qui est inclus ── */}
          <section className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900">{content.included}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {content.includedItems.map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-xs font-semibold leading-snug text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Pros CTA ── */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-10 text-center text-white shadow-xl">
            <h2 className="mb-3 text-2xl font-extrabold">{content.prosTitle}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-emerald-100">{content.prosText}</p>
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-white px-10 py-3.5 font-bold text-emerald-700 shadow transition hover:bg-emerald-50"
            >
              {content.cta}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

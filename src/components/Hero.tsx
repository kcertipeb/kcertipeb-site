import { Link } from 'react-router-dom';
import { Shield, Clock, Star, Phone } from 'lucide-react';
import BookingWizard from './BookingWizard';
import { trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

export default function Hero() {
  const { isDutch } = useLanguage();

  const quickPrices = isDutch
    ? [
        { label: 'Appartement < 50 m²', price: '120 € incl. btw' },
        { label: 'Appartement 50 - 75 m²', price: '165 € incl. btw' },
        { label: 'Woning < 100 m²', price: '210 € incl. btw' },
      ]
    : [
        { label: 'Appartement < 50 m²', price: '120 € TVAC' },
        { label: 'Appartement 50 - 75 m²', price: '165 € TVAC' },
        { label: 'Maison < 100 m²', price: '210 € TVAC' },
      ];

  const content = isDutch
    ? {
        title: 'Energieprestatiecertificaat in Brussel — heldere tarieven vanaf',
        subtitle:
          'Kies het type pand en de oppervlakte en reserveer uw bezoek. De prijs verschijnt meteen vóór de reservering.',
        primaryCta: 'Reserveer een bezoek',
        secondaryCta: 'Bel nu',
        reviewTitle: 'Positieve klantenreacties',
        reviewSubtitle: 'Snelle en zorgvuldige service in Brussel',
        approved: 'Erkend BE',
        fast: 'Binnen 48 u',
        clear: 'Duidelijke prijzen',
        pricesTitle: 'EPC-tarieven in Brussel',
        pricesSubtitle: 'Richtprijzen',
        pricesNote:
          'Het tarief hangt af van het type pand en de oppervlakte. Neem contact met ons op voor een groter pand of een specifieke situatie.',
        formLabel: 'Bezoek reserveren',
        formTitle: 'Kies uw tijdslot en bevestig het bezoek',
        formIntro:
          'Prijs en echte beschikbaarheden worden meteen weergegeven. Voor een appartement of woning is de reservering onmiddellijk bevestigd.',
        urgentHelp: 'Onmiddellijk antwoord nodig?',
        urgentLink: 'Spoedservice bekijken — interventie binnen 48u',
      }
    : {
        title: 'Certificat PEB à Bruxelles avec des tarifs clairs dès',
        subtitle:
          "Choisissez le type de bien, la surface, et réservez votre visite. Le prix s'affiche directement avant votre réservation.",
        primaryCta: 'Réserver une visite',
        secondaryCta: 'Appeler maintenant',
        reviewTitle: 'Retours clients positifs',
        reviewSubtitle: 'Service rapide et sérieux à Bruxelles',
        approved: 'Agréé BE',
        fast: 'Sous 48 h',
        clear: 'Tarifs clairs',
        pricesTitle: 'Tarifs PEB à Bruxelles',
        pricesSubtitle: 'Prix indicatifs',
        pricesNote:
          'Le tarif dépend du type de bien et de sa surface. Pour un bien plus grand ou un cas particulier, contactez-nous.',
        formLabel: 'Réserver une visite',
        formTitle: 'Choisissez votre créneau et confirmez la visite',
        formIntro:
          'Le prix et les disponibilités réelles s’affichent directement. Pour un appartement ou une maison, la réservation est confirmée immédiatement.',
        urgentHelp: "Besoin d'une réponse immédiate ?",
        urgentLink: 'Service urgent — intervention sous 48h',
      };

  const scrollToReservationForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="accueil" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 pb-14 pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
              {content.title} <span className="text-emerald-600">120 €</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600">{content.subtitle}</p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToReservationForm}
                className="rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
              >
                {content.primaryCta}
              </button>
              <a
                href="tel:+32486987484"
                onClick={trackPhoneCallConversion}
                className="rounded-2xl border-2 border-emerald-600 bg-white px-8 py-4 text-center text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                {content.secondaryCta}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex -space-x-2">
                {['S', 'M', 'L', 'A'].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-600 text-xs font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-slate-950">{content.reviewTitle}</span>
                </div>
                <p className="text-xs text-slate-500">{content.reviewSubtitle}</p>
              </div>
            </div>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.approved}</p>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.fast}</p>
              </div>
              <div className="text-center">
                <Star className="mx-auto mb-1 h-8 w-8 text-emerald-600" />
                <p className="text-xs font-semibold text-slate-900">{content.clear}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-100/50">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">{content.pricesTitle}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">{content.pricesSubtitle}</p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {isDutch ? 'incl. btw' : 'TVAC'}
                </span>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {quickPrices.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm text-slate-600">{item.label}</p>
                    <p className="mt-1 text-2xl font-bold text-slate-950">{item.price}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-500">{content.pricesNote}</p>
            </div>
          </div>

          <div id="contact" className="min-w-0">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/20">
              <div className="bg-slate-950 px-6 py-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{content.formLabel}</p>
                <p className="mt-2 text-3xl font-bold">{content.formTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{content.formIntro}</p>
              </div>

              <div className="space-y-6 p-6">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="text-sm text-emerald-800">{content.urgentHelp}</p>
                      <a
                        href="tel:+32486987484"
                        onClick={trackPhoneCallConversion}
                        className="text-2xl font-bold text-emerald-900 transition hover:text-emerald-700"
                      >
                        +32 486 98 74 84
                      </a>
                    </div>
                  </div>
                  <Link
                    to="/certificat-peb-urgent-bruxelles"
                    className="mt-2 block text-xs font-semibold text-red-600 hover:underline"
                  >
                    ⚡ {content.urgentLink}
                  </Link>
                </div>

                <BookingWizard compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

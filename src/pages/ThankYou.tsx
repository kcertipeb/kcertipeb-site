import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  FileText,
  FolderOpen,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { readReservationSummary, VISIT_GUIDE_PDF_PATH } from '../lib/reservation';
import {
  consumePendingLeadConversion,
  trackLeadFormConversion,
  trackMetaLeadConversion,
  trackPhoneCallConversion,
  trackWhatsAppConversion,
} from '../lib/tracking';
import SEO from '../components/SEO';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../lib/language';

export default function ThankYou() {
  const { language, isDutch } = useLanguage();
  const reservationSummary = readReservationSummary(language);

  const visitDocuments = isDutch
    ? [
        'Facturen van werken met betrekking tot isolatie, ramen, dak, verwarming en andere energetische verbeteringen',
        'Technische documentatie van de verwarmingsinstallatie en de productie van sanitair warm water',
        'Voor een appartement: nuttige documenten van de mede-eigendom en toegang tot het stooklokaal. Dit is belangrijk, want een gebrek aan toegang kan het EPC-resultaat benadelen',
        'Plan van het pand, indien beschikbaar',
        "Als u bepaalde werken zelf hebt uitgevoerd: foto's van de werf, bewijsstukken en aankoopbewijzen van materialen",
      ]
    : [
        "Factures de travaux liées à l'isolation, aux châssis, à la toiture, au chauffage et aux autres améliorations énergétiques",
        "Documentation technique des équipements de chauffage et de production d'eau chaude sanitaire",
        "Pour un appartement : documents utiles de la copropriété et accès au local de chaufferie. Ce point est important, car l'absence d'accès peut pénaliser le résultat du PEB",
        'Plan du bien, si vous le possédez',
        "Si vous avez réalisé certains travaux vous-même : photos du chantier, justificatifs et preuves d'achat des matériaux",
      ];

  const nextSteps = isDutch
    ? [
        'Snelle controle van uw aanvraag',
        'Bevestiging van het tarief en de praktische modaliteiten van het bezoek',
        'Afsprakenslot volgens uw beschikbaarheid',
      ]
    : [
        'Vérification rapide de votre demande',
        'Confirmation du tarif et des modalités de visite',
        'Prise de rendez-vous selon vos disponibilités',
      ];

  const content = isDutch
    ? {
        title: 'Bezoeksreservering geregistreerd',
        description:
          'Uw bezoeksreservering werd goed geregistreerd. Bekijk uw samenvatting, het tarief en de documenten die u best voorbereidt.',
        badge: 'Reservering goed geregistreerd',
        heading: 'Uw aanvraag voor een bezoek werd goed ontvangen',
        intro:
          'Wij nemen binnen de 12 uur contact met u op om de organisatie van het bezoek te bevestigen en de laatste details met u te bespreken.',
        summary: 'Samenvatting van uw aanvraag',
        propertyType: 'Type pand',
        surface: 'Oppervlakte',
        price: 'Getoonde prijs',
        address: 'Adres van het pand',
        validation: 'De afspraak wordt met u vastgelegd na de definitieve bevestiging van de aanvraag.',
        fallback: 'De volledige samenvatting is momenteel niet beschikbaar, maar uw aanvraag werd wel goed ontvangen.',
        documents: 'Documenten om voor te bereiden',
        guide: 'Officiële gids vóór het bezoek',
        guideText:
          'Het officiële document legt uit hoe een residentieel EPC-bezoek verloopt en welke informatie nuttig is voor de certificateur.',
        guideButton: 'Open het officiële document',
        guideNote: 'U kunt het nu openen of later raadplegen vóór het bezoek.',
        apartmentPoint: 'Belangrijk punt voor een appartement',
        apartmentText:
          'Als toegang tot het stooklokaal of tot nuttige informatie van de mede-eigendom niet mogelijk is, kan dat het EPC-resultaat benadelen. Bereid die toegang dus best vooraf voor.',
        call: 'Bel de certificateur',
        whatsapp: 'Stel een vraag',
        back: 'Terug naar de site',
        fallbackPrice: 'Tarief te bevestigen',
      }
    : {
        title: 'Réservation de visite enregistrée',
        description:
          'Votre réservation de visite a bien été enregistrée. Retrouvez le récapitulatif, le prix et les documents utiles à préparer.',
        badge: 'Réservation bien enregistrée',
        heading: 'Votre demande de visite a bien été prise en compte',
        intro:
          "Nous revenons vers vous sous 12 heures pour confirmer l'organisation de la visite et valider les derniers détails avec vous.",
        summary: 'Récapitulatif de votre demande',
        propertyType: 'Type de bien',
        surface: 'Surface',
        price: 'Prix affiché',
        address: 'Adresse du bien',
        validation: 'Le rendez-vous est fixé avec vous après validation finale de la demande.',
        fallback: "Le récapitulatif complet n'est pas disponible pour le moment, mais votre demande a bien été prise en compte.",
        documents: 'Documents à préparer',
        guide: 'Guide officiel avant la visite',
        guideText:
          "Le document officiel explique le déroulement d'une visite PEB résidentielle et les informations qui peuvent aider le certificateur le jour du rendez-vous.",
        guideButton: 'Ouvrir le document officiel',
        guideNote: "Vous pouvez l'ouvrir maintenant ou le consulter plus tard avant la visite.",
        apartmentPoint: 'Point important pour un appartement',
        apartmentText:
          "Si l'accès au local de chaufferie ou aux informations utiles de la copropriété n'est pas possible, cela peut pénaliser le résultat du PEB. Il est donc préférable de préparer cet accès avant la visite.",
        call: 'Appeler le certificateur',
        whatsapp: 'Poser une question',
        back: 'Retourner vers le site',
        fallbackPrice: 'Tarif à confirmer',
      };

  useEffect(() => {
    if (consumePendingLeadConversion()) {
      trackLeadFormConversion();
      trackMetaLeadConversion();
    }
  }, []);

  return (
    <>
      <SEO title={content.title} description={content.description} canonical="https://kcertipeb.be/merci" robots="noindex, nofollow" />

      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_38%),linear-gradient(180deg,_#f8fffc_0%,_#ffffff_42%,_#f8fafc_100%)] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex justify-end">
            <LanguageSelector />
          </div>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                {content.badge}
              </div>

              <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{content.heading}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{content.intro}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {nextSteps.map((step, index) => (
                  <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <p className="text-sm font-semibold text-slate-400">{isDutch ? `Stap ${index + 1}` : `Étape ${index + 1}`}</p>
                    <p className="mt-2 text-base font-semibold leading-6 text-slate-900">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+32486987484"
                  onClick={trackPhoneCallConversion}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Phone className="h-4 w-4" />
                  {content.call}
                </a>
                <a
                  href="https://wa.me/32486987484"
                  onClick={trackWhatsAppConversion}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-4 text-center font-semibold text-slate-900 transition hover:border-emerald-400 hover:text-emerald-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  {content.whatsapp}
                </a>
              </div>

              <Link
                to="/"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                {content.back}
              </Link>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.16)] sm:p-10">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-emerald-300" />
                <h2 className="text-2xl font-bold">{content.summary}</h2>
              </div>

              {reservationSummary ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-white/5 px-5 py-5">
                    <p className="text-sm text-slate-400">{content.propertyType}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{reservationSummary.propertyTypeLabel}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-white/5 px-5 py-5">
                    <p className="text-sm text-slate-400">{content.surface}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{reservationSummary.surfaceRange}</p>
                  </div>
                  <div className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-5 sm:col-span-2">
                    <p className="text-sm font-medium text-emerald-200">{content.price}</p>
                    <p className="mt-1 text-3xl font-bold text-white">{reservationSummary.priceLabel}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-white/5 px-5 py-5 sm:col-span-2">
                    <p className="text-sm text-slate-400">{content.address}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{reservationSummary.address}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-white/5 px-5 py-4 sm:col-span-2">
                    <div className="flex items-start gap-3 text-sm text-slate-300">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{content.validation}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-slate-800 bg-white/5 px-5 py-5 text-sm leading-6 text-slate-300">
                  {content.fallback}
                </div>
              )}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="mb-6 flex items-center gap-3">
                <FolderOpen className="h-6 w-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-950">{content.documents}</h2>
              </div>

              <div className="grid gap-3">
                {visitDocuments.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <div className="mb-6 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-slate-950">{content.guide}</h2>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {isDutch ? 'Leefmilieu Brussel' : 'Bruxelles Environnement'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{content.guideText}</p>
                </div>

                <a
                  href={VISIT_GUIDE_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 font-semibold text-white transition hover:bg-emerald-700"
                >
                  {content.guideButton}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <p className="mt-4 text-sm leading-6 text-slate-500">{content.guideNote}</p>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/60">
                <h2 className="text-xl font-bold text-slate-950">{content.apartmentPoint}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{content.apartmentText}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

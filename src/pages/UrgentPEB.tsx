import { Clock, CheckCircle2, Phone, ArrowRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';
import { trackPhoneCallConversion } from '../lib/tracking';

export default function UrgentPEB() {
  const { isDutch } = useLanguage();

  const content = isDutch
    ? {
        seoTitle: 'Urgent EPC-certificaat Brussel — Interventie 48u',
        seoDescription: 'Urgent EPC-certificaat in Brussel nodig? Afspraak binnen 48u, attest in 48u. Erkend certificateur, beschikbaar 7 dagen op 7. Bel +32 486 98 74 84.',
        badge: 'EPC Express',
        title: 'EPC-certificaat in spoed te Brussel',
        subtitle: '48u interventie gegarandeerd',
        intro: 'Uw verkoop of verhuur kan niet wachten? Wij garanderen een afspraak binnen 48 uur en leveren uw officieel EPC-attest binnen 48 uur na het bezoek.',
        cta: 'Bel nu – Directe reactie',
        ctaLink: 'Bekijk mijn prijs',
        phone: '+32486987484',
        guarantees: [
          { title: 'Afspraak binnen 48u', text: 'Wij passen ons aan uw agenda aan, ook op zaterdag.' },
          { title: 'Attest in 48u', text: 'Het officieel EPC-certificaat wordt afgeleverd binnen 48 uur na het plaatsbezoek.' },
          { title: 'Erkend certificateur', text: 'Al onze certificateurs zijn erkend door Leefmilieu Brussel.' },
          { title: 'Prioritaire behandeling', text: 'Spoeddossiers worden als eerste behandeld in onze planning.' },
        ],
        situations: 'Wanneer heeft u een spoed EPC nodig?',
        situationList: [
          'Verkoop gepland en notaris vraagt het attest',
          'Huurovereenkomst te ondertekenen voor een specifieke datum',
          'Vastgoedbemiddelaar vereist het attest voor de publicatie',
          'Erfenis of overdracht met dringende deadline',
        ],
        prepareTitle: 'Wat te voorzien voor de plaatsbezoek?',
        prepareItems: [
          'Plannen van de woning (optioneel maar nuttig)',
          'Toegang tot alle ruimtes inclusief zolder en kelder',
          'Facturen gas en elektriciteit (optioneel)',
          'Bouwjaar van het gebouw indien bekend',
        ],
        rapidTitle: 'Snelle EPC-interventie in Brussel',
        rapidIntro: 'Een dringend dossier kan niet weken wachten. Bij KCertiPEB is snelheid onze hoofdbelofte — geen toeslag, geen wachtrij.',
        rapidPoints: [
          'Antwoord op uw aanvraag dezelfde dag',
          'Afspraak gepland binnen maximaal 48u',
          'Attest bezorgd binnen 48 uur na het bezoek',
          'Officieel attest onmiddellijk geldig voor notaris en verhuur',
        ],
        availTitle: 'EPC-certificateur beschikbaar 7 dagen op 7 in Brussel',
        availIntro: 'Uw verkoop wacht niet op het weekend. Wij ook niet. Wij interveniëren van maandag tot zondag in alle 19 Brusselse gemeenten.',
        availItems: [
          { day: 'Maandag – Vrijdag', hours: '08u00 – 21u00' },
          { day: 'Zaterdag', hours: '08u00 – 21u00' },
          { day: 'Zondag', hours: '08u00 – 21u00' },
        ],
        availCta: 'Bekijk onze tarieven',
        faqTitle: 'Veelgestelde vragen (spoed)',
        faqs: [
          { q: 'Kan ik vandaag nog een afspraak krijgen?', a: 'Wij streven ernaar om uw aanvraag dezelfde dag te beantwoorden en een afspraak in te plannen binnen 48 uur. Bel ons direct voor de snelste reactie.' },
          { q: 'Wat is het verschil met een standaard EPC?', a: 'Het certificaat is identiek. Het enige verschil is de prioritaire behandeling van uw dossier in onze planning.' },
          { q: 'Zijn de tarieven hoger voor spoedaanvragen?', a: 'Onze standaardtarieven zijn van toepassing: vanaf 120 € TVAC voor een appartement en 210 € TVAC voor een woning.' },
          { q: 'Is het EPC geldig voor notaris en verhuur?', a: 'Ja, ons certificaat is officieel erkend door Leefmilieu Brussel en volledig rechtsgeldig voor verkoop, verhuur en erfenisprocedures.' },
        ],
        pricingNote: 'Tarieven identiek aan standaard: appartement vanaf 120 € TVAC, woning vanaf 210 € TVAC.',
      }
    : {
        seoTitle: 'Certificat PEB Urgent Bruxelles — Intervention 48h',
        seoDescription: 'Certificat PEB en urgence à Bruxelles ? Rendez-vous sous 48h, certificat en 48h. Certificateur agréé disponible 7j/7. Appelez le +32 486 98 74 84.',
        badge: 'PEB Express',
        title: 'Certificat PEB en urgence à Bruxelles',
        subtitle: 'Intervention garantie sous 48h',
        intro: 'Votre vente ou location ne peut pas attendre ? Nous garantissons un rendez-vous sous 48h et remettons votre certificat PEB officiel sous 48h après la visite.',
        cta: 'Appeler maintenant – Réponse immédiate',
        ctaLink: 'Voir mon prix',
        phone: '+32486987484',
        guarantees: [
          { title: 'Rendez-vous sous 48h', text: 'Nous nous adaptons à votre agenda, y compris le samedi.' },
          { title: 'Certificat en 48h', text: 'Le certificat PEB officiel est remis sous 48h après la visite.' },
          { title: 'Certificateur agréé', text: 'Tous nos certificateurs sont agréés par Bruxelles Environnement.' },
          { title: 'Traitement prioritaire', text: 'Les dossiers urgents sont traités en priorité dans notre planning.' },
        ],
        situations: 'Dans quels cas avez-vous besoin d\'un PEB en urgence ?',
        situationList: [
          'Vente planifiée et le notaire exige le certificat',
          'Bail à signer avant une date précise',
          'Agent immobilier demande le certificat pour la publication',
          'Succession ou cession avec deadline imminente',
        ],
        prepareTitle: 'Que prévoir pour la visite ?',
        prepareItems: [
          'Plans du bien (optionnel mais utile)',
          'Accès à toutes les pièces y compris grenier et cave',
          'Factures gaz et électricité (optionnel)',
          'Année de construction du bâtiment si connue',
        ],
        rapidTitle: 'Intervention rapide PEB à Bruxelles',
        rapidIntro: 'Un dossier urgent ne peut pas attendre des semaines. Chez KCertiPEB, la rapidité est notre promesse principale — pas un supplément.',
        rapidPoints: [
          'Réponse à votre demande le jour même',
          'Rendez-vous planifié sous 48h maximum',
          'Certificat transmis sous 48h après la visite',
          'Certificat officiel valable immédiatement pour notaire et bailleur',
        ],
        availTitle: 'Certificateur PEB disponible 7j/7 à Bruxelles',
        availIntro: 'Votre vente imminente n\'attend pas le week-end. Ni nous. Nous intervenons du lundi au dimanche dans les 19 communes bruxelloises.',
        availItems: [
          { day: 'Lundi – Vendredi', hours: '08h00 – 21h00' },
          { day: 'Samedi', hours: '08h00 – 21h00' },
          { day: 'Dimanche', hours: '08h00 – 21h00' },
        ],
        availCta: 'Voir les tarifs urgence',
        faqTitle: 'Questions fréquentes (urgence)',
        faqs: [
          { q: 'Puis-je obtenir un rendez-vous aujourd\'hui même ?', a: 'Nous visons à répondre à votre demande le jour même et à fixer un rendez-vous dans les 48h. Appelez-nous directement pour la réponse la plus rapide.' },
          { q: 'Quelle différence avec un PEB standard ?', a: 'Le certificat est identique. La seule différence est le traitement prioritaire de votre dossier dans notre planning.' },
          { q: 'Les tarifs sont-ils plus élevés en urgence ?', a: 'Nos tarifs standards s\'appliquent : dès 120 € TVAC pour un appartement et 210 € TVAC pour une maison.' },
          { q: 'Le certificat est-il valable pour notaire et location ?', a: 'Oui, notre certificat est officiellement agréé par Bruxelles Environnement et pleinement valable pour vente, location et procédures de succession.' },
        ],
        pricingNote: 'Tarifs identiques au standard : appartement dès 120 € TVAC, maison dès 210 € TVAC.',
      };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        canonical="https://kcertipeb.be/certificat-peb-urgent-bruxelles"
        includeFaqSchema={false}
        extraSchema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
                <Zap className="mr-1 inline h-4 w-4" />
                {content.badge}
              </div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{content.title}</h1>
              <p className="mb-2 text-xl font-semibold text-red-600">{content.subtitle}</p>
              <p className="mb-8 text-lg text-gray-600">{content.intro}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${content.phone}`}
                  onClick={trackPhoneCallConversion}
                  className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700"
                >
                  <Phone className="h-5 w-5" />
                  {content.cta}
                </a>
                <Link
                  to="/tarifs"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-6 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  {content.ctaLink}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">{content.pricingNote}</p>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.guarantees.map((g) => (
                <div key={g.title} className="rounded-xl bg-white p-5 shadow-md">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <h3 className="font-semibold text-gray-900">{g.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">{content.situations}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.situationList.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <p className="text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention rapide — targeting "peb rapide bruxelles" */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">{content.rapidTitle}</h2>
          <p className="mb-10 text-center text-lg text-gray-600">{content.rapidIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.rapidPoints.map((point, i) => (
              <div key={point} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  {i + 1}
                </span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disponible 7j/7 — targeting "certificateur peb disponible bruxelles" */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">{content.availTitle}</h2>
          <p className="mb-10 text-center text-lg text-gray-600">{content.availIntro}</p>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {content.availItems.map((item) => (
              <div key={item.day} className="rounded-xl border-2 border-emerald-100 bg-emerald-50 p-6 text-center">
                <p className="mb-1 font-bold text-gray-900">{item.day}</p>
                <p className="text-2xl font-extrabold text-emerald-600">{item.hours}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              {content.availCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Prepare */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">{content.prepareTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.prepareItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">{content.faqTitle}</h2>
          <div className="space-y-4">
            {content.faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-2 font-semibold text-gray-900">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-red-600 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">{content.title}</h2>
          <p className="mb-8 text-lg opacity-90">{content.subtitle}</p>
          <a
            href={`tel:${content.phone}`}
            onClick={trackPhoneCallConversion}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-red-600 shadow-lg transition hover:bg-gray-100"
          >
            <Phone className="h-5 w-5" />
            {content.cta}
          </a>
        </div>
      </section>
    </>
  );
}

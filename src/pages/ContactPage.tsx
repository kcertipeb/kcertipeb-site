import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

export default function ContactPage() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'Contact EPC-certificaat in Brussel' : 'Contact certificat PEB à Bruxelles'}
        description={
          isDutch
            ? 'Dringend EPC-certificaat nodig in Brussel? Interventie binnen 48u, beschikbaar 7 dagen op 7. Erkend certificateur. Reserveer nu uw afspraak.'
            : "Besoin d'un certificat PEB urgent à Bruxelles ? Intervention sous 48h, disponible 7j/7. Réservez votre créneau maintenant."
        }
        keywords={
          isDutch
            ? 'contact EPC Brussel, EPC offerte Brussel, energie-audit Brussel contact'
            : 'contact certificat PEB bruxelles, devis certificat PEB, audit énergétique bruxelles contact'
        }
        canonical="https://kcertipeb.be/contact"
      />

      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}

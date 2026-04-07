import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

export default function ContactPage() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'Contact EPB-certificaat in Brussel' : 'Contact certificat PEB à Bruxelles'}
        description={
          isDutch
            ? 'Neem contact met ons op voor uw EPB-certificaat in Brussel. Snelle reactie. Telefoon: +32 486 98 74 84.'
            : 'Contactez-nous pour votre certificat PEB à Bruxelles. Réponse rapide. Téléphone : +32 486 98 74 84.'
        }
        keywords={
          isDutch
            ? 'contact EPB Brussel, EPB offerte Brussel, energie-audit Brussel contact'
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

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
            ? 'Vraag uw EPC-certificaat aan in Brussel. Reactie binnen 1 uur, interventie binnen 48u. Erkend certificateur Brussel Leefmilieu. Bel: +32 486 98 74 84.'
            : 'Demandez votre certificat PEB à Bruxelles. Réponse en moins d\'1h, visite sous 48h. Certificateur agréé Bruxelles Environnement. Tél : +32 486 98 74 84.'
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

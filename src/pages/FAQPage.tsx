import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { useLanguage } from '../lib/language';

export default function FAQPage() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'FAQ EPC-certificaat in Brussel' : 'FAQ certificat PEB à Bruxelles'}
        description={
          isDutch
            ? 'Veelgestelde vragen over het EPC-certificaat in Brussel: prijs vanaf 120 €, termijn 3-5 dagen, geldigheid 10 jaar, wanneer verplicht. Direct antwoord.'
            : 'Questions sur le certificat PEB à Bruxelles : prix dès 120 €, délai 3-5 jours, validité 10 ans, quand obligatoire. Réponses claires et rapides.'
        }
        keywords={
          isDutch
            ? 'faq EPC certificaat, vragen EPC Brussel, prijs EPC certificaat, geldigheid EPC'
            : 'faq certificat PEB, questions certificat PEB bruxelles, prix certificat PEB, validité certificat PEB'
        }
        canonical="https://kcertipeb.be/faq"
        includeFaqSchema
      />
      <div className="pt-20">
        <FAQ />
      </div>
    </>
  );
}

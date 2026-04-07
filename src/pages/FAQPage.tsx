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
            ? 'Veelgestelde vragen over het EPC-certificaat in Brussel: prijs, termijn, geldigheid en verplichtingen.'
            : 'Questions fréquentes sur le certificat PEB à Bruxelles : prix, délais, validité et obligations.'
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

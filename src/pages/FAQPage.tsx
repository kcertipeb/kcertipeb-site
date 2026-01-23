import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

export default function FAQPage() {
  return (
    <>
      <SEO
          title="FAQ certificat PEB à Bruxelles | Questions fréquentes"
          description="Questions fréquentes sur le certificat PEB à Bruxelles : prix, délais, validité, obligations pour vente et location."
          keywords="faq certificat PEB, questions certificat PEB bruxelles, prix certificat PEB, validité certificat PEB, certificat PEB obligatoire"
          canonical="https://kcertipeb.be/faq"
      />
      <div className="pt-20">
        <FAQ />
      </div>
    </>
  );
}

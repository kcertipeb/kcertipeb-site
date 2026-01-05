import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Questions Fréquentes - Certificat PEB Bruxelles | K Certipeb"
        description="Toutes vos questions sur le certificat PEB à Bruxelles. Tarifs, délais, validité, obligations légales. Réponses d'expert PEB agréé."
        keywords="faq certificat peb, questions peb bruxelles, prix certificat peb, validité peb, certificat peb obligatoire"
        canonical="https://kcertipeb.be/faq"
      />
      <div className="pt-20">
        <FAQ />
      </div>
    </>
  );
}

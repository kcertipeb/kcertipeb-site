import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact certificat PEB à Bruxelles | KcertiPEB"
        description="Contactez-nous pour votre certificat PEB à Bruxelles. Devis gratuit, réponse rapide. Téléphone : +32 486 98 74 84."
        keywords="contact certificat PEB bruxelles, devis certificat PEB, certificat PEB bruxelles contact, audit énergétique bruxelles contact"
        canonical="https://kcertipeb.be/contact"
      />
      
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}

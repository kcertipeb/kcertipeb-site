import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact - Demandez Votre Certificat PEB à Bruxelles"
        description="Contactez K Certipeb pour votre certificat PEB ou audit énergétique à Bruxelles. Devis gratuit, réponse rapide. Téléphone: +32 486 98 74 84"
        keywords="contact certificat peb bruxelles, demande devis peb, expert peb bruxelles contact"
        canonical="https://kcertipeb.be/contact"
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}

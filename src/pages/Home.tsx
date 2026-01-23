import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import BrusselsCommunes from '../components/BrusselsCommunes';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Certificat PEB à Bruxelles | KcertiPEB"
        description="Certificat PEB rapide à Bruxelles dès 120 €. Appartement ou maison, vente ou location. Rendez-vous rapide et rapport officiel conforme."
        keywords="certificat PEB bruxelles, PEB bruxelles, certificat PEB appartement, certificat PEB maison, audit énergétique bruxelles, prix certificat PEB"
        canonical="https://kcertipeb.be"
      />
      <h1>Certificat PEB à Bruxelles</h1>
      
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <BrusselsCommunes />
      <Contact />
    </>
  );
}

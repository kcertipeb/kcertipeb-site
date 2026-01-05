import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import BrusselsCommunes from '../components/BrusselsCommunes';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Certificat PEB Bruxelles - Expert Agréé & Intervention Rapide"
        description="K Certipeb : certificat PEB pour appartement et maison à Bruxelles. Expert agréé, devis gratuit, intervention sous 48h dans toutes les communes. Prix transparent dès 120€."
        keywords="certificat peb bruxelles, peb bruxelles, certificateur peb agréé bruxelles, audit énergétique bruxelles, peb appartement bruxelles, peb maison bruxelles, certificat energetique bruxelles, expert peb bruxelles, peb ixelles, peb uccle, peb schaerbeek, peb anderlecht, peb woluwe, peb etterbeek, peb saint-gilles, peb forest, prix certificat peb bruxelles"
        canonical="https://kcertipeb.be"
      />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <BrusselsCommunes />
    </>
  );
}

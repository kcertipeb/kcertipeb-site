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
      
      <Hero />
      <section className="max-w-5xl mx-auto px-4 py-8 text-gray-700">
  <h2 className="text-2xl font-semibold mb-3">Certificat PEB Bruxelles</h2>
  <p>
  Le certificat PEB Bruxelles est obligatoire pour la vente et la location de biens immobiliers.
  Notre service de certificat PEB couvre les appartements et maisons dans toutes les communes de Bruxelles.
</p>
</section>
      <Services />
      <Benefits />
      <Process />
      <Pricing />
      <BrusselsCommunes />
      <Contact />
    </>
  );
}

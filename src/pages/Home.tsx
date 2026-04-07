import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import BrusselsCommunes from '../components/BrusselsCommunes';
import SEO from '../components/SEO';
import GoogleReviews from '../components/GoogleReviews';
import { useLanguage } from '../lib/language';

export default function Home() {
  const { isDutch } = useLanguage();

  return (
    <>
      <SEO
        title={isDutch ? 'EPB-certificaat in Brussel' : 'Certificat PEB à Bruxelles'}
        description={
          isDutch
            ? 'Snel EPB-certificaat in Brussel vanaf 120 € inclusief btw. Appartement of woning, voor verkoop of verhuur. Snelle interventie en officieel conform verslag.'
            : 'Certificat PEB rapide à Bruxelles dès 120 € TVAC. Appartement ou maison, vente ou location. Intervention rapide et rapport officiel conforme.'
        }
        keywords={
          isDutch
            ? 'EPB certificaat Brussel, EPB Brussel, EPB appartement, EPB woning, energie-audit Brussel, prijs EPB certificaat'
            : 'certificat PEB bruxelles, PEB bruxelles, certificat PEB appartement, certificat PEB maison, audit énergétique bruxelles, prix certificat PEB'
        }
        canonical="https://kcertipeb.be"
      />

      <Hero />
      <Services />
      <Benefits />
      <Process />
      <GoogleReviews />
      <BrusselsCommunes />
    </>
  );
}

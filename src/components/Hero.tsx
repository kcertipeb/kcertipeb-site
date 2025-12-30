import { Shield, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-24 pb-12 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Votre Certificat PEB à Bruxelles en{' '}
              <span className="text-emerald-600">48 Heures</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert certifié en performance énergétique des bâtiments. Obtenez votre certificat PEB obligatoire rapidement et en toute conformité avec la réglementation bruxelloise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Demander un Devis Gratuit
              </button>
              <a
                href="tel:+32486987484"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg border-2 border-emerald-600 text-center"
              >
                Appeler Maintenant
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
              <div className="text-center">
                <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Certifié & Agréé</p>
              </div>
              <div className="text-center">
                <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Sous 48h</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maison avec certificat énergétique"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Building2, Clock, CheckCircle2, Euro, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ApartmentPEB() {
  return (
    <>
      <SEO
        title="Certificat PEB Appartement Bruxelles - Dès 120€ - Intervention 48h"
        description="Certificat PEB pour appartement à Bruxelles par expert agréé. Tarif à partir de 120€, intervention rapide sous 48h dans toutes les communes de Bruxelles. Service professionnel inclus. Devis gratuit."
        keywords="certificat peb appartement bruxelles, peb appartement prix, certificat énergétique appartement, peb location appartement, peb vente appartement bruxelles, certificat peb obligatoire appartement, expert peb appartement, certificateur appartement bruxelles, peb studio bruxelles, peb appartement ixelles, peb appartement uccle, peb appartement schaerbeek, prix peb appartement bruxelles"
        canonical="https://kcertipeb.be/certificat-peb-appartement-bruxelles"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Certificat PEB Appartement
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Certificat PEB pour Votre Appartement à Bruxelles
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert agréé pour tous les appartements à Bruxelles. Intervention rapide, tarif transparent et service professionnel garanti.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+32486987484"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Immeuble d'appartements moderne à Bruxelles"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-emerald-600">120€</p>
                <p className="text-gray-600">À partir de</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir K Certipeb pour Votre Appartement ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes spécialisés dans la certification PEB des appartements à Bruxelles, avec une expertise reconnue et des milliers de clients satisfaits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intervention Rapide</h3>
              <p className="text-gray-600">
                Disponibilité sous 48h pour tous les appartements à Bruxelles. Nous nous adaptons à votre emploi du temps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Agréé</h3>
              <p className="text-gray-600">
                Certificateur PEB agréé par la Région de Bruxelles-Capitale. Expertise et conformité garanties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Euro className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prix Transparent</h3>
              <p className="text-gray-600">
                Tarif à partir de 120€, prix adapté selon le métrage. Pas de frais cachés, tout est inclus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Le Certificat PEB pour Appartement : Obligatoire et Essentiel
              </h2>
              <p className="text-gray-600 mb-6">
                À Bruxelles, le certificat PEB est obligatoire pour toute vente ou location d'appartement. Ce document officiel évalue la performance énergétique de votre bien et doit être présenté aux futurs acheteurs ou locataires.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Obligatoire pour la vente et la location</h4>
                    <p className="text-gray-600">Sans certificat PEB valide, vous ne pouvez pas vendre ou louer votre appartement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Valable 10 ans</h4>
                    <p className="text-gray-600">Un investissement durable qui valorise votre appartement sur le long terme</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Valorise votre bien</h4>
                    <p className="text-gray-600">Un bon certificat PEB peut augmenter la valeur et l'attractivité de votre appartement</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Intérieur d'appartement moderne et lumineux"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus pour Votre Appartement
            </h2>
            <p className="text-xl text-gray-600">Simple, rapide et professionnel</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Demande de Devis</h3>
              <p className="text-gray-600">Contactez-nous par téléphone ou formulaire. Réponse sous 2h.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prise de Rendez-vous</h3>
              <p className="text-gray-600">Visite planifiée sous 48h à votre convenance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visite de l'Appartement</h3>
              <p className="text-gray-600">Inspection complète en 30-45 minutes environ.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certificat Officiel</h3>
              <p className="text-gray-600">Livraison sous 48h par email et sur la plateforme officielle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos tarifs pour appartements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Studio / petit appartement</h3>
              <p className="text-gray-600 mb-4">Moins de 50 m²</p>
              <p className="text-4xl font-bold text-emerald-600 mb-6">120€</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>

            <div className="bg-emerald-600 text-white p-8 rounded-lg shadow-xl border-2 border-emerald-700 transform scale-105">
              <div className="inline-block bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Populaire
              </div>
              <h3 className="text-xl font-bold mb-2">Appartement moyen</h3>
              <p className="text-emerald-100 mb-4">50 - 75 m²</p>
              <p className="text-4xl font-bold mb-6">165€</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grand appartement</h3>
              <p className="text-gray-600 mb-4">76 - 100 m²</p>
              <p className="text-4xl font-bold text-emerald-600 mb-6">175€</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Très grand appartement</h3>
              <p className="text-gray-600 mb-4">Plus de 100 m²</p>
              <p className="text-4xl font-bold text-emerald-600 mb-6">200€</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Visite complète
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Certificat officiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Délai de 3-5 jours
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold text-sm text-center mt-4"
              >
                Commander
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Obtenir Votre Certificat PEB ?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Contactez-nous dès maintenant pour un devis gratuit et une intervention rapide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+32486987484"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-all border-2 border-white"
            >
              +32 486 98 74 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

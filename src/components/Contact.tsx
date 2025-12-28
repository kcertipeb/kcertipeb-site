import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'appartement',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!supabase) {
        setError('Service temporairement indisponible. Appelez-nous au +32 486 98 74 84');
        setIsSubmitting(false);
        return;
      }

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            property_type: formData.propertyType,
            address: formData.address,
            message: formData.message
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        setError('Erreur lors de l\'envoi. Veuillez réessayer.');
        setIsSubmitting(false);
        return;
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_type: formData.propertyType,
          address: formData.address,
          message: formData.message
        })
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: 'appartement',
        address: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error:', err);
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Demandez Votre Devis Gratuit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez le formulaire ou contactez-nous directement. Réponse garantie sous 2 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom Complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                      placeholder="votre@email.be"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                      placeholder="+32 4XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Type de Bien *</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                    >
                      <option value="appartement">Appartement</option>
                      <option value="maison">Maison</option>
                      <option value="audit">Audit Énergétique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Adresse du Bien *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition"
                    placeholder="Rue, numéro, code postal, commune"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message ou Informations Complémentaires</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition resize-none"
                    placeholder="Précisez vos besoins : surface d'habitation, nombre de façades, année de construction, délais souhaités, etc."
                  ></textarea>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    Vos données personnelles sont traitées conformément au RGPD. Elles sont utilisées uniquement pour traiter votre demande et ne seront jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700 font-semibold">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4 text-emerald-700 font-semibold">
                    Merci ! Votre demande a été envoyée. Nous vous contactons sous 2 heures.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma Demande'}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                    <a href="tel:+32486987484" className="text-emerald-600 hover:text-emerald-700 text-lg">
                      +32 486 98 74 84
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">
                      info@kcertipeb.be
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Zone d'Intervention</p>
                    <p className="text-gray-700">
                      Toute la Région de<br />Bruxelles-Capitale
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horaires</p>
                    <p className="text-gray-700">
                      Lun - Dim : 8h00 - 20h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Intervention Rapide</h3>
              <p className="text-emerald-50 mb-6">
                Besoin urgent d'un certificat PEB ? Contactez-nous par téléphone pour une intervention express sous 24h.
              </p>
              <a
                href="tel:+32486987484"
                className="block w-full bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition font-semibold text-center"
              >
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

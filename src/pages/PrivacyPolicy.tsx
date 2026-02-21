import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité RGPD"
        description="Politique de confidentialité et protection des données personnelles de KcertiPEB conforme au RGPD. Découvrez comment nous collectons, utilisons et protégeons vos données."
        canonical="https://kcertipeb.be/politique-confidentialite"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique de Confidentialité (RGPD)
          </h1>
          <p className="text-lg text-gray-600">
            Dernière mise à jour : 21 février 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La société <strong>Kcertipeb</strong> attache une grande importance à la protection de vos données personnelles et au respect de votre vie privée. La présente politique de confidentialité a pour objectif de vous informer de manière claire et transparente sur la manière dont vos données personnelles sont collectées, utilisées et protégées lorsque vous utilisez le site <strong><a href="https://kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">https://kcertipeb.be</a></strong> ou lorsque vous remplissez un formulaire (notamment via Google Ads).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cette politique est établie conformément au <strong>Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</strong> et à la législation belge en vigueur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le responsable du traitement des données est :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Nom commercial</strong> : Kcertipeb</li>
              <li><strong>Activité</strong> : Certification PEB (Performance Énergétique des Bâtiments)</li>
              <li><strong>Adresse e-mail</strong> : <a href="mailto:info@kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">info@kcertipeb.be</a></li>
              <li><strong>Site web</strong> : <a href="https://kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">https://kcertipeb.be</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse e-mail mentionnée ci-dessus.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Données personnelles collectées</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous collectons uniquement les données strictement nécessaires à la fourniture de nos services, notamment lorsque vous remplissez un formulaire de contact ou un formulaire de lead Google Ads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données susceptibles d'être collectées sont :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Ville et code postal</li>
              <li>Informations relatives au bien à certifier (maison ou appartement)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Aucune donnée sensible (au sens de l'article 9 du RGPD) n'est collectée.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Finalités du traitement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données personnelles collectées sont utilisées exclusivement pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Répondre à vos demandes de devis pour un certificat PEB</li>
              <li>Vous contacter par téléphone ou par e-mail dans le cadre de votre demande</li>
              <li>Planifier une visite ou une prestation de certification PEB</li>
              <li>Assurer le suivi administratif et commercial de votre dossier</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vos données ne sont <strong>en aucun cas utilisées à des fins de revente ou de prospection non sollicitée</strong>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Base légale du traitement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Votre consentement</strong>, lorsque vous remplissez volontairement un formulaire</li>
              <li><strong>L'exécution de mesures précontractuelles</strong>, lorsque vous demandez un devis</li>
              <li><strong>L'exécution d'un contrat</strong>, lorsqu'une mission de certification est conclue</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données collectées sont destinées exclusivement à <strong>Kcertipeb</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Elles peuvent être traitées techniquement par des prestataires de services agissant en tant que sous-traitants, notamment :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Google Ads (formulaires de lead)</li>
              <li>Supabase (hébergement de base de données)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ces prestataires respectent les exigences du RGPD et n'utilisent pas vos données à d'autres fins.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Durée de conservation des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Données liées à une demande de devis : <strong>maximum 24 mois</strong></li>
              <li>Données liées à une prestation réalisée : durée légale obligatoire applicable (comptabilité, obligations légales)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Au-delà de ces délais, les données sont supprimées ou anonymisées.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Kcertipeb met en œuvre des mesures techniques et organisationnelles appropriées afin de garantir la sécurité, l'intégrité et la confidentialité de vos données personnelles et de prévenir tout accès non autorisé, perte ou divulgation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vous pouvez exercer ces droits à tout moment en envoyant une demande à : <strong><a href="mailto:info@kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">info@kcertipeb.be</a></strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Une réponse vous sera fournie dans un délai maximal d'un mois.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le site kcertipeb.be peut utiliser des cookies strictement nécessaires à son bon fonctionnement ou à la mesure d'audience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorsqu'un outil de mesure d'audience ou de marketing est utilisé, un bandeau de consentement conforme au RGPD est affiché.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Transfert de données hors Union européenne</h2>
            <p className="text-gray-700 leading-relaxed">
              Certaines données peuvent être traitées par des services fournis par Google ou Supabase. Dans ce cas, les transferts éventuels hors de l'Union européenne sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Réclamation auprès de l'autorité de contrôle</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l'Autorité de protection des données belge :
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Autorité de protection des données</p>
              <p className="text-gray-700">Rue de la Presse 35</p>
              <p className="text-gray-700">1000 Bruxelles</p>
              <p className="text-gray-700">
                <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
                  https://www.autoriteprotectiondonnees.be
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Modification de la politique de confidentialité</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kcertipeb se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de rester conforme aux évolutions légales et réglementaires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous vous invitons à consulter cette page régulièrement.
            </p>
          </section>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Besoin d'informations supplémentaires ?</h3>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, contactez-nous :
            </p>
            <p className="text-gray-900 font-semibold">
              <a href="mailto:info@kcertipeb.be" className="text-emerald-600 hover:text-emerald-700">
                info@kcertipeb.be
              </a> | <a href="tel:+32486987484" className="text-emerald-600 hover:text-emerald-700">+32 486 98 74 84</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

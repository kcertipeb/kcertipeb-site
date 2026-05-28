import { useEffect } from 'react';
import { useLanguage } from '../lib/language';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  includeFaqSchema?: boolean;
  robots?: string;
  extraSchema?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://kcertipeb.be/logo.png',
  ogType = 'website',
  includeFaqSchema = false,
  robots = 'index, follow',
  extraSchema,
}: SEOProps) {
  const { isDutch } = useLanguage();

  useEffect(() => {
    const fullTitle = `${title} | K Certipeb`;
    const siteUrl = 'https://kcertipeb.be';
    const fullCanonical = canonical || window.location.href;

    document.title = fullTitle;

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      const selector = `meta[${attribute}="${name}"]`;
      let meta = document.querySelector(selector);

      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMetaTag('description', description);
    setMetaTag('robots', robots);
    setMetaTag('language', isDutch ? 'nl-BE' : 'fr-BE');
    setMetaTag('geo.region', 'BE-BRU');
    setMetaTag('geo.placename', isDutch ? 'Brussel' : 'Bruxelles');

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', fullCanonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', isDutch ? 'nl_BE' : 'fr_BE', true);
    setMetaTag('og:site_name', 'K Certipeb', true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', fullCanonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', fullCanonical);
      document.head.appendChild(linkCanonical);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'K Certipeb',
      description: isDutch
        ? 'Erkend EPC-certificateur in Brussel — appartementen en woningen. Interventie binnen 48u, attest in 48u.'
        : 'Certificateur PEB agréé à Bruxelles — appartements et maisons. Intervention sous 48h, certificat en 48h.',
      url: siteUrl,
      telephone: '+32486987484',
      openingHours: 'Mo-Su 08:00-21:00',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: isDutch ? 'Brussel' : 'Bruxelles',
        addressRegion: isDutch ? 'Brussels Hoofdstedelijk Gewest' : 'Bruxelles-Capitale',
        addressCountry: 'BE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '50.8503',
        longitude: '4.3517',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '6',
        bestRating: '5',
        worstRating: '1',
      },
      areaServed: [
        { '@type': 'City', name: 'Bruxelles-Ville' },
        { '@type': 'City', name: 'Anderlecht' },
        { '@type': 'City', name: 'Auderghem' },
        { '@type': 'City', name: 'Berchem-Sainte-Agathe' },
        { '@type': 'City', name: 'Etterbeek' },
        { '@type': 'City', name: 'Evere' },
        { '@type': 'City', name: 'Forest' },
        { '@type': 'City', name: 'Ganshoren' },
        { '@type': 'City', name: 'Ixelles' },
        { '@type': 'City', name: 'Jette' },
        { '@type': 'City', name: 'Koekelberg' },
        { '@type': 'City', name: 'Molenbeek-Saint-Jean' },
        { '@type': 'City', name: 'Saint-Gilles' },
        { '@type': 'City', name: 'Saint-Josse-ten-Noode' },
        { '@type': 'City', name: 'Schaerbeek' },
        { '@type': 'City', name: 'Uccle' },
        { '@type': 'City', name: 'Watermael-Boitsfort' },
        { '@type': 'City', name: 'Woluwe-Saint-Lambert' },
        { '@type': 'City', name: 'Woluwe-Saint-Pierre' },
      ],
      serviceType: isDutch ? ['EPC-certificering', 'Energie-audit'] : ['Certification PEB', 'Audit énergétique'],
      image: ogImage,
    };

    let localBusinessScriptTag = document.querySelector<HTMLScriptElement>('script[data-type="local-business-schema"]');
    if (localBusinessScriptTag) {
      localBusinessScriptTag.textContent = JSON.stringify(structuredData);
    } else {
      localBusinessScriptTag = document.createElement('script');
      localBusinessScriptTag.type = 'application/ld+json';
      localBusinessScriptTag.setAttribute('data-type', 'local-business-schema');
      localBusinessScriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(localBusinessScriptTag);
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: isDutch
        ? [
            {
              '@type': 'Question',
              name: 'Hoeveel kost een EPC-certificaat in Brussel?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Een EPC-certificaat in Brussel start vanaf 120 € inclusief btw voor een appartement van minder dan 50 m². De tarieven variëren volgens de oppervlakte: 165 € voor 50-75 m², 185 € voor 76-100 m² en vanaf 210 € voor een woning.',
              },
            },
            {
              '@type': 'Question',
              name: 'Hoe lang duurt het om een EPC-certificaat te verkrijgen?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Wij komen langs binnen 48 uur en bezorgen het officiële EPC-certificaat binnen 48 uur na het bezoek.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is een EPC-certificaat verplicht in Brussel?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, het EPC-certificaat is sinds 2011 verplicht voor elke verkoop of verhuur van residentieel vastgoed in Brussel.',
              },
            },
            {
              '@type': 'Question',
              name: 'Hoe lang is een EPC-certificaat geldig?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Een EPC-certificaat is 10 jaar geldig voor residentiële gebouwen, behalve wanneer er tussentijds belangrijke energetische renovatiewerken worden uitgevoerd.',
              },
            },
          ]
        : [
            {
              '@type': 'Question',
              name: 'Combien coûte un certificat PEB à Bruxelles ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le certificat PEB à Bruxelles commence dès 120 € TVAC pour un appartement de moins de 50 m². Les tarifs varient selon la superficie : 165 € pour 50-75 m², 185 € pour 76-100 m², et à partir de 210 € pour une maison.',
              },
            },
            {
              '@type': 'Question',
              name: 'Combien de temps faut-il pour obtenir un certificat PEB ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nous intervenons sous 48 h et remettons le certificat PEB officiel sous 48 h après la visite.',
              },
            },
            {
              '@type': 'Question',
              name: 'Le certificat PEB est-il obligatoire à Bruxelles ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Oui, le certificat PEB est obligatoire depuis 2011 pour toute vente ou location d'un bien immobilier à Bruxelles.",
              },
            },
            {
              '@type': 'Question',
              name: 'Combien de temps est valable un certificat PEB ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Le certificat PEB est valable 10 ans pour les bâtiments résidentiels, sauf si des travaux de rénovation énergétique majeurs sont réalisés.",
              },
            },
          ],
    };

    // Extra schema (BlogPosting, Service, etc.)
    let extraScriptTag = document.querySelector<HTMLScriptElement>('script[data-type="extra-schema"]');
    if (extraSchema) {
      if (extraScriptTag) {
        extraScriptTag.textContent = JSON.stringify(extraSchema);
      } else {
        extraScriptTag = document.createElement('script');
        extraScriptTag.type = 'application/ld+json';
        extraScriptTag.setAttribute('data-type', 'extra-schema');
        extraScriptTag.textContent = JSON.stringify(extraSchema);
        document.head.appendChild(extraScriptTag);
      }
    } else if (extraScriptTag) {
      extraScriptTag.remove();
    }

    let faqScriptTag = document.querySelector<HTMLScriptElement>('script[data-type="faq-schema"]');
    if (includeFaqSchema) {
      if (faqScriptTag) {
        faqScriptTag.textContent = JSON.stringify(faqSchema);
      } else {
        faqScriptTag = document.createElement('script');
        faqScriptTag.type = 'application/ld+json';
        faqScriptTag.setAttribute('data-type', 'faq-schema');
        faqScriptTag.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(faqScriptTag);
      }
    } else if (faqScriptTag) {
      faqScriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogImage, ogType, includeFaqSchema, robots, extraSchema, isDutch]);

  return null;
}

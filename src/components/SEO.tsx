import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://kcertipeb.be/logo.png',
  ogType = 'website'
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | K Certipeb - Expert PEB Bruxelles`;
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
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'fr-BE');
    setMetaTag('geo.region', 'BE-BRU');
    setMetaTag('geo.placename', 'Bruxelles');

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', fullCanonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'fr_BE', true);
    setMetaTag('og:site_name', 'K Certipeb', true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', fullCanonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', fullCanonical);
      document.head.appendChild(linkCanonical);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "K Certipeb",
      "description": "Expert en certification PEB et audit énergétique à Bruxelles",
      "url": siteUrl,
      "telephone": "+32-XXX-XX-XX-XX",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressRegion": "Bruxelles-Capitale",
        "addressCountry": "BE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "50.8503",
        "longitude": "4.3517"
      },
      "areaServed": [
        "Bruxelles-Ville", "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe",
        "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
        "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode",
        "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"
      ],
      "serviceType": ["Certification PEB", "Audit énergétique"],
      "image": ogImage
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }
  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null;
}

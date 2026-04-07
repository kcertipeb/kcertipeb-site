import { Facebook } from 'lucide-react';

export default function FacebookButton() {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61574072395222';

  const handleFacebookClick = () => {
    if (window.gtag) {
      window.gtag('event', 'social_click', {
        social_network: 'facebook'
      });
    }
  };

  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleFacebookClick}
      className="fixed bottom-42 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Suivez-nous sur Facebook"
      style={{ bottom: '10.5rem' }}
    >
      <Facebook className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Suivez-nous sur Facebook
      </span>
    </a>
  );
}

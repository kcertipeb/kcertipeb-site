import { Facebook } from 'lucide-react';
import { useLanguage } from '../lib/language';

export default function FacebookButton() {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61574072395222';
  const { isDutch } = useLanguage();
  const label = isDutch ? 'Volg ons op Facebook' : 'Suivez-nous sur Facebook';

  const handleFacebookClick = () => {
    if (window.gtag) {
      window.gtag('event', 'social_click', {
        social_network: 'facebook',
      });
    }
  };

  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleFacebookClick}
      className="group fixed right-6 z-50 flex items-center justify-center rounded-full bg-blue-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-600"
      aria-label={label}
      style={{ bottom: '10.5rem' }}
    >
      <Facebook className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

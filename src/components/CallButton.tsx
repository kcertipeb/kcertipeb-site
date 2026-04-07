import { Phone } from 'lucide-react';
import { trackPhoneCallConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

export default function CallButton() {
  const phoneNumber = '+32486987484';
  const { isDutch } = useLanguage();
  const label = isDutch ? 'Bel ons' : 'Appelez-nous';

  const handleCallClick = () => {
    trackPhoneCallConversion();
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleCallClick}
      className="group fixed bottom-24 right-6 z-50 flex items-center justify-center rounded-full bg-blue-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700"
      aria-label={label}
    >
      <Phone className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

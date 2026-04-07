import { MessageCircle } from 'lucide-react';
import { trackWhatsAppConversion } from '../lib/tracking';
import { useLanguage } from '../lib/language';

export default function WhatsAppButton() {
  const phoneNumber = '32486987484';
  const { isDutch } = useLanguage();
  const message = encodeURIComponent(
    isDutch
      ? 'Hallo, ik zou graag meer informatie krijgen over EPB-certificaten.'
      : 'Bonjour, je souhaiterais obtenir des informations sur les certificats PEB.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const label = isDutch ? 'Schrijf ons op WhatsApp' : 'Écrivez-nous sur WhatsApp';

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      aria-label={label}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

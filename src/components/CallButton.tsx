import { Phone } from 'lucide-react';

export default function CallButton() {
  const phoneNumber = '+32486987484';

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Appelez-nous"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Appelez-nous
      </span>
    </a>
  );
}

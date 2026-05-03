import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/language';

const STORAGE_KEY = 'cookie_consent';

function updateGtag(granted: boolean) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
    });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { isDutch } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      updateGtag(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    updateGtag(true);
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    updateGtag(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-gray-200 bg-white shadow-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-gray-700">
          {isDutch
            ? 'Dit website gebruikt cookies om uw ervaring te verbeteren en het verkeer te meten. '
            : 'Ce site utilise des cookies pour améliorer votre expérience et mesurer l\'audience. '}
          <Link
            to="/politique-confidentialite"
            className="text-emerald-700 underline hover:text-emerald-800"
          >
            {isDutch ? 'Privacybeleid' : 'Politique de confidentialité'}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            {isDutch ? 'Weigeren' : 'Refuser'}
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            {isDutch ? 'Accepteren' : 'Accepter'}
          </button>
        </div>
      </div>
    </div>
  );
}

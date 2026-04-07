import { useLanguage } from '../lib/language';

interface LanguageSelectorProps {
  dark?: boolean;
}

export default function LanguageSelector({ dark = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const baseClassName = dark
    ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
    : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700';

  const activeClassName = dark
    ? 'border-white bg-white text-slate-950'
    : 'border-emerald-600 bg-emerald-600 text-white';

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm">
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          language === 'fr' ? activeClassName : baseClassName
        }`}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('nl')}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          language === 'nl' ? activeClassName : baseClassName
        }`}
        aria-pressed={language === 'nl'}
      >
        NL
      </button>
    </div>
  );
}

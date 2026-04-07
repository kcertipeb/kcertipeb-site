/// <reference types="vite/client" />

type GtagConfig = Record<string, unknown>;

interface Window {
  dataLayer: unknown[];
  gtag: (
    command: 'config' | 'event' | 'js' | 'consent',
    targetId: string | Date,
    config?: GtagConfig
  ) => void;
  fbq?: (...args: unknown[]) => void;
}

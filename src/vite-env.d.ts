/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
}

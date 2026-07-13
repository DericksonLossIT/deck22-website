import type { Locale } from './routing';

export const LOCALE_META: Record<Locale, { flagSrc: string; label: string }> = {
  pt: { flagSrc: '/flags/br.svg', label: 'Português' },
  es: { flagSrc: '/flags/ar.svg', label: 'Español' },
  en: { flagSrc: '/flags/us.svg', label: 'English' },
};

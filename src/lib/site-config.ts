/**
 * Central place for values that are still placeholders and must be
 * swapped before going live. See README.md for the checklist.
 */
export const siteConfig = {
  whatsappNumber: '5548992050818',
  instagramHandle: 'deck22canas',
  instagramUrl: 'https://instagram.com/deck22canas',
  mapsQuery: 'Rua Madre Maria Villac, 1271 - Canasvieiras, Florianópolis - SC, 88054-000',
  siteUrl: 'https://deck22conveniencia.com.br',
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mapsLink() {
  return `https://maps.google.com/?q=${encodeURIComponent(siteConfig.mapsQuery)}`;
}

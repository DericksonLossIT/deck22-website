# Context

Domain glossary for deck22-website. Add terms here as they're named during architecture work.

## WhatsApp CTA

The `WhatsAppLink` module (`src/components/WhatsAppLink.tsx`). Owns the WhatsApp deep-link URL
and its anchor markup (`target`, `rel`) behind one interface. Every call to action that opens
WhatsApp (`Hero`, `Header`, `Footer`, `Delivery`, `MenuMock`, `WhatsAppFloat`) renders through it
instead of hand-wrapping the URL builder.

## Locale identity

The set of `src/i18n/*` modules that together own everything about which locales exist:

- `routing.ts` — the locale list, default locale, and URL prefix strategy (next-intl config).
- `navigation.ts` — locale-aware navigation primitives, plus `localePath(locale)`, the single
  place that derives a locale's canonical path from the prefix strategy.
- `locale-meta.ts` — each locale's display metadata (flag image, label), keyed by the same
  `Locale` type `routing.ts` defines.

Anything that needs "the URL for locale X" or "the flag/label for locale X" goes through these
modules rather than re-deriving the logic locally.

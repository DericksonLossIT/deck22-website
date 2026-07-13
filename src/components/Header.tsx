'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { BrandMark } from './BrandMark';
import { whatsappLink } from '@/lib/site-config';

const NAV_ITEMS = [
  { href: '#sobre', key: 'sobre' },
  { href: '#cardapio', key: 'cardapio' },
  { href: '#local', key: 'local' },
  { href: '#delivery', key: 'delivery' },
] as const;

const LOCALE_FLAGS: Record<Locale, { flagSrc: string; label: string }> = {
  pt: { flagSrc: '/flags/br.svg', label: 'Português' },
  es: { flagSrc: '/flags/ar.svg', label: 'Español' },
  en: { flagSrc: '/flags/us.svg', label: 'English' },
};

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] py-4 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-black/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between gap-5 px-6">
          <Link href="#hero" className="flex items-center gap-2">
            <BrandMark size="sm" />
          </Link>

          <ul
            id="navLinks"
            className={`flex items-center gap-[26px] text-[0.82rem] font-semibold tracking-wide max-[860px]:fixed max-[860px]:top-0 max-[860px]:z-[99] max-[860px]:h-screen max-[860px]:w-[78%] max-[860px]:flex-col max-[860px]:items-start max-[860px]:justify-center max-[860px]:gap-[26px] max-[860px]:border-l max-[860px]:border-white/10 max-[860px]:bg-black2 max-[860px]:p-10 max-[860px]:transition-[right] max-[860px]:duration-300 ${
              menuOpen ? 'max-[860px]:right-0' : 'max-[860px]:right-[-100%]'
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="uppercase opacity-80 transition-opacity hover:text-lime hover:opacity-100"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-full bg-lime px-[18px] py-[9px] text-[0.8rem] font-bold text-black"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1">
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  aria-label={LOCALE_FLAGS[loc].label}
                  aria-pressed={locale === loc}
                  title={LOCALE_FLAGS[loc].label}
                  className={`flex h-8 w-8 items-center justify-center rounded-full p-[3px] transition-all ${
                    locale === loc
                      ? 'bg-lime scale-105'
                      : 'opacity-50 hover:opacity-90'
                  }`}
                >
                  <span className="relative block h-full w-full overflow-hidden rounded-full ring-1 ring-white/20">
                    <Image
                      src={LOCALE_FLAGS[loc].flagSrc}
                      alt={LOCALE_FLAGS[loc].label}
                      fill
                      sizes="26px"
                      className="object-cover"
                    />
                  </span>
                </button>
              ))}
            </div>

            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[200] hidden text-[1.4rem] text-white max-[860px]:block"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[98] hidden bg-black/50 transition-opacity duration-300 max-[860px]:block ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
    </>
  );
}

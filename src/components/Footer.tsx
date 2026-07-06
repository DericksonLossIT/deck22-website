import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/site-config';

export function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  return (
    <footer className="border-t border-white/10 py-9 pb-9 pt-12">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-cinzel text-base font-extrabold text-lime">
            DK22
          </span>
          <ul className="flex gap-[22px] text-[0.82rem] opacity-70">
            <li>
              <a href="#sobre">{tNav('sobre')}</a>
            </li>
            <li>
              <a href="#cardapio">{tNav('cardapio')}</a>
            </li>
            <li>
              <a href="#local">{tNav('local')}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-6 text-[0.78rem] opacity-45">{tFooter('note')}</p>
      </div>
    </footer>
  );
}

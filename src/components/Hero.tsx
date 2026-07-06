import { useTranslations } from 'next-intl';
import { Crown } from './Crown';
import { BrandMark } from './BrandMark';
import { OpenStatusBadge } from './OpenStatusBadge';
import { whatsappLink } from '@/lib/site-config';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-[90px] pt-[150px] text-center"
      style={{
        background:
          'radial-gradient(ellipse 55% 45% at 50% 100%, rgba(198,255,0,0.09), transparent)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
        }}
      />

      <Crown className="relative z-[2] mb-2 h-11 w-11" />
      <BrandMark size="lg" />

      <p className="relative z-[2] mt-[18px] font-bebas text-[0.95rem] tracking-[0.3em] text-lime">
        ★ CONVENIÊNCIA ★
      </p>
      <p className="relative z-[2] mt-[10px] flex items-center justify-center gap-[6px] text-[0.85rem] opacity-70">
        📷 @deck22canas
      </p>

      <p className="relative z-[2] mt-[30px] max-w-[600px] text-[clamp(1rem,2.2vw,1.3rem)] font-medium">
        {t('subtitle')}
      </p>

      <OpenStatusBadge />

      <div className="relative z-[2] mt-[34px] flex flex-wrap justify-center gap-[14px]">
        <a
          href="#cardapio"
          className="rounded-full bg-lime px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5"
        >
          {t('cta.cardapio')}
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[1.5px] border-white px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          {t('cta.whatsapp')}
        </a>
      </div>
    </section>
  );
}

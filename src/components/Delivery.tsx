import { useTranslations } from 'next-intl';
import { WhatsAppLink } from './WhatsAppLink';

export function Delivery() {
  const t = useTranslations('delivery');

  return (
    <section
      id="delivery"
      className="border-y border-white/10 py-[110px] text-center"
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(198,255,0,0.10), transparent 70%)',
      }}
    >
      <div className="mx-auto max-w-container px-6">
        <span className="mb-[14px] block font-bebas text-[0.85rem] tracking-[0.22em] text-lime">
          {t('eyebrow')}
        </span>
        <h2 className="mb-5 font-cinzel text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
          {t('title')}
        </h2>
        <p className="mx-auto mb-8 max-w-[520px] text-[1.02rem] opacity-80">
          {t('text')}
        </p>
        <WhatsAppLink className="inline-block rounded-full bg-lime px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5">
          {t('cta')}
        </WhatsAppLink>
      </div>
    </section>
  );
}

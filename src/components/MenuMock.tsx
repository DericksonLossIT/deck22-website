import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/site-config';

export function MenuMock() {
  const t = useTranslations('cardapio');

  return (
    <section id="cardapio" className="py-[110px]">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto mb-[50px] max-w-[640px] text-center">
          <span className="mb-[14px] block font-bebas text-[0.85rem] tracking-[0.22em] text-lime">
            {t('eyebrow')}
          </span>
          <h2 className="mb-5 font-cinzel text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
            {t('title')}
          </h2>
          <p className="mx-auto text-[1.02rem] opacity-80">{t('text')}</p>
        </div>

        <div
          className="mx-auto max-w-[420px] rounded-[22px] border border-white/10 bg-black2 px-7 py-9 text-center"
          style={{ boxShadow: '0 0 60px rgba(198,255,0,0.06)' }}
        >
          <div className="mx-auto mb-6 h-[5px] w-[60px] rounded-full bg-white/10" />
          <div className="mb-[14px] text-[2.2rem]">🛒</div>
          <h3 className="mb-[10px] font-cinzel text-[1.15rem] font-bold">
            {t('mock.title')}
          </h3>
          <p className="mb-[26px] text-[0.92rem] opacity-70">{t('mock.text')}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-lime px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5"
          >
            {t('mock.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

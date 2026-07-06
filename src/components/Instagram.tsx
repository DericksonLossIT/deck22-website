import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/site-config';

export function Instagram() {
  const t = useTranslations('social');

  return (
    <section className="py-[110px] text-center">
      <div className="mx-auto max-w-container px-6">
        <span className="mb-[14px] block font-bebas text-[0.85rem] tracking-[0.22em] text-lime">
          {t('eyebrow')}
        </span>
        <h2 className="mb-5 font-cinzel text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
          {t('title')}
        </h2>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="my-[18px] inline-block font-cinzel text-2xl font-bold text-lime"
        >
          @{siteConfig.instagramHandle}
        </a>
        <br />
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[30px] inline-block rounded-full border-[1.5px] border-white px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}

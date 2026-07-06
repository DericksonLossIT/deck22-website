import { useTranslations } from 'next-intl';
import { mapsLink } from '@/lib/site-config';

export function HoursLocation() {
  const t = useTranslations('local');

  return (
    <section id="local" className="bg-black2 py-[110px]">
      <div className="mx-auto grid max-w-container grid-cols-2 items-start gap-14 px-6 max-[900px]:grid-cols-1">
        <div>
          <span className="mb-[14px] block font-bebas text-[0.85rem] tracking-[0.22em] text-lime">
            {t('eyebrow')}
          </span>
          <h2 className="mb-5 font-cinzel text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
            {t('title')}
          </h2>
          <p className="max-w-[560px] text-[1.02rem] opacity-80">{t('text')}</p>

          <p className="mt-6 font-bebas text-[1.1rem] tracking-wide text-lime">
            {t('day1')} · {t('hour1')}
          </p>
          <p className="mt-[14px] max-w-[560px] text-[0.85rem] opacity-60">
            {t('note')}
          </p>
        </div>

        <div
          className="flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 p-8 text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 14px)',
          }}
        >
          <span className="text-[2.2rem]">📍</span>
          <p className="max-w-[280px] text-[0.95rem] opacity-75">
            {t('map.text')}
          </p>
          <a
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[1.5px] border-white px-7 py-[14px] text-[0.85rem] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            {t('map.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}

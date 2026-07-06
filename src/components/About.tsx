import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('sobre');

  return (
    <section id="sobre" className="py-[110px]">
      <div className="mx-auto grid max-w-container grid-cols-2 items-center gap-16 px-6 max-[900px]:grid-cols-1">
        <div>
          <span className="mb-[14px] block font-bebas text-[0.85rem] tracking-[0.22em] text-lime">
            {t('eyebrow')}
          </span>
          <h2 className="mb-5 font-cinzel text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
            {t('title')}
          </h2>
          <p className="max-w-[560px] text-[1.02rem] opacity-80">{t('text')}</p>
          <ul className="mt-[26px] flex flex-col gap-[14px]">
            {(['li1', 'li2', 'li3'] as const).map((key) => (
              <li key={key} className="flex gap-3 text-[0.98rem] opacity-90">
                <span className="text-[0.85rem] text-lime">★</span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[18px] border border-white/10 bg-black2 p-7"
          style={{
            backgroundImage:
              'linear-gradient(160deg, rgba(198,255,0,0.10), transparent 60%)',
          }}
        >
          <div
            className="pointer-events-none absolute -left-[10%] -top-[15%] h-[55%] w-[55%] blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(198,255,0,0.35), transparent 70%)',
            }}
          />
          <span className="relative z-[2] rounded-lg border border-white/10 bg-black/55 px-[14px] py-2 font-bebas text-[0.85rem] tracking-wide">
            {t('tag')}
          </span>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export function Ticker() {
  const t = useTranslations();
  const items = t.raw('ticker') as string[];
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/10 bg-black2 py-[14px]">
      <div className="inline-block animate-ticker pl-[100%] font-bebas text-[0.95rem] tracking-wide text-lime motion-reduce:animate-none motion-reduce:pl-0">
        {loopItems.map((item, i) => (
          <span key={i}>
            {i > 0 && <span>•</span>}
            <span className="mx-[26px]">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

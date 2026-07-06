'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { isOpenNow } from '@/lib/business-hours';

export function OpenStatusBadge() {
  const t = useTranslations('hero');
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setIsOpen(isOpenNow(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const label =
    isOpen === null ? t('checking') : isOpen ? t('open') : t('closed');

  return (
    <div className="relative z-[2] mt-6 inline-flex items-center gap-[10px] rounded-full border border-white/10 bg-black2/60 px-[18px] py-[9px] text-[0.8rem] font-bold tracking-wide">
      <span
        className={`h-[9px] w-[9px] rounded-full ${
          isOpen === false
            ? 'bg-[#ff5c5c] shadow-[0_0_8px_#ff5c5c]'
            : 'bg-lime shadow-[0_0_8px_#C6FF00]'
        }`}
      />
      <span>{label}</span>
    </div>
  );
}

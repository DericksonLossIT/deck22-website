import { useTranslations } from 'next-intl';
import { MenuLink } from './MenuLink';

export function MenuFloat() {
  const t = useTranslations('cardapio');

  return (
    <MenuLink
      source="float"
      ariaLabel={t('cta')}
      className="fixed bottom-[92px] right-[22px] z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-lime text-[1.6rem] shadow-[0_6px_20px_rgba(0,0,0,0.45)] max-[600px]:bottom-[80px] max-[600px]:right-4 max-[600px]:h-[52px] max-[600px]:w-[52px]"
    >
      <span aria-hidden="true">📖</span>
    </MenuLink>
  );
}

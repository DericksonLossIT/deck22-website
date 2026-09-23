'use client';

import type { ReactNode } from 'react';
import { track } from '@vercel/analytics';
import { siteConfig } from '@/lib/site-config';

export type MenuLinkSource = 'hero' | 'nav' | 'section' | 'float';

type MenuLinkProps = {
  source: MenuLinkSource;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function MenuLink({
  source,
  children,
  className,
  onClick,
  ariaLabel,
}: MenuLinkProps) {
  function handleClick() {
    track('menu_click', { source });
    onClick?.();
  }

  return (
    <a
      href={siteConfig.menuUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

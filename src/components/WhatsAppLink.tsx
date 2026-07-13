import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/site-config';

function whatsappLink() {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function WhatsAppLink({
  children,
  className,
  onClick,
  ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

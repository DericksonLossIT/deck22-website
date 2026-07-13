import { createNavigation } from 'next-intl/navigation';
import { routing, type Locale } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export function localePath(locale: Locale) {
  return getPathname({ href: '/', locale });
}

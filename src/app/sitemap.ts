import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { localePath } from '@/i18n/navigation';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteConfig.siteUrl}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
  }));
}

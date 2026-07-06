import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Ticker } from '@/components/Ticker';
import { About } from '@/components/About';
import { MenuMock } from '@/components/MenuMock';
import { HoursLocation } from '@/components/HoursLocation';
import { Delivery } from '@/components/Delivery';
import { Instagram } from '@/components/Instagram';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <MenuMock />
        <HoursLocation />
        <Delivery />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

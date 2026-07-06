const TIME_ZONE = 'America/Sao_Paulo';

/** Opening time varies day to day (~10h-12h); 11h is used as a midpoint estimate. */
const ESTIMATED_OPEN_HOUR = 11;
/** Closing time is fixed every single day, including past midnight. */
const CLOSE_HOUR = 2;

/**
 * The store's hours are anchored to Florianópolis local time regardless of
 * the visitor's device timezone, so we read the clock via Intl instead of
 * trusting `date.getHours()`.
 */
export function isOpenNow(date: Date): boolean {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
  const hourFraction = (hour % 24) + minute / 60;

  return hourFraction >= ESTIMATED_OPEN_HOUR || hourFraction < CLOSE_HOUR;
}

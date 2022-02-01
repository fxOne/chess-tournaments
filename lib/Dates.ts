import dayjs from 'dayjs';

export const ISO_DATE = 'YYYY-MM-DD';
export const ISO_DATE_TIME = 'YYYY-MM-DD HH:mm';
const ISO_DATE_TIME_DISPLAY = 'YYYY-MM-DD HH:mm UTC';
export const DE_DATE = 'DD.MM.YYYY';
export const DE_DATE_TIME = 'DD.MM.YYYY HH:mm';

export function parseDate(date: string): dayjs.Dayjs {
  return dayjs.utc(date, date.includes(':') ? ISO_DATE_TIME : ISO_DATE);
}

function getTz(locale: string): string {
  return locale === 'en' ? 'GMT' : 'Europe/Berlin';
}

function getFormat(locale: string, isDateTime: boolean): string {
  if (locale === 'en') {
    if (isDateTime) {
      return ISO_DATE_TIME_DISPLAY;
    }
    return ISO_DATE;
  }
  if (isDateTime) {
    return DE_DATE_TIME;
  }
  return DE_DATE;
}

export function formatDateTimeReadable(dateTime: string, locale: string): string {
  const isDateTime = dateTime.includes(':');
  const date = dayjs.utc(dateTime, isDateTime ? ISO_DATE_TIME : ISO_DATE);
  return date.tz(getTz(locale)).format(getFormat(locale, isDateTime));
}

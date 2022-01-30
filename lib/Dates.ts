import dayjs from 'dayjs';

export function parseDate(date: string): dayjs.Dayjs {
  return dayjs.utc(date, date.includes(':') ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY');
}

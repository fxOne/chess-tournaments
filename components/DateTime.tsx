import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

interface DateTimeProps {
  dateTime: string;
}

export default function DateTime({ dateTime }: DateTimeProps): ReactElement {
  const {
    query: { locale },
  } = useRouter();
  let result = dateTime;
  if (dateTime.includes(':')) {
    const date = dayjs.utc(dateTime, 'DD.MM.YYYY HH:mm');
    result = date.local().format('DD.MM.YYYY HH:mm');
    result = date.tz(locale === 'en' ? 'GMT' : 'Europe/Berlin').format('DD.MM.YYYY HH:mm');
    if (locale === 'en') {
      result += ' UTC';
    }
  }
  return <>{result}</>;
}

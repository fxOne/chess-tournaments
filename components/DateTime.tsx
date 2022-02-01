import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { formatDateTimeReadable } from '../lib/Dates';

interface DateTimeProps {
  dateTime: string;
}

export default function DateTime({ dateTime }: DateTimeProps): ReactElement {
  const {
    query: { locale },
  } = useRouter();
  return <>{formatDateTimeReadable(dateTime, locale as string)}</>;
}

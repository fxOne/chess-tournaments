import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  locale: string;
}

export default function LanguageSwitchLink({ children, locale }: React.PropsWithChildren<Props>) {
  const router = useRouter();
  const href = router.pathname.replace('[locale]', locale);

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  locale: string;
}

function replaceParams(pathName: string, params: Record<string, string>): string {
  let result = pathName;

  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`[${key}]`, value);
  }
  return result;
}

export default function LanguageSwitchLink({ children, locale }: React.PropsWithChildren<Props>) {
  const router = useRouter();
  const href = replaceParams(router.pathname, { ...(router.query as Record<string, string>), locale });

  return (
    <Link href={href}>
      <a hrefLang={locale}>{children}</a>
    </Link>
  );
}

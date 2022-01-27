import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  skipLocaleHandling?: boolean;
}

export default function Link({ children, skipLocaleHandling, ...rest }: LinkProps): ReactElement {
  const router = useRouter();
  const locale = (rest.locale || router.query.locale || '') as string;
  let href = rest.href || router.asPath;
  if (href.toString().indexOf('http') === 0) {
    skipLocaleHandling = true;
  }
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
  }

  return <NextLink href={href}>{children}</NextLink>;
}

import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

export interface PageFrameProps {
  children: ReactNode;
  contentDescription?: string;
  title?: string;
}

export default function PageFrame({ children, contentDescription, title }: PageFrameProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta property="og:description" content={contentDescription} />
        <meta name="description" content={contentDescription} />
        <title>{title && title + ' - '}Chess Tournaments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}
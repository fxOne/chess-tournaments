import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface PageFrameProps {
  children: ReactNode;
  contentDescription?: string;
  title?: string;
}

const PageContent = styled.div`
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export default function PageFrame({ children, contentDescription, title }: PageFrameProps): ReactElement {
  const router = useRouter();
  const targetLanguage = router.query.locale === 'en' ? 'de' : 'en';
  const href = router.pathname.replace('[locale]', targetLanguage);

  let fullTitle = 'Chess Tournaments';
  if (title) {
    fullTitle = `${title} - Chess Tournaments`;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>{fullTitle}</title>

        <link rel="alternative" href={href} hrefLang={targetLanguage} />

        {/* Primary Meta Tags */}
        <meta name="title" content={fullTitle} />
        <meta name="description" content={contentDescription} />

        {/*Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={contentDescription} />
        <meta property="og:image" content="https://www.chess-tournaments.org/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={contentDescription} />
        <meta property="twitter:image" content="https://www.chess-tournaments.org/images/logo.png" />
      </Head>

      <PageContent>{children}</PageContent>
    </>
  );
}

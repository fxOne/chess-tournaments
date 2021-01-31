import '../styles/globals.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ReactElement } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

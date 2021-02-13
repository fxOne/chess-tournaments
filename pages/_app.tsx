import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ReactElement } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

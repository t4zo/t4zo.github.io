import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { ThemeContextProvider } from 'contexts/themeContext';

import 'global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark'/*|| (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)*/) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <ThemeContextProvider>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Netflix clone website' />
        <title>Tácio de Souza Campos</title>
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

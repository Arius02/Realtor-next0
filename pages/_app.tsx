import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from "react"
import NProgress from 'nprogress';
import { Router } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
    
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return <ThemeProvider attribute="class">
  <Layout>
      {isMounted && <Component {...pageProps} />}
  </Layout>
  </ThemeProvider>
}

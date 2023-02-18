import 'styles/globals.css';

import Head from 'next/head';
import Kbar from 'components/Kbar';
import Header from 'components/Header';
import Footer from 'components/footer';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    
        <>
          <Head>
            <title>Berkay Nizam</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
              <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-J38ZYWZDQ0`} />
              <Script strategy="lazyOnload">
                  {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments)}
                  gtag('js', new Date());

                  gtag('config', 'G-J38ZYWZDQ0');
                  `}
            </Script>
          </Head>

          <Kbar>
            <Header />
            <main className="py-14">
              <Component {...pageProps} />
            </main>
            <Footer />
          </Kbar>
        </>
  );
}

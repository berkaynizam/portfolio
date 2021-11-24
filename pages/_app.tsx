import 'styles/globals.css';

import Head from 'next/head';
import Kbar from 'components/Kbar';
import Header from 'components/Header';
import Footer from 'components/footer';

export default function MyApp({ Component, pageProps }) {
  return (
    
        <>
          <Head>
            <title>Berkay Nizam</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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

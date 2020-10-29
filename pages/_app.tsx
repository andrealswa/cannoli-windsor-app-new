import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';

import styles from './_app.module.css';

import Head from 'next/head';
const MyApp = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Head>
        <title>Cannoli Windsor</title>
        <meta
          name="description"
          content="The best cannoli in Windsor Essex, freshly made Sicilian cannoli."
        />
      </Head>
      <RecoilRoot>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <div className={styles.spacer}></div>
        <Footer />
      </RecoilRoot>
    </div>
  );
};

export default MyApp;

import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { AlternatePage } from '../components/AlternatePage';

import styles from './_app.module.css';

import Head from 'next/head';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <RecoilRoot>
      <AlternatePage />
      {/* <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <div className={styles.spacer}></div>
      <Footer /> */}
    </RecoilRoot>
  );
};

export default MyApp;

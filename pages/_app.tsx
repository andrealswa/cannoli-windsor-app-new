import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { RecoilRoot } from 'recoil'

import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }) => {
  return <RecoilRoot>
    <Navbar />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    <Footer />
  </RecoilRoot>
}

export default MyApp

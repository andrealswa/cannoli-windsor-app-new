import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }) => {
  return <div>
    <Navbar />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    <Footer />
  </div>
}

export default MyApp

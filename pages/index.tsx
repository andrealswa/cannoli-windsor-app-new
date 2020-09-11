import Head from 'next/head'
import { motion } from 'framer-motion'
import { HomeContent } from '../components/HomeContent'

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HomeContent />
    </motion.div>
  )
}
export default Home

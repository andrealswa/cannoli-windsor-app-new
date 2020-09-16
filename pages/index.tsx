import Head from 'next/head'
import { motion } from 'framer-motion'
import { HomeContent } from '../components/home/HomeContent'
import { Images } from '../components/home/Images'
import { Stepper } from '../components/home/Stepper'

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Images />
      <Stepper />
      <HomeContent />
      <Images />
      <Stepper />
    </motion.div>
  )
}
export default Home

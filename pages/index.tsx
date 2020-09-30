import Head from 'next/head';
import { motion } from 'framer-motion';
import { HomeContent } from '../components/home/HomeContent';
import { Images } from '../components/home/Images';
import { Stepper } from '../components/home/Stepper';
import { HoursOperation } from '../components/home/HoursOperation';

const Home = () => {
  const pictureSet1 = [
    require('../public/homeContent/cannoliTop3.jpeg'),
    require('../public/homeContent/cannoliBottom2.jpeg'),
    require('../public/homeContent/cannoliTop4.jpeg'),
  ];
  const pictureSet2 = [
    require('../public/homeContent/cannoliTop1.jpeg'),
    require('../public/homeContent/cannoliTop2.jpeg'),
    require('../public/homeContent/cannoliBottom1.jpeg'),
  ];

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Images images={pictureSet1} />
      <Stepper images={pictureSet1} />
      <HomeContent />
      <Images images={pictureSet2} />
      <Stepper images={pictureSet2} />
      <HoursOperation />
    </motion.div>
  );
};
export default Home;

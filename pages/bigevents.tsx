import { motion } from 'framer-motion';
import { Flavours } from '../components/order/Flavours';
import { ClientNotes } from '../components/order/ClientNotes';
import styles from './order.module.css';
import { PickupDelivery } from '../components/order/PickupDelivery';
import { useRecoilValue } from 'recoil';
import { pickupDelivery } from '../recoil/recoil-atoms';
import { BigEvents } from '../components/bigEvents/BigEvents';

const Bigevents = () => {
  const pickupDeliveryLocal = useRecoilValue(pickupDelivery);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BigEvents />
    </motion.div>
  );
};
export default Bigevents;

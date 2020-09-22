import { motion } from 'framer-motion';
import { FlipCard } from '../components/order/FlipCard';
import { OrderSummary } from '../components/order/OrderSummary';
import { OrderTime } from '../components/order/OrderTime';
import { text } from 'express';
import { Flavours } from '../components/order/Flavours';
import { ClientNotes } from '../components/order/ClientNotes';
import styles from './order.module.css';
import { PickupDelivery } from '../components/order/PickupDelivery';
import { useRecoilValue } from 'recoil';
import { pickupDelivery } from '../recoil/recoil-atoms';

const Order = () => {
  const pickupDeliveryLocal = useRecoilValue(pickupDelivery);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <PickupDelivery />
      {pickupDeliveryLocal != '' && (
        <div>
          <OrderSummary />
          <OrderTime />
          <div className={styles.superContainer}>
            <div className={styles.container}>
              <Flavours />
              <ClientNotes />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default Order;

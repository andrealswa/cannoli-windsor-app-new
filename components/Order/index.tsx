import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';

import { OrderSummary } from './OrderSummary';
import { OrderTime } from './OrderTime';
import { ClientNotes } from './ClientNotes';
import { PickupDelivery } from './PickupDelivery';
import { pickupDelivery } from '../../recoil/recoil-atoms';

import styles from './index.module.css';
import { FlipCard } from './FlipCard';

export const Order = () => {
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
              <div>
                <h1 className={styles.title}>Choose Your Cannoli</h1>
                <div className={styles.container}>
                  <FlipCard />
                </div>
              </div>
              <ClientNotes />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

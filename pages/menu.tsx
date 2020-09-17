import { motion } from 'framer-motion';
import { FlipCard } from '../components/menu/FlipCard';
import { MenuSummary } from '../components/menu/MenuSummary';
import { text } from 'express';
import { Flavours } from '../components/menu/Flavours';
import { ClientNotes } from '../components/menu/ClientNotes';
import styles from './menu.module.css';
import { PickupDelivery } from '../components/menu/PickupDelivery';
import { useRecoilValue } from 'recoil';
import { pickupDelivery } from '../recoil/recoil-atoms';

const Menu = () => {
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
          <MenuSummary />
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
export default Menu;

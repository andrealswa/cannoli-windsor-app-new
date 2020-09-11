import { motion } from "framer-motion";
import { FlipCard } from "../components/FlipCard";
import { MenuSummary } from "../components/MenuSummary";
import { text } from "express";
import { Flavours } from "../components/Flavours";
import { ClientNotes } from "../components/ClientNotes";
import styles from './menu.module.css'
import { PickupDelivery } from "../components/PickupDelivery";
import { useRecoilValue } from 'recoil';
import { pickupDelivery } from '../recoil/recoil-atoms';

const Menu = () => {
  const pickupDeliveryLocal = useRecoilValue(pickupDelivery)
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PickupDelivery />
      { pickupDeliveryLocal != "" &&
        <div>
          <MenuSummary />
          <div className={styles.superContainer}>
            <div className={styles.container}>
              <Flavours />
              <ClientNotes />
            </div>
          </div>
        </div>
      }
    </motion.div>
  );
};
export default Menu
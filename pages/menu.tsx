import { motion } from "framer-motion";
import { FlipCard } from "../components/FlipCard";
import { MenuSummary } from "../components/MenuSummary";
import { text } from "express";
import { Flavours } from "../components/Flavours";
import { ClientNotes } from "../components/ClientNotes";
import styles from './menu.module.css'

const Menu = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <MenuSummary />
      <div className={styles.superContainer}>
        <div className={styles.container}>
          <Flavours />
          <ClientNotes />
        </div>
      </div>
    </motion.div>
  );
};
export default Menu
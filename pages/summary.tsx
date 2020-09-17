import { motion } from 'framer-motion';
import { OrderSummary } from '../components/summary/OrderSummary';

const SummaryPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <OrderSummary />
    </motion.div>
  );
};
export default SummaryPage;

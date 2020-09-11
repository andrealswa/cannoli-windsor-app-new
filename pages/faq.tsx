import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      FAQ
    </motion.div>
  );
};
export default Faq
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Contact Us
    </motion.div>
  );
};
export default Contact
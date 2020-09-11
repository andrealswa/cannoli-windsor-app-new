import { motion } from "framer-motion";
import { Cart } from "../components/Cart";

const CartPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Cart />
    </motion.div>
  );
};
export default CartPage
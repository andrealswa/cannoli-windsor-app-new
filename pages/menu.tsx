import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { pickupDelivery } from '../recoil/recoil-atoms';
import { MenuPicture } from '../components/menu/MenuPicture';

const Menu = () => {
  const pickupDeliveryLocal = useRecoilValue(pickupDelivery);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <MenuPicture />
    </motion.div>
  );
};
export default Menu;

import { motion } from "framer-motion";
import { Contact } from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Contact />
    </motion.div>
  );
};
export default ContactPage
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { motion } from 'framer-motion';

import styles from './MenuPicture.module.css';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const MenuPicture = () => {
  return (
    <motion.div variants={fadeInUp}>
      <div className={styles.imgContainer}>
        <Card>
          <CardActionArea>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <CardMedia
                className={styles.img}
                image={require('../../public/homeContent/cannoliMenu2.png')}
                title="Cannolis"
              />
            </motion.div>
          </CardActionArea>
        </Card>
      </div>
    </motion.div>
  );
};

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';

import styles from './Images.module.css';
import image from '../../public/homeContent/cannoliTop2.jpeg'

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: [.6, -.05, .01, .99]
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: .1
    }
  }
}

export const Images = ({ images }) => {

  const animation = useAnimation();
  const [, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.div variants={stagger}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          {images.map(img => {
            return <motion.div variants={fadeInUp}>
              <Card className={styles.cardImg}>
                <CardActionArea>
                  <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: .5 }}>
                    <CardMedia
                      style={{ height: 300, width: 300 }}
                      image={img}
                      title="Cannolis"
                    />
                  </motion.div>
                </CardActionArea>
              </Card>
            </motion.div>
          })}
        </div>
      </div>
    </motion.div >
  )
}

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

import styles from './HomeContent.module.css'

const easing = [.6, -.05, .01, .99];

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
      ease: easing
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

export const HomeContent = () => {
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  }
  return (
    <motion.div variants={stagger}>
      <div>
        <div className={styles.heroText}><h1>Fresh Filled Sicilian Cannoli</h1></div>
        <div className={styles.firstTextImg}>
          <motion.div variants={fadeInUp}>
            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cannoli Windsor makes Sicilian Cannolis with the freshest and
                  highest quality ingredients. Every Sicilian cannoli starts with
                  homemade vanilla sugar, imported Sicilian shells, and local
                  ricotta cheese.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className={styles.cardImg}>
              <CardActionArea>
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: .5 }}>
                  <CardMedia
                    className={styles.cardMedia}
                    image={require("../../public/homeContent/cannoliHomepage1.jpg")}
                    title="Contemplative Reptile"
                  />
                </motion.div>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Assorted box
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </div>

        <div className={styles.secondTextImg}>
          <motion.div variants={fadeInUp}>
            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cannoli Windsor values quality, supporting local, and engaging
                  with the Windsor community.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className={styles.cardImg}>
              <CardActionArea>
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: .5 }}>
                  <CardMedia
                    style={{ height: 300, width: 300 }}
                    image={require("../../public/homeContent/cannoliHomepage2.jpg")}
                    title="Contemplative Reptile"
                  />
                </motion.div>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Classic almond
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </div>

        <div className={styles.thirdTextImg}>
          <motion.div ref={ref}
            animate={animation}
            initial="hidden" variants={variants}>
            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Find us at the Downtown Windsor Farmers Market every Saturday! We are also on Instagram and appreciate
                  everyone who has been sharing everything we deliver on social
                  media.
                  </Typography>
              </CardContent>
            </Card>
          </motion.div>
          <a href="https://www.instagram.com/cannoliwindsor/">
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardImgSocial}>
                <CardActionArea>
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    transition={{ delay: .5 }}
                    variants={variants}>
                    <CardMedia
                      style={{ height: 300, width: 300 }}
                      image={require("../../public/homeContent/instagram.svg")}
                    />
                  </motion.div>
                </CardActionArea>
              </Card>
            </motion.div>
          </a>
          <div>

          </div>
        </div>
      </div>
    </motion.div >
  )
}

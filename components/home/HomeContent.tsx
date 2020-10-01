import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './HomeContent.module.css';

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

export const HomeContent = () => {
  return (
    <motion.div variants={stagger}>
      <motion.div variants={fadeInUp}>
        <div className={styles.containerWrapper}>
          <div className={styles.textCenter}>
            <Typography>
              Our Sicilian Cannoli starts with homemade vanilla sugar, imported
              Sicilian shells, and local ricotta cheese. Our artisan Vegan
              Cannoli include homemade shells and nut and bean based fillings.{' '}
            </Typography>
            <Typography>
              Cannoli Windsor uses the freshest and highest quality ingredients
              in every cannoli- never using artificial flavours, chemical
              compounds or extracts. Cannoli Windsor values quality, supporting
              local, and engaging with the Windsor-Essex community.
            </Typography>
            <Typography>
              Find us at the Downtown Windsor Farmer’s Market every Saturday
              from 8am - 1pm or for updates be sure to follow us on Instagram
              and Facebook.
            </Typography>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

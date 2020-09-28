import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion, useAnimation } from 'framer-motion';

import styles from './HoursOperation.module.css';

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

export const HoursOperation = () => {
  return (
    <motion.div variants={fadeInUp}>
      <div className={styles.containerWrapper}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={styles.hoursOperation}
              variant="h5"
              color="textSecondary"
            >
              Hours of Operation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.accordionDetails}>
              <div>
                {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(
                  (day) => {
                    return (
                      <Typography color="textSecondary">{day}:</Typography>
                    );
                  }
                )}
              </div>
              <div className={styles.times}>
                {[
                  'CLOSED',
                  '8am - 11am & 4pm - 6pm',
                  '8am - 11am & 4pm - 6pm',
                  '10am - 6pm',
                  '10am - 6pm',
                  '10am - 6pm',
                  '10am - 4pm',
                ].map((times) => {
                  return <Typography>{times}</Typography>;
                })}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </motion.div>
  );
};

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './OrderSummary.module.css';
import { motion } from 'framer-motion';

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

export const OrderSummary = () => {
  return (
    <motion.div variants={fadeInUp}>
      <div className={styles.mainContainer}>
        <Card className={styles.bigCard}>
          <div className={styles.heroText}>
            <h1>Prices</h1>
          </div>
          <div className={styles.secondTextImg}>
            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Small Boxes
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Mini (6):{' '}
                    <span className={styles.shiftRight}>
                      <b>$15</b>
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Medium (4): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.shiftRight}>
                      <b>$15</b>
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Large (2):{' '}
                    <span className={styles.shiftRight}>
                      <b>$10</b>
                    </span>
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vegan
                </Typography>

                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vegan (3):{' '}
                    <span className={styles.shiftRight}>
                      <b>$10</b>
                    </span>
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <Card className={styles.cardText}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Big Boxes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mini (10):
                  <span className={styles.shiftRight}>
                    {' '}
                    <b>$25</b>{' '}
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Medium (8): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.shiftRight}>
                    {' '}
                    <b>$30</b>
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Large (5):
                  <span className={styles.shiftRight}>
                    {' '}
                    <b>$25</b>
                  </span>
                </Typography>
              </CardContent>
            </Card>

            <div className={styles.flavoursContainer}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Typography
                    style={{ textAlign: 'center' }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Classic Flavours
                  </Typography>
                  <div className={styles.flavoursText}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <span>
                        <b>Chocolate Chip</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Vanilla Sugar</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Toasted Almond</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Glacé Cherry</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Candied Orange</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Pumpkin Spice</b>
                      </span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.cardText}>
                <CardContent>
                  <Typography
                    style={{ textAlign: 'center' }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Vegan Flavours
                  </Typography>
                  <div className={styles.flavoursText}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <span>
                        <b>Strawberries & Creamed Coconut</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Custard & Chocolate</b>
                      </span>
                      &nbsp;&bull;&nbsp;
                      <span>
                        <b>Toasted Almond</b>
                      </span>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      <b>
                        (Please give us a 48 hour notice for all vegan orders)
                      </b>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Typography
              className={styles.hstNotice}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              All boxes are subject to HST
            </Typography>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

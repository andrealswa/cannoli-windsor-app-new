import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './MenuSummary.module.css'
import { motion } from 'framer-motion';

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

export const MenuSummary = () => {
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.bigCard}>
        <div className={styles.heroText}><h1>Menu</h1></div>
        <div>
          <div className={styles.secondTextImg}>
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Small Boxes
                </Typography>
                  <div>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Mini-Sized Cannolis (6): <span className={styles.shiftRight}><b>$15</b></span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Medium-Sized Cannolis (4): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.shiftRight}><b>$15</b></span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Large-Sized Cannolis (2): <span className={styles.shiftRight}><b>$15</b></span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Big Boxes
                </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Mini-Sized Cannolis (10):<span className={styles.shiftRight}> <b>$25</b> </span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Medium-Sized Cannolis (8): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.shiftRight}> <b>$30</b></span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Large-Sized Cannolis (5):<span className={styles.shiftRight}> <b>$25</b></span>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>

            <Card className={styles.cardText}>
              <CardContent>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  Flavours
                </Typography>
                <div>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <span><b>Cherry</b></span>&nbsp;&bull;&nbsp;<span><b>Vanilla</b></span>&nbsp;&bull;&nbsp;<span><b>Chocolate Chip</b></span>&nbsp;&bull;&nbsp;<span><b>Cinnamon</b></span>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Card>
    </div >
  )
}

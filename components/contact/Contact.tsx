import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import styles from './Contact.module.css'
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


export const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <Card className={styles.bigCard}>
        <div className={styles.heroText}><h1>Contact Us</h1></div>
        <div className={styles.contactContainer}>
          <a href="mailto:cannoliwindsor@gmail.com">
            <Typography className={styles.contactUnit} gutterBottom variant="h6" component="h2">
              <MailOutlineIcon className={styles.iconsEmail} />
            </Typography>
          </a>

          <a href="https://www.facebook.com/cannoliwindsor/">
            <Typography className={styles.contactUnit} gutterBottom variant="h6" component="h2">
              <FacebookIcon className={styles.iconsFB} />
            </Typography>
          </a>

          <a href="https://www.instagram.com/cannoliwindsor/"><Typography className={styles.contactUnit} gutterBottom variant="h6" component="h2">
            <InstagramIcon className={styles.iconsIG} />
          </Typography>
          </a>
        </div>
      </Card>
    </div >
  )
}

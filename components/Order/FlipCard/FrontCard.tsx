import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import styles from './FrontCard.module.css';

export const FrontCard = ({ handleCardFlip }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        style={{ height: 300, width: 300 }}
        image={require('../../../public/homeContent/cannoliHomepage1.jpg')}
      />
      <CardContent>
        <Typography
          style={{ textAlign: 'center' }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Boxes
        </Typography>
        <Typography
          style={{ textAlign: 'center' }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          All boxes are assorted with Classic flavours by default. For custom
          orders, please request preferred flavours in notes
        </Typography>
      </CardContent>
      <div className={styles.grow}></div>
      <Button className={styles.buttonFlip} onClick={handleCardFlip}>
        Click Here To View Options
      </Button>
    </Card>
  );
};

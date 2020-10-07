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
        style={{ height: 189, width: 300 }}
        image={require('../../../public/homeContent/FullSizeRender.png')}
      />
      <CardContent className={styles.cardContent}>
        <Typography
          style={{ textAlign: 'center' }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Make Your Box Even Sweeter
        </Typography>
      </CardContent>
      <div className={styles.grow}></div>
      <Button className={styles.buttonFlip} onClick={handleCardFlip}>
        Click Here To View Options
      </Button>
    </Card>
  );
};

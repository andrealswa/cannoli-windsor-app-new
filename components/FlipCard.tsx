import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './FlipCard.module.css'

export const FlipCard = () => {
  const [side, setSide] = useState(false)
  const handleCardFlip = () => { setSide(!side) }

  return (
    <div className={styles.cardFlip} >
      <ReactCardFlip isFlipped={side}>
        <div key="front">
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                style={{ height: 300, width: 300 }}
                image={require("../public/homeContent/cannoliHomepage1.jpg")}
              />
              <CardContent>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  Assorted
                </Typography>
                <Typography style={{ textAlign: "center" }} variant="body2" color="textSecondary" component="p">
                  Delicious Party Pack
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button className={styles.buttonFlip} onClick={handleCardFlip}>View Options</Button>
          </Card>

        </div>
        <div key="back">
          <Card className={styles.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Assorted
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Perfect Party Pack
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button className={styles.buttonFlip} onClick={handleCardFlip}>View Picture</Button>
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  )
}

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { FrontCard } from './FrontCard';
import { BackCard } from './BackCard';

import styles from './index.module.css';

export const FlipCard = () => {
  const [side, setSide] = useState(false);
  const handleCardFlip = () => {
    setSide(!side);
  };

  return (
    <div className={styles.cardFlip}>
      <ReactCardFlip isFlipped={side}>
        <div key="front">
          <FrontCard handleCardFlip={handleCardFlip} />
        </div>
        <div key="back">
          <BackCard handleCardFlip={handleCardFlip} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

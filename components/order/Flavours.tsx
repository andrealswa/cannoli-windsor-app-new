import { FlipCard } from './FlipCard';
import styles from './Flavours.module.css';

export const Flavours = () => {
  return (
    <div className={styles.flavours}>
      <h1 className={styles.title}>Choose Your Cannoli</h1>
      <div className={styles.container}>
        <FlipCard />
      </div>
    </div>
  );
};

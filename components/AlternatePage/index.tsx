import websiteBanner from '../../public/homeContent/navbar.png';

import styles from './index.module.css';

export const AlternatePage = () => {
  return (
    <div className={styles.pageStyle}>
      <div className={styles.imageContainer}>
        <img
          className={styles.navImage}
          src={websiteBanner}
          alt="cannoli windsor"
        />
      </div>
      <h1>
        Under Construction
        <span role="img" aria-label="construction">
          🚧
        </span>
      </h1>
    </div>
  );
};

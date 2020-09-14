import Link from 'next/link'

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div>
      <footer className={styles.topMargin}>
        <div className={styles.text}>
          <div className={styles.copyright}>
            Copyright © 2020 Cannoli Windsor. All rights reserved.
        </div>
          <div className={styles.links}>
            <Link className={styles.link} href="/contact">
              <a>Contact Us</a>
            </Link>
            <div className={styles.bar}></div>
            <Link className={styles.link} href="/faq">
              <a>FAQ</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

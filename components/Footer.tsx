import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div>
      <footer className={styles.topMargin}>
        <div className={styles.text}>
          <div className={styles.copyright}>
            Copyright © 2020 Cannoli Windsor. All rights reserved. Developed by:
            Andrea Swartz
            <Link href="https://www.github.com/andrealswa/">
              <a>
                <GitHubIcon className={styles.iconGithub} />
              </a>
            </Link>{' '}
            <Link href="https://www.linkedin.com/in/andrea-swartz/">
              <a>
                <LinkedInIcon className={styles.iconLinkedIn} />
              </a>
            </Link>
          </div>
          <div className={styles.links}>
            <Link className={styles.link} href="/contact">
              <a>Contact Us</a>
            </Link>
            <div className={styles.bar}></div>
            <Link
              className={styles.link}
              href="https://www.facebook.com/cannoliwindsor/"
            >
              <a>Facebook</a>
            </Link>
            <div className={styles.bar}></div>
            <Link
              className={styles.link}
              href="https://www.instagram.com/cannoliwindsor/"
            >
              <a>Instagram</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

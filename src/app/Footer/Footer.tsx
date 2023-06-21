import React from 'react';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <a className={styles.pageLink} href="#">Вопросы-ответы</a>
          <a className={styles.pageLink} href="#">О нас</a>
        </div>
      </div>
    </footer>
  );
}

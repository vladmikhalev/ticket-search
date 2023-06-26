import React from 'react';
import styles from './spinerloading.module.css';

export function SpinerLoading() {
  return (
    <div className={styles.posCenter}>
      <div className={styles.loader}></div>
    </div>
  );
}

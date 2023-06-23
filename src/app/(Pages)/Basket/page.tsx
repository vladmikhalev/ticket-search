import React from 'react';
import { FilmList } from '../../Main/FilmList';
import styles from './basket.module.css';

export default function Basket() {

  return (
    <div className={styles.container} >

      <FilmList btnDelete={true} />

      <div className={styles.totalTiket}>
        <span className={styles.text}>Итого билетов:</span>
        <span className={styles.quantity}>7</span>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './filmcard.module.css';
import Image from 'next/image'
import imgSrc from '../../../../public/assets/images/previewFilm.jpg';
import { AmountBtns } from '../AmountBtns';

export function FilmCard() {
  
  return (
    <li className={styles.filmCard}>
      <div className={styles.imgFilm}>
        <Image src={imgSrc} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.descr}>
        <div className={styles.filmName}>Властелин колец: Братство кольца</div>
        <div className={styles.filmGenre}>Фэнтези</div>
      </div>

      <AmountBtns />
    </li>
  );
}

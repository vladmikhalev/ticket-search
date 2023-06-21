import React from 'react';

import styles from './filmlist.module.css';
import { FilmCard } from '@/shared/components/FilmCard';


export function FilmList() {
  
  return (
    <ul className={styles.filmList}>

      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />

    </ul>
  );
}

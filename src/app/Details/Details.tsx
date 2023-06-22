import React from 'react';
import { AboutFilm } from './AboutFilm';
import { CommentsList } from './CommentsList';
import styles from './details.module.css';

export function Details() {
  return (
    <div className={styles.container}>
      <AboutFilm />
      <CommentsList />
    </div>
  );
}

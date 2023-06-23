import React from 'react';

import styles from './filmlist.module.css';
import { FilmCard } from '@/shared/components/FilmCard';

interface IPropsFilmList {
  btnDelete?: boolean,
  // filmsArray: TFilmsArray
}

// interface IDataFilm {
//   id: string,
//   posterUrl: string,
//   title: string,
//   genre: string,
// }

// type TFilmsArray = IDataFilm[];


export function FilmList({ btnDelete }: IPropsFilmList) {
  
  return (
    <ul className={styles.filmList}>



      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />

    </ul>
  );
}

import React from 'react';

import styles from './filmlist.module.css';
import { FilmCard } from '@/shared/components/FilmCard';
import { selectProductAmount } from '@/redux/feature/basket/selectorBasket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { decrement, increment } from '@/redux/feature/basket/basketSlice';
import { IFilm, useGetMoviesQuery } from '@/redux/services/movieApi';

interface IPropsFilmList {
  btnDelete?: boolean,
  films?: IFilm[],
}





export function FilmList({ btnDelete, films }: IPropsFilmList) {

  return (
    <ul className={styles.filmList}>
      {films && films.map((el: IFilm) => (
        <FilmCard
          key={el.id}
          id={el.id}
          title={el.title}
          genre={el.genre}
          posterUrl={el.posterUrl}
          btnDelete={btnDelete}
        />
      ))}
    </ul>
  );
}

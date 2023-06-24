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
  
  const { data, isLoading, error } = useGetMoviesQuery();

  const films = data?.map(el => {
    if (el.genre === 'fantasy') {
      return { ...el, genre: "Фэнтези" };
    }
    if (el.genre === 'horror') {
      return { ...el, genre: "Ужасы" };
    }
    if (el.genre === 'action') {
      return { ...el, genre: "Боевик" };
    }
    if (el.genre === 'comedy') {
      return { ...el, genre: "Комедия" };
    }
    return el;
  })
  console.log(films, 'films');

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
      {/* <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} />
      <FilmCard btnDelete={btnDelete} /> */}

    </ul>
  );
}

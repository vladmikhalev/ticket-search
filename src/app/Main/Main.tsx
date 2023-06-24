'use client'
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import React from 'react';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {
  const { data, isLoading, error } = useGetMoviesQuery();
  console.log(data, 'data');

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
    <>
      <div className={styles.container}>

        <FilterPanel />

        <FilmList
          films={films}
        />

      </div>
    </>
  )
}


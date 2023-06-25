'use client'
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {
  const { data, isLoading, error } = useGetMoviesQuery();

  return (
    <>
      <div className={styles.container}>

        <FilterPanel />

        <FilmList
          films={data}
        />

      </div>
    </>
  )
}


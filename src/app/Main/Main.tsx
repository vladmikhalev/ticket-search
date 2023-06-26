'use client'
import { IFilm, useGetFilmsAndCinemasDataQuery, useGetMoviesQuery } from '@/redux/services/movieApi';
import { RootState } from '@/redux/store';
import { Error } from '@/shared/components/Error';
import { SpinerLoading } from '@/shared/components/SpinerLoading';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {
  const [selectIdCinema, setSelectIdCinema] = React.useState("");
  const [selectGenreCinema, setSelectGenreCinema] = React.useState("");
  console.log(selectGenreCinema, '11111111')
  const { data, isLoading, error } = useGetFilmsAndCinemasDataQuery(selectIdCinema);
  const [newData, setNewData] = React.useState<IFilm[]>([]);

  
  React.useEffect(() => {
    
    if (data) { 
      setNewData(data.movies);
    }
  }, [data]);
  // React.useEffect(() => {
    
  //   if (selectGenreCinema !== '') { 
  //     // filterData = initialData.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
  //     const filterGenreData = newData.filter(item => item.genre === selectGenreCinema);
  //     console.log(filterGenreData, 'filterGenreData')
  //     setNewData(filterGenreData);
  //   }
  // }, [selectGenreCinema]);
  console.log(newData, 'newData');
  console.log(data)
  return (
    <div className={styles.container}>
      {newData && data && (
        <>
          <FilterPanel selectGenreCinema={selectGenreCinema} setSelectGenreCinema={setSelectGenreCinema} setSelectIdCinema={setSelectIdCinema} cinemas={data.cinemas} initialData={data.movies} setNewData={setNewData} />
          <FilmList
            films={newData}
          />
        </>
      )}
      {isLoading && <SpinerLoading />}
      {error && <Error />}
    </div>
  )
}


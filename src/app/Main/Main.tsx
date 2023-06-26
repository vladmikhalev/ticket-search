'use client'
import { IFilm, useGetMoviesQuery } from '@/redux/services/movieApi';
import { RootState } from '@/redux/store';
import { Error } from '@/shared/components/Error';
import { SpinerLoading } from '@/shared/components/SpinerLoading';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {
  const { data, isLoading, error } = useGetMoviesQuery();
  const [newData, setNewData] = React.useState<IFilm[]>([]);
  // const [dataCinemas, setDataCinemas]


  React.useEffect(() => {
    if (data) { 
      setNewData(data);
    }
  }, [data]);
  console.log(data)
  console.log(newData, 'newData');
  return (
    <div className={styles.container}>
      {newData && data && (
        <>
          <FilterPanel initialData={data} setNewData={setNewData} />
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


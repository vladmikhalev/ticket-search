'use client'
import { IFilm, useGetFilmsAndCinemasDataQuery } from '@/redux/services/movieApi';
import { Error } from '@/shared/components/Error';
import { SpinerLoading } from '@/shared/components/SpinerLoading';
import React from 'react';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {
  const [selectIdCinema, setSelectIdCinema] = React.useState("");
  const [selectGenreCinema, setSelectGenreCinema] = React.useState("");
  const { data, isLoading, error } = useGetFilmsAndCinemasDataQuery(selectIdCinema);
  const [newData, setNewData] = React.useState<IFilm[]>([]);
  const [filterText, setFilterText] = React.useState("");

  React.useEffect(() => {
    if (data) {

      let filterData = data.movies;
      if (selectGenreCinema !== '') {
        filterData = data.movies.filter(item => item.genre.trim() === selectGenreCinema.trim());
      }

      if (filterText || filterText === '') {
        filterData = filterData.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
      }
      setNewData(filterData);
    }

  }, [filterText, selectGenreCinema, data, setNewData]);

  return (
    <div className={styles.container}>
      {newData && data && (
        <>
          <FilterPanel filterText={filterText} setFilterText={setFilterText} selectGenreCinema={selectGenreCinema} setSelectGenreCinema={setSelectGenreCinema} setSelectIdCinema={setSelectIdCinema} cinemas={data.cinemas} initialData={data.movies} setNewData={setNewData} />
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


import { useGetCommentsQuery, useGetMovieQuery } from '@/redux/services/movieApi';
import React from 'react';
import { useSelector } from 'react-redux';
import { AboutFilm } from './AboutFilm';
import { CommentsList } from './CommentsList';
import styles from './details.module.css';

interface IPropsDetails {
  idFilm: string;
}

export default function Details({ idFilm }: IPropsDetails) {
  const { data, isLoading, error } = useGetMovieQuery(idFilm);
  console.log(data)
  


  return (
    <div className={styles.container}>
      {!!data &&
        <AboutFilm data={data} />
      }
      <CommentsList idFilm={idFilm} />
    </div>
  );
}

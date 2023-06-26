import { IFilm, useGetCommentsQuery, useGetMovieQuery } from '@/redux/services/movieApi';
import { SpinerLoading } from '@/shared/components/SpinerLoading';
import { Error } from '@/shared/components/Error';
import React from 'react';
import { useSelector } from 'react-redux';
import { AboutFilm } from './AboutFilm';
import { CommentsList } from './CommentsList';
import styles from './details.module.css';

interface IPropsDetails {
  idFilm: string,
  filmDetails?: IFilm,
}

export default function Details({ filmDetails, idFilm }: IPropsDetails) {
  const { data, isLoading, error } = useGetCommentsQuery(idFilm);

  return (
    <div className={styles.container}>
      {filmDetails && data && (
        <>
          <AboutFilm filmDetails={filmDetails} />
          <CommentsList commentsFilm={data} />
        </>
      )}
      {isLoading && <SpinerLoading />}
      {error && <Error />}
    </div>
  );
}

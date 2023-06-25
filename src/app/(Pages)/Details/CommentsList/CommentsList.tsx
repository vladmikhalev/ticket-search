import { useGetCommentsQuery } from '@/redux/services/movieApi';
import { Сomment } from '@/shared/components/Сomment';
import React from 'react';
import styles from './commentslist.module.css';
interface IPropsCommentsList {
  idFilm: string
}
export function CommentsList({ idFilm }: IPropsCommentsList) {
  const { data, isLoading, error } = useGetCommentsQuery(idFilm);
  console.log(data, 'comments')
  return (
    <ul>
      {data && data.map((el) => { 
        return <Сomment key={el.id} data={el} />
      })}

    </ul>
  );
}

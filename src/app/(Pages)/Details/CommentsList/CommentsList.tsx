import { IComment, useGetCommentsQuery } from '@/redux/services/movieApi';
import { Сomment } from '@/shared/components/Сomment';
import React from 'react';
import styles from './commentslist.module.css';
interface IPropsCommentsList {
  commentsFilm: IComment[],
}
export function CommentsList({commentsFilm}: IPropsCommentsList) {
  
  return (
    <ul>
      {commentsFilm.map((el) => { 
        return <Сomment key={el.id} commentsFilm={el} />
      })}

    </ul>
  );
}

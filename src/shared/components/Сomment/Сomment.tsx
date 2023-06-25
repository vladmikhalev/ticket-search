import React from 'react';
import styles from './сomment.module.css';
import Image from 'next/image'
import imgSrc from '../../../../public/assets/images/defaultAvatar.jpg';
import { IComment } from '@/redux/services/movieApi';

interface IPropsComment {
  data: IComment,
}

export function Сomment({data}: IPropsComment) {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Image src={imgSrc} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.blockText} >
        <div className={styles.textTop}>
          <span className={styles.name}>{ data.name }</span>
          <div className={styles.filmRating}>
            Оценка: <b>{ data.rating }</b>
          </div>
        </div>
        <p className={styles.commentText}>{ data.text }</p>
      </div>


    </div>
  );
}

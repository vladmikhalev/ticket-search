"use client"
import React from 'react';
import styles from './aboutfilm.module.css';
import Image from 'next/image'
import imgSrc from '../../../../../public/assets/images/detailFilmImg.jpg';
import { AmountBtns } from '@/shared/components/AmountBtns';
import { usePathname } from 'next/navigation';
import { IFilm } from '@/redux/services/movieApi';

interface IPropsAboutFilm {
  data: IFilm,
}


export function AboutFilm({ data }: IPropsAboutFilm) {

  return (
    <div className={styles.aboutFilm}>
      <div className={styles.btnGroup}>
        <AmountBtns id={data.id} />
      </div>

      <div className={styles.imgWrapper}>
        <Image className={styles.img} width={400} height={500} src={data.posterUrl} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.blockText}>
        <h2 className={styles.title}>{data.title}</h2>

        <div className={styles.categories}>
          <b>Жанр:</b> {data.genre}
        </div>

        <div className={styles.categories}>
          <b>Год выпуска: </b> {data.releaseYear}
        </div>

        <div className={styles.categories}>
          <b>Рейтинг:</b> {data.rating}
        </div>

        <div className={styles.categories}>
          <b>Режиссер:</b> {data.director}
        </div>

        <div className={styles.descr}>
          <h3 className={styles.descrSubtitle}>Описание</h3>
          <p className={styles.descrText}>{data.description}</p>
        </div>

      </div>
    </div>
  );
}

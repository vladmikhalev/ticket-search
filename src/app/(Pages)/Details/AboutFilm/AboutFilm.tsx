"use client"
import React from 'react';
import styles from './aboutfilm.module.css';
import Image from 'next/image'
import imgSrc from '../../../../../public/assets/images/detailFilmImg.jpg';
import { AmountBtns } from '@/shared/components/AmountBtns';
import { usePathname } from 'next/navigation';
import { IFilm } from '@/redux/services/movieApi';

interface IPropsAboutFilm {
  filmDetails: IFilm,
}


export function AboutFilm({ filmDetails }: IPropsAboutFilm) {

  return (
    <div className={styles.aboutFilm}>
      <div className={styles.btnGroup}>
        <AmountBtns id={filmDetails.id} />
      </div>

      <div className={styles.imgWrapper}>
        <Image className={styles.img} width={400} height={500} src={filmDetails.posterUrl} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.blockText}>
        <h2 className={styles.title}>{filmDetails.title}</h2>

        <div className={styles.categories}>
          <b>Жанр:</b> {filmDetails.genre}
        </div>

        <div className={styles.categories}>
          <b>Год выпуска: </b> {filmDetails.releaseYear}
        </div>

        <div className={styles.categories}>
          <b>Рейтинг:</b> {filmDetails.rating}
        </div>

        <div className={styles.categories}>
          <b>Режиссер:</b> {filmDetails.director}
        </div>

        <div className={styles.descr}>
          <h3 className={styles.descrSubtitle}>Описание</h3>
          <p className={styles.descrText}>{filmDetails.description}</p>
        </div>

      </div>
    </div>
  );
}

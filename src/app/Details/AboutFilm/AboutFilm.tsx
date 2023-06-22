import React from 'react';
import styles from './aboutfilm.module.css';
import Image from 'next/image'
import imgSrc from '../../../../public/assets/images/detailFilmImg.jpg';
import { AmountBtns } from '@/shared/components/AmountBtns';

export function AboutFilm() {

  // const imageStyle = {
    // marginright: '32px',
    // width: '400px',
    // height: '500px',
  // }
  return (
    <div className={styles.aboutFilm}>
      <div className={styles.btnGroup}>
        <AmountBtns />
      </div>

      <div className={styles.imgWrapper}>
        <Image src={imgSrc} alt="previewFilm" priority={true}/>
      </div>

      <div className={styles.blockText}>
        <h2 className={styles.title}>Властелин колец: Братство кольца</h2>

        <div className={styles.categories}>
          <b>Жанр:</b> Фэнтези
        </div>

        <div className={styles.categories}>
          <b>Год выпуска: </b> 2001
        </div>

        <div className={styles.categories}>
          <b>Рейтинг:</b> 8
        </div>

        <div className={styles.categories}>
          <b>Режиссер:</b> Питер Джексон
        </div>

        <div className={styles.descr}>
          <h3 className={styles.descrSubtitle}>Описание</h3>
          <p className={styles.descrText}>Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.</p>
        </div>

      </div>
    </div>
  );
}

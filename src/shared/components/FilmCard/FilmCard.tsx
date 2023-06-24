"use client"
import React from 'react';
import styles from './filmcard.module.css';
import Image from 'next/image'
import imgSrc from '../../../../public/assets/images/previewFilm.jpg';
import { AmountBtns } from '../AmountBtns';
import { IconDelete } from '@/shared/icons';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import ModalDelete from '../ModalDelete/ModalDelete';

interface IPropsFilmList {
  btnDelete?: boolean,
  id: string
  title: string,
  genre: string,
  posterUrl: string,
}

export function FilmCard({ id, btnDelete, title, genre, posterUrl }: IPropsFilmList) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  console.log(posterUrl);

  return (
    <li className={styles.filmCard}>
      <div className={styles.imgFilm}>
        <Image className={styles.img} src={posterUrl} width={100} height={120} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.descr}>
        <div className={styles.filmName}>{title}</div>
        <div className={styles.filmGenre}>{genre}</div>
      </div>

      <div className={styles.btnGroup}>
        <AmountBtns id={id} />

        {btnDelete && // И если количество билетов === 0 то должна показаться кнопка удаления фильма
          // <Link href={`/basket/delete-ticket`} className={styles.btnDelete}>
          //   <IconDelete />
          // </Link>

          // Нужно ли передавать ID в href ???
          // <Link onClick={() => setIsModalOpen(!isModalOpen)} className={styles.btnDelete} href="/Basket/ModalDelete">  
          //   <IconDelete />
          // </Link>

          <button className={styles.btnDelete} onClick={() => setIsModalOpen(!isModalOpen)}>
            <IconDelete />
          </button>

        }
        {isModalOpen && <ModalDelete setIsModalOpen={setIsModalOpen} />}
      </div>

    </li>
  );
}

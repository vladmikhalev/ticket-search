"use client"
import React from 'react';
import styles from './filmcard.module.css';
import Image from 'next/image'
import { AmountBtns } from '../AmountBtns';
import { IconDelete } from '@/shared/icons';
import Link from 'next/link';
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
  const bodyElement = document.querySelector('body');

  React.useEffect(() => {
    if (!bodyElement) return;
    if (isModalOpen ) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = '';
    }
  }, [isModalOpen, bodyElement]);


  return (
    <li className={styles.filmCard}>
      <div className={styles.imgFilm}>
        <Image className={styles.img} src={posterUrl} width={100} height={120} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.descr}>
        <Link href={`/${id}`}>
          <div className={styles.filmName}>{title}</div>
        </Link>
        <div className={styles.filmGenre}>{genre}</div>
      </div>

      <div className={styles.btnGroup}>
        <AmountBtns setIsModalOpen={setIsModalOpen} id={id} />

        {btnDelete &&
          <button className={styles.btnDelete} onClick={() => setIsModalOpen(true)}>
            <IconDelete />
          </button>
        }
        {isModalOpen && <ModalDelete id={id} setIsModalOpen={setIsModalOpen} />}
      </div>

    </li>
  );
}

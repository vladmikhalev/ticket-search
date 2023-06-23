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
  btnDelete?: boolean;
}

export function FilmCard({ btnDelete }: IPropsFilmList) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);



  return (
    <li className={styles.filmCard}>
      <div className={styles.imgFilm}>
        <Image src={imgSrc} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.descr}>
        <div className={styles.filmName}>Властелин колец: Братство кольца</div>
        <div className={styles.filmGenre}>Фэнтези</div>
      </div>

      <div className={styles.btnGroup}>
        <AmountBtns />

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

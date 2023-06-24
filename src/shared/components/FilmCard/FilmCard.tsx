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
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '@/redux/feature/basket/selectorBasket';

interface IPropsFilmList {
  btnDelete?: boolean,
  id: string
  title: string,
  genre: string,
  posterUrl: string,
}

export function FilmCard({ id, btnDelete, title, genre, posterUrl }: IPropsFilmList) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const productAmount = useSelector((state: RootState) => selectProductAmount(state, id))
  console.log(productAmount, 'PAAA');

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
        <AmountBtns setIsModalOpen={setIsModalOpen} id={id} />

        {btnDelete && 
          <button className={styles.btnDelete} onClick={() => setIsModalOpen(true)}>
            <IconDelete />
          </button>
        }
        {isModalOpen && <ModalDelete  id={id} setIsModalOpen={setIsModalOpen} />}
      </div>

    </li>
  );
}

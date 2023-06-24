"use client"
import { selectBasketModule } from '@/redux/feature/basket/selectorBasket';
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import { RootState, store } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilmList } from '../../Main/FilmList';
import styles from './basket.module.css';

export default function Basket() {
  const [amountTicket, setAmountTicket] = React.useState<number>();
  const basket = useSelector((state: RootState) => selectBasketModule(state))
  const idBasket = Object.keys(basket);
  const { data, isLoading, error } = useGetMoviesQuery();


  React.useEffect(() => {
    const sum = Object.values(basket).reduce((acc: number, el: number) => {
      console.log(el, 'el');
      return acc + el;
    }, 0)
    setAmountTicket(sum)
  }, [basket])

  let films = data?.map(el => {
    if (el.genre === 'fantasy') {
      return { ...el, genre: "Фэнтези" };
    }
    if (el.genre === 'horror') {
      return { ...el, genre: "Ужасы" };
    }
    if (el.genre === 'action') {
      return { ...el, genre: "Боевик" };
    }
    if (el.genre === 'comedy') {
      return { ...el, genre: "Комедия" };
    }
    return el;
  }).filter((el) => idBasket.includes(el.id));
  console.log(films, 'films');

  return (
    <div className={styles.container} >

      <FilmList
        films={films}
        btnDelete={true}
      />

      <div className={styles.totalTiket}>
        <span className={styles.text}>Итого билетов:</span>
        <span className={styles.quantity}>{amountTicket}</span>
      </div>
    </div>
  );
}

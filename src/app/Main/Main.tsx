'use client'
import React from 'react';
import { FilmList } from './FilmList'
import { FilterPanel } from './FilterPanel'
import styles from './main.module.css'


export default function Main() {



  return (
    <>
      <div className={styles.container}>

        <FilterPanel />

        <FilmList />

      </div>
    </>
  )
}


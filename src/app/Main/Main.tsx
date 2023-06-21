import Image from 'next/image'
import styles from './main.module.css'
import imgSrc from '../../../public/assets/images/previewFilm.jpg';

export default function Main() {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.filterPanel}>
          <h2 className={styles.subtitle}>Фильтр поиска</h2>
          <form className={styles.filterForm}>
            <label className={styles.filterLabel} htmlFor="nameInput">Название</label>
            <input className={styles.filterInput} type="text" id="nameInput" name="nameFilm" placeholder='Введите название' />

            <label className={styles.filterLabel} htmlFor="genreInput">Жанр</label>
            <input className={styles.select} type="text" id="genreInput" name="genreFilm" placeholder='Выберите жанр' />

            <label className={styles.filterLabel} htmlFor="cinemaInput">Кинотеатр</label>
            <input className={styles.select} type="text" id="cinemaInput" name="cinemaFilm" placeholder='Выберите кинотеатр' />
          </form>
        </div>

        <div className={styles.filmList}>
          <div className={styles.filmCard}>
            <div className={styles.imgFilm}>
              <Image src={imgSrc} alt="previewFilm" />
            </div>

            <div className={styles.descr}>
              <div className={styles.filmName}>Властелин колец: Братство кольца</div>
              <div className={styles.filmGenre}>Фэнтези</div>
            </div>

            <div className={styles.amountBtns}>
              <button >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="4" fill="#FF5500" />
                  <path d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z" fill="white" />
                </svg>
              </button>
              <span className={styles.amount}>0</span>
              <button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="4" fill="#FF5500" />
                  <path d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H10.375V14.125C10.375 14.2245 10.3355 14.3198 10.2652 14.3902C10.1948 14.4605 10.0995 14.5 10 14.5C9.90054 14.5 9.80516 14.4605 9.73484 14.3902C9.66451 14.3198 9.625 14.2245 9.625 14.125V10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H9.625V5.875C9.625 5.77554 9.66451 5.68016 9.73484 5.60984C9.80516 5.53951 9.90054 5.5 10 5.5C10.0995 5.5 10.1948 5.53951 10.2652 5.60984C10.3355 5.68016 10.375 5.77554 10.375 5.875V9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/* data-disabled={isDisable} */ }
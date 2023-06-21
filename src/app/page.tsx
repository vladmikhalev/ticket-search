import Image from 'next/image'
import { Footer } from './Footer'
import { Header } from './Header'
import Main from './Main/Main'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          <Main />
        </main>
        <Footer />
      </div>
    </>
  )
}

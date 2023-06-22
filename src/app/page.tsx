import Image from 'next/image'
import { AboutUs } from './AboutUs'
import { Basket } from './Basket'
import { Details } from './Details'
import { Footer } from './Footer'
import { Header } from './Header'
import Main from './Main/Main'
import styles from './page.module.css'
import { QA } from './QA'

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          {/* <Details /> */}
          {/* <Main /> */}
          {/* <Basket /> */}
          <QA />
          {/* <AboutUs /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

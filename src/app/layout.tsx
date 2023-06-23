import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.pageWrapper}>
          <Header />
          <main className={styles.main}>
            {children}
            <div id="modalRoot"></div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

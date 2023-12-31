import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './layout.module.css'
import { StoreProvider } from '@/redux/StoreProvider'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Biletopoisk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
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
    </StoreProvider>
  )
}

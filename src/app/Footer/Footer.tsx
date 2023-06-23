"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './footer.module.css';

export function Footer() {
  const pathname = usePathname()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link className={styles.pageLink} href="/QA">
            Вопросы-ответы
          </Link>
          <Link className={styles.pageLink} href="/AboutUs">
            О нас
          </Link>
        </div>
      </div>
    </footer>
  );
}

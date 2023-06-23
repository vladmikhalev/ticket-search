import { IconArrowQA } from '@/shared/icons';
import React from 'react';
import styles from './qaitem.module.css';

interface IPropsQAItem {
  question: string;
  answer: string;

}

export function QAItem({ question, answer }: IPropsQAItem) {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>{question}</h3>
        <button className={styles.arrow}>
          <IconArrowQA />
        </button>
      </div>

      <p className={styles.text}>{answer}</p>
    </li>
  );
}

import { IconDelete } from '@/shared/icons';
import React from 'react';
import styles from './btndelete.module.css';

export function BtnDelete() {
  return (
    <button className={styles.btnDelete}>
      <IconDelete />
    </button>
  );
}

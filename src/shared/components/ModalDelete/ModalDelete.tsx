"use client"

import { deleteTicket } from '@/redux/feature/basket/basketSlice';
import { IconDelete } from '@/shared/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styles from './modaldelete.module.css';

interface IModalDeleteProps {
  id: string;
  setIsModalOpen: (value: boolean) => void;
}

export default function ModalDelete({setIsModalOpen, id}: IModalDeleteProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const refBackgr = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleRemove() {
    dispatch(deleteTicket({id: id}))
    setIsModalOpen(false);
  }


  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && refBackgr.current?.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const node = document.querySelector('#modalRoot');
  if (!node) return null;
  return ReactDOM.createPortal((
    <div id="modal" className={styles.modalBackgr} ref={refBackgr}>
      <div className={styles.modal} >
        <div className={styles.content} ref={ref}>

          <div className={styles.wrapper}>
            <h3 className={styles.title}>Удаление билета</h3>
            <button className={styles.exit} onClick={handleClose}>
              <IconDelete />
            </button>
          </div>

          <p className={styles.text}>Вы уверены, что хотите удалить билет?</p>

          <div className={styles.btnGroup}>
            <button className={styles.remove} onClick={handleRemove}>Да</button>
            <button className={styles.cancel} onClick={handleClose}>Нет</button>
          </div>


        </div>
      </div>
    </div>
  ), node); 
}


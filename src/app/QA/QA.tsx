"use client"
import { IconArrowQA } from '@/shared/icons';
import React, { useContext } from 'react';
import styles from './qa.module.css';
import { QAItem } from './QAItem';
import { CSSTransition } from 'react-transition-group';





const MenuContext = React.createContext<any>(false);



const MenuAccordion = ({ children }: any) => {
  const [activeGroup, setActiveGroup] = React.useState();

  const switchGroup = React.useCallback((title: any) => {
    setActiveGroup(activeTitle => activeTitle === title ? undefined : title);
  }, []);

  return <MenuContext.Provider value={{ activeGroup, switchGroup }} >{children}</MenuContext.Provider>
}




MenuAccordion.Group = function MenuGroup({ children, title }: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeGroup, switchGroup } = useContext(MenuContext);
  const nodeRef = React.useRef(null)

  React.useEffect(() => {
    setIsOpen(activeGroup === title)
  }, [activeGroup, title])

  const transitionClasses = {
    enterActive: styles.itemEnterActive,
    exitActive: styles.itemExitActive,
    enter: styles.itemEnter,
    exit: styles.itemExit,
    enterDone: styles.itemDone,
  };
  return <li onClick={() => switchGroup(title)} className={styles.item} data-is-open={isOpen}>
    {/* <div className={isOpen? styles.wrapperIsOpen : styles.wrapper}></div> */}
    <div className={styles.wrapper}>
      <h3 className={styles.subtitle}>{title}</h3>
      <button className={styles.arrow}>
        <IconArrowQA />
      </button>
    </div>

    {/* <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      unmountOnExit
      classNames={transitionClasses}
    >
      <div className={styles.descrWrapper} ref={nodeRef}>{children}</div>
    </CSSTransition> */}
      {activeGroup === title && <div>{children}</div>}

  </li>

}




MenuAccordion.Item = function MenuItem({ title }: any) {

  return <p className={`${styles.text} ${styles.appear}`}>{title}</p>
}




export function QA() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitleBlock}>
        <h2 className={styles.subtitle}>Вопросы-ответы</h2>
      </div>



      <ul className={styles.list}>
        <MenuAccordion>

          <MenuAccordion.Group title='Что такое Билетопоиск?'>
            <MenuAccordion.Item title='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          </MenuAccordion.Group>

          <MenuAccordion.Group title='Какой компании принадлежит Билетопоиск?'>
            <MenuAccordion.Item title='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          </MenuAccordion.Group>

          <MenuAccordion.Group title='Как купить билет на Билетопоиск?'>
            <MenuAccordion.Item title='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          </MenuAccordion.Group>

          <MenuAccordion.Group title='Как оставить отзыв на Билетопоиск?'>
            <MenuAccordion.Item title='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          </MenuAccordion.Group>

        </MenuAccordion>
      </ul>

    </div>
  );
}

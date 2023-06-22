import React from 'react';
import styles from './сomment.module.css';
import Image from 'next/image'
import imgSrc from '../../../../public/assets/images/defaultAvatar.jpg';

export function Сomment() {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Image src={imgSrc} alt="previewFilm" priority={true} />
      </div>

      <div className={styles.blockText} >
        <div className={styles.textTop}>
          <span className={styles.name}>Роман</span>
          <div className={styles.filmRating}>
            Оценка: <b>8</b>
          </div>
        </div>
        <p className={styles.commentText}>По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...</p>
      </div>


    </div>
  );
}

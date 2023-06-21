'use client'
import React from 'react';
import styles from './filterpanel.module.css';
import Select from './Select/Select';

const options = [
  { "title": "янв", "value": "01" },
  { "title": "фев", "value": "02" },
  { "title": "мар", "value": "03" },
  { "title": "апр", "value": "04" },
  { "title": "май", "value": "05" },
  { "title": "июн", "value": "06" },
  { "title": "июл", "value": "07" },
  { "title": "авг", "value": "08" },
  { "title": "сен", "value": "09" },
  { "title": "окт", "value": "10" },
  { "title": "ноя", "value": "11" },
  { "title": "дек", "value": "12" }
]

export function FilterPanel() {
  const [selectValue, setSelectValue] = React.useState("");

  function handleSelect(value: string) {
    setSelectValue(value);
  };
  const selectedValue = options.find((item) => item.value === selectValue);

  return (
    <div className={styles.filterPanel}>
      <h2 className={styles.subtitle}>Фильтр поиска</h2>
      <form className={styles.filterForm}>

        
        <label className={styles.filterLabel} htmlFor="nameInput">Название</label>
        <input className={styles.filterInput} type="text" id="nameInput" name="nameFilm" placeholder='Введите название' />


        <div className={styles.filterLabel}>Жанр</div>
        <Select
          mode="rows"
          options={options}
          selected={selectedValue || null}
          onChange={handleSelect}
          placeholder="Выберите жанр"
        />
        <div className={styles.filterLabel}>Кинотеатр</div>
        <Select
          mode="rows"
          options={options}
          selected={selectedValue || null}
          onChange={handleSelect}
          placeholder="Выберите кинотеатр"
        />
      </form>
    </div>
  );
}

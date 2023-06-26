'use client'
import { IFilm, movieApi, useGetCinemasQuery, useGetFilmsAndCinemasDataQuery } from '@/redux/services/movieApi';
import React, { ChangeEvent } from 'react';
import styles from './filterpanel.module.css';
import Select from './Select/Select';

const options = [
  { "title": "Не выбран", "value": "01" },
  { "title": "Комедия", "value": "02" },
  { "title": "Фэнтези", "value": "03" },
  { "title": "Боевиĸ", "value": "04" },
  { "title": "Ужасы", "value": "05" },
]

const optionsCinemas = [];

interface IPropsFilterPanel {
  initialData: IFilm[],
  setNewData: React.Dispatch<React.SetStateAction<IFilm[]>>,
}

export function FilterPanel({ initialData, setNewData }: IPropsFilterPanel) {
  const { data, isLoading, error } = useGetFilmsAndCinemasDataQuery();
  
  console.log(data, 'cinemas')
  const [filterText, setFilterText] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterText(event.target.value);
  }

  function handleSelect(value: string) {
    setSelectValue(value);
  };
  const selectedValue = options.find((item) => item.value === selectValue);

  React.useEffect(() => {
    if (filterText || filterText === '') {
      let filterData = initialData
      filterData = initialData.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
      setNewData(filterData);
    }

  }, [filterText]);

  return (
    <div className={styles.filterPanel}>
      <h2 className={styles.subtitle}>Фильтр поиска</h2>
      <form className={styles.filterForm}>


        <label className={styles.filterLabel} htmlFor="nameInput">Название</label>
        <input className={styles.filterInput} value={filterText} onChange={handleChange} type="text" id="nameInput" name="nameFilm" placeholder='Введите название' />


        <div className={styles.filterLabel}>Жанр</div>
        {/* <Select
          mode="rows"
          options={options}
          selected={selectedValue || null}
          onChange={handleSelect}
          placeholder="Выберите жанр"
        /> */}
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
function useQuery(arg0: string, arg1: () => any) {
  throw new Error('Function not implemented.');
}


'use client'
import { ICinemas, IFilm } from '@/redux/services/movieApi';
import React, { ChangeEvent } from 'react';
import styles from './filterpanel.module.css';
import Select from './Select/Select';

const optionsMovie = [
  { "title": "Не выбран", "value": "01" },
  { "title": "Комедия", "value": "02" },
  { "title": "Фэнтези", "value": "03" },
  { "title": "Боевик", "value": "04" },
  { "title": "Ужасы", "value": "05" },
]



interface IPropsFilterPanel {
  selectGenreCinema: string
  setSelectGenreCinema: (el: string) => void,
  setSelectIdCinema: (el: string) => void,
  cinemas: ICinemas[],
  initialData: IFilm[],
  setNewData: React.Dispatch<React.SetStateAction<IFilm[]>>,
}

interface INewOptionsCinemas {
  id: string,
  title: string,
  value: string,
}



export function FilterPanel({ selectGenreCinema, setSelectGenreCinema, setSelectIdCinema, cinemas, initialData, setNewData }: IPropsFilterPanel) {

  const [optionsCinemas, setOptionsCinemas] = React.useState<INewOptionsCinemas[]>([]);
  const [filterText, setFilterText] = React.useState("");
  const [selectValueMovie, setSelectValueMovie] = React.useState("");
  const [selectValueCinemas, setSelectValueCinemas] = React.useState("");

  // React.useEffect(() => {
  //   if (selectValueCinemas !== '' && selectValueCinemas !== "Не выбран") {
  //     const idCinema = cinemas.find(c => c.name === selectValueCinemas)?.id;
  //     if (idCinema) {
  //       setSelectIdCinema(idCinema);
  //     }
  //   }
  // }, [selectValueCinemas]);


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterText(event.target.value);
  }
  function handleSelectMovies(value: string) {
    if (value !== '' && value !== "Не выбран") {
      
      setSelectGenreCinema(value)
    } else {
      setSelectGenreCinema('')
    }
    setSelectValueMovie(value);
  };
  function handleSelectCinemas(value: string) {
    if (value !== '' && value !== "Не выбран") {
      const idCinema = cinemas.find(c => c.name === value)?.id;
      if (idCinema) {
        setSelectIdCinema(idCinema);
      }
    }
    if (value === "Не выбран") {
      setSelectIdCinema("")
    }
    setSelectValueCinemas(value);
  };
  const selectedValueMovies = optionsMovie.find((item) => item.title === selectValueMovie);
  const selectedValueCinemas = optionsCinemas.find((item) => item.title === selectValueCinemas);

  React.useEffect(() => {
    let filterData = initialData;
    if (selectGenreCinema !== '') {
      filterData = initialData.filter(item => item.genre.trim() === selectGenreCinema.trim());
    }

    if (filterText || filterText === '') {
      filterData = filterData.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
    }
    setNewData(filterData);

  }, [filterText, selectGenreCinema, initialData, setNewData]);

  React.useEffect(() => {
    let newOptionsCinemas = [{
      id: "",
      title: "Не выбран",
      value: "01",
    }]
    const additionOptionsCinemas = cinemas.map((el, index) => {
      return { id: el.id, title: el.name, value: String(index + 2).padStart(2, '0') }
    })
    newOptionsCinemas = [...newOptionsCinemas, ...additionOptionsCinemas];
    setOptionsCinemas(newOptionsCinemas)

  }, [cinemas]);

  return (
    <div className={styles.filterPanel}>
      <h2 className={styles.subtitle}>Фильтр поиска</h2>
      <form className={styles.filterForm} onSubmit={(event) => event.preventDefault()}>


        <label className={styles.filterLabel} htmlFor="nameInput">Название</label>
        <input className={styles.filterInput} value={filterText} onChange={handleChange} type="text" id="nameInput" name="nameFilm" placeholder='Введите название' />


        <div className={styles.filterLabel}>Жанр</div>
        <Select
          mode="rows"
          options={optionsMovie}
          selected={selectedValueMovies || null}
          onChange={handleSelectMovies}
          placeholder="Выберите жанр"
        />
        <div className={styles.filterLabel}>Кинотеатр</div>
        <Select
          mode="rows"
          options={optionsCinemas}
          selected={selectedValueCinemas || null}
          onChange={handleSelectCinemas}
          placeholder="Выберите кинотеатр"
        />
      </form>
    </div>
  );
}


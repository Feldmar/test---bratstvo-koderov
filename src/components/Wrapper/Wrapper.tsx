import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Table from '../Table/Table';
import styles from './Wrapper.module.scss';

function Wrapper() {
  const [data, setData] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
        setSearchResult(json);
      } catch (error) {
        console.error('Ошибка при получении данных');
      }
    };
    fetchData();
  }, []);

  const handlerSort = (field: any) => {
    const copyData = [...data];
    let sorting;

    if (directionSort) {
      sorting = copyData.sort((a: any, b: any) => {
        const valueA = a[field]?.length || 0;
        const valueB = b[field]?.length || 0;
        return valueA - valueB;
      });
    } else {
      sorting = copyData.sort((a: any, b: any) => {
        const valueA = a[field]?.length || 0;
        const valueB = b[field]?.length || 0;
        return valueB - valueA;
      });
    }
    setData(sorting);
    setDirectionSort(!directionSort);
  };

  return (
    <div className={styles.page}>
      <Search data={data} setSearchTerms={setSearchResult} />
      <Table data={searchResult} handlerSort={handlerSort} directionSort={directionSort} />
    </div>
  );
}

export default Wrapper;
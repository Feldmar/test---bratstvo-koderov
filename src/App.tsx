import { useEffect, useState } from 'react';
import './App.scss';
import 'sass-reset';
import Table from './components/Table/Table';
import Search from './components/Search/Search';

function App() {
  const [data, setData] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Ошибка при получении данных');
      }
    };
    fetchData();
  }, []);

  const handlerSort = (field: any) => {
    const copyData = data.concat();
    let sorting;

    if (directionSort) {
      sorting = copyData.sort((a: any, b: any) => {
        const valueA = a[field]?.length || 0;
        const valueB = b[field]?.length || 0;
        return valueA - valueB;
      });
      setData(sorting);
    } else {
      sorting = copyData.sort((a: any, b: any) => {
        const valueA = a[field]?.length || 0;
        const valueB = b[field]?.length || 0;
        return valueB - valueA;
      });
      setData(sorting);
    }
    console.table(directionSort)
    setDirectionSort(!directionSort)
  }

  return (
    <div className='app'>
      <Search/>
      <Table data={data} handlerSort={handlerSort} directionSort={directionSort} />
    </div>
  );
}

export default App;

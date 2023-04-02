import { useEffect, useState } from 'react';
import './App.scss';
import 'sass-reset';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState([]);

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

    const sorting = copyData.sort((a: any, b: any) => {
      const valueA = a[field]?.length || 0;
      const valueB = b[field]?.length || 0;

      return valueA - valueB;
    });

    setData(sorting);
    console.table(sorting)
  }

  return (
    <div>
      <Table data={data} setData={setData} handlerSort={handlerSort} />
    </div>
  );
}

export default App;

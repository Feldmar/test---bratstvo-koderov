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

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;

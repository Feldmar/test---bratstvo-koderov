import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import styles from './Search.module.scss';

interface ISearch {
  data: Array<string>;
  setSearchTerms: any;
}

const Search = ({ data, setSearchTerms }: ISearch) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 700);

  useEffect(() => {
    if (debouncedSearch) {
      const filterData = data.filter((item: any) =>
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.body.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setSearchTerms(filterData);
    } else {
      setSearchTerms(data);
    }
  }, [debouncedSearch, data, setSearchTerms]);

  return (
    <div className={styles.container}>
      <input
        type='text'
        className={styles.input}
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
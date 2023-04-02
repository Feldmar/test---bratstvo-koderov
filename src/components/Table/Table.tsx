import { useState } from 'react';
import styles from './Table.module.scss'

interface IData {
  data: any;
  setData: any;
  handlerSort: any;
}

function Table({ data, setData, handlerSort }: IData) {
  const [sort, setSort] = useState([])


  return (
    <table className={styles.container}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.head__title}>
            <div className={styles.column__name}>
              <h5>Title</h5>
              <img src="images/arr-bottom.svg" alt="" width={20} className={styles.array__bottom} onClick={() => handlerSort('title')} />
            </div>
          </th>
          <th className={styles.head__title}>
            <div className={styles.column__name}>
              <h5>Description</h5>
              <img src="images/arr-bottom.svg" alt="" width={20} className={styles.array__bottom} onClick={() => handlerSort('body')} />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={styles.content}>
        {data.map((post: any) => (
          <tr key={post.id}>
            <td className={styles.info}>{post.title}</td>
            <td className={styles.info}>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
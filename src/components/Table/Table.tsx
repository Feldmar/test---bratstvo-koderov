import styles from './Table.module.scss'

interface IData {
  data: Array<string>;
  handlerSort: any;
  directionSort: boolean;
}

function Table({ data, handlerSort, directionSort }: IData) {

  return (
    <table className={styles.container}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.head__title}>
            <div className={styles.column__name}>
              <h5>Title</h5>
              {directionSort ? (
                <img
                  src="images/arr-bottom.svg"
                  alt=""
                  width={20}
                  className={styles.array__bottom}
                  onClick={() => handlerSort('title')}
                />
              ) : (
                <img
                  src="images/arr-top.svg"
                  alt=""
                  width={20}
                  className={styles.array__bottom}
                  onClick={() => handlerSort('title')}
                />
              )}
            </div>
          </th>
          <th className={styles.head__title}>
            <div className={styles.column__name}>
              <h5>Description</h5>
              {directionSort ? (
                <img
                  src="images/arr-bottom.svg"
                  alt=""
                  width={20}
                  className={styles.array__bottom}
                  onClick={() => handlerSort('body')}
                />
              ) : (
                <img
                  src="images/arr-top.svg"
                  alt=""
                  width={20}
                  className={styles.array__bottom}
                  onClick={() => handlerSort('body')}
                />
              )}
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={styles.content}>
        {data.map((item: any) => (
          <tr key={item.id}>
            <td className={styles.content__info}>{item.title}</td>
            <td className={styles.content__info}>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
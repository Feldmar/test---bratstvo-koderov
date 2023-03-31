import styles from './Table.module.scss'

interface IData {
  data: any;
}

function Table({ data }: IData) {
  return (
    <table className={styles.container}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.head__title}><h5>Title</h5></th>
          <th className={styles.head__title}><h5>Description</h5></th>
        </tr>
      </thead>
      <tbody className={styles.content}>
        {data.map((post:any) => (
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
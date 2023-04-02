import styles from './Search.module.scss'

const Search = ({}) => {
  return (
    <div className={styles.container}>
      <input type="text"  className={styles.input}/>
    </div>
  )
}
export default Search
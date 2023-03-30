import styles from './Form.module.scss'

function Form() {
  const options = ['Экология', 'Разработка', 'Медицина', 'Политика'];

  return (
    <form action="" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.items}>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred}>Название организации</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred}>Телефон</label>
            <input type="tel" className={styles.input} />
          </div>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred}>E-mail</label>
            <input type="email" className={styles.input} />
          </div>
        </div>
        <div className={styles.logotype}>
          <label htmlFor="" className={styles.label__requred}>Логотип (jpeg,png)</label>
          <input type="file" accept="image/png, image/jpeg" className={styles.file} />
          <img src="images/man.svg" alt="" className={styles.image} />
          <img src="images/close.svg" alt="" className={styles.close} />
          <div className={styles.take}>
            <img src="images/take.svg" alt="" className={styles.take__image} width={29} height={29} />
            <span className={styles.take__title}>Выберите <br />файл</span>
          </div>
        </div>
      </div>
      <div className={styles.items__large}>
        <div className={styles.item__large__select}>
          <label htmlFor="" className={styles.label__requred}>Направление</label>
          <select name="" id="" className={styles.input__select}>
            {options.map((item, key) => {
              return (
                <option key={key} value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div className={styles.item__large__homepage} >
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large__vk}>
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large__ok}>
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large__facebook}>
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large__instagram}>
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large__youtube}>
          <input type="url" className={styles.input} />
        </div>
        <div className={styles.item__large}>
          <label htmlFor="" className={styles.label}>Руководитель</label>
          <input type="text" className={styles.input} />
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="submit" className={styles.submit}>Стать партнером проекта</button>
        <button type='reset' className={styles.reset}>Отменить</button>
      </div>
    </form>
  )
}
export default Form;
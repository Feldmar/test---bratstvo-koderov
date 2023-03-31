import { useRef, useState } from 'react';
import styles from './Form.module.scss'

function Form() {
  const options = ['Экология', 'Разработка', 'Медицина', 'Политика'];
  const inputRef = useRef(null);
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [logotype, setLogotype] = useState(null);
  const [direction, setDirection] = useState('');
  const [homepage, setHomepage] = useState('');
  const [vk, setVk] = useState('');
  const [ok, setOk] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [leader, setLeader] = useState('');
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  }

  function validateEmail(emailValue: string) {
    setEmail(emailValue);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!emailValid) {
      console.log('Please enter a valid email address');
      setSubmit(false)
      return;
    }
  }

  function validateOrganization(orgValue: string) {
    setOrgName(orgValue);
    const orgValid = /^[a-zA-Zа-яА-Я0-9._-]+$/g.test(orgValue);
    if (!orgValid) {
      console.log('Please enter a valid org name');
      setSubmit(false)
      return;
    }
    setSubmit(true)

  }

  function validateTel(telValue: string) {
    setPhone(telValue);
    const telValid = /^\+\d+$/.test(telValue);
    if (!telValid) {
      console.log('Please enter a valid telephone');
      setSubmit(false)
      return;
    }
    setSubmit(true)
  }

  function validateLead(leadValue: string) {
    setLeader(leadValue);
    const leadValid = /^[a-zA-Zа-яА-Я0-9._-]+$/g.test(leadValue);

    if (!leadValid) {
      console.log('Please enter a valid leader name');
      setSubmit(false)
      return;
    }
    setSubmit(true)
  }

  const validateLogotype = (logo: any) => {
    setLogotype(logo);

    if (!logo) {
      console.log("File not found");
      setSubmit(false)
      return;
    }

    if (logo.type !== "image/png" && logo.type !== "image/jpeg") {
      console.log("Choose a PNG or JPEG file");
      setSubmit(false)
      return;
    }
    setSubmit(true)
  };

  const handleReset = () => {
    setOrgName('');
    setPhone('');
    setEmail('');
    setLogotype(null);
    setDirection('');
    setHomepage('');
    setVk('');
    setOk('');
    setFacebook('');
    setInstagram('');
    setYoutube('');
    setLeader('');
  };

  return (
    <form action="post" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.items}>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred} >Название организации</label>
            <input type="text" className={styles.input} value={orgName} onChange={(e) => validateOrganization(e.target.value)} required />
          </div>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred}>Телефон</label>
            <input type="tel" className={styles.input} value={phone} onChange={(e) => validateTel(e.target.value)} />
          </div>
          <div className={styles.item__small}>
            <label htmlFor="" className={styles.label__requred}>E-mail</label>
            <input type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              required />
          </div>
        </div>
        <div className={styles.logotype}>
          <label htmlFor="" className={styles.label__requred}>Логотип (jpeg,png)</label>
          <input type="file" accept="image/png, image/jpeg" className={styles.file} ref={inputRef} onChange={(e) => validateLogotype((e.target as HTMLInputElement).files?.[0])} />
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
          <input type="text" className={styles.input} value={leader} onChange={(e) => validateLead(e.target.value)} />
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          type="submit"
          className={orgName && email && leader && submit ? styles.submit : styles.invalid}
          onClick={handleSubmit}>
          Стать партнером проекта
        </button>
        <button
          type='reset'
          className={styles.reset}
          onClick={handleReset}>
          Отменить
        </button>
      </div>
    </form>
  )
}
export default Form;
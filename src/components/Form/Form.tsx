import { useEffect, useRef, useState } from 'react';
import styles from './Form.module.scss';

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
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const url = 'https://example.com/partnership';
    const data = {
      email: email,
      orgName: orgName,
      phone: phone,
      logotype: logotype,
      direction: direction,
      homepage: homepage,
      vk: vk,
      ok: ok,
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      leader: leader
    };

    try {
      const response = await fetch(url, {
        method: 'PUT', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  useEffect(() => {
    if (!message) {
      setSubmit(true)
    }
  }, [message])

  function validateEmail(emailValue: string) {
    setEmail(emailValue);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!emailValid) {
      setMessage('Пожалуйста, введите корректный адрес e-mail')
      setSubmit(false)
      return;
    }
    setMessage('')
  }

  function validateOrganization(orgValue: string) {
    setOrgName(orgValue);
    const orgValid = /^[a-zA-Zа-яА-Я0-9._-]{5,}$/g.test(orgValue);
    if (!orgValid) {
      setMessage('Пожалуйста, введите корректное название организации')
      setSubmit(false)
      return;
    }
    setMessage('')
  }

  function validateTel(telValue: string) {
    setPhone(telValue);
    const telValid = /^(\+?\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(telValue);
    if (!telValid) {
      setMessage('Пожалуйста, введите корректный номер телефона')
      setSubmit(false)
      return;
    }
    setMessage('')
  }

  function validateLead(leadValue: string) {
    setLeader(leadValue);
    const leadValid = /^[a-zA-Zа-яА-Я]+([-\s'][a-zA-Zа-яА-Я]+)?\s+[a-zA-Zа-яА-Я]+([-\s'][a-zA-Zа-яА-Я]+)?\s+[a-zA-Zа-яА-Я]+([-\s'][a-zA-Zа-яА-Я]+)?$/.test(leadValue);

    if (!leadValid) {
      setMessage('Пожалуйста, введите корректно ФИО руководителя')
      setSubmit(false)
      return;
    }
    setMessage('')
  }

  const validateLogotype = (logo: any) => {
    setLogotype(logo);

    if (!logo) {
      setMessage('Файл не найден')
      setSubmit(false)
      return;
    }

    if (logo.type !== "image/png" && logo.type !== "image/jpeg") {
      setMessage('Пожалуйста используйте формат PNG или JPEG')
      setSubmit(false)
      return;
    }
    setMessage('')
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
    <>
      {message && (
        <div className={styles.message}>
          <img src="images/message.svg" width={25} alt="" />
          <span>{message}</span>
        </div >
      )}
      <form action="post" className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <div className={styles.items}>
            <div className={styles.item__small}>
              <label htmlFor="orgName" className={styles.label__requred}>Название организации</label>
              <input
                type="text"
                className={styles.input}
                value={orgName}
                id="orgName"
                onChange={(e) => validateOrganization(e.target.value)}
                required
              />
            </div>
            <div className={styles.item__small}>
              <label htmlFor="phone" className={styles.label__requred}>Телефон</label>
              <input
                type="tel"
                className={styles.input}
                value={phone}
                id="phone"
                onChange={(e) => validateTel(e.target.value)}
                required
              />
            </div>
            <div className={styles.item__small}>
              <label htmlFor="email" className={styles.label__requred}>E-mail</label>
              <input type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                required />
            </div>
          </div>
          <div className={styles.logotype}>
            <label htmlFor="logotype" className={styles.label__requred}>Логотип (jpeg,png)</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className={styles.file}
              ref={inputRef}
              id="logotype"
              onChange={(e) => validateLogotype((e.target as HTMLInputElement).files?.[0])}
            />
            <img src="images/man.svg" alt="" className={styles.logotype__picture} />
            <img src="images/close.svg" alt="" className={styles.logotype__close} />
            <div className={styles.take}>
              <img src="images/take.svg" alt="" className={styles.logotype__icon} width={29} height={29} />
              <span className={styles.logotype__title}>Выберите <br />файл</span>
            </div>
          </div>
        </div>
        <div className={styles.items__large}>
          <div className={styles.item__large__select}>
            <label htmlFor="direction" className={styles.label__requred}>Направление</label>
            <select name="" id="direction" className={styles.input__select}>
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
            <label htmlFor="leader" className={styles.label}>Руководитель</label>
            <input
              type="text"
              className={styles.input}
              value={leader}
              id="leader"
              onChange={(e) => validateLead(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            type="submit"
            className={orgName && email && leader && submit ? styles.submit : styles.invalid}
          >
            Стать партнером проекта
          </button>
          <button
            type='reset'
            className={styles.reset}
            onClick={handleReset}>
            Отменить
          </button>
        </div>
      </form></>
  )
}
export default Form;
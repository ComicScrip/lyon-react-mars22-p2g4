import React, { useState } from 'react';
import style from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const display = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <label htmlFor="name">
        <input
          onChange={handleChangeName}
          value={name}
          id="name"
          type="text"
          placeholder="Dupont"
          required
        />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        <input
          onChange={handleChangeEmail}
          value={email}
          id="email"
          type="email"
          placeholder="dupont@gmail.com"
          required
        />
      </label>
      <br />
      <br />
      <label htmlFor="message">
        <textarea
          id="message"
          rows="10"
          type="text"
          placeholder="Dites nous tout."
          required
        />
      </label>
      <br />
      <br />
      <button type="submit" className={style.submitBtn} onClick={display}>
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;

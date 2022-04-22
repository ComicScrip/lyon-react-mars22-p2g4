import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleChangeMessage(e) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast(
      'Merci de votre partage, nous reviendrons vers vous le plus rapidement possible !',
      {
        theme: 'dark',
        type: 'success',
        position: 'bottom-center',
      }
    );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            onChange={handleChangeMessage}
            value={message}
            id="message"
            rows="10"
            type="text"
            placeholder="Dites nous tout."
            required
          />
        </label>
        <br />
        <br />
        <button type="submit" className={style.submitBtn}>
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default ContactForm;

import React from 'react';
import style from './DevMember.module.css';

export default function DevMember({ firstName, lastName, avatarUrl }) {
  return (
    <div className={style.container}>
      <h2 className={style.dev}>{firstName}</h2>
      <h3>{lastName}</h3>
      <img className={style.avatar} src={avatarUrl} alt={firstName} />
    </div>
  );
}

import React from 'react';
import style from './DevMember.module.css';

export default function DevMember({
  firstName,
  lastName,
  avatarUrl,
  gitHubUrl,
}) {
  return (
    <div className={style.container}>
      <h2 className={style.dev}>{firstName}</h2>
      <h3>{lastName}</h3>
      <a href={gitHubUrl} target="_blank" rel="noreferrer">
        <img className={style.avatar} src={avatarUrl} alt={firstName} />
      </a>
    </div>
  );
}

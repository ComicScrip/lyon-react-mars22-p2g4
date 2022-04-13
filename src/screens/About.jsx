import React from 'react';
import dev1 from '../components/assets/dev1.jpg';
import dev2 from '../components/assets/dev2.jpg';
import dev3 from '../components/assets/dev3.jpg';
import dev4 from '../components/assets/dev4.jpg';
import dev5 from '../components/assets/dev5.jpg';
import DevMembers from '../components/DevMembers';
import style from './About.module.css';

export default function About() {
  return (
    <div className={style.cadre}>
      <h1 className={style.title}>Notre Equipe</h1>
      <div className={style.item}>
        <DevMembers firstName={'Florent'} avatarUrl={dev1} />
        <DevMembers firstName={'Simon'} avatarUrl={dev2} />
        <DevMembers firstName={'Ismael'} avatarUrl={dev3} />
        <DevMembers firstName={'Jean-Marie'} avatarUrl={dev4} />
        <DevMembers firstName={'Christelle'} avatarUrl={dev5} />
      </div>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
        perspiciatis eum veritatis et nisi temporibus blanditiis, labore id
        eveniet voluptates dolore quod animi ut fugit reiciendis non rerum
        quaerat!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
        incidunt tempore quidem nihil veniam officiis porro consequuntur maxime
        dignissimos modi dolor rem.
      </p>
    </div>
  );
}

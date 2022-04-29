import React from 'react';
import dev1 from '../components/assets/dev1.jpg';
import dev2 from '../components/assets/dev2.jpg';
import dev3 from '../components/assets/dev3.jpg';
import dev4 from '../components/assets/dev4.jpg';
import dev5 from '../components/assets/dev5.jpg';
import aboutBackground from '../components/assets/aboutBackground.jpg';
import DevMember from '../components/DevMember';
import ContactForm from '../components/ContactForm';
import style from './About.module.css';

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={style.boxes}
    >
      <div className={style.cadre}>
        <h1 className={style.title}>Notre Equipe</h1>
        <div className={style.item}>
          <DevMember
            firstName={'Florent'}
            avatarUrl={dev1}
            gitHubUrl="https://github.com/fflachat"
          />
          <DevMember
            firstName={'Simon'}
            avatarUrl={dev2}
            gitHubUrl="https://github.com/Sim-guy"
          />
          <DevMember
            firstName={'Ismael'}
            avatarUrl={dev3}
            gitHubUrl="https://github.com/Isma69"
          />
          <DevMember
            firstName={'Jean-Marie'}
            avatarUrl={dev4}
            gitHubUrl="https://github.com/jmj69"
          />
          <DevMember
            firstName={'Christelle'}
            avatarUrl={dev5}
            gitHubUrl="https://github.com/ChrichriR"
          />
        </div>
        <p className={style.text}>
          Heureux de faire votre connaissance ! Nous espérons que vous avez eu
          autant de plaisir à utiliser l'application "Pic'n'Move" que l'équipe
          en a eu à la créer ! Si ce n'est pas encore le cas nous sommes à votre
          écoute pour vous aider à en profiter pleinement ; n'hésitez pas à nous
          contacter, nous vous répondrons dans les meilleurs délais ! Car
          Pic'n'Move c'est avant tout une équipe, des passions et la rencontre
          de plusieurs univers. Nous comptons dans nos rangs des sportifs, des
          ingénieurs, des photographes et même une amoureuse des chats ! Notre
          but est de faciliter la pratique du sport pour le plus grand nombre et
          dans les meilleurs conditions. "Pic'n'move" vous offre une solution
          digitale sur mesure qui vous accompagne à la découverte
          d’environnements extraordinaires pour des souvenirs inoubliables à
          partager ! Salutations sportives !
        </p>
      </div>
      <div className={style.box}>
        <h2 className={style.title}>Contact</h2>
        <div className={style.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

import style from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import pageNotFound from '../components/assets/400cat.jpg';

export default function NotFoundPage() {
  return (
    <div
      className={style.box}
      style={{
        backgroundImage: `url(${pageNotFound})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className={style.link}>
        <Link to="/">Retour à l'accueil</Link>
      </p>
    </div>
  );
}

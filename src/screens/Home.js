import React from 'react';
import homeBackground from '../components/assets/home-background.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import style from './Home.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
  typography: {
    fontSize: 20,
  },
});

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={style.boxes}
    >
      <div className={style.container}>
        <h1 className={style.title}>Bienvenue sur Pic'N'Move</h1>
        <p className={style.text}>
          Votre activité sportive selon votre niveau. <br /> Avec des photos et
          la météo pour vous aider.
        </p>
      </div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" size="large">
          LET'S GO !
        </Button>
      </ThemeProvider>
    </div>
  );
}

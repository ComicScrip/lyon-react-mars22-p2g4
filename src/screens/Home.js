import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" size="large">
        Let's GO !
      </Button>
    </ThemeProvider>
  );
}

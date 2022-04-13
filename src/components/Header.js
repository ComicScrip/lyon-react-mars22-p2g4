/* eslint-disable no-undef */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from 'material-ui-colors';
import { CloudQueue } from '@mui/icons-material';
import IceSkatingIcon from '@mui/icons-material/IceSkating';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: red[500] }}>
          <CloudQueue fontSize="large" />

          <Typography
            textAlign="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pic'n'Move
          </Typography>
          <IceSkatingIcon fontSize="large" />

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// export default function Header() {
//   return (
//     <header>
//       <nav className="navBar">
//         <div>
//           <img
//             src="img/logo_meteo.png"
//             alt="notrelogométéo"
//             width="40"
//             height="40"
//           />
//         </div>
//         <div className="logoShoe">LogoShoe</div>
//         <Link className="Navlink" to="/">
//           Accueil
//         </Link>
//         <Link className="Navlink" to="/about">
//           A propos
//         </Link>
//         <Link className="Navlink" to="/journal">
//           Journal
//         </Link>
//         <Link className="Navlink" to="/road">
//           Parcours
//         </Link>
//       </nav>
//     </header>
//   );
// }

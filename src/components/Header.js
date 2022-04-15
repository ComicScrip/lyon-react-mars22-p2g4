/* eslint-disable no-undef */
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from 'material-ui-colors';
import { CloudQueue } from '@mui/icons-material';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Home from '@mui/icons-material/Home';
import EditRoad from '@mui/icons-material/EditRoad';
import MenuBook from '@mui/icons-material/MenuBook';
import Info from '@mui/icons-material/Info';

export default function Header() {
  const [toggleState, setToggleState] = useState(false);

  const toggleFunction = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      <div>User</div>
      <button type="button" onClick={toggleFunction}>
        Click
      </button>
      {toggleState ? (
        <div>toto</div>
      ) : (
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

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Paper sx={{ width: 320, maxWidth: '100%' }}>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <Home fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Home</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘X
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <ListItemIcon>
                        <EditRoad fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Road</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘C
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <ListItemIcon>
                        <MenuBook fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Journal</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘V
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <ListItemIcon>
                        <Info fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>About</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘F
                      </Typography>
                    </MenuItem>

                    <Divider />
                  </MenuList>
                </Paper>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </div>
  );
}

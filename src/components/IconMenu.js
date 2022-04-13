import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Home from '@mui/icons-material/Home';
import EditRoad from '@mui/icons-material/EditRoad';
import MenuBook from '@mui/icons-material/MenuBook';
import Info from '@mui/icons-material/Info';

export default function IconMenu() {
  return (
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
  );
}

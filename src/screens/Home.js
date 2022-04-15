import { MenuItem, MenuList, Paper } from '@mui/material';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { EditRoad } from '@mui/icons-material';

export default function Home() {
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
        <Paper>
          {' '}
          <MenuList>
            {' '}
            <MenuItem>
              {' '}
              <ListItemIcon>
                {' '}
                <EditRoad fontSize="small" />{' '}
              </ListItemIcon>{' '}
            </MenuItem>{' '}
          </MenuList>{' '}
        </Paper>
      )}
    </div>
  );
}

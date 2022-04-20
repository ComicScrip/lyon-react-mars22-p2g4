import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../History.css';
import finishedRaces from './FinishedRaces';

export default function SearchHistory() {
  return (
    <Stack alignItems="center">
      <Autocomplete
        className="searchBar"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={finishedRaces.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

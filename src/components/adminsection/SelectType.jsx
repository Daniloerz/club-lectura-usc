import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectType({onChange}) {

  const [type, setType] = React.useState('');
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Tipo"
          onChange={onChange}
        >
          <MenuItem value='libro'>Libro</MenuItem>
          <MenuItem value='usuario'>Usuario</MenuItem>
          <MenuItem value='club'>Club</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
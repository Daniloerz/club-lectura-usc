import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCategory({labelName}) {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
      <FormControl sx={{ width: 250 }} size="small">
        <InputLabel id="demo-select-small-label">{labelName}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={type}
          label={labelName}
          onChange={handleChange}
        >
          <MenuItem value='drama'>Drama</MenuItem>
          <MenuItem value='terror'>Terror</MenuItem>
          <MenuItem value='romance'>Romance</MenuItem>
        </Select>
      </FormControl>
  );
}
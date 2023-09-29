import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SelectCategory from './SelectCategory';
import TextField from '@mui/material/TextField';


const ariaLabel = { 'aria-label': 'description' };

export default function CreateClub() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Nombre del club" inputProps={ariaLabel} />  
      <Input placeholder="Principal Responsable" inputProps={ariaLabel} />
      <br></br>
      <SelectCategory labelName={'Cat. Principal'}/>
      <SelectCategory labelName={'Cat. Secundaria'}/>
      <TextField fullWidth label="Sinopsis" id="sinopsis"/>
    </Box>
  );
}
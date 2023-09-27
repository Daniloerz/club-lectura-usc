import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import SelectCategory from './SelectCategory';
import Grid from '@mui/material/Grid';



const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Titulo" inputProps={ariaLabel} />  
      <Input placeholder="Autor" inputProps={ariaLabel} />
      <Input placeholder="Año" inputProps={ariaLabel} />
      <Input placeholder="Editorial" inputProps={ariaLabel} />
      <Input placeholder="ISBN" inputProps={ariaLabel} />   
      <SelectCategory />  
      <TextField fullWidth label="Sinopsis" id="sinopsis"/>
      
      
    </Box>
  );
}
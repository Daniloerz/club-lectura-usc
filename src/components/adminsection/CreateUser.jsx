import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';

const ariaLabel = { 'aria-label': 'description' };

export default function CreateUser() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Primer Nombre" inputProps={ariaLabel} />  
      <Input placeholder="Apellido" inputProps={ariaLabel} />
      <Input placeholder="Email" inputProps={ariaLabel} />
      <Input placeholder="Teléfono" inputProps={ariaLabel} />   
      <Input placeholder="Documento ID" inputProps={ariaLabel} />   
      <Input placeholder="Fecha de nacimiento" inputProps={ariaLabel} type='Date'/>
      <FormControl sx={{width: '25ch'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" type='password'>Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </Box>
  );
}
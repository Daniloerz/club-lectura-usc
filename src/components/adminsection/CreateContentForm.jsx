import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Title from './Title';
import CreateBook from './CreateBook';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CreateUser from './CreateUser';
import CreateClub from './CreateClub';



export default function CreateContentForm({typeSelection}) {
  const theme = useTheme();

  function getForm(){
    if(typeSelection === 'libro'){
      return <CreateBook />;
    }else if(typeSelection === 'usuario'){
      return <CreateUser />;
    }if(typeSelection === 'club'){
      return <CreateClub />;
    }
  }

  return (
    <React.Fragment>
      <Grid  container
  direction="row"
  justifyContent="space-between">
      <Title>Ingresa los datos</Title>
      <Button
              type="submit"
              variant="contained"
            >
              Crear
            </Button>
      </Grid>
      {getForm()}
    </React.Fragment>
  );
}

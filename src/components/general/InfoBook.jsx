import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import portada from '../../img/portadas-libros.jpg'

export default function InfoBook({titulo, autor}){
    return (

        <Container sx={{ py: 8, display: 'flex', alignItems: 'center'}} >
      {<img style={{ display: 'block', marginRight: 20, height: 500, borderStyle: 'groove'}} src= {portada} alt='logoUsc' />}

        <Typography
          variant="subtitle1"
          color="black"
          component="p"
          sx={{height:500, width: 800, padding: 5, borderStyle: 'double', backgroundColor: 'rgb(0, 75, 135,0.75)'}}
        >
          
          <b>Título del Libro:</b> {titulo}
          <Divider/>
          <b>Autor:</b> {autor}
          <Divider/>
          <b>Año de Publicación:</b> {autor}
          <Divider/>
          <b>Género:</b> {autor}
          <Divider/>
          <b>Editorial:</b> {autor}
          <Divider/>
          <b>ISBN:</b> {autor}
          <Divider/>
          <b>Sinopsis:</b> {autor}
        </Typography>
        </Container>

    );
}
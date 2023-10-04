import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import portada from '../../img/club-de-lectura.jpeg'
import { Divider } from '@mui/material';

export default function InfoClub({titulo, autor}){
    return (
        <Container sx={{ py: 8, display: 'flex', alignItems: 'center'}} >
        {<img style={{ display: 'block', marginRight: 20, height: 500, borderStyle: 'groove'}} src= {portada} alt='logoUsc' />}
  
          <Typography
            variant="subtitle1"
            color="black"
            component="p"
            sx={{height:500, width: 800, padding: 5, borderStyle: 'double', backgroundColor: 'rgb(0, 75, 135,0.75)'}}
          >
            
            <b>Nombre del club:</b> {titulo}
            <Divider />
            <b>Principal Responsable:</b> {autor}
            <Divider />
            <b>Año de Creación:</b> {autor}
            <Divider />
            <b>Géneros principales:</b> {autor}
            <Divider />
            <b>Periodicidad de reuniones:</b> {autor}
            <Divider />
            <b>Cantidad de Integrantes:</b> {autor}
            <Divider />
            <b>Descripción:</b> {autor}
          </Typography>
          </Container>
    );
}
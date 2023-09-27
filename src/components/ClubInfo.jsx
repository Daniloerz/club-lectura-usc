import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderLandingPage from './HeaderLandingPage';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';
import Rating from './Rating'; 
import Comments from './Comments'; 
import portada from '../img/club-de-lectura.jpeg'



const sections = [
    { title: 'Drama', url: '#' },
    { title: 'Ficción', url: '#' },
    { title: 'Historia', url: '#' },
    { title: 'Ciencia', url: '#' },
    { title: 'Internacionales', url: '#' },
    { title: 'Locales', url: '#' },
    { title: 'Romance', url: '#' },
    { title: 'Aventura', url: '#' },
    { title: 'Infantiles', url: '#' },
    { title: 'Poesía', url: '#' },
  ];
  
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      usc.edu.co
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Album({titulo, autor}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HeaderLandingPage title="Club de lectura - USC" sections={sections}/>
        <Container sx={{ py: 8, display: 'flex', alignItems: 'center'}} >
        <Card
                  sx={{ marginRight: 10, display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    sx={{
                      pt: '100%',
                    }}
                    image={portada}
                  />
                  <CardContent sx={{maxHeight: 1000, marginRight: 50}} >
                  </CardContent>
                  <CardActions sx={{backgroundColor: '#004B87', display: 'flex', justifyContent: 'space-around'}}>
                    <Button  size="small" sx={{color: 'white'}}>Ver</Button>
                    <Button  size="small" sx={{color: 'white'}}>Añadir</Button>
                  </CardActions>
                </Card>
        <Typography
          variant="subtitle1"
          color="black"
          component="p"
        >
          <b>Nombre del club:</b> {titulo}
          <br></br>
          <b>Principal Responsable:</b> {autor}
          <br></br>
          <b>Año de Creación:</b> {autor}
          <br></br>
          <b>Géneros principales:</b> {autor}
          <br></br>
          <b>Periodicidad de reuniones:</b> {autor}
          <br></br>
          <b>Cantidad de Integrantes:</b> {autor}
          <br></br>
          <b>Descripción:</b> {autor}
        </Typography>
        </Container>
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'black', fontSize: 30, color: '#004B87', padding: 5 }}
        >
          Califica el Club
        </Typography>
        <Rating />
        <TextField sx={{margin: 5}} id="outlined-basic" label="Comentarios" variant="outlined" />  
        <Button variant="contained" sx={{margin: 'auto', maxWidth: 100, marginBottom: 5}}>Enviar</Button>      
        </Container>
        <Container>
          <Comments />
        </Container>
      <Footer title="Universidad Santiago de Cali"
                description="Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
        Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.
        Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional.
        
        Acreditada Institucionalmente en Alta Calidad a través de la Resolución No. 018144 del 27 de septiembre de 2021, emanada por el Ministerio de Educación Nacional.
        Ciudadela Pampalinda
        Calle 5 # 62-00 Barrio Pampalinda
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia        

        Sede Centro
        Carrera 8 # 8-17 Barrio Santa Rosa
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia

        Seccional Palmira
        Carrera 29 # 38-47 Barrio Alfonso López
        PBX: +57 (602) 518 3000 Ext. 9300-9301
        Palmira, Valle del Cauca
        Colombia" />
    </ThemeProvider>
  );
}




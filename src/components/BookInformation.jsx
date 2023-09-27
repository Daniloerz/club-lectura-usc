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
import portada from '../img/portadas-libros.jpg'



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
        Your Website
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
                  sx={{ marginRight: 10, maxWidth: 600, display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '100%',
                    }}
                    image={portada}
                  />
                  <CardContent sx={{maxHeight: 800, marginRight: 50}} >
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button variant="contained" size="small">Ver</Button>
                    <Button variant="contained" size="small">Añadir</Button>
                  </CardActions>
                </Card>
        <Typography
          variant="subtitle1"
          color="black"
          component="p"
        >
          <b>Título del Libro:</b> {titulo}
          <br></br>
          <b>Autor:</b> {autor}
          <br></br>
          <b>Año de Publicación:</b> {autor}
          <br></br>
          <b>Género:</b> {autor}
          <br></br>
          <b>Editorial:</b> {autor}
          <br></br>
          <b>ISBN:</b> {autor}
          <br></br>
          <b>Sinopsis:</b> {autor}
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
          Califica el libro
        </Typography>
        <Rating />
        <TextField sx={{margin: 5}} id="outlined-basic" label="Comentarios" variant="outlined" />  
        <Button variant="contained" sx={{margin: 'auto', maxWidth: 100, marginBottom: 5}}>Enviar</Button>      
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




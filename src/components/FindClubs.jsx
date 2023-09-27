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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HeaderLandingPage title="Club de lectura - USC" sections={sections}/>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <TextField id="standard-basic" label="Buscar Club" variant="standard" sx={{width: 500}} />
        <IconButton>
          <SearchIcon sx={{color: '#004B87'}}/>
        </IconButton>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Búsqueda avanzada</Button>
             
            </Stack>
          </Container>
        </Box>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'black', fontSize: 30, color: '#004B87' }}
        >
          Clubs de Lectura
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?groups"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nombre del Club
                    </Typography>
                    <Typography>
                      Corta descripción del club
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
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




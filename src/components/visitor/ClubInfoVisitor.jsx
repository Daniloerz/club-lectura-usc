import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../main/Header';
import Footer from '../main/Footer';
import Comments from '../main/Comments'; 
import { Divider } from '@mui/material';
import InfoClub from '../general/InfoClub';

const defaultTheme = createTheme();

export default function ClubInfoVisitor({titulo, autor}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header title="Club de Lectura - USC"/>
      <InfoClub titulo={titulo} autor={autor} />
        <Divider/>
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'black', fontSize: 30, color: '#004B87', padding: 5 }}
        >
          Comentarios y Reseñas
        </Typography>
        </Container >
        <Container sx={{marginBottom: 5}}>
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




import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../main/Header';
import { TextField } from '@mui/material';
import Footer from '../main/Footer';
import ContentVisitor from './ContentVisitor';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function VisitorPage() {

  const [type, setType] = React.useState('both');
  
  const handleChange = (event) => {
    setType(event.target.value);
  };

  function setResults(){
    if(type === 'both'){
      return (
      <>
      <ContentVisitor items={cards} title={'Libros'} name={'Libro'} url={'/bookinfov'}/>
      <ContentVisitor items={cards} title={'Clubes de lectura'} name={'Club'} url={'/clubinfov'}/>
      </>);
    } else if (type === 'libro'){
      return <ContentVisitor items={cards} title={'Libros'} name={'Libro'} url={'/bookinfov'}/>;
    } else if (type === 'club'){
      return <ContentVisitor items={cards} title={'Clubes de lectura'} name={'Club'} url={'/clubinfov'}/>;
    }
  }

  return(
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header title="Club de Lectura - USC"/>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <TextField id="standard-basic" label="Buscar por palabra clave" variant="standard" sx={{width: 500}} />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" value="libro" onClick={handleChange}>Buscar Libro</Button>
              <Button variant="contained" value="club" onClick={handleChange}>Buscar Club</Button>
             
            </Stack>
          </Container>
        </Box>
        {setResults()}
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




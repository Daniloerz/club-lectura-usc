import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Grid from '@mui/material/Grid';
import Title from '../adminsection/Title';
import { Box, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';



// Generate Order Data
function createData(id, titulo, autor, anio, editorial, isbn, sinopsis, jpg, estado) {
  return { id, titulo, autor, anio, editorial, isbn, sinopsis, jpg, estado };
}

const rows = [
  createData(
    0,
    'Cien años de soledad',
    'Gabo',
    '1999',
    'Tupelo',
    '3719',
    'ABCDE',
    'imagen',
    'disponible',
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function UserHistory() {
  return (
    <React.Fragment>
      
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Books info */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Libros del usuario </Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Libro</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell>Categoría</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Info</TableCell>
                    <TableCell>Leer</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <Link href='/bookinfov'>
                        Ver
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href='/clubinfov'>
                        Leer
                      </Link>
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
              </Paper>
            </Grid>

            {/* Cubs info*/}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Title>Clubes de lectura del usuario </Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre club</TableCell>
                    <TableCell>Categoría principal</TableCell>
                    <TableCell>Líder principal</TableCell>
                    <TableCell>Info</TableCell>
                    

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Link href='/clubinfov'>
                        Ver
                      </Link>
                    </TableCell>
                    
                  </TableRow>

                </TableBody>
              </Table>
              </Paper>
            </Grid>

          </Grid>
        </Container>
     

    </React.Fragment>
  );
}

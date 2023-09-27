import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

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

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Información</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Año</TableCell>
            <TableCell>Editorial</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Sinopsis</TableCell>
            <TableCell>Portada</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.titulo}</TableCell>
              <TableCell>{row.autor}</TableCell>
              <TableCell>{row.anio}</TableCell>
              <TableCell>{row.editorial}</TableCell>
              <TableCell>{row.isbn}</TableCell>
              <TableCell>{row.sinopsis}</TableCell>
              <TableCell>{row.jpg}</TableCell>
              <TableCell>{row.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mas!
      </Link>
    </React.Fragment>
  );
}

import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, titulo, autor, anio, editorial, isbn, category, sinopsis, jpg, accessLink) {
  return { id, titulo, autor, anio, editorial, isbn, category, sinopsis, jpg, accessLink };
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
    'Drama',
    'imagen.jpg',
    'link',
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function CreateBookTableInfo() {
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
            <TableCell>Categoría</TableCell>
            <TableCell>Sinopsis</TableCell>
            <TableCell>Img</TableCell>
            <TableCell>Acceso</TableCell>
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
              <TableCell>{row.category}</TableCell>
              <TableCell>
                <Link href={row.jpg}>
                  portada
                </Link>
              </TableCell>
              <TableCell>
                <Link href={row.accessLink}>
                  Leer
                </Link>
              </TableCell>
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

import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, name, owner, cat1, cat2) {
  return { id, name, owner, cat1, cat2 };
}

const rows = [
  createData(
    0,
    'Club de lectura - USC',
    'Danilo',
    'Drama',
    'Aventura',
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RenderClubCreatedInfoTable() {
  return (
    <React.Fragment>
      <Title>Información</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell>Cat. Ppal</TableCell>
            <TableCell>Cat. 2</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.cat1}</TableCell>
              <TableCell>{row.cat2}</TableCell>
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

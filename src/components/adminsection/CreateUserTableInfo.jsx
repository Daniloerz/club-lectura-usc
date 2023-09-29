import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Checkbox } from '@mui/material';

function createData(id, name, lastName, email, telephone, document, age, pass ) {
  return { id, name, lastName, email, telephone, document, age, pass  };
}

const rows = [
  createData(
    0,
    'Danilo',
    'Ramirez',
    'ad',
    '2312',
    '1231231',
    '29',
    '**********',
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function CreateUserTableInfo(props) {

  return (
    <React.Fragment>
      <Title>Información</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Documento</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Télefono</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Contraseña</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.document}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.telephone}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.pass}</TableCell>
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

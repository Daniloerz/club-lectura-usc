import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import InputAdmin from './InputAdmin';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid  container
  direction="row"
  justifyContent="space-between">
      <Title>Ingresa los datos</Title>
      <Button variant="contained" size="small">Enviar</Button>
      </Grid>
      <InputAdmin />
    </React.Fragment>
  );
}

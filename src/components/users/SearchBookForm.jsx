import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import SelectCategory from '../adminsection/SelectCategory';
import Button from '@mui/material/Button';

export default function SearchBook() {
  return (
    <React.Fragment>
        <Paper sx={{m: 5, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h6" gutterBottom>
        Buscar Libro
      </Typography>
      <Grid container spacing={3} display='inline-block' margin= 'auto' >
        <Grid item sm={10}>
          <TextField
            id="titulo"
            name="titulo"
            label="Título"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item sm={10}>
          <TextField
            
            id="autor"
            name="autor"
            label="Autor"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item sm={10}>
          <TextField
            
            id="isbn"
            name="isbn"
            label="ISBN"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item >
          <SelectCategory labelName='Categoría'/>
        </Grid>
        
        
      </Grid>

      <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Buscar
            </Button>
        </Paper>
      
    </React.Fragment>
  );
}
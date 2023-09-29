import * as React from 'react';
import SearchClubForm from '../users/SearchClubForm';
import BooksSearched from '../users/InfoSearched';
import Grid from '@mui/material/Grid';

export default function SearchClub() {

  return (

    <Grid display='flex'>
      <SearchClubForm />
      <BooksSearched />
    </Grid>

  );
}

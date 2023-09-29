import * as React from 'react';
import SearchBookForm from '../users/SearchBookForm';
import BooksSearched from '../users/InfoSearched';
import Grid from '@mui/material/Grid';

export default function SearchBook() {

  return (
    <Grid display='flex'>
      <SearchBookForm />
      <BooksSearched />
    </Grid>
  );
}

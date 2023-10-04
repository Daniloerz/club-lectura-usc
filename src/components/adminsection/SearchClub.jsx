import * as React from 'react';
import SearchClubForm from '../users/SearchClubForm';
import ClubSearched from '../users/InfoSearched';
import Grid from '@mui/material/Grid';
import {Divider} from '@mui/material';


export default function SearchClub() {

  return (
    <Grid display='flex'>
      <SearchClubForm />
      <ClubSearched />
      <Divider />
    </Grid>
  );
}

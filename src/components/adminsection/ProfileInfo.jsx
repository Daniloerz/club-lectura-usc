import * as React from 'react';

import { Avatar, Grid, Paper } from "@mui/material";
import PersonalInformationUser from "../users/PersonalInformationUser";
import UserHistory from '../users/UserHistory';


export default function ProfileInfo() {
  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://source.unsplash.com/random?person"
          sx={{ width: 200, height: 200, margin: 'auto' }} />
      </Grid>
      {/* Personal Information */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <PersonalInformationUser />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <UserHistory />
        </Paper>
      </Grid>
      </Grid>
    </>
  );
}
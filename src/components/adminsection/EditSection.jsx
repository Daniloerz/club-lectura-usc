import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CreateContentForm from './CreateContentForm';
import SelectTypeItem from './SelectTypeItem';
import CreateUserTableInfo from './CreateUserTableInfo';
import CreateBookTableInfo from './CreateBookTableInfo';
import RenderClubCreatedInfoTable from './RenderClubCreatedInfoTable';
import SearchBookForm from '../users/SearchBookForm';
import SearchClubForm from '../users/SearchClubForm';
import SearchUserForm from './SearchUserForm';

export default function EditSection(){
    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
      };

      function getForm(){
        if(type === 'libro'){
          return <SearchBookForm />
        } else if (type === 'usuario'){
          return <SearchUserForm />
        } else if (type === 'club'){
          return <SearchClubForm />
        }
      }

    return(
        <>
        <Grid container 
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap='nowrap'
        spacing={3}>
         <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <SelectTypeItem onTypeChange={handleChange}/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {getForm()}
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    justifyContent: 'center'
                  }}
                >
                  <CreateContentForm typeSelection={type} />
                </Paper>
              </Grid>
              
              
              </Grid>

        </>
    );
}
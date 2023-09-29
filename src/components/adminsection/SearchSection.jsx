import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SelectTypeItem from './SelectTypeItem';
import CreateUserTableInfo from './CreateUserTableInfo';
import CreateBookTableInfo from './CreateBookTableInfo';
import RenderClubCreatedInfoTable from './RenderClubCreatedInfoTable';
import SearchUserForm from './SearchUserForm';
import SearchClubForm from '../users/SearchClubForm';
import SearchBookForm from '../users/SearchBookForm';

export default function SearchSection(){
    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
      };

      function getTableInfo(){
        if(type === 'libro'){
          return <CreateBookTableInfo />
        } else if (type === 'usuario'){
          return <CreateUserTableInfo />
        } else if (type === 'club'){
          return <RenderClubCreatedInfoTable/>
        }
      }

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
        <Grid container spacing={3}>
         {/* Recent SelectTypeItem */}
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
              {/* Recent CreateBookTableInfo */}
              {/* CreateContentForm */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    justifyContent: 'center'
                  }}
                >
                  {getForm()}
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {getTableInfo()}
                </Paper>
              </Grid>
              </Grid>

        </>
    );
}
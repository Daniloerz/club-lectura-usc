import * as React from 'react';
import SearchSection from './SearchSection';
import { Button } from '@mui/material';

export default function DeleteSection(){
    return(
        <>
        <SearchSection />
        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2}}
              >
                Eliminar
              </Button>
        </>
    )
}
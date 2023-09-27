import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import SignInSide from './SignInSide';
import SignUp from './SignUp';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignInSide />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <h1>Error</h1>,
  },
]);

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ magin: '0', backgroundColor: '#004B87', borderBottom: 1, borderColor: 'divider' }}>
        <Button 
        variant="outlined" 
        size="small" 
        sx={{ color: 'white', borderColor:'white' }}
        href='/login'>
          Iniciar Sesión
          </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'white' }}
        >
          {title}
        </Typography>
        <TextField id="standard-basic" label="Search" variant="standard" />
        <IconButton>
          <SearchIcon className="toolBarFormat"/>
        </IconButton>
        <Button 
        variant="outlined" 
        size="small" 
        className="toolBarFormat" 
        sx={{ color: 'white', borderColor:'white' }}
        href='/signup'>
          Registrarse
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInSide from './SignInSide';
import SignUp from './SignUp';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MenuHeaderHome from './MenuHeaderHome';


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
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="start"
          noWrap
          sx={{ flex: 1, color: 'white' }}
        >
          {title}
        </Typography>
       <MenuHeaderHome />
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
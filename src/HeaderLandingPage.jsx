import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';
import PrimarySearchAppBar from './AppBar';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>Error</h1>,
      },
]);

function HeaderLandingPage(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <PrimarySearchAppBar />
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, textDecoration: 'none', color: '#004B87', fontSize: 20 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

HeaderLandingPage.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderLandingPage;
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from './LandingPage';
import FindClubs from './FindClubs';


const router = createBrowserRouter([
  {
    path: "/landingpage",
    element: <LandingPage />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/findClubs",
    element: <FindClubs />,
    errorElement: <h1>Error</h1>,
  }
]);


function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}  sx={{backgroundColor: '#004B87'}}>
      <CardActionArea component="a" href="/landingpage" sx={{padding: 10}}>
        <Card sx={{ display: 'flex', backgroundColor: '#004B87', textAlign: 'center', border: 'solid'}}>
          <CardContent sx={{ flex: 1}}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="white">
              Ver más!
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;

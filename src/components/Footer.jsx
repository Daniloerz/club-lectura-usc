import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        usc.edu.co
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#182039', py: 3, color: 'white'}}>
      <Container maxWidth="lg">
      {<img style={{ display: 'block', margin: 'auto', paddingBottom: 30}} src='https://www.usc.edu.co/wp-content/uploads/2023/03/Logo_Universidad_Santiago_de_Cali_USC-1.png' alt='logoUsc' />}
        <Typography variant="h6" align="center" gutterBottom>
        <Link href="https://www.usc.edu.co/" variant="body1" sx={{color: 'white'}}>
          {title}
        </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;

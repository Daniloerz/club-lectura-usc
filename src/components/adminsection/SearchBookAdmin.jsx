import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItemsAdmin, secondaryListItemsAdmin } from './ListItemsAdmin';
import Footer from '../Footer';
import SearchBookForm from '../users/SearchBookForm';
import { Container } from '@mui/material';
import BooksSearched from '../users/InfoSearched';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function SearchBookAdmin() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{bgcolor: '#004B87' }}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Zona del Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItemsAdmin}
            <Divider sx={{ my: 1 }} />
            {secondaryListItemsAdmin}
          </List>
        </Drawer>

        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container display='flex'>
          <SearchBookForm />
          <BooksSearched /> 
          </Container>
        </Box>
      </Box>
      <Footer
                title="Universidad Santiago de Cali"
                description="Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
        Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.
        Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional.
        
        Acreditada Institucionalmente en Alta Calidad a través de la Resolución No. 018144 del 27 de septiembre de 2021, emanada por el Ministerio de Educación Nacional.
        Ciudadela Pampalinda
        Calle 5 # 62-00 Barrio Pampalinda
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia        

        Sede Centro
        Carrera 8 # 8-17 Barrio Santa Rosa
        PBX: +57 (602) 518 3000
        Santiago de Cali, Valle del Cauca
        Colombia

        Seccional Palmira
        Carrera 29 # 38-47 Barrio Alfonso López
        PBX: +57 (602) 518 3000 Ext. 9300-9301
        Palmira, Valle del Cauca
        Colombia"/>
    </ThemeProvider>
  );
}

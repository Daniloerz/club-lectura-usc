import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import InfoBook from '../general/InfoBook';
import Container from '@mui/material/Container';
import Comments from '../main/Comments';
import Rating from '../main/Rating';
import { TextField } from '@mui/material';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoSearched() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Autor: {item.author}</span>}
            actionIcon={
              <IconButton
                sx={{ color: '#004B87' }}
                aria-label={`info about ${item.title}`}
                onClick={handleClickOpen}
              >
                <InfoIcon />
              </IconButton>
            }
            position="below"
          />
          <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nombre
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Añadir
            </Button>
          </Toolbar>
        </AppBar>
        <InfoBook titulo="titulo" autor="autor" />
        <Divider sx={{borderColor: 'black'}}/>
        <Container sx={{display: 'flex', flexDirection: 'column', marginTop: 5, borderRadius: 2, bgcolor: '#637889'}}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'black', fontSize: 30, color: 'black', padding: 5 }}
        >
          Califica el Club
        </Typography>
        <Rating />
        <TextField sx={{margin: 5}} id="outlined-basic" label="Comentarios" variant="outlined" />  
        <Button variant="contained" sx={{margin: 'auto', maxWidth: 100, marginBottom: 5}}>Enviar</Button>      
        </Container>
        <Container>
          <Comments />
        </Container>
      </Dialog>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
  {
    img: 'https://source.unsplash.com/random?books',
    title: 'Nombre Libro',
    author: 'Autor',
  },
];
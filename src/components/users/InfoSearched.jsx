import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

export default function InfoSearched() {
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
            subtitle={<span>by: {item.author}</span>}
            actionIcon={
              <IconButton
                sx={{ color: '#004B87' }}
                aria-label={`info about ${item.title}`}
                href='/bookinfov'
              >
                <InfoIcon />
              </IconButton>
            }
            position="below"
            
          />
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
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItemsUser = (
  <React.Fragment>
    <ListItemButton href='/book'>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Libro" />
    </ListItemButton>
    <ListItemButton href='/club'>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Club" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItemsUser = (
  <React.Fragment>
    <ListItemButton href='/user'>
      <ListItemIcon>
      <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItemButton>
    <ListItemButton href='/'>
      <ListItemIcon>
      <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItemButton>
    
  </React.Fragment>
);

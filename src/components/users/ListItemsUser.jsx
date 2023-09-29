import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { List } from '@mui/material';

export function MainListItemsAdmin({ onOptionChange }) {

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Buscar
      </ListSubheader>
      <List component='nav'>
        <ListItemButton selected={onOptionChange === 5}
          onClick={(event) => onOptionChange(event, 5)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Buscar Libro" />
        </ListItemButton>
        <ListItemButton selected={onOptionChange === 6}
          onClick={(event) => onOptionChange(event, 6)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Buscar Club" />
        </ListItemButton>
      </List>
    </React.Fragment>
  );

}

export function SecondaryListItemsAdmin({ onOptionChange }) {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Sección Común
      </ListSubheader>
      <List component='nav'>
        <ListItemButton selected={onOptionChange === 7}
          onClick={(event) => onOptionChange(event, 7)}>
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
      </List>
    </React.Fragment>
  );
}

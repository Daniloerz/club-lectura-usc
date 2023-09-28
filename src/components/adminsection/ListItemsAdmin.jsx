import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LayersIcon from '@mui/icons-material/Layers';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItemsAdmin = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Panel del admin
    </ListSubheader>
    <ListItemButton href='/admin+'>
      <ListItemIcon>
      <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Crear" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EditNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Editar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Eliminar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItemsAdmin = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Sección Común
    </ListSubheader>
    <ListItemButton href='/bookadmin'>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Libro" />
    </ListItemButton>
    <ListItemButton href='/clubAdmin'>
      <ListItemIcon>
      <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Club" />
    </ListItemButton>
    <ListItemButton href='/admin1'>
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

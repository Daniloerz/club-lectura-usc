import * as React from 'react';
import Title from './Title';
import Type from './SelectType';
import Button from '@mui/material/Button';

function preventDefault(event) {
  event.preventDefault();
}



export default function SelectTypeItem({onTypeChange}) {

  return (
    <React.Fragment>
      <Title>Seleccionar</Title>
      <Type onChange={onTypeChange} />    
    </React.Fragment>
  );
}

import React from 'react';
import { useNode } from '@craftjs/core';
import {
  FormControl,
  FormLabel,
  TextField,
} from '@mui/material';


export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));


  const handleTextInputChange = (propName) => (event) => {
    setProp((props) => {
      props[propName] = event.target.value;
    });
  };

  return (
    <div style={{ color: '#eee', padding: '10px' }}>
      <FormControl size="small" component="fieldset" fullWidth sx={{ marginBottom: '10px' }} >
        <FormLabel component="legend" sx={{ color: 'white' }}>Width</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={props.width}
          onChange={handleTextInputChange("width")}
        />
      </FormControl>

      <FormControl size="small" component="fieldset" fullWidth sx={{ marginBottom: '10px' }}>
        <FormLabel component="legend" sx={{ color: 'white' }}>Background Color</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={props.background}
          onChange={handleTextInputChange("background")}
        />
      </FormControl>

      <FormControl size="small" component="fieldset" fullWidth sx={{ marginBottom: '10px' }}>
        <FormLabel component="legend" sx={{ color: 'white', marginBottom: '10px' }}>Border Radius</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          label="Radius"
          value={props.borderRadius}
          onChange={handleTextInputChange("borderRadius")}
          sx={{ marginBottom: '10px' }}
        />
      </FormControl>
    </div >
  );
};
import React, { useState } from 'react';
import { useNode } from '@craftjs/core';
import {
  FormControl,
  FormLabel,
  Grid,
  Drawer,
  TextField,
  Button as MaterialButton,
  IconButton
} from '@mui/material';
import CodeEditor from "../../../components/CodeEditor";
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTextInputChange = (propName) => (event) => {
    setProp((props) => {
      props[propName] = event.target.value;
    });
  };

  // Create a className dynamically
  // const buttonId = `btn-${Math.random().toString(36).substring(7)}`;
  const buttonId = `btn-r1qpk8`;

  return (
    <div style={{ color: '#eee', padding: '10px' }}>
      <>
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

        <FormControl size="small" component="fieldset" fullWidth sx={{ marginBottom: '10px' }} >
          <FormLabel component="legend" sx={{ color: 'white', marginBottom: '10px' }}>Padding</FormLabel>
          <TextField
            size="small"
            variant="outlined"
            label="Top"
            value={props.paddingTop}
            onChange={handleTextInputChange("paddingTop")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Right"
            value={props.paddingRight}
            onChange={handleTextInputChange("paddingRight")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Bottom"
            value={props.paddingBottom}
            onChange={handleTextInputChange("paddingBottom")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Left"
            value={props.paddingLeft}
            onChange={handleTextInputChange("paddingLeft")}
          />
        </FormControl>

        <FormControl size="small" component="fieldset" fullWidth sx={{ marginBottom: '10px' }} >
          <FormLabel component="legend" sx={{ color: 'white', marginBottom: '10px' }}>Margin</FormLabel>
          <TextField
            size="small"
            variant="outlined"
            label="Top"
            value={props.marginTop}
            onChange={handleTextInputChange("marginTop")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Right"
            value={props.marginRight}
            onChange={handleTextInputChange("marginRight")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Bottom"
            value={props.marginBottom}
            onChange={handleTextInputChange("marginBottom")}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Left"
            value={props.marginLeft}
            onChange={handleTextInputChange("marginLeft")}
            sx={{ marginBottom: '10px' }}
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
      </>

      <Grid item mb={1}>
        <MaterialButton sx={{ maxWidth: '100%' }} variant="text" color="primary" onClick={() => setDrawerOpen(true)}>
          <CodeIcon />
        </MaterialButton>
      </Grid>

      <Drawer hideBackdrop anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: '350px', padding: '6px', backgroundColor: '#27272a', height: '100%' }}>
          <Grid container direction="column" item mb={2}>
            <CodeEditor
              lang="css"
              value={
                props.additional_css
                  ? props.additional_css
                  : `.${buttonId} {
  /* Place your custom styles here */
}

.${buttonId}:hover {
  /* Place your hover styles here */
}`
              }
              onChange={(e) => setProp((props) => { props.additional_css = e.target.value })}
            />
          </Grid>
          <Grid item mb={2}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton aria-label="close" onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        </div>
      </Drawer>
    </div >
  );
};
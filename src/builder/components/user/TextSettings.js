import { Slider, FormControl, FormLabel, Grid, Button as MaterialButton, IconButton, Drawer } from '@mui/material';
import { useNode } from '@craftjs/core';
import React, { useState } from 'react';
import CodeEditor from "../../../components/CodeEditor";
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

export const TextSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const textId = `txt-h3g4nm`;

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend" sx={{ color: 'white' }}>Font size</FormLabel>
        <Slider
          value={props.fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000);
          }}
        />
      </FormControl>

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
                  : `.${textId} {
  /* Place your custom styles here */
}

.${textId}:hover {
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
    </>
  );
};

import React, { useEffect, useState } from 'react';
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

  const propsToCssString = (obj) =>
    Object.keys(obj)
      .map((key) => {
        return `${key}: '${obj[key]}';`;
      })
      .join(' ')
      .trim();

  const [css, setCss] = useState(propsToCssString(props));
  const [auxCss, setAuxCss] = useState(css);

  useEffect(() => {
    const cssString = propsToCssString(props);
    setCss(cssString);
    setAuxCss(cssString);
  }, [props]);

  const handleCodeEditorChange = (value) => {
    setAuxCss(value);
  };


  const applyChanges = () => {
    setCss(auxCss);
    const regex = /(\w+): '([^']*)';/g;
    let match;
    const updatedProps = {};
    while ((match = regex.exec(auxCss)) !== null) {
      const [_, key, val] = match;
      if (key in props) {
        updatedProps[key] = val;
      }
    }
    setProp((props) => {
      Object.keys(updatedProps).forEach((key) => {
        props[key] = updatedProps[key];
      });
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

      <Grid item mb={1}>
        <MaterialButton size="small" variant="text" color="primary" onClick={() => setDrawerOpen(true)}>
          Avançado
        </MaterialButton>
      </Grid>

      <Drawer hideBackdrop anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: '350px', padding: '6px', backgroundColor: '#27272a', height: '100%' }}>
          <Grid container direction="column" item mb={2}>
            <CodeEditor
              lang="css"
              value={`id {${auxCss}}`}
              onChange={(e) => handleCodeEditorChange(e.target.value)}
            />
          </Grid>
          <Grid item mb={2}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <MaterialButton size="small" variant="contained" color="primary" onClick={applyChanges}>
                Apply Changes
              </MaterialButton>
              <IconButton aria-label="close" onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        </div>
      </Drawer>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import { Slider, FormControl, FormLabel, Grid, Button as MaterialButton, IconButton, Drawer } from '@mui/material';
import { useNode } from '@craftjs/core';
import CodeEditor from "../../../components/CodeEditor";
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

export const Text = ({ text, fontSize, textAlign, additional_css, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }
    setEditable(false);
  }, [selected]);

  const id = `txt-h3g4nm`;

  return (
    <>
      <div
        {...props}

        ref={(ref) => connect(drag(ref))}
        onClick={() => selected && setEditable(true)}
      >
        <ContentEditable
          id={id}
          className={id}
          html={text}
          disabled={!editable}
          onChange={(e) =>
            setProp(
              (props) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')),
              500
            )
          }
          tagName="p"
          style={{ fontSize: `${fontSize}px`, textAlign }}
        />
      </div>
      <style>{additional_css}</style>
    </>

  );
};

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

export const TextDefaultProps = {
  text: 'Hi',
  fontSize: 20,
  color: 'black',
  additional_css: "",
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};

import { useNode } from '@craftjs/core';
import { Slider } from '@mui/material';
import { Box, FormControl, FormLabel } from '@mui/material';
// import ColorPicker from 'material-ui-color-picker';
import React from 'react';

export const Container = ({
  flexDirection,
  alignItems,
  justifyContent,
  fillSpace,
  background,
  color,
  padding,
  margin,
  shadow,
  radius,
  children,
  minHeight,
  minWidth,
  maxWidth,
  ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{ margin: '5px 0', background, padding: `${padding}px`, minHeight, minWidth, border: '1px solid #ccc', width: '100%', maxWidth, justifyContent, alignItems, flexDirection, fillSpace, color, boxShadow: shadow, borderRadius: radius }}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: 'transparent',
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};

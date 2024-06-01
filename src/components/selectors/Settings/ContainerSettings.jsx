import React from "react";
import { useNode } from "@craftjs/core";
import Grid from "@mui/material/Grid";
// import { ColorControl } from "./_Control";

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Grid style={{ padding: "0px 0px 10px 14px" }} container spacing={2}>
      <Grid item style={{ paddingLeft: 2 }} xs={12}>
        {/* <ColorControl
          name={"Cor de Fundo "}
          onChange={(e, value) => {
            setProp((props) => (props.background = value));
          }}
          defaultValue={props.background}
          value={props.background}
        /> */}
      </Grid>
    </Grid>
  );
};

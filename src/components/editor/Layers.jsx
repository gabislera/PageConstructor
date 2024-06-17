import { useEditor, Element } from "@craftjs/core";
import { Box, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Layers as LayersCraft, useLayer } from "@craftjs/layers";

export const Layers = () => {
  const {
    connectors: { create },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <Grid
      padding={2}
      width={"100%"}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        backgroundColor: "#27272a",
        zIndex: 10,
      }}
    >
      <LayersCraft />
    </Grid>
  );
};

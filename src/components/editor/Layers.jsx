import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Layers as LayersCraft } from "@craftjs/layers";
import { useResponsiveMode } from "../../contexts/ResponsiveModeContext";
import { DefaultLayer } from "./layers/DefaultLayer";

export const Layers = () => {
  const { isLayersOpen } = useResponsiveMode();

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div
        className={classes.container}
        style={{
          overflowX: "hidden",
          width: isLayersOpen ? "230px" : "0px",
          transition: "width 0.3s ease-in-out",
          height: "100%",
        }}
      >
        <LayersCraft expandRootOnLoad renderLayer={DefaultLayer} />
      </div>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#27272a",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: "5px",
  },
});

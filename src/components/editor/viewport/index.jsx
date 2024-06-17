import React from "react";
import { useEditor } from "@craftjs/core";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SideBar from "../SideBar";
import { ResponsiveMode } from "../ResponsiveMode";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Viewport = ({ children }) => {
  const classes = useStyles();
  const { deviceView } = useResponsiveMode();

  const { connectors, selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    if (currentNodeId) {
      return {
        enabled: state.options.enabled,
        selected: state.nodes[currentNodeId].data.name,
      };
    }
  });

  return (
    <Box className={`${classes.root}`}>
      <Box className={`page-container ${classes.pageContainer}`}>
        <SideBar selected={selected} />
        <Box
          className={`craftjs-renderer ${classes.rendererContainer}`}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          <ResponsiveMode />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
              backgroundColor: "white",
              pt: 8,
              width:
                deviceView === "mobile"
                  ? "360px"
                  : deviceView === "tablet"
                  ? "768px"
                  : "1220px",
              // : "100%",
              height:
                deviceView === "mobile"
                  ? "736px"
                  : deviceView === "tablet"
                  ? "831px"
                  : "100%",
              transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  pageContainer: {
    display: "flex",
    flex: 1,
    height: "100%",
    overflow: "hidden",
  },
  rendererContainer: {
    flex: 1,
    overflow: "auto",
    height: "100%",
    width: "100%",
  },
});

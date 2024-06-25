import React from "react";
import { useEditor, Element, ROOT_NODE } from "@craftjs/core";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SideBar from "../SideBar";
import { ResponsiveMode } from "../ResponsiveMode";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import { Layers } from "../Layers";
import Section from "../../selectors/CraftedComponents/Section.jsx";

export const Viewport = ({ children }) => {
  const classes = useStyles();
  const { deviceView } = useResponsiveMode();
  const { connectors, selected, actions, query } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    if (currentNodeId) {
      return {
        enabled: state.options.enabled,
        selected: state.nodes[currentNodeId].data.name,
      };
    }
  });

  const addSection = () => {
    const section = <Element canvas is={Section}></Element>;
    const nodeTree = query.parseReactElement(section).toNodeTree();
    actions.addNodeTree(nodeTree, ROOT_NODE);
  };

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
              width: "100%",

              maxWidth:
                deviceView === "mobile"
                  ? "360px"
                  : deviceView === "tablet"
                  ? "768px"
                  : "1220px",
              minHeight:
                deviceView === "mobile"
                  ? "736px"
                  : deviceView === "tablet"
                  ? "831px"
                  : "100%",
              transition:
                "max-width 0.3s ease-in-out, min-height 0.3s ease-in-out",
            }}
          >
            {children}
            <Button
              color="primary"
              onClick={addSection}
              sx={{
                mt: 2,
                backgroundColor: "#3f3f46",
                color: "#fff",
                fontWeight: "600",
                fontSize: "12px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#27272a",
                },
                textTransform: "none",
              }}
            >
              Nova seção
            </Button>
          </Box>
        </Box>
        <Layers />
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

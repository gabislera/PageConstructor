import React from "react";
import { useNode } from "@craftjs/core";
import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";

export const GridItem = () => {
  const {
    connectors: { connect, drag },
    isOver,
    children,
  } = useNode((node) => ({
    isOver: node.events.hovered,
    children: node.data.nodes,
  }));

  return (
    <Box
      ref={(ref) => connect(drag(ref))}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        margin: "4px",
        border: isOver ? "1px dashed #4caf50" : "1px dashed #9da5ae",
      }}
    >
      {children.length === 0 && <Add sx={{ fill: "#9da5ae" }} />}
    </Box>
  );
};

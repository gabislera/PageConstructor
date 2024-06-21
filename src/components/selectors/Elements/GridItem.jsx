import React from "react";
import { useNode } from "@craftjs/core";
import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";

export const GridItem = ({ children: element }) => {
  const {
    connectors: { connect, drag },
    children,
  } = useNode((node) => ({
    children: node.data.nodes,
  }));

  return (
    <Box
      ref={(ref) => connect(drag(ref))}
      sx={{
        height: "fit-content",
        // width: "100%",
      }}
    >
      {children.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",

            minHeight: "100px",
            border: "1px dashed #9da5ae",
          }}
        >
          <Add sx={{ fill: "#9da5ae" }} />
        </Box>
      ) : (
        element
      )}
    </Box>
  );
};

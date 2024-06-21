import React, { useState } from "react";
import { Element, useEditor, useNode } from "@craftjs/core";
import { CalendarViewMonth, CropLandscapeSharp } from "@mui/icons-material";
import Container from "../CraftedComponents/Container";
import Grid from "../CraftedComponents/Grid";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

export const Section = ({ initialElement }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    selected,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { actions } = useEditor();

  const [element, setElement] = useState(initialElement || null);

  useEffect(() => {
    setProp((props) => {
      props.initialElement = element;
    });
  }, [element, setProp]);

  const handleAddSection = (type) => {
    setElement(type);
    actions.selectNode(null);
  };

  return (
    <section
      style={{
        border: !element ? "1px dashed #9da5ae" : "none",
        minHeight: "100px",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={(ref) => connect(drag(ref))}
    >
      {!element && (
        <>
          <IconButton onClick={() => handleAddSection("container")}>
            <CropLandscapeSharp />
          </IconButton>
          <IconButton onClick={() => handleAddSection("grid")}>
            <CalendarViewMonth />
          </IconButton>
        </>
      )}
      {element === "container" && (
        <Element id="container-element" canvas is={Container}></Element>
      )}
      {element === "grid" && (
        <Element id="grid-element" canvas is={Grid}></Element>
      )}
    </section>
  );
};

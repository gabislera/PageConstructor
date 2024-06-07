import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";

export const AppComponent = ({ maxWidth, backgroundColor, width, margin }) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    notDeletable: node.data.props.notDeletable,
  }));
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        maxWidth,
        margin,
        width: `${width}%`,
        backgroundColor,
      }}
    >
      <Element id="main_section" is={Container} className="section" canvas />
    </div>
  );
};

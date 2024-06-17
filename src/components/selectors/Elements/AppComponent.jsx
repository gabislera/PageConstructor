import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";

export const AppComponent = ({
  maxWidth,
  backgroundColor,
  width,
  margin,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    notDeletable: node.data.props.notDeletable,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      canvas
      style={{
        maxWidth,
        margin,
        width: `${width}%`,
        backgroundColor,
        position: "relative",
        paddingTop,
        paddingRight,
        paddingLeft,
        paddingBottom,
      }}
    >
      {/* <Element id="main_section" is={Container} className="section" canvas /> */}

      {children}
    </div>
  );
};

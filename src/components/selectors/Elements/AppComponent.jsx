import React from "react";
import { useNode } from "@craftjs/core";

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
  columnGap,
  rowGap,
  disp,
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
        columnGap,
        rowGap,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Element id="main_section" is={Container} className="section" canvas /> */}
      {children}
    </div>
  );
};

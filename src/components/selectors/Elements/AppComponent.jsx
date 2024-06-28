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
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

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
      {children}
    </div>
  );
};

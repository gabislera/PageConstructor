import React from "react";
import { useNode } from "@craftjs/core";

export const Container = ({
  children,
  maxWidth,

  width,
  minHeight,
  flexDirection,
  justifyContent,
  alignItems,
  rowGap,
  columnGap,
  flexWrap,

  overflow,
  htmlTag,

  backgroundColor,
  backgroundImage,

  borderType,
  borderWidth,
  borderColor,
  borderRadius,

  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  alignSelf,
  flexOrder,
  flexShrink,
  flexGrow,
  position,
  zIndex,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        maxWidth,

        width,
        minHeight,
        flexDirection,
        justifyContent,
        alignItems,
        rowGap,
        columnGap,
        flexWrap,

        overflow,
        htmlTag,

        backgroundColor,
        backgroundImage,

        borderType,
        borderWidth,
        borderColor,
        borderRadius,

        marginTop,
        marginRight,
        marginLeft,
        marginBottom,
        paddingTop,
        paddingRight,
        paddingLeft,
        paddingBottom,
        alignSelf,
        flexOrder,
        flexShrink,
        flexGrow,
        position,
        zIndex,

        border: children ? "none" : "1px dashed grey",
      }}
    >
      {children}
    </div>
  );
};

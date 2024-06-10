import React from "react";
import { useNode } from "@craftjs/core";

export const Container = ({
  children,
  maxWidth,
  display,

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
  url,

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

  const ContainerTag = htmlTag;

  const ContainerElement = (
    <ContainerTag
      ref={(ref) => connect(drag(ref))}
      style={{
        maxWidth,
        display,

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
    </ContainerTag>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {ContainerElement}
    </a>
  ) : (
    ContainerElement
  );
};

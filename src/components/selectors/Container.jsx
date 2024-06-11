import React from "react";
import { useNode } from "@craftjs/core";
import { makeStyles } from "@mui/styles";

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

  borderStyle,
  borderTopWidth,
  borderBottomWidth,
  borderRightWidth,
  borderLeftWidth,
  borderColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  hoverBorderStyle,
  hoverBorderTopWidth,
  hoverBorderBottomWidth,
  hoverBorderRightWidth,
  hoverBorderLeftWidth,
  hoverBorderColor,
  hoverBorderTopLeftRadius,
  hoverBorderTopRightRadius,
  hoverBorderBottomRightRadius,
  hoverBorderBottomLeftRadius,
  transition,

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
  top,
  left,
  right,
  bottom,
  zIndex,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const classes = useStyles();
  const ContainerTag = htmlTag;

  console.log(display);

  const ContainerElement = (
    <ContainerTag
      ref={(ref) => connect(drag(ref))}
      className={classes.hoverStyles}
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

        borderStyle,
        borderTopWidth,
        borderBottomWidth,
        borderRightWidth,
        borderLeftWidth,
        borderColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        transition: `border ${transition}s ease-in-out`,

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
        top,
        left,
        right,
        bottom,
        zIndex,

        border: children ? "none" : "1px dashed grey",

        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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

const useStyles = makeStyles({
  // hoverStyles: {
  //   "&:hover": {
  //     borderStyle: hoverBorderStyle,
  //     borderTopWidth: hoverBorderTopWidth,
  //     borderBottomWidth: hoverBorderBottomWidth,
  //     borderRightWidth: hoverBorderRightWidth,
  //     borderLeftWidth: hoverBorderLeftWidth,
  //     borderColor: hoverBorderColor,
  //     borderTopLeftRadius: hoverBorderTopLeftRadius,
  //     borderTopRightRadius: hoverBorderTopRightRadius,
  //     borderBottomRightRadius: hoverBorderBottomRightRadius,
  //     borderBottomLeftRadius: hoverBorderBottomLeftRadius,
  //   },
  // },
});

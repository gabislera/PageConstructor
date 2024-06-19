import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Grid = ({
  maxWidth,
  width,
  minHeight,
  gridRows,
  gridColumns,
  htmlTag,
  rowGap,
  columnGap,
  url,
  gridAutoFlow,
  overflow,

  backgroundColor,
  backgroundImage,
  borderStyle,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  hoverBorderStyle,
  hoverBorderTopWidth,
  hoverBorderRightWidth,
  hoverBorderBottomWidth,
  hoverBorderLeftWidth,
  hoverBorderColor,
  hoverBorderTopLeftRadius,
  hoverBorderTopRightRadius,
  hoverBorderBottomRightRadius,
  hoverBorderBottomLeftRadius,
  hoverBackgroundColor,
  backgroundcolorTransitionDuration,
  borderTransitionDuration,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  alignSelf,
  order,
  flexShrink,
  flexGrow,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,

  mobileGridColumns,
  mobileGridRows,

  mobileWidth,
  mobileMinHeight,
  mobileRowGap,
  mobileColumnGap,
  mobileGridAutoFlow,

  mobileMarginTop,
  mobileMarginRight,
  mobileMarginLeft,
  mobileMarginBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  mobileAlignSelf,
  mobileOrder,
  mobileFlexShrink,
  mobileFlexGrow,
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const ContainerTag = htmlTag || "div";
  const totalContainers =
    deviceView === "desktop"
      ? gridRows * gridColumns
      : mobileGridRows * mobileGridColumns;

  console.log(paddingBottom, mobilePaddingBottom);

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: mobileWidth,
        minHeight: mobileMinHeight,
        rowGap: mobileRowGap,
        columnGap: mobileColumnGap,
        marginTop: mobileMarginTop,
        marginRight: mobileMarginRight,
        marginLeft: mobileMarginLeft,
        marginBottom: mobileMarginBottom,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingLeft: mobilePaddingLeft,
        paddingBottom: mobilePaddingBottom,
        alignSelf: mobileAlignSelf,
        order: mobileOrder,
        flexShrink: mobileFlexShrink,
        flexGrow: mobileFlexGrow,
        gridTemplateColumns: `repeat(${mobileGridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${mobileGridRows}, 1fr)`,
        // position: mobilePosition,
        // top: mobileTop,
        // left: mobileLeft,
        // right: mobileRight,
        // bottom: mobileBottom,
        // zIndex: mobileZIndex,
      };
    }

    return {
      width,
      minHeight,
      rowGap,
      columnGap,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      alignSelf,
      order,
      flexShrink,
      flexGrow,
      gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
      gridTemplateRows: `repeat(${gridRows}, 1fr)`,
      // position,
      // top,
      // left,
      // right,
      // bottom,
      // zIndex,
    };
  };

  const responsiveProps = getResponsiveProps();

  const GridElement = (
    <ContainerTag
      ref={(ref) => connect(drag(ref))}
      style={{
        ...responsiveProps,
        maxWidth,
        display: "grid",

        gridAutoFlow,
        overflow,

        backgroundColor,
        backgroundImage,
        borderStyle,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
        borderColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,

        // transition: `background-color ${backgroundcolorTransitionDuration}s ease-in-out, border ${borderTransitionDuration}s ease-in-out`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {[...Array(totalContainers)].map((_, index) => (
        <Element
          key={index}
          id={`droppable-${index}`}
          is={Container}
          canvas
        ></Element>
      ))}
    </ContainerTag>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {GridElement}
    </a>
  ) : (
    GridElement
  );
};

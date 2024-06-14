import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

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

  mobileWidth,
  mobileMinHeight,
  mobileFlexDirection,
  mobileJustifyContent,
  mobileAlignItems,
  mobileRowGap,
  mobileColumnGap,
  mobileFlexWrap,
  mobileMarginTop,
  mobileMarginRight,
  mobileMarginLeft,
  mobileMarginBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  mobileAlignSelf,
  mobileFlexOrder,
  mobileFlexShrink,
  mobileFlexGrow,
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,

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
  const ContainerTag = htmlTag;
  const { deviceView } = useResponsiveMode();

  console.log(flexDirection, mobileFlexDirection);

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: mobileWidth,
        minHeight: mobileMinHeight,
        flexDirection: mobileFlexDirection,
        justifyContent: mobileJustifyContent,
        alignItems: mobileAlignItems,
        rowGap: mobileRowGap,
        columnGap: mobileColumnGap,
        flexWrap: mobileFlexWrap,
        marginTop: mobileMarginTop,
        marginRight: mobileMarginRight,
        marginLeft: mobileMarginLeft,
        marginBottom: mobileMarginBottom,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingLeft: mobilePaddingLeft,
        paddingBottom: mobilePaddingBottom,
        alignSelf: mobileAlignSelf,
        flexOrder: mobileFlexOrder,
        flexShrink: mobileFlexShrink,
        flexGrow: mobileFlexGrow,
        position: mobilePosition,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
      };
    }

    return {
      width,
      minHeight,
      flexDirection,
      justifyContent,
      alignItems,
      rowGap,
      columnGap,
      flexWrap,
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
    };
  };

  const responsiveProps = getResponsiveProps();

  const ContainerElement = (
    <ContainerTag
      ref={(ref) => connect(drag(ref))}
      style={{
        ...responsiveProps,
        maxWidth,
        display,

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

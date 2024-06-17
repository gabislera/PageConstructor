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
  const ContainerTag = htmlTag || "div";
  const { deviceView } = useResponsiveMode();

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
      // position,
      // top,
      // left,
      // right,
      // bottom,
      // zIndex,
    };
  };

  const responsiveProps = getResponsiveProps();

  const hoverStyles = `
    .container-hover:hover {
      background-color: ${hoverBackgroundColor} !important;
      border-style: ${hoverBorderStyle} !important;
      border-top-width: ${hoverBorderTopWidth} !important;
      border-bottom-width: ${hoverBorderBottomWidth} !important;
      border-right-width: ${hoverBorderRightWidth} !important;
      border-left-width: ${hoverBorderLeftWidth} !important;
      border-color: ${hoverBorderColor} !important;
      border-top-left-radius: ${hoverBorderTopLeftRadius} !important;
      border-top-right-radius: ${hoverBorderTopRightRadius} !important;
      border-bottom-right-radius: ${hoverBorderBottomRightRadius} !important;
      border-bottom-left-radius: ${hoverBorderBottomLeftRadius} !important;
    }
  `;

  const ContainerElement = (
    <>
      <ContainerTag
        ref={(ref) => connect(drag(ref))}
        className="container-hover"
        style={{
          ...responsiveProps,
          maxWidth,
          display,
          overflow,
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
          transition: `background-color ${backgroundcolorTransitionDuration}s ease-in-out, border ${borderTransitionDuration}s ease-in-out`,
          border: children ? "none" : "1px dashed #B2B2B2",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </ContainerTag>
      <style>{hoverStyles}</style>
    </>
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

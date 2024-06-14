import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Button = ({
  text,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  color,
  background,
  width,
  borderRadius,
  type,
  cursor,
  fontFamily,
  fontWeight,
  fontSize,
  textTransform,
  fontStyle,
  textDecoration,
  wordSpacing,
  letterSpacing,
  borderStyle,
  borderColor,
  boxShadow,
  lineHeight,

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
  minHeight,
  flexDirection,
  justifyContent,
  alignItems,
  rowGap,
  columnGap,
  flexWrap,
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
    ...data
  } = useNode();
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
  return (
    <>
      <button
        type={type}
        ref={(ref) => connect(drag(ref))}
        style={{
          color,
          backgroundColor: background,
          borderRadius,
          cursor,
          width,
          marginTop,
          marginRight,
          marginLeft,
          marginBottom,
          paddingTop,
          paddingRight,
          borderStyle,
          paddingLeft,
          borderColor,
          boxShadow,
          paddingBottom,
          ...responsiveProps,
          minWidth: "100px",
          minHeight: "50px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          border: "none",
        }}
      >
        <span
          style={{
            fontFamily,
            fontWeight,
            fontSize,
            textTransform,
            fontStyle,
            textDecoration,
            wordSpacing,
            letterSpacing,
            lineHeight,
          }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

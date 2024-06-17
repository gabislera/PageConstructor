import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Button = ({
  text,
  paddingTop,
  position,
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
  alignSelf,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
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
  flexOrder,
  flexShrink,
  flexGrow,
  top,
  left,
  right,
  bottom,
  zIndex,
  boxShadowString,
  textAlign,
  display,
  displayMobile,
  pulse,
  delay,
  className,
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

  function hasDisableDisplay(deviceView) {
    if (deviceView === "mobile") return displayMobile == "none";
    return display == "none";
  }
  function getClass(deviceView) {
    if (hasDisableDisplay(deviceView)) return "oscillating";
    if (delay > 0 && !pulse) return "oscillating";

    return "";
  }

  return (
    <>
      <button
        type={type}
        ref={(ref) => connect(drag(ref))}
        className={`${className} ${getClass(deviceView)}`}
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
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          boxShadow,
          paddingBottom,
          boxShadowString,

          ...responsiveProps,
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
            textAlign,
          }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

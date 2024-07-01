import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Button = ({
  text,
  backgroundImage,
  maxWidth,
  maxWidthMobile,
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
  backgroundColor,
  width,
  widthMobile,
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
  // borderTopLeftRadiusMobile,
  // borderTopRightRadiusMobile,
  // borderBottomRightRadiusMobile,
  // borderBottomLeftRadiusMobile,
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
  hoverBorderStyle,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,
  minHeight,
  flexDirection,
  justifyContent,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
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
  mobileTextAlign,
  mobileLineHeight,
  mobileFontWeight,
  mobileFontSize,
  display,
  displayMobile,
  pulse,
  delay,
  className,
  animation,
  mobileLetterSpacing,
  mobileWordSpacing,
  hoverBackgroundColor,
  hoverColor,
  hoverBorderColor,

  hidden,
  mobileHidden,
  hasBackgroundHover,
  transitionDuration,

  buttonHorizontal,
  buttonVertical,
  buttonBlur,
  buttonSpread,
  buttonColor,
  buttonInset,
  buttonHasBoxShadow,

  textHorizontal,
  textVertical,
  textBlur,
  textColor,
  textHasBoxShadow,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode();
  const { deviceView } = useResponsiveMode();
  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        // width: widthMobile,
        maxWidth: maxWidthMobile,
        minHeight: mobileMinHeight,
        flexDirection: mobileFlexDirection,
        justifyContent: mobileJustifyContent,
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
        display: displayMobile,
        lineHeight: mobileLineHeight,
        fontWeight: mobileFontWeight,
        fontSize: mobileFontSize,
        textAlign: mobileTextAlign,
        letterSpacing: mobileLetterSpacing,
        wordSpacing: mobileWordSpacing,
        // borderTopLeftRadius: borderTopLeftRadiusMobile,
        // borderTopRightRadius: borderTopRightRadiusMobile,
        // borderBottomRightRadius: borderBottomRightRadiusMobile,
        // borderBottomLeftRadius: borderBottomLeftRadiusMobile,
        width,
        borderRadius,
        cursor,
        borderStyle,
        borderColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        boxShadow,
        boxShadowString,
        alignItems,
        animation,
        pulse,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
        color,
        fontFamily,
        textTransform,
        fontStyle,
        textDecoration,
        backgroundColor,
        backgroundImage,
      };
    }

    return {
      width,
      fontSize,
      minHeight,
      flexDirection,
      justifyContent,
      borderRadius,
      cursor,
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
      alignItems,
      animation,
      pulse,
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
      display,
      lineHeight,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      color,
      textAlign,
      letterSpacing,
      wordSpacing,
      fontFamily,
      fontWeight,
      textTransform,
      fontStyle,
      textDecoration,
      backgroundColor,
      maxWidth,
      backgroundImage,
    };
  };

  const getVisibility = () => {
    if (deviceView === "mobile") {
      return mobileHidden;
    }
    return hidden;
  };

  const hiddenElement = getVisibility();
  const responsiveProps = getResponsiveProps();

  const hoverBackgroundStyles = hasBackgroundHover
    ? ` .button-hover-${id}:hover {
      background-color: ${hoverBackgroundColor} !important;
      color: ${hoverColor} !important;
      border-color: ${hoverBorderColor} !important;
    }`
    : "";

  const boxShadowStyles = buttonHasBoxShadow
    ? ` .button-box-shadow-${id} {
  box-shadow: ${buttonHorizontal}px ${buttonVertical}px ${buttonBlur}px ${buttonSpread}px ${buttonColor} ${
        buttonInset === "inset" ? "inset" : ""
      } !important;
}`
    : "";

  const boxShadowTextStyles = textHasBoxShadow
    ? ` .text-box-shadow-text-${id} {
      text-shadow: ${textHorizontal}px ${textVertical}px ${textBlur}px ${textColor} !important;
}`
    : "";

  return (
    <>
      <button
        type={type}
        ref={(ref) => connect(drag(ref))}
        className={`button-hover-${id} button-box-shadow-${id} text-box-shadow-text-${id} ${className} ${
          hiddenElement && "hidden"
        } ${pulse === "true" && "pulse-button"}`}
        data-delay={delay}
        style={{
          transition: `all ${transitionDuration}s ease-in-out`,

          width: "100%",
          ...responsiveProps,
        }}
      >
        <span>{text}</span>
      </button>
      <style>
        {hoverBackgroundStyles} {boxShadowStyles} {boxShadowTextStyles}
      </style>
    </>
  );
};

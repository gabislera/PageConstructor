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
  borderTopLeftRadiusMobile,
  borderTopRightRadiusMobile,
  borderBottomRightRadiusMobile,
  borderBottomLeftRadiusMobile,
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

  hidden,
  mobileHidden,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();
  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: widthMobile,
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

        // borderTopLeftRadius: borderTopLeftRadiusMobile,
        // borderTopRightRadius: borderTopRightRadiusMobile,
        // borderBottomRightRadius: borderBottomRightRadiusMobile,
        // borderBottomLeftRadius: borderBottomLeftRadiusMobile,
      };
    }

    return {
      width,
      fontSize,
      minHeight,
      flexDirection,
      justifyContent,

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
      display,
      lineHeight,
    };
  };
  const getResponsivePropsMobile = () => {
    if (deviceView === "mobile") {
      return {
        fontWeight: mobileFontWeight,
        fontSize: mobileFontSize,
        textAlign: mobileTextAlign,
        letterSpacing: mobileLetterSpacing,
        wordSpacing: mobileWordSpacing,
      };
    }

    return {
      fontSize,
      lineHeight,
      textAlign,
      letterSpacing,
      wordSpacing,
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
  const responsivePropsMobile = getResponsivePropsMobile();

  return (
    <button
      type={type}
      ref={(ref) => connect(drag(ref))}
      className={`${className} ${hiddenElement && "hidden"}`}
      data-delay={delay}
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
        alignItems,
        animation,
        pulse,
        ...responsiveProps,
      }}
    >
      <span
        style={{
          fontFamily,
          fontSize,
          textTransform,
          fontStyle,
          textDecoration,
          ...responsivePropsMobile,
        }}
      >
        {text}
      </span>
    </button>
  );
};

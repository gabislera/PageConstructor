import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Text = ({
  content,
  url,
  htmlTag,
  textAlign,
  lineHeight,
  fontWeight,
  alignSelf,
  color,
  fontSize,
  fontFamily,
  additional_css,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  width,
  hoverColor,
  hoverBackgroundColor,
  textTransform,
  fontStyle,
  textDecoration,
  letterSpacing,
  wordSpacing,
  order,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  textShadow,
  mobileTextAlign,
  mobileLineHeight,
  mobileFontWeight,
  mobileFontSize,
  mobileMarginTop,
  mobileMarginRight,
  mobileMarginLeft,
  mobileMarginBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  mobileFontStyle,
  mobileTextDecoration,
  mobileLetterSpacing,
  mobileWordSpacing,
  mobileAlignSelf,
  mobileOrder,
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,

  pulse,
  hidden,
  mobileHidden,

  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        textAlign: mobileTextAlign,
        lineHeight: mobileLineHeight,
        fontWeight: mobileFontWeight,
        fontSize: mobileFontSize,
        marginTop: mobileMarginTop,
        marginRight: mobileMarginRight,
        marginBottom: mobileMarginBottom,
        marginLeft: mobileMarginLeft,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingBottom: mobilePaddingBottom,
        paddingLeft: mobilePaddingLeft,
        fontStyle: mobileFontStyle,
        textDecoration: mobileTextDecoration,
        letterSpacing: mobileLetterSpacing,
        wordSpacing: mobileWordSpacing,
        alignSelf: mobileAlignSelf,
        order: mobileOrder,
        // position: mobilePosition,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
        textShadow,
      };
    }

    return {
      textAlign,
      lineHeight,
      fontWeight,
      fontSize,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontStyle,
      textDecoration,
      letterSpacing,
      wordSpacing,
      alignSelf,
      order,
      // position,
      top,
      left,
      right,
      bottom,
      zIndex,
      textShadow,
    };
  };

  const hiddenElement = deviceView === "mobile" ? mobileHidden : hidden;
  const responsiveProps = getResponsiveProps();

  return (
    <div
      className={`${hiddenElement && "hidden"} ${pulse === "true" && "pulse-button"
        }`}
      style={{
        ...responsiveProps,
        display: "inherit",
        width: "fit-content",
        maxWidth: "100%",
        overflowWrap: "break-word",
      }}
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          color,
          ...responsiveProps,
        }}
      />
    </div>
  );
};

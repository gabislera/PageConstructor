import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
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
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);
  const { deviceView } = useResponsiveMode();

  useEffect(() => {
    if (selected) {
      return;
    }
    setEditable(false);
  }, [selected]);

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

  const getVisibility = () => {
    if (deviceView === "mobile") {
      return mobileHidden;
    }
    return hidden;
  };

  const hiddenElement = getVisibility();
  const responsiveProps = getResponsiveProps();

  return (
    <div
      className={`${hiddenElement && "hidden"} ${
        pulse === "true" && "pulse-button"
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
      onClick={() => selected && setEditable(true)}
    >
      <ContentEditable
        html={content}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.content = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
            500
          )
        }
        tagName={htmlTag}
        style={{
          ...responsiveProps,
          color,
          width,
        }}
      />
    </div>
  );
};

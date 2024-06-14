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
    };
  };

  const responsiveProps = getResponsiveProps();

  const Content = () => (
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
  );

  // TODO: url is not working

  return (
    <div
      style={{
        ...responsiveProps,
        display: "inherit",
        // position,
        width: "fit-content",
      }}
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Content />
        </a>
      ) : (
        <Content />
      )}
    </div>
  );
};

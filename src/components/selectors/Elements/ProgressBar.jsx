import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import ContentEditable from "react-contenteditable";

export const ProgressBar = ({
  display,
  title,
  htmlTag,
  content,
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  hidden,
  mobileHidden,

  titleColor,
  titleFontFamily,
  titleFontSize,
  titleFontWeight,
  titleTextTransform,
  titleFontStyle,
  titleTextDecoration,
  titleLineHeight,
  titleLetterSpacing,
  titleWordSpacing,

  contentColor,
  contentFontFamily,
  contentFontSize,
  contentFontWeight,
  contentTextTransform,
  contentFontStyle,
  contentTextDecoration,
  contentLineHeight,
  contentLetterSpacing,
  contentWordSpacing,
  contentPadding,

  showPercentage,

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
  position,
  top,
  left,
  right,
  bottom,
  zIndex,

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
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,

  pulse,
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
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
        position: mobilePosition,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
      };
    }

    return {
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
      position,
      top,
      left,
      right,
      bottom,
      zIndex,
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
      className={`${hiddenElement && "hidden"} progress-bar-content ${
        pulse === "true" && "pulse-button"
      } `}
      style={{
        ...responsiveProps,
        display,
        flexDirection: "column",
        width: "100%",
      }}
      ref={(ref) => connect(drag(ref))}
    >
      <ContentEditable
        tagName={htmlTag}
        html={title}
        disabled={false}
        style={{
          margin: 0,
          color: titleColor,
          fontFamily: titleFontFamily,
          fontSize: titleFontSize,
          fontWeight: titleFontWeight,
          textTransform: titleTextTransform,
          fontStyle: titleFontStyle,
          textDecoration: titleTextDecoration,
          lineHeight: titleLineHeight,
          letterSpacing: titleLetterSpacing,
          wordSpacing: titleWordSpacing,
        }}
        onChange={(e) =>
          setProp(
            (props) => (
              (props.title = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")), 500
            )
          )
        }
      />
      <div style={{ width: "100%", backgroundColor, borderRadius }}>
        <div
          className="progress-bar-animation"
          style={{
            width: `${width}%`,
            height,
            backgroundColor: color,
            color: contentColor,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            overflow: "hidden",
          }}
        >
          <ContentEditable
            tagName={"span"}
            html={content}
            disabled={false}
            style={{
              color: contentColor,
              fontFamily: contentFontFamily,
              fontSize: contentFontSize,
              fontWeight: contentFontWeight,
              textTransform: contentTextTransform,
              fontStyle: contentFontStyle,
              textDecoration: contentTextDecoration,
              lineHeight: contentLineHeight,
              letterSpacing: contentLetterSpacing,
              wordSpacing: contentWordSpacing,
            }}
            onChange={(e) =>
              setProp(
                (props) => (
                  (props.content = e.target.value.replace(
                    /<\/?[^>]+(>|$)/g,
                    ""
                  )),
                  500
                )
              )
            }
          />
          {showPercentage && (
            <span
              style={{
                color: contentColor,
                fontFamily: contentFontFamily,
                fontSize: contentFontSize,
                fontWeight: contentFontWeight,
                textTransform: contentTextTransform,
                fontStyle: contentFontStyle,
                textDecoration: contentTextDecoration,
                lineHeight: contentLineHeight,
                letterSpacing: contentLetterSpacing,
                wordSpacing: contentWordSpacing,
              }}
            >
              {width}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

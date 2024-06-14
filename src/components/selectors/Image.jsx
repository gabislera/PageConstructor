import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../contexts/ResponsiveModeContext";

export const Image = ({
  src,
  alt,
  display,
  width,
  maxWidth,
  height,
  objectFit,
  caption,
  url,
  textAlign,

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

  mobileWidth,
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
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: mobileWidth,
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

  const ImageElement = (
    <figure
      style={{
        ...responsiveProps,
      }}
    >
      <img
        ref={(ref) => connect(drag(ref))}
        src={src}
        alt={alt}
        style={{
          ...responsiveProps,
          display,
          maxWidth,
          height,
          objectFit,
        }}
      />
      <figcaption style={{ textAlign: "center" }}>{caption}</figcaption>
    </figure>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {ImageElement}
    </a>
  ) : (
    ImageElement
  );
};

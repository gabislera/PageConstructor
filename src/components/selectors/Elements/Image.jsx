import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Image = ({
  src,
  alt,
  display,
  width,
  // maxWidth,
  mobilewidth,
  height,
  objectFit,
  caption,
  url,
  textAlign,
  opacity,
  hoverOpacity,
  opacityTransitionDuration,
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
  mobileMaxWidth,

  pulse,
  hidden,
  mobileHidden,
  hasOpacityHover,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: mobilewidth,
        // maxWidth: mobileMaxWidth,
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
      // maxWidth,
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

  const hoverStyles = hasOpacityHover
    ? `
  .image-hover:hover {
    opacity: ${hoverOpacity} !important; 
    transition: opacity ${opacityTransitionDuration}s ease-in-out !important;
  }
`
    : "";

  // TODO: change logic to render the <a> tag only in api-main

  const ImageElement = (
    <>
      <img
        ref={(ref) => connect(drag(ref))}
        src={src}
        alt={alt}
        className={`image-hover ${hiddenElement && "hidden"} ${
          pulse === "true" && "pulse-button"
        }`}
        style={{
          ...responsiveProps,

          display,
          height,
          objectFit,
          opacity,
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

          transition: `opacity ${opacityTransitionDuration}s ease-in-out`,
        }}
      />
      <style>{hoverStyles}</style>
    </>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
        textAlign,
      }}
    >
      {ImageElement}
    </a>
  ) : (
    ImageElement
  );
};

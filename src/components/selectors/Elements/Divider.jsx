import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Divider = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginTopMobile,
  marginBottomMobile,
  marginLeftMobile,
  marginRightMobile,
  delay,
  borderBottomColor,
  borderBottomStyle,
  borderBottomWidthMobile,
  borderBottomColorMobile,
  borderBottomStyleMobile,
  borderBottomWidth,
  width,
  widthMobile,
  paddingBlockStart,
  paddingBlockEnd,
  position,
  alignSelf,
  mobileAlignSelf,
  zIndex,
  mobileZIndex,
  top,
  left,
  right,
  bottom,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobilePosition,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  pulse,
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
        borderBottomColor: borderBottomColorMobile,
        borderBottomStyle: borderBottomStyleMobile,
        borderBottomWidth: borderBottomWidthMobile,
        width: widthMobile,
      };
    }
    return {
      borderBottomColor,
      borderBottomStyle,
      borderBottomWidth,
      width,
    };
  };

  const getResponsiveContainerProps = () => {
    if (deviceView === "mobile") {
      return {
        marginBottom: marginBottomMobile,
        marginTop: marginTopMobile,
        marginLeft: marginLeftMobile,
        marginRight: marginRightMobile,
        alignSelf: mobileAlignSelf,
        zIndex: mobileZIndex,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        position: mobilePosition,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingLeft: mobilePaddingLeft,
        paddingBottom: mobilePaddingBottom,
      };
    }
    return {
      width,
      alignSelf,
      position,
      zIndex,
      top,
      left,
      right,
      bottom,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
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
  const responsiveContainerProps = getResponsiveContainerProps();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      data-delay={delay}
      style={{
        paddingBlockStart,
        paddingBlockEnd,
        maxwidth: "100%",
        ...responsiveContainerProps,
      }}
    >
      <span
        style={{
          display: "block",
          ...responsiveProps,
        }}
        className={`${delay > 0 ? "oscillating" : ""} ${
          hiddenElement && "hidden"
        } ${pulse === "true" && "pulse-button"}`}
      />
    </div>
  );
};

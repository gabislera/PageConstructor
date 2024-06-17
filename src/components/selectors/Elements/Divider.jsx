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
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        marginBottom: marginBottomMobile,
        marginTop: marginTopMobile,
        marginLeft: marginLeftMobile,
        marginRight: marginRightMobile,
        borderBottomColor: borderBottomColorMobile,
        borderBottomStyle: borderBottomStyleMobile,
        borderBottomWidth: borderBottomWidthMobile,
        width: widthMobile,
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
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      borderBottomColor,
      borderBottomStyle,
      borderBottomWidth,
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
    };
  };

  return (
    <span
      ref={(ref) => connect(drag(ref))}
      data-delay={delay}
      style={{
        paddingBlockStart,
        paddingBlockEnd,
        ...getResponsiveProps(deviceView),
      }}
      className={`${delay > 0 ? "oscillating" : ""}`}
    />
  );
};

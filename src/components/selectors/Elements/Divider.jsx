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
    };
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      data-delay={delay}
      style={{
        borderBottomColor,
        borderBottomStyle,
        width,
        borderBottomWidth,
        ...getResponsiveProps(deviceView),
      }}
      className={`${delay > 0 ? "oscillating" : ""}`}
    />
  );
};

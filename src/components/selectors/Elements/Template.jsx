import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Template = ({}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        // mobileProps
      };
    }

    return {
      // props
    };
  };

  const responsiveProps = getResponsiveProps();

  return (
    <div
      style={{
        ...responsiveProps,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      {/* content */}
    </div>
  );
};

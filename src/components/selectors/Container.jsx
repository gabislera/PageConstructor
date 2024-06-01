import React from "react";
import { useNode } from "@craftjs/core";

export const Container = ({
  background,
  padding = 0,
  children,
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        background,
        padding,
        minHeight: "100px"
      }}
    >
      {children}
    </div>
  );
};
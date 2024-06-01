import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";

export const Section = ({
  backgroundColor,
  padding = 0,
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        backgroundColor,
        maxWidth: "1220px",
        margin: "0 auto",
        padding
      }}
    >
      <Element is={Container} id="container" canvas />
    </div>
  );
};
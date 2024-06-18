import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";

export const Grid = ({
  maxWidth,
  width,
  minHeight,
  gridRows,
  gridColumns,
  htmlTag,
  rowGap,
  columnGap,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const ContainerTag = htmlTag || "div";
  const totalContainers = gridRows * gridColumns;

  console.log(columnGap, rowGap);

  return (
    <ContainerTag
      ref={(ref) => connect(drag(ref))}
      style={{
        maxWidth,
        display: "grid",
        rowGap,
        columnGap,
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        width,
        minHeight,
      }}
    >
      {[...Array(totalContainers)].map((_, index) => (
        <Element
          key={index}
          id={`droppable-${index}`}
          is={Container}
          canvas
        ></Element>
      ))}
    </ContainerTag>
  );
};

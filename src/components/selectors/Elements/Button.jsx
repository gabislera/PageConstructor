import React from "react";
import { useNode } from "@craftjs/core";

export const Button = ({
  text,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  color,
  background,
  width,
  borderRadius,
  type,
  cursor,
  fontFamily,
  fontWeight,
  fontSize,
  textTransform,
  fontStyle,
  textDecoration,
  wordSpacing,
  letterSpacing,
  borderStyle,
  borderColor,
  boxShadow,
  lineHeight,
}) => {
  const {
    connectors: { connect, drag },
    ...data
  } = useNode();

  return (
    <>
      <button
        type={type}
        ref={(ref) => connect(drag(ref))}
        style={{
          color,
          backgroundColor: background,
          borderRadius,
          cursor,
          width,
          marginTop,
          marginRight,
          marginLeft,
          marginBottom,
          paddingTop,
          paddingRight,
          borderStyle,
          paddingLeft,
          borderColor,
          boxShadow,
          paddingBottom,

          minWidth: "100px",
          minHeight: "50px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          border: "none",
        }}
      >
        <span
          style={{
            fontFamily,
            fontWeight,
            fontSize,
            textTransform,
            fontStyle,
            textDecoration,
            wordSpacing,
            letterSpacing,
            lineHeight,
          }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

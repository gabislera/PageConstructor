import React from 'react';
import { useNode } from '@craftjs/core';

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
  className,
  additional_css
}) => {
  const {
    connectors: { connect, drag },
    ...data
  } = useNode();

  const id = `btn-r1qpk8`;
  // console.log(data.id)

  return (
    <>
      <button
        type={type}
        ref={(ref) => connect(drag(ref))}
        className={id}
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
          paddingLeft,
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
        {text}
      </button>
      <style>{additional_css}</style>
    </>
  );
};
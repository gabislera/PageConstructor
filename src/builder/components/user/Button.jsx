import { useNode } from '@craftjs/core';
import React from 'react';

export const ButtonContent = ({ children, gap, display, minWidth }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      style={{
        display,
        minWidth,
        gap,
      }}
      ref={connect}
    >
      {children}
    </div>
  );
};

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
  additionalCss
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const convertCssToObject = (css) => {
    const regex = /(\w+): '([^']*)';/g;
    const styleObj = {};
    let match;

    while ((match = regex.exec(css)) !== null) {
      const [_, key, value] = match;
      styleObj[key] = value;
    }
    return styleObj;
  };

  const additionalStyles = convertCssToObject(additionalCss || "");

  return (
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
        ...additionalStyles
      }}
    >
      {text}
    </button>
  );
};







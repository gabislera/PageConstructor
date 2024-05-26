import React, { useEffect, useState } from 'react';
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
  } = useNode();

  // Create a className dynamically
  // const id = `btn-${Math.random().toString(36).substring(7)}`;
  const id = `btn-r1qpk8`;
  const styleSheetId = `style-${id}`;

  useEffect(() => {
    // Find existing stylesheet
    let styleSheet = [...document.styleSheets].find(
      (sheet) => sheet.ownerNode.id === styleSheetId
    );

    if (styleSheet) {
      // Remove all existing rules
      while (styleSheet.cssRules.length > 0) {
        styleSheet.deleteRule(0);
      }
    } else {
      // Create a new style tag
      const styleElement = document.createElement('style');
      styleElement.id = styleSheetId;
      document.head.appendChild(styleElement);
      styleSheet = styleElement.sheet;
    }

    // Insert new rules
    if (styleSheet) {
      const cssRules = additional_css.split('}');
      cssRules.forEach((rule) => {
        if (rule.trim() !== '') {
          styleSheet.insertRule(rule + '}', styleSheet.cssRules.length);
        }
      });
    }
  }, [additional_css, id, styleSheetId]);

  return (
    <button
      id={id}
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
  );
};
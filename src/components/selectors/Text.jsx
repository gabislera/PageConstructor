import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";

export const Text = ({
  content,
  url,
  htmlTag,
  textAlign,
  lineHeight,
  fontWeight,
  alignSelf,
  color,
  fontSize,
  fontFamily,
  additional_css,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  width,
  hoverColor,
  hoverBackgroundColor,
  textTransform,
  fontStyle,
  textDecoration,
  letterSpacing,
  wordSpacing,
  order,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,

  ...props
}) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }
    setEditable(false);
  }, [selected]);

  const Content = () => (
    <ContentEditable
      html={content}
      disabled={!editable}
      onChange={(e) =>
        setProp(
          (props) =>
            (props.content = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
          500
        )
      }
      tagName={htmlTag}
      style={{
        fontSize,
        textAlign,
        lineHeight,
        fontWeight,
        letterSpacing,
        wordSpacing,
        textTransform,
        fontStyle,
        textDecoration,
        color,
        fontFamily,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        alignSelf,
        width,

        ...(hoverColor || hoverBackgroundColor
          ? {
              transition: "color 0.3s, background-color 0.3s",
              "&:hover": {
                color: hoverColor,
                backgroundColor: hoverBackgroundColor,
              },
            }
          : {}),
      }}
    />
  );

  // TODO: url is not working

  return (
    <>
      <div
        style={{
          display: "inherit",
          alignSelf,
          order,
          // position,
          top,
          left,
          right,
          bottom,
          zIndex,
          width: "fit-content",
        }}
        {...props}
        ref={(ref) => connect(drag(ref))}
        onClick={() => selected && setEditable(true)}
      >
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Content />
          </a>
        ) : (
          <Content />
        )}
      </div>
      <style>{additional_css}</style>
    </>
  );
};

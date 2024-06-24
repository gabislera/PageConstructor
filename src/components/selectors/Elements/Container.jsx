import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";

export const Container = ({
  children,
  maxWidth,
  display,
  width,
  minHeight,
  flexDirection,
  justifyContent,
  alignItems,
  rowGap,
  columnGap,
  flexWrap,
  mobileWidth,
  mobileMinHeight,
  mobileFlexDirection,
  mobileJustifyContent,
  mobileAlignItems,
  mobileRowGap,
  mobileColumnGap,
  mobileFlexWrap,
  mobileMarginTop,
  mobileMarginRight,
  mobileMarginLeft,
  mobileMarginBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  mobileAlignSelf,
  mobileOrder,
  mobileFlexShrink,
  mobileFlexGrow,
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,
  overflow,
  htmlTag,
  url,
  backgroundColor,
  backgroundImage,
  borderStyle,
  borderTopWidth,
  borderBottomWidth,
  borderRightWidth,
  borderLeftWidth,
  borderColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  hoverBorderStyle,
  hoverBorderTopWidth,
  hoverBorderBottomWidth,
  hoverBorderRightWidth,
  hoverBorderLeftWidth,
  hoverBorderColor,
  hoverBorderTopLeftRadius,
  hoverBorderTopRightRadius,
  hoverBorderBottomRightRadius,
  hoverBorderBottomLeftRadius,
  hoverBackgroundColor,
  backgroundcolorTransitionDuration,
  borderTransitionDuration,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  alignSelf,
  order,
  flexShrink,
  flexGrow,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,

  hidden,
  mobileHidden,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const childrens = useNode((node) => node.data);

  const ContainerTag = htmlTag || "div";
  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        width: mobileWidth,
        minHeight: mobileMinHeight,
        flexDirection: mobileFlexDirection,
        justifyContent: mobileJustifyContent,
        alignItems: mobileAlignItems,
        rowGap: mobileRowGap,
        columnGap: mobileColumnGap,
        flexWrap: mobileFlexWrap,
        marginTop: mobileMarginTop,
        marginRight: mobileMarginRight,
        marginLeft: mobileMarginLeft,
        marginBottom: mobileMarginBottom,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingLeft: mobilePaddingLeft,
        paddingBottom: mobilePaddingBottom,
        alignSelf: mobileAlignSelf,
        order: mobileOrder,
        flexShrink: mobileFlexShrink,
        flexGrow: mobileFlexGrow,
        // position: mobilePosition,
        // top: mobileTop,
        // left: mobileLeft,
        // right: mobileRight,
        // bottom: mobileBottom,
        // zIndex: mobileZIndex,
      };
    }

    return {
      width,
      minHeight,
      flexDirection,
      justifyContent,
      alignItems,
      rowGap,
      columnGap,
      flexWrap,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      alignSelf,
      order,
      flexShrink,
      flexGrow,

      // position,
      // top,
      // left,
      // right,
      // bottom,
      // zIndex,
    };
  };

  const getVisibility = () => {
    if (deviceView === "mobile") {
      return mobileHidden;
    }
    return hidden;
  };

  const hiddenElement = getVisibility();
  const responsiveProps = getResponsiveProps();

  const [tooltip, setTooltip] = useState(false);

  const EmptyContainer = (
    <Box
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",

        minHeight: "100px",
        border: "1px dashed #9da5ae",
      }}
    >
      {tooltip ? (
        <p
          style={{
            color: "#9da5ae",
            fontSize: "12px",
            fontWeight: "semibold",
            textAlign: "center",
          }}
        >
          Arraste os elementos aqui
        </p>
      ) : (
        <Add sx={{ fill: "#9da5ae" }} />
      )}
    </Box>
  );

  const hoverStyles = `
    .container-hover:hover {
      ${
        hoverBackgroundColor !== "initial"
          ? `background-color: ${hoverBackgroundColor} !important;`
          : ""
      }
      ${
        hoverBorderStyle !== "none"
          ? `border-style: ${hoverBorderStyle} !important;`
          : ""
      }

      border-top-width: ${hoverBorderTopWidth} !important;
      border-bottom-width: ${hoverBorderBottomWidth} !important;
      border-right-width: ${hoverBorderRightWidth} !important;
      border-left-width: ${hoverBorderLeftWidth} !important;
      border-color: ${hoverBorderColor} !important;
      border-top-left-radius: ${hoverBorderTopLeftRadius} !important;
      border-top-right-radius: ${hoverBorderTopRightRadius} !important;
      border-bottom-right-radius: ${hoverBorderBottomRightRadius} !important;
      border-bottom-left-radius: ${hoverBorderBottomLeftRadius} !important;
    }
  `;

  // TODO: change logic to render the <a> tag only in api-main

  const ContainerElement = (
    <>
      <ContainerTag
        ref={(ref) => connect(drag(ref))}
        className={`container-hover ${hiddenElement && "hidden"}`}
        style={{
          ...responsiveProps,
          maxWidth,
          display,
          overflow,
          backgroundColor,
          borderStyle,
          borderTopWidth,
          borderBottomWidth,
          borderRightWidth,
          borderLeftWidth,
          borderColor,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          transition: `background-color ${backgroundcolorTransitionDuration}s ease-in-out, border ${borderTransitionDuration}s ease-in-out`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {childrens.nodes.length === 0 && !backgroundImage
          ? EmptyContainer
          : children}
      </ContainerTag>
      <style>{hoverStyles}</style>
    </>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit", width: "100%" }}
    >
      {ContainerElement}
    </a>
  ) : (
    ContainerElement
  );
};

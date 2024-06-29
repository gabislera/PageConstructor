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
  boxShadow,
  hidden,
  mobileHidden,
  pulse,
  hasBackgroundHover,
  hasBorderHover,
}) => {
  const {
    connectors: { connect, drag },
    id,
  } = useNode();
  const childrens = useNode((node) => node.data);
  const ContainerTag = htmlTag || "div";
  const [tooltip, setTooltip] = useState(false);

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
        boxShadow,
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
      boxShadow,
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

  const getBackgroundColor = () => {
    const value = backgroundImage?.split(":")[1];

    if (value === "http") {
      return `url(${backgroundImage})`;
    } else {
      return backgroundImage;
    }
  };

  const hiddenElement = getVisibility();
  const responsiveProps = getResponsiveProps();

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
        minHeight: deviceView === "mobile" ? mobileMinHeight : minHeight,
        width: "100%",

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

  const hoverBackgroundStyles = hasBackgroundHover
    ? ` .container-hover-${id}:hover {
        background-color: ${hoverBackgroundColor} !important;
      }`
    : "";

  const hoverBorderStyles = hasBorderHover
    ? ` .container-hover-${id}:hover {
        border-style: ${hoverBorderStyle} !important;
        border-top-width: ${hoverBorderTopWidth} !important;
        border-bottom-width: ${hoverBorderBottomWidth} !important;
        border-right-width: ${hoverBorderRightWidth} !important;
        border-left-width: ${hoverBorderLeftWidth} !important;
        border-color: ${hoverBorderColor} !important;
        border-top-left-radius: ${hoverBorderTopLeftRadius} !important;
        border-top-right-radius: ${hoverBorderTopRightRadius} !important;
        border-bottom-right-radius: ${hoverBorderBottomRightRadius} !important;
        border-bottom-left-radius: ${hoverBorderBottomLeftRadius} !important;
      }`
    : "";

  const ContainerElement = (
    <>
      <ContainerTag
        ref={(ref) => connect(drag(ref))}
        className={`container-hover-${id} ${hiddenElement && "hidden"} ${pulse === "true" && "pulse-button"
          }`}
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


          backgroundImage: getBackgroundColor(),
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {childrens.nodes.length === 0 && !backgroundImage
          ? EmptyContainer
          : children}
      </ContainerTag>
      <style>{hoverBackgroundStyles} {hoverBorderStyles}</style>
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
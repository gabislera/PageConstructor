import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Countdown = ({
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
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
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
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,
  background,
  maxWidthMobile,
  maxWidth,
  //timer
  timerSeconds,
  timerDays,
  timerHours,
  timerMinutes,
  color,
  endDate,
  CountType,
  displayWeekly,
  displayFormat,
  timezone,
  textDays,
  textHours,
  textMinutes,
  textSeconds,
  justifyContent,
  displayFormatDays,
  displayFormatHours,
  displayFormatMin,
  displayFormatSeconds,
  //borda
  borderStyle,
  borderColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  gap,
  gapMobile,
  minWidth,
  minWidthMobile,

  //value
  fontSize,
  mobileFontSize,
  fontWeight,
  textAlign,
  lineHeight,
  mobileLineHeight,
  fontFamily,
  textTransform,
  fontStyle,
  textDecoration,
  letterSpacing,
  mobileLetterSpacing,
  alignSelfTimer,
  //text
  fontSizeText,
  mobileFontSizeText,
  fontFamilyText,
  colorText,
  fontWeightText,
  textAlignText,
  fontStyleText,
  textDecorationText,
  lineHeightText,
  mobileLineHeightText,
  letterSpacingText,
  mobileLetterSpacingText,
  alignSelfText,
  hidden,
  mobileHidden,
  mobileJustifyContent,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const list = [
    {
      id: "days",
      label: textDays,
      type: "days",
      value: timerDays,
      display: displayFormatDays,
    },
    {
      id: "hours",
      label: textHours,
      type: "hours",
      value: timerHours,
      display: displayFormatHours,
    },
    {
      id: "minutes",
      label: textMinutes,
      type: "minutes",
      value: timerMinutes,
      display: displayFormatMin,
    },
    {
      id: "seconds",
      label: textSeconds,
      type: "seconds",
      value: timerSeconds,
      display: displayFormatSeconds,
    },
  ];

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
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
        position: mobilePosition,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
        gap: gapMobile,
        hidden: mobileHidden,
        justifyContent: mobileJustifyContent,
      };
    }

    return {
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
      position,
      top,
      left,
      right,
      bottom,
      zIndex,
      gap,
      hidden,
      justifyContent,
    };
  };
  const getResponsiveElementProps = () => {
    if (deviceView === "mobile") {
      return {
        maxWidth: maxWidthMobile,
        minWidth: minWidthMobile,
        background,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
        borderColor,
      };
    }

    return {
      maxWidth,
      minWidth,
      borderStyle,
      background,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomRightRadius,
      borderBottomLeftRadius,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderColor,
    };
  };

  const getResponsiveElementValueProps = () => {
    if (deviceView === "mobile") {
      return {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
        letterSpacing: mobileLetterSpacing,
      };
    }

    return {
      fontSize,
      color,
      fontWeight,
      textAlign,
      lineHeight,
      fontFamily,
      textTransform,
      fontStyle,
      textDecoration,
      letterSpacing,
    };
  };

  const responsiveProps = getResponsiveProps();
  const responsiveElementProps = getResponsiveElementProps();
  const responsiveElementValueText = getResponsiveElementValueProps();

  return (
    <div
      className="countdown-container"
      style={{
        display: "flex",
        width: "100%",
        ...responsiveProps,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      {list.map((unit, index) => (
        <CountdownUnit
          key={index}
          value={unit.value}
          id={unit.id}
          display={unit.display}
          responsiveElementValueText={responsiveElementValueText}
          responsiveElementProps={responsiveElementProps}
          label={unit.label.charAt(0).toUpperCase() + unit.label.slice(1)}
          fontSizeText={fontSizeText}
          deviceView={deviceView}
          mobileFontSizeText={mobileFontSizeText}
          lineHeightText={lineHeightText}
          mobileLineHeightText={mobileLineHeightText}
          letterSpacingText={letterSpacingText}
          mobileLetterSpacingText={mobileLetterSpacingText}
          fontFamilyText={fontFamilyText}
          colorText={colorText}
          fontWeightText={fontWeightText}
          textAlignText={textAlignText}
          fontStyleText={fontStyleText}
          alignSelfText={alignSelfText}
          textDecorationText={textDecorationText}
          alignSelfTimer={alignSelfTimer}
          maxWidth={maxWidth}
        />
      ))}
    </div>
  );
};

const CountdownUnit = ({
  value,
  label,
  id,
  display,
  responsiveElementProps,
  responsiveElementValueText,
  fontSizeText,
  mobileFontSizeText,
  lineHeightText,
  mobileLineHeightText,
  letterSpacingText,
  mobileLetterSpacingText,
  fontFamilyText,
  colorText,
  fontWeightText,
  textAlignText,
  fontStyleText,
  textDecorationText,
  deviceView,
  alignSelfText,
  alignSelfTimer,
}) => {
  return (
    <>
      {display ? (
        <div
          className={`countdown-${id}`}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            padding: "10px 20px",
            ...responsiveElementProps,
          }}
        >
          <span
            style={{
              alignSelf: alignSelfTimer,
              ...responsiveElementValueText,
            }}
          >
            {value}
          </span>
          <span
            style={{
              fontSize:
                deviceView === "mobile" ? mobileFontSizeText : fontSizeText,
              lineHeight:
                deviceView === "mobile" ? mobileLineHeightText : lineHeightText,
              letterSpacing:
                deviceView === "mobile"
                  ? mobileLetterSpacingText
                  : letterSpacingText,
              fontFamily: fontFamilyText,
              color: colorText,
              fontWeight: fontWeightText,
              textAlign: textAlignText,
              fontStyle: fontStyleText,
              textDecoration: textDecorationText,
              alignSelf: alignSelfText,
            }}
          >
            {label}
          </span>
        </div>
      ) : null}
    </>
  );
};

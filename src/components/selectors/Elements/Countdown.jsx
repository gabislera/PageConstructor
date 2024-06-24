import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import moment from "moment";
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
  fontSizeMobileText,
  letterSpacingText,
  mobileLetterSpacingText,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

  const list = [
    { id: "days", label: textDays, type: "days", value: timerDays },
    { id: "hours", label: textHours, type: "hours", value: timerHours },
    { id: "minutes", label: textMinutes, type: "minutes", value: timerMinutes },
    { id: "seconds", label: textSeconds, type: "seconds", value: timerSeconds },
  ];
  console.log("list", list);
  // useEffect(() => {
  //   const calculateTimeRemaining = () => {
  //     const now = moment().tz(timezone);
  //     const end = moment(endDate).tz(timezone);
  //     const duration = moment.duration(end.diff(now));

  //     setTimeRemaining({
  //       days: Math.floor(duration.asDays()),
  //       hours: duration.hours(),
  //       minutes: duration.minutes(),
  //       seconds: duration.seconds(),
  //     });
  //   };

  //   const interval = setInterval(calculateTimeRemaining, 1000);
  //   return () => clearInterval(interval);
  // }, [endDate, timezone]);

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
    };
  };
  const getResponsiveElementProps = () => {
    if (deviceView === "mobile") {
      return {
        maxWidth: maxWidthMobile,

        minWidth: minWidthMobile,

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
  const getResponsiveElementTextProps = () => {
    if (deviceView === "mobile") {
      return {
        fontSizeText: mobileFontSizeText,
        lineHeightText: mobileLineHeightText,
        letterSpacingText: mobileLetterSpacingText,
      };
    }

    return {
      fontSizeText,
      fontFamilyText,
      letterSpacingText,
      colorText,
      fontWeightText,
      textAlignText,
      fontStyleText,
      textDecorationText,
    };
  };

  const responsiveProps = getResponsiveProps();
  const responsiveElementProps = getResponsiveElementProps();
  const responsiveElementValueText = getResponsiveElementValueProps();
  const responsiveElementText = getResponsiveElementTextProps();
  return (
    <div
      className="countdown-container"
      style={{
        display: "flex",
        width: "70%",
        ...responsiveProps,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      {list.map((unit, index) => (
        <CountdownUnit
          key={index}
          value={unit.value}
          id={unit.id}
          responsiveElementValueText={responsiveElementValueText}
          responsiveElementProps={responsiveElementProps}
          responsiveElementText={responsiveElementText}
          label={unit.label.charAt(0).toUpperCase() + unit.label.slice(1)}
          color={color}
        />
      ))}
    </div>
  );
};

const CountdownUnit = ({
  value,
  label,
  id,
  responsiveElementText,
  responsiveElementProps,
  responsiveElementValueText,
}) => {
  return (
    <div
      className={`countdown-${id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: "10px 20px",
        margin: "5px",
        ...responsiveElementProps,
      }}
    >
      <span
        style={{
          ...responsiveElementValueText,
        }}
      >
        {value}
      </span>
      <span
        style={{
          ...responsiveElementText,
        }}
      >
        {label}
      </span>
    </div>
  );
};

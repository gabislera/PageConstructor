import React from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import { Tooltip } from "@mui/material";

export const Form = ({
  items = [],

  inputSize,
  buttonSize,
  buttonMaxWidth,
  buttonAlign,

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
  mobileButtonAlign,
  mobileButtonMaxWidth,

  showLabel,
  showRequiredIcon,
  formName,
  columnGap,
  rowGap,
  labelSpacing,
  labelColor,
  labelFontFamily,
  labelFontSize,
  labelFontWeight,
  labelTextTransform,
  labelFontStyle,
  labelTextDecoration,
  labelLineHeight,
  labelLetterSpacing,
  labelWordSpacing,

  inputColor,
  inputFontFamily,
  inputFontSize,
  inputFontWeight,
  inputTextTransform,
  inputFontStyle,
  inputTextDecoration,
  inputLineHeight,
  inputLetterSpacing,
  inputWordSpacing,
  inputBackgroundColor,
  inputBorderTopWidth,
  inputBorderRightWidth,
  inputBorderLeftWidth,
  inputBorderBottomWidth,
  inputBorderTopLeftRadius,
  inputBorderTopRightRadius,
  inputBorderBottomRightRadius,
  inputBorderBottomLeftRadius,
  inputBorderColor,

  buttonColor,
  buttonBackgroundColor,
  buttonFontFamily,
  buttonFontSize,
  buttonFontWeight,
  buttonTextTransform,
  buttonFontStyle,
  buttonTextDecoration,
  buttonLineHeight,
  buttonLetterSpacing,
  buttonWordSpacing,
  buttonBorderTopLeftRadius,
  buttonBorderTopRightRadius,
  buttonBorderBottomRightRadius,
  buttonBorderBottomLeftRadius,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();
  const code = "BR";

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
    };
  };
  const responsiveProps = getResponsiveProps();

  const getInputSize = (size) => {
    switch (size) {
      case "extra-small":
        return {
          minHeight: "33px",
          padding: "4px 12px",
        };
      case "small":
        return {
          minHeight: "40px",
          padding: "5px 14px",
        };
      case "medium":
        return {
          minHeight: "47px",
          padding: "6px 16px",
        };
      case "large":
        return {
          minHeight: "59px",
          padding: "7px 20px",
        };
      case "extra-large":
        return {
          minHeight: "72px",
          padding: "8px 24px",
        };
    }
  };

  const inputSizes = getInputSize(inputSize);
  const buttonSizes = getInputSize(buttonSize);

  return (
    <form
      name={formName}
      style={{
        ...responsiveProps,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        columnGap,
        rowGap,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: labelSpacing,
          }}
        >
          {showLabel && (
            <label
              htmlFor={item.label}
              style={{
                color: labelColor,
                fontFamily: labelFontFamily,
                fontSize: labelFontSize,
                fontWeight: labelFontWeight,
                textTransform: labelTextTransform,
                fontStyle: labelFontStyle,
                textDecoration: labelTextDecoration,
                lineHeight: labelLineHeight,
                letterSpacing: labelLetterSpacing,
                wordSpacing: labelWordSpacing,
              }}
            >
              {item.label}
              {item.required && showRequiredIcon && (
                <span style={{ color: "red", fontSize: "16px" }}>*</span>
              )}
            </label>
          )}
          <div
            className="phone-input-outter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              width: "100%",
              backgroundColor: "#fff",
              backgroundColor: inputBackgroundColor,
              borderTopWidth: inputBorderTopWidth,
              borderRightWidth: inputBorderRightWidth,
              borderLeftWidth: inputBorderLeftWidth,
              borderBottomWidth: inputBorderBottomWidth,
              borderTopLeftRadius: inputBorderTopLeftRadius,
              borderTopRightRadius: inputBorderTopRightRadius,
              borderBottomRightRadius: inputBorderBottomRightRadius,
              borderBottomLeftRadius: inputBorderBottomLeftRadius,
              borderColor: inputBorderColor,
              borderStyle: "solid",
              overflow: "hidden",
            }}
          >
            {item.type === "tel" && (
              <Tooltip
                title="Após a publicação da página, o DDI se ajusta automaticamente ao país do usuário."
                placement="bottom"
              >
                <button
                  type="button"
                  className="country-code-button"
                  // style={{ color: inputColor }}
                >
                  {code} +55
                </button>
              </Tooltip>
            )}
            <input
              id={item.label}
              type={item.type}
              placeholder={item.placeholder}
              style={{
                ...inputSizes,
                border: "none",
                width: "100%",
                outline: "none",
                color: inputColor,
                fontFamily: inputFontFamily,
                fontSize: inputFontSize,
                fontWeight: inputFontWeight,
                textTransform: inputTextTransform,
                fontStyle: inputFontStyle,
                textDecoration: inputTextDecoration,
                lineHeight: inputLineHeight,
                letterSpacing: inputLetterSpacing,
                wordSpacing: inputWordSpacing,
                backgroundColor: "inherit",
              }}
            />
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: deviceView === "mobile" ? mobileButtonAlign : buttonAlign,
        }}
      >
        <button
          style={{
            ...buttonSizes,
            width: "100%",
            backgroundColor: buttonBackgroundColor,
            color: buttonColor,
            fontFamily: buttonFontFamily,
            fontSize: buttonFontSize,
            fontWeight: buttonFontWeight,
            textTransform: buttonTextTransform,
            fontStyle: buttonFontStyle,
            textDecoration: buttonTextDecoration,
            lineHeight: buttonLineHeight,
            letterSpacing: buttonLetterSpacing,
            wordSpacing: buttonWordSpacing,
            borderTopLeftRadius: buttonBorderTopLeftRadius,
            borderTopRightRadius: buttonBorderTopRightRadius,
            borderBottomRightRadius: buttonBorderBottomRightRadius,
            borderBottomLeftRadius: buttonBorderBottomLeftRadius,
            border: "none",
            maxWidth:
              deviceView === "mobile"
                ? `${mobileButtonMaxWidth}%`
                : `${buttonMaxWidth}%`,
          }}
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

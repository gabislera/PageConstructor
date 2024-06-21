import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Faq = ({
  items = [],

  borderColor,
  borderWidth,

  titleColor,
  titleBackgroundColor,
  titleFontFamily,
  titleFontSize,
  titleFontWeight,
  titleTextAlign,
  titleTextTransform,
  titleFontStyle,
  titleTextDecoration,
  titleLineHeight,
  titleLetterSpacing,
  titleWordSpacing,
  titlePaddingTop,
  titlePaddingRight,
  titlePaddingLeft,
  titlePaddingBottom,

  contentColor,
  contentBackgroundColor,
  contentFontFamily,
  contentFontSize,
  contentFontWeight,
  contentTextAlign,
  contentTextTransform,
  contentFontStyle,
  contentTextDecoration,
  contentLineHeight,
  contentLetterSpacing,
  contentWordSpacing,
  contentPaddingTop,
  contentPaddingRight,
  contentPaddingLeft,
  contentPaddingBottom,

  mobileTitleFontSize,
  mobileContentFontSize,
  mobileTitlePaddingTop,
  mobileTitlePaddingRight,
  mobileTitlePaddingLeft,
  mobileTitlePaddingBottom,
  mobileContentPaddingTop,
  mobileContentPaddingRight,
  mobileContentPaddingLeft,
  mobileContentPaddingBottom,

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
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { deviceView } = useResponsiveMode();

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

  const getResponsiveTitlePadding = () => {
    if (deviceView === "mobile") {
      return {
        paddingTop: mobileTitlePaddingTop,
        paddingRight: mobileTitlePaddingRight,
        paddingLeft: mobileTitlePaddingLeft,
        paddingBottom: mobileTitlePaddingBottom,
      };
    }
    return {
      paddingTop: titlePaddingTop,
      paddingRight: titlePaddingRight,
      paddingLeft: titlePaddingLeft,
      paddingBottom: titlePaddingBottom,
    };
  };

  const responsiveProps = getResponsiveProps();
  const responsiveTitlePadding = getResponsiveTitlePadding();

  const detailsStyles = `
  .collapsible {
    display: grid;
  }
  
  .details {
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s ease-in-out;
  }
  
  .details[open] .arrow-collapsible {
    transform: rotate(180deg);
  }
  
  .details .arrow-collapsible {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }
  
  .details summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .content {
    display: grid;
    transition: all 0.3s;
    grid-template-rows: 0fr;
  }
  
  details[open] ~ .content {
    grid-template-rows: 1fr;
    border-top: ${borderWidth} solid ${borderColor};
    padding-top: ${
      deviceView === "mobile" ? mobileContentPaddingTop : contentPaddingTop
    };
    padding-right: ${
      deviceView === "mobile" ? mobileContentPaddingRight : contentPaddingRight
    };
    padding-left: ${
      deviceView === "mobile" ? mobileContentPaddingLeft : contentPaddingLeft
    };
    padding-bottom: ${
      deviceView === "mobile"
        ? mobileContentPaddingBottom
        : contentPaddingBottom
    };
  }

  .content-inner {
    overflow: hidden;
  } 
  `;

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ ...responsiveProps, width: "100%" }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map(({ title, content }) => (
        <div
          className="collapsible"
          style={{
            border: `${borderWidth} solid ${borderColor}`,
          }}
        >
          <details className="details">
            <summary
              style={{
                backgroundColor: titleBackgroundColor,
                ...responsiveTitlePadding,
              }}
            >
              <span
                style={{
                  color: titleColor,
                  fontFamily: titleFontFamily,
                  fontSize:
                    deviceView === "mobile"
                      ? mobileTitleFontSize
                      : titleFontSize,
                  fontWeight: titleFontWeight,
                  textAlign: titleTextAlign,
                  textTransform: titleTextTransform,
                  fontStyle: titleFontStyle,
                  textDecoration: titleTextDecoration,
                  lineHeight: titleLineHeight,
                  letterSpacing: titleLetterSpacing,
                  wordSpacing: titleWordSpacing,
                }}
              >
                {title}
              </span>
              <svg
                class="arrow-collapsible"
                height="16"
                stroke-width="4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <g stroke={titleColor} stroke-width="1" fill={titleColor}>
                  <path d="m4.464 6.05-.707.707L8 11l4.243-4.243-.707-.707L8 9.586z" />
                </g>
              </svg>
            </summary>
          </details>
          <div
            className="content"
            style={{
              backgroundColor: contentBackgroundColor,
            }}
          >
            <div className="content-inner">
              <span
                style={{
                  color: contentColor,
                  fontFamily: contentFontFamily,
                  fontSize:
                    deviceView === "mobile"
                      ? mobileContentFontSize
                      : contentFontSize,
                  fontWeight: contentFontWeight,
                  textAlign: contentTextAlign,
                  textTransform: contentTextTransform,
                  fontStyle: contentFontStyle,
                  textDecoration: contentTextDecoration,
                  lineHeight: contentLineHeight,
                  letterSpacing: contentLetterSpacing,
                  wordSpacing: contentWordSpacing,
                }}
              >
                {" "}
                {content}
              </span>
            </div>
          </div>
        </div>
      ))}
      <style>{detailsStyles}</style>
    </div>
  );
};

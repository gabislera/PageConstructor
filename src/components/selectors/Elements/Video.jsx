import React, { useEffect, useState } from "react";
import { useEditor, useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Video = ({
  width,
  widthMobile,
  height,
  heightMobile,
  minWidth,
  minWidthMobile,
  minHeight,
  minHeightMobile,
  maxWidth,
  maxWidthMobile,
  maxHeight,
  maxHeightMobile,
  marginTop,
  marginTopMobile,
  marginBottom,
  marginBottomMobile,
  marginLeft,
  marginLeftMobile,
  marginRight,
  marginRightMobile,
  html,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  thumbnail,
  delay,
  className,
  position,
  overflow,
  border,
  backgroundColor,
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const { deviceView } = useResponsiveMode();
  const [play, setPlay] = useState(false);

  const getResponsiveProps = (deviceView) => {
    if (deviceView === "mobile") {
      return {
        width: widthMobile,
        height: !html ? 180 : heightMobile,
        minWidth: minWidthMobile,
        minHeight: minHeightMobile,
        maxWidth: maxWidthMobile,
        maxHeight: maxHeightMobile,
        marginBottom: marginBottomMobile,
        marginTop: marginTopMobile,
        marginLeft: marginLeftMobile,
        marginRight: marginRightMobile,
      };
    }
    return {
      width,
      height: !html ? 550 : height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
    };
  };

  const refactorHtml = (html) => {
    let refactoredHtml = html;

    if (refactoredHtml && refactoredHtml.includes("width=")) {
      refactoredHtml = refactoredHtml.replace(
        /width="[^"]*"/gi,
        "width='100%'"
      );
    } else {
      refactoredHtml = refactoredHtml.replace(
        "<iframe ",
        "<iframe width='100%'"
      );
    }

    if (refactoredHtml && refactoredHtml.includes("height=")) {
      refactoredHtml = refactoredHtml.replace(
        /height="[^"]*"/gi,
        `height="100%"`
      );
    } else {
      refactoredHtml = refactoredHtml.replace(
        "<iframe ",
        `<iframe height="100%"`
      );
    }
    refactoredHtml = refactoredHtml.replace("position:absolute;", "");

    if (enabled) {
      // Verificar se o estilo já existe usando uma expressão regular
      const styleRegex = /style\s*=\s*['"]([^'"]*)['"]/i;
      const styleMatch = refactoredHtml.match(styleRegex);

      if (styleMatch) {
        // O estilo já existe, então substitua o valor do estilo
        const existingStyle = styleMatch[1];
        const updatedStyle = existingStyle + "; pointer-events: none;";
        refactoredHtml = refactoredHtml.replace(
          styleRegex,
          `style="${updatedStyle}"`
        );
      } else {
        // O estilo não existe, então adicione o estilo
        refactoredHtml = refactoredHtml.replace(
          "<iframe",
          "<iframe style='pointer-events: none'"
        );
      }
    }

    return refactoredHtml;
  };

  useEffect(() => {
    setPlay(false);
    if (thumbnail) {
      if (!height || height === "auto") {
        setProp((props) => (props.height = 300));
      }
    }
  }, [thumbnail]);

  return (
    <>
      {thumbnail && !play ? (
        <div
          data-delay={delay}
          onClick={() => (enabled ? setPlay(true) : null)}
          ref={(ref) => connect(drag(ref))}
          style={{
            ...getResponsiveProps(deviceView),
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            position,
            overflow,
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
            height: getResponsiveProps(deviceView)?.height,
          }}
          className={` ${delay > 0 ? "oscillating" : ""}`}
        >
          <div className="play-icon">
            <img alt="play_button" src="/play.svg" width={"22px"} />
          </div>
        </div>
      ) : (
        <div
          data-delay={delay}
          ref={(ref) => connect(drag(ref))}
          style={{
            ...getResponsiveProps(deviceView),
            backgroundColor: html ? "transparent" : backgroundColor,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,

            position,
            overflow,
            border,
          }}
          className={`${delay > 0 ? "oscillating" : ""}`}
          dangerouslySetInnerHTML={{ __html: refactorHtml(html) }}
        />
      )}
    </>
  );
};

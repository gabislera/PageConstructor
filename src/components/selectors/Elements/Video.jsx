import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
export const Video = ({
  //props do video
  typeVideo,
  url,
  src,
  html,
  thumbnail,
  autoPlay,
  muted,
  loop,
  controls,
  playsInline,
  modestBranding,
  iconPlay,
  aspectRatio,
  //estilos de layout
  width,
  height,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,

  //props padrão
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
  maxWidth,
  mobileMaxWidth,
  heightMobile,
  backgroundColor,
  ...props
}) => {
  const {
    connectors: { connect, drag, create },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [play, setPlay] = useState(false);
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
        flexShrink: mobileFlexShrink,
        flexGrow: mobileFlexGrow,
        position: mobilePosition,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
        maxWidth: mobileMaxWidth,
        height: heightMobile,
      };
    }

    return {
      width,
      maxWidth,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      alignSelf,
      flexShrink,
      flexGrow,
      position,
      top,
      left,
      right,
      bottom,
      zIndex,
      height,
    };
  };
  const responsiveProps = getResponsiveProps();

  const getVideoSource = () => {
    switch (typeVideo) {
      case "video_url":
        return url;
      case "Video_embead":
        return html;
      case "upload_video":
        return src;
      default:
        return null;
    }
  };

  const renderIFrameVideo = (videoUrl) => {
    const extractVideoId = (url) => {
      const urlObj = new URL(url);
      const searchParams = new URLSearchParams(urlObj.search);

      if (searchParams.has("v")) {
        return searchParams.get("v");
      }

      const pathname = urlObj.pathname;
      return pathname.substring(pathname.lastIndexOf("/") + 1);
    };

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      console.error("ID de vídeo não encontrado na URL fornecida.");
      return null;
    }

    const queryParams = [];
    if (autoPlay) queryParams.push("autoplay=1");
    if (muted) queryParams.push("mute=1");
    if (loop) queryParams.push(`loop=1&playlist=${videoId}`);
    if (!controls) queryParams.push("controls=0");
    if (playsInline) queryParams.push("playsinline=1");
    if (modestBranding) queryParams.push("modestbranding=1");

    const srcUrl = `https://www.youtube.com/embed/${videoId}?${queryParams.join(
      "&"
    )}`;

    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          ...responsiveProps,
        }}
        ref={(ref) => connect(drag(ref))}
      >
        {thumbnail && !play ? (
          <div
            onClick={() => setPlay(true)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url('${thumbnail}')`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <div
              className="play-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              <playVideo width={"22px"} alt="play_button" />
            </div>
          </div>
        ) : (
          <iframe
            src={srcUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Video"
            width={width}
            height={height}
            maxWidth={maxWidth}
            allowFullScreen
            style={{
              position: "relative",
              zIndex: 0,
            }}
          />
        )}
      </div>
    );
  };
  const VideoEmbead = () => {
    const refactorHtml = (html, enabled) => {
      let refactoredHtml = html;
      const src = refactoredHtml.split("src=")[1].split('"')[1];

      const urlObj = new URL(src);
      const searchParams = new URLSearchParams(urlObj.search);

      if (searchParams.has("v")) {
        return searchParams.get("v");
      }

      const pathname = urlObj.pathname;
      const videoId = pathname.substring(pathname.lastIndexOf("/") + 1);
      const queryParams = [];
      if (autoPlay) queryParams.push("autoplay=1");
      if (muted) queryParams.push("mute=1");
      if (loop) queryParams.push(`loop=1&playlist=${videoId}`);
      if (!controls) queryParams.push("controls=0");
      if (playsInline) queryParams.push("playsinline=1");
      if (modestBranding) queryParams.push("modestbranding=1");

      const srcUrl = `https://www.youtube.com/embed/${videoId}?${queryParams.join(
        "&"
      )}`;
      console.log("srcUrl", srcUrl);
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

      if (refactoredHtml && refactoredHtml.includes("src=")) {
        refactoredHtml = refactoredHtml.replace(
          /src="[^"]*"/gi,
          `src=${srcUrl}`
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
      console.log("refactoredHtml", refactoredHtml);
      return refactoredHtml;
    };
    return (
      <>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            ...responsiveProps,
          }}
          ref={(ref) => connect(drag(ref))}
        >
          {thumbnail && !play ? (
            <div
              onClick={() => setPlay(true)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url('${thumbnail}')`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                zIndex: 1,
              }}
            >
              <div
                className="play-icon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <playVideo width={"22px"} alt="play_button" />
              </div>
            </div>
          ) : (
            <div
              ref={(ref) => connect(drag(ref))}
              dangerouslySetInnerHTML={{ __html: refactorHtml(html) }}
              style={{
                ...getResponsiveProps(deviceView),
                backgroundColor: html ? "transparent" : backgroundColor,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomRightRadius,
                borderBottomLeftRadius,
                position,
              }}
            />
          )}
        </div>
      </>
    );
  };

  if (typeVideo === "video_url" && url.includes("youtube.com")) {
    return renderIFrameVideo(url);
  }
  if (typeVideo === "Video_embead") {
    return VideoEmbead(html);
  }

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      <iframe
        src={getVideoSource()}
        frameBorder="0"
        title="Video"
        width={width}
        height={height}
        maxWidth={maxWidth}
        allowFullScreen
        style={{ position: "relative", zIndex: 0 }}
      />
    </div>
  );
};

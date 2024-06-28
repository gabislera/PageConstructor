import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import { useEditor } from "@craftjs/core";
export const Video = ({
  typeVideo,
  url,
  src,
  html,
  thumbnail,
  autoPlay,
  muted,
  rel,
  loop,
  controls,
  playsInline,
  modestBranding,
  iconPlay,
  aspectRatio,
  width,
  height,
  overflow,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
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
  mobilewidth,

  pulse,
  hidden,
  mobileHidden,
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

  const responsiveProps =
    deviceView === "mobile"
      ? {
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
          width: mobilewidth,
        }
      : {
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

  const getVisibility = () => {
    if (deviceView === "mobile") {
      return mobileHidden;
    }
    return hidden;
  };

  const hiddenElement = getVisibility();

  const renderIFrame = (src) => (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          backgroundColor: html ? "transparent" : backgroundColor,
          ...responsiveProps,
        }}
        ref={(ref) => connect(drag(ref))}
        className={`${hiddenElement && "hidden"} video-element ${
          pulse === "true" && "pulse-button"
        } `}
      >
        <ThumbnailVideo thumbnail={thumbnail} play={play} setPlay={setPlay}>
          <iframe
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Video"
            width={width}
            height={height}
            style={{
              zIndex: 0,
              ...responsiveProps,
            }}
            allowFullScreen
          />
        </ThumbnailVideo>
      </div>
    </>
  );

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);

    if (searchParams.has("v")) {
      return searchParams.get("v");
    }

    const pathname = urlObj.pathname;
    return pathname.substring(pathname.lastIndexOf("/") + 1);
  };

  const prepareYouTubeEmbedUrl = (url) => {
    const videoId = extractVideoId(url);

    const queryParams = [
      autoPlay && "autoplay=1",
      muted && "mute=1",
      loop && `loop=1&playlist=${videoId}`,
      !controls && "controls=0",
      playsInline && "playsinline=1",
      modestBranding && "modestbranding=1",
      !rel && "rel=0",
    ]
      .filter(Boolean)
      .join("&");

    return `https://www.youtube.com/embed/${videoId}?${queryParams}`;
  };

  const renderVideoEmbed = (html) => {
    const refactorHtml = (html) => {
      const videoId = extractVideoId(url);

      const iframe = html?.split("/");
      const embedUrl = iframe[2]?.split("?");

      const embedSrc = prepareYouTubeEmbedUrl(
        `https://${embedUrl}/watch?v=${videoId}`
      );
      return html
        .replace(/width="[^"]*"/, `width="${width}"`)
        .replace(/height="[^"]*"/, `height="${height}"`)
        .replace(/src="[^"]*"/, `src="${embedSrc}"`)
        .replace("position:absolute;", "")
        .replace("<iframe", "<iframe style='pointer-events: pointer;'");
    };
    console.log("html", html);

    return (
      <div
        className={`${hiddenElement && "hidden"}`}
        style={{
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          backgroundColor: html ? "transparent" : backgroundColor,
          ...responsiveProps,
        }}
        ref={(ref) => connect(drag(ref))}
      >
        <ThumbnailVideo thumbnail={thumbnail} play={play} setPlay={setPlay}>
          <div
            ref={(ref) => connect(drag(ref))}
            dangerouslySetInnerHTML={{ __html: refactorHtml(html) }}
            style={{
              ...responsiveProps,
              backgroundColor: html ? "transparent" : backgroundColor,
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomRightRadius,
              borderBottomLeftRadius,
              position,
            }}
          />
        </ThumbnailVideo>
      </div>
    );
  };

  const videoUrl = (src) => {
    return (
      <div
        className={`${hiddenElement && "hidden"}`}
        style={{
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          backgroundColor: html ? "transparent" : backgroundColor,
          ...responsiveProps,
        }}
      >
        <ThumbnailVideo thumbnail={thumbnail} play={play} setPlay={setPlay}>
          <video
            ref={(ref) => connect(drag(ref))}
            autoPlay
            muted
            loop
            src={src}
            type="video/mp4"
            style={{
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomRightRadius,
              borderBottomLeftRadius,
              backgroundColor,
              ...responsiveProps,
            }}
          />
        </ThumbnailVideo>
      </div>
    );
  };
  const ThumbnailVideo = ({ thumbnail, play, setPlay, children }) => {
    return (
      <>
        {thumbnail && !play ? (
          <div
            className={`${hiddenElement && "hidden"}`}
            onClick={() => (enabled ? setPlay(true) : null)}
            ref={(ref) => connect(drag(ref))}
            style={{
              ...responsiveProps,
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomRightRadius,
              borderBottomLeftRadius,
              position,
              overflow,
              paddingTop,
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
            <div className="play-icon">
              <img alt="play_button" src={"./play.svg"} width={"32px"} />
            </div>
          </div>
        ) : (
          <>{children}</>
        )}
      </>
    );
  };

  switch (typeVideo) {
    case "video_url":
      return url.includes("youtube.com")
        ? renderIFrame(prepareYouTubeEmbedUrl(url))
        : renderIFrame(url);
    case "Video_embed":
      return renderVideoEmbed(html);
    case "upload_video":
      return videoUrl(src);
    default:
      return null;
  }
};

import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";
import { ReactComponent as playVideo } from "../../iconsControls/play.svg";
export const Video = ({
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
  width,
  height,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  overflow,
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const { deviceView } = useResponsiveMode();
  const [play, setPlay] = useState(false);

  const responsiveProps = {
    autoPlay,
    muted,
    loop,
    controls,
    playsInline,
    modestBranding,
    width,
    height,
  };

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
          width,
          height,
          overflow: "hidden",
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomRightRadius,
          borderBottomLeftRadius,
        }}
        ref={(ref) => connect(drag(ref))}
        {...props}
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
              backgroundSize: "cover",
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
              <playVideo width={"22px"} alt="play_button" zIndex={3} />
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
            allowFullScreen
            style={{ position: "relative", zIndex: 0 }}
          />
        )}
      </div>
    );
  };

  if (typeVideo === "video_url" && url.includes("youtube.com")) {
    return renderIFrameVideo(url);
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
      {thumbnail && !play && (
        <div
          onClick={() => setPlay(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('${thumbnail}')`,
            backgroundSize: "cover",
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
            <img alt="play_button" src="/play.svg" width={"22px"} />
          </div>
        </div>
      )}
      {play && (
        <video
          src={getVideoSource()}
          autoPlay={responsiveProps.autoPlay}
          muted={responsiveProps.muted}
          loop={responsiveProps.loop}
          controls={responsiveProps.controls}
          playsInline={responsiveProps.playsInline}
          width={width}
          height={height}
          style={{ position: "relative", zIndex: 0 }}
        >
          <track kind="captions" />
        </video>
      )}
    </div>
  );
};

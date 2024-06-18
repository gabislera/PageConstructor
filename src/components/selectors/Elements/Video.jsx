import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { useResponsiveMode } from "../../../contexts/ResponsiveModeContext";

export const Video = ({
  src,
  typeVideo,
  url,
  html,
  autoPlay,
  muted,
  loop,
  controls,
  playsInline,
  // Estilos
  color,
  fontSize,
  additional_css,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  width,
  hoverColor,
  hoverBackgroundColor,
  order,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  // Propriedades Responsivas
  mobileAutoPlay,
  mobileMuted,
  mobileLoop,
  mobileControls,
  mobilePlaysInline,
  mobileMarginTop,
  mobileMarginRight,
  mobileMarginLeft,
  mobileMarginBottom,
  mobilePaddingTop,
  mobilePaddingRight,
  mobilePaddingLeft,
  mobilePaddingBottom,
  mobileOrder,
  mobilePosition,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  mobileZIndex,
  ...props
}) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const { deviceView } = useResponsiveMode();

  const getResponsiveProps = () => {
    if (deviceView === "mobile") {
      return {
        autoPlay: mobileAutoPlay,
        muted: mobileMuted,
        loop: mobileLoop,
        controls: mobileControls,
        playsInline: mobilePlaysInline,
        marginTop: mobileMarginTop,
        marginRight: mobileMarginRight,
        marginBottom: mobileMarginBottom,
        marginLeft: mobileMarginLeft,
        paddingTop: mobilePaddingTop,
        paddingRight: mobilePaddingRight,
        paddingBottom: mobilePaddingBottom,
        paddingLeft: mobilePaddingLeft,
        order: mobileOrder,
        top: mobileTop,
        left: mobileLeft,
        right: mobileRight,
        bottom: mobileBottom,
        zIndex: mobileZIndex,
      };
    }

    return {
      autoPlay,
      muted,
      loop,
      controls,
      playsInline,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      order,
      top,
      left,
      right,
      bottom,
      zIndex,
    };
  };

  const responsiveProps = getResponsiveProps();

  useEffect(() => {
    if (selected) {
      return;
    }
  }, [selected]);

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

  const renderEmbeddedVideo = (embedHtml) => {
    return (
      <div
        style={{
          ...responsiveProps,
          display: "inherit",
          width: "fit-content",
          maxWidth: "100%",
        }}
        {...props}
        ref={(ref) => connect(drag(ref))}
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
    );
  };

  const renderIFrameVideo = (videoUrl) => {
    const srcUrl = `https://www.youtube.com/embed/${videoUrl}?controls=1&rel=0&playsinline=1`;
    return (
      <div
        style={{
          ...responsiveProps,
          display: "inherit",
          width: "fit-content",
          maxWidth: "100%",
        }}
        {...props}
        ref={(ref) => connect(drag(ref))}
      >
        <iframe
          src={srcUrl}
          frameBorder="0"
          allowFullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Video"
          width="640"
          height="360"
        />
      </div>
    );
  };

  if (typeVideo === "Video_embead") {
    return renderEmbeddedVideo(getVideoSource());
  }

  if (typeVideo === "video_url" && url.includes("youtube.com")) {
    const videoId = url.split("v=")[1];
    return renderIFrameVideo(videoId);
  }

  return (
    <div
      style={{
        ...responsiveProps,
        display: "inherit",
        width: "fit-content",
        maxWidth: "100%",
      }}
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      <video
        src={getVideoSource()}
        autoPlay={responsiveProps.autoPlay}
        muted={responsiveProps.muted}
        loop={responsiveProps.loop}
        controls={responsiveProps.controls}
        playsInline={responsiveProps.playsInline}
        style={{ color, fontSize }}
      >
        <track kind="captions" />
      </video>
    </div>
  );
};

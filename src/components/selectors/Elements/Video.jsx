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
  modestBranding,
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
  mobileModestBranding,
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
        modestBranding: mobileModestBranding,
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
      modestBranding,
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
  console.log("muted", muted);
  const renderIFrameVideo = (videoUrl) => {
    const extractVideoId = (url) => {
      try {
        const urlObj = new URL(url);
        const searchParams = new URLSearchParams(urlObj.search);

        // Tenta pegar o ID do vídeo a partir do parâmetro `v`
        if (searchParams.has("v")) {
          return searchParams.get("v");
        }

        // Se não conseguir, tenta pegar do final da URL
        let pathname = urlObj.pathname;
        return pathname.substring(pathname.lastIndexOf("/") + 1);
      } catch (error) {
        console.error("URL de vídeo inválida:", error);
      }

      return null;
    };

    const videoId = extractVideoId(videoUrl);

    if (!videoId) {
      console.error("ID de vídeo não encontrado na URL fornecida.");
      return null;
    }

    const queryParams = [];
    if (responsiveProps.autoPlay) queryParams.push("autoplay=1");
    if (responsiveProps.muted) queryParams.push("mute=1");
    if (responsiveProps.loop) queryParams.push(`loop=1&playlist=${videoId}`);
    if (!responsiveProps.controls) queryParams.push("controls=0");
    if (responsiveProps.playsInline) queryParams.push("playsinline=1");
    if (responsiveProps.modestBranding) queryParams.push("modestbranding=1");

    const srcUrl = `https://www.youtube.com/embed/${videoId}?${queryParams.join(
      "&"
    )}`;
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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Video"
          width="640"
          height="360"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  if (typeVideo === "Video_embead") {
    return renderEmbeddedVideo(getVideoSource());
  }

  if (typeVideo === "video_url" && url.includes("youtube.com")) {
    return renderIFrameVideo(url);
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

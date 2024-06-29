import { VideoSettings } from "../Settings/VideoSettings";
import { Video } from "../Elements/Video";
Video.craft = {
  displayName: "Vídeo",

  props: {
    //padrão
    delay: 0,
    className: "",

    //estilos
    fontSize: "12px",
    color: "#fff",
    backgroundColor: "#000",

    //estilos de layout
    border: "none",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    width: "100%",
    widthMobile: "90%",
    minWidth: "auto",
    minWidthMobile: "auto",
    maxWidth: "auto",
    mobileMaxWidth: "auto",
    mobileWidth: "100%",
    height: "500px",
    heightMobile: "190px",
    maxHeight: "auto",
    maxHeightMobile: "auto",
    minHeight: "auto",
    minHeightMobile: "auto",
    overflow: "hidden",

    // props Settings video
    iconPlay: "",
    autoPlay: false,
    muted: false,
    rel: false,
    loop: false,
    controls: true,
    playsInline: true,
    mobileAutoPlay: false,
    mobileMuted: false,
    mobileLoop: false,
    mobileControls: true,
    mobilePlaysInline: true,
    imageOverlay: false,
    typeVideo: "video_url",
    html: `<iframe width="1280" height="720" src="https://www.youtube.com/embed/7qDyJpGbyj4" title="Seja Bem Vindo ao SellFlux - Sua Jornada Começa Aqui!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=7qDyJpGbyj4&feature=youtu.be",
    src: "",
    aspectRatio: "177.78%",
    resolutionVideo: "1920x1080",
    //props padrões avançado
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    alignSelf: "initial",
    order: "0",
    flexShrink: "1",
    flexGrow: "0",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
    mobileMarginTop: "0px",
    mobileMarginRight: "0px",
    mobileMarginLeft: "0px",
    mobileMarginBottom: "0px",
    mobilePaddingTop: "0px",
    mobilePaddingRight: "0px",
    mobilePaddingLeft: "0px",
    mobilePaddingBottom: "0px",
    mobileAlignSelf: "initial",
    mobileOrder: "0",
    mobileFlexShrink: "1",
    mobileFlexGrow: "0",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",
    pulse: "false",
    hidden: false,
    mobileHidden: false,
  },
  related: {
    settings: VideoSettings,
  },
  rules: {
    canMoveIn: () => false,
  },
};

export default Video;

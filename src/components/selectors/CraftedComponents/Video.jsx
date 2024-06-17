import { VideoSettings } from "../Settings/VideoSettings";
import { Video } from "../Elements/Video";
Video.craft = {
  displayName: "Vídeo Embed",

  props: {
    minWidth: "auto",
    minWidthMobile: "auto",
    minHeight: "auto",
    minHeightMobile: "auto",
    maxWidth: "none",
    maxWidthMobile: "none",
    maxHeight: "none",
    maxHeightMobile: "none",

    marginBottom: "0px",
    marginBottomMobile: "0px",
    marginTop: "0px",
    marginTopMobile: "0px",
    marginLeft: "0px",
    marginLeftMobile: "0px",
    marginRight: "0px",
    marginRightMobile: "0px",
    width: "90%",
    widthMobile: "90%",

    height: "500px",
    heightMobile: "190px",

    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SW176S0n5Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnail: "",
    delay: 0,
    className: "",
    position: "relative",
    backgroundColor: "#000",
    overflow: "hidden",
    border: "none",
  },
  related: {
    settings: VideoSettings,
  },
  rules: {
    canMoveIn: () => false,
  },
};

export default Video;

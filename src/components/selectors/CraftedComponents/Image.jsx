import { ImageSettings } from "../Settings/ImageSettings";
import { Image } from "../Image";

// var image_temp =
//   "https://sendpage.blog/wp-content/plugins/elementor/assets/images/placeholder.png";

Image.craft = {
  displayName: "Imagem",

  props: {
    // src: image_temp,
    src: "https://sendpage.blog/wp-content/plugins/elementor/assets/images/placeholder.png",
    // caption: "",
    alt: "",
    url: "",
    textAlign: "left",
    display: "block",
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    objectFit: "initial",
    opacity: "1",
    hoverOpacity: "1",
    opacityTransitionDuration: "0.3",

    marginTop: "0",
    marginRight: "0",
    marginLeft: "0",
    marginBottom: "0",
    paddingTop: "2",
    paddingRight: "2",
    paddingLeft: "2",
    paddingBottom: "2",
    alignSelf: "initial",
    order: "1",
    flexShrink: "1",
    flexGrow: "0",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",

    borderStyle: "none",
    borderTopWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "0px",
    borderLeftWidth: "0px",
    borderColor: "transparent",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",

    mobileWidth: "100%",
    mobileMarginTop: "0",
    mobileMarginRight: "0",
    mobileMarginLeft: "0",
    mobileMarginBottom: "0",
    mobilePaddingTop: "2",
    mobilePaddingRight: "2",
    mobilePaddingLeft: "2",
    mobilePaddingBottom: "2",
    mobileAlignSelf: "initial",
    mobileOrder: "1",
    mobileFlexShrink: "1",
    mobileFlexGrow: "0",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",
  },
  related: {
    settings: ImageSettings,
  },
};

export default Image;

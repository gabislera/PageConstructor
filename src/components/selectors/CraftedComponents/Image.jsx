import { ImageSettings } from "../Settings/ImageSettings";
import { Image } from "../Image";

var image_temp =
  "https://sendpage.blog/wp-content/plugins/elementor/assets/images/placeholder.png";

// TODO: remove caption from css props

Image.craft = {
  displayName: "Imagem",

  props: {
    // src: image_temp,
    src: "https://sendpage.blog/wp-content/plugins/elementor/assets/images/placeholder.png",
    caption: "",
    alt: "",
    url: "",
    textAlign: "left",
    display: "block",
    width: "100%",
    maxWidth: "200px",
    height: "auto",
    objectFit: "initial",

    marginTop: "0",
    marginRight: "0",
    marginLeft: "0",
    marginBottom: "0",
    paddingTop: "2",
    paddingRight: "2",
    paddingLeft: "2",
    paddingBottom: "2",
    alignSelf: "initial",
    flexOrder: "0",
    flexShrink: "1",
    flexGrow: "0",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",

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
    mobileFlexOrder: "0",
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

import { TextSettings } from "../Settings/TextSettings";
import { Text } from "../Text";

Text.craft = {
  props: {
    content: "Digite seu texto aqui",
    url: "",
    htmlTag: "h2",
    textAlign: "left",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#000000",
    fontSize: "16px",
    fontFamily: "sans-serif",
    additional_css: "",
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    width: "100%",
    hoverColor: "#5D58E8",
    hoverBackgroundColor: "#5D58E8",
    textTransform: "none",
    fontStyle: "normal",
    textDecoration: "normal",
    letterSpacing: "0",
    wordSpacing: "0",
    alignSelf: "start",
    order: "0",
  },
  related: {
    settings: TextSettings,
  },
};

export default Text;

import { TitleSettings } from "../Settings/TitleSettings";
import { Title } from "../Elements/Title";

Title.craft = {
  displayName: "Title",

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
    alignSelf: "initial",
    order: "1",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",

    mobileTextAlign: "left",
    mobileLineHeight: "1.5",
    mobileFontWeight: "400",
    mobileFontSize: "12px",
    mobileMarginTop: "0px",
    mobileMarginRight: "0px",
    mobileMarginLeft: "0px",
    mobileMarginBottom: "0px",
    mobilePaddingTop: "0px",
    mobilePaddingRight: "0px",
    mobilePaddingLeft: "0px",
    mobilePaddingBottom: "0px",
    mobileFontStyle: "normal",
    mobileTextDecoration: "normal",
    mobileLetterSpacing: "0",
    mobileWordSpacing: "0",
    mobileAlignSelf: "initial",
    mobileOrder: "1",
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
    settings: TitleSettings,
  },
};

export default Title;

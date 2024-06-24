import { ProgressBarSettings } from "../Settings/ProgressBarSettings";
import { ProgressBar } from "../Elements/ProgressBar";

ProgressBar.craft = {
  displayName: "ProgressBar",

  props: {
    // element props
    title: "Título",
    content: "Conteúdo",
    width: "80",
    height: "40px",
    htmlTag: "span",

    backgroundColor: "#625CF3",
    borderRadius: "4px",
    showPercentage: true,

    titleColor: "#000",
    titleFontFamily: "sans-serif",
    titleFontSize: "16px",
    titleFontWeight: "500",
    titleTextTransform: "none",
    titleFontStyle: "normal",
    titleTextDecoration: "none",
    titleLineHeight: "1.5",
    titleLetterSpacing: "0",
    titleWordSpacing: "0",

    contentColor: "#fff",
    contentFontFamily: "sans-serif",
    contentFontSize: "14px",
    contentFontWeight: "400",
    contentTextTransform: "none",
    contentFontStyle: "normal",
    contentTextDecoration: "none",
    contentLineHeight: "1.5",
    contentLetterSpacing: "0",
    contentWordSpacing: "0",
    contentPadding: "10px",

    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    alignSelf: "initial",
    order: "1",
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
    mobileOrder: "1",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",
  },
  related: {
    settings: ProgressBarSettings,
  },
};

export default ProgressBar;

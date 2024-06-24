import { FaqSettings } from "../Settings/FaqSettings";
import { Faq } from "../Elements/Faq";

Faq.craft = {
  displayName: "Faq",
  props: {
    items: [
      {
        title: "Pergunta 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],

    borderColor: "#000",
    borderWidth: "1px",
    titleColor: "#000000",
    titleBackgroundColor: "transparent",
    titleFontFamily: "sans-serif",
    titleFontSize: "16px",
    titleFontWeight: "500",
    titleTextTransform: "none",
    titleFontStyle: "normal",
    titleTextDecoration: "none",
    titleLineHeight: "1.5",
    titleLetterSpacing: "0",
    titleWordSpacing: "0",
    titlePaddingTop: "10px",
    titlePaddingRight: "10px",
    titlePaddingLeft: "10px",

    titlePaddingBottom: "10px",

    mobileTitleFontSize: "16px",
    mobileTitlePaddingTop: "10px",
    mobileTitlePaddingRight: "10px",
    mobileTitlePaddingLeft: "10px",
    mobileTitlePaddingBottom: "10px",

    contentColor: "#000000",
    contentBackgroundColor: "transparent",
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

    contentPaddingTop: "0px",
    contentPaddingRight: "0px",
    contentPaddingLeft: "20px",
    contentPaddingBottom: "0px",

    mobileContentFontSize: "14px",
    mobileContentPaddingTop: "5px",
    mobileContentPaddingRight: "5px",
    mobileContentPaddingLeft: "20px",
    mobileContentPaddingBottom: "5px",

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

    hidden: false,
    mobileHidden: false,
  },
  related: {
    settings: FaqSettings,
  },
};

export default Faq;

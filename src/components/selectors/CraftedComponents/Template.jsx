import { TemplateSettings } from "../Settings/TemplateSettings";
import { Template } from "../Elements/Template";

Template.craft = {
  displayName: "Template",

  props: {
    // element props

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
    settings: TemplateSettings,
  },
};

export default Template;

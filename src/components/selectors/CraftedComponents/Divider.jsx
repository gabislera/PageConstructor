import { Divider } from "../Elements/Divider";
import { DividerSettings } from "../Settings/DividerSettings";

Divider.craft = {
  props: {
    marginBottom: "5px",
    marginTop: "5px",
    marginLeft: "0px",
    marginRight: "0px",
    marginBottomMobile: "5px",
    marginTopMobile: "5px",
    marginLeftMobile: "0px",
    marginRightMobile: "0px",
    delay: "0px",
    zIndex: "1",
    mobileZIndex: "0",
    borderBottomWidth: "2px",
    borderBottomColor: "#808080",
    borderBottomStyle: "solid",
    borderBottomWidthMobile: "2px",
    borderBottomColorMobile: "#808080",
    borderBottomStyleMobile: "dotted",
    paddingBlockStart: "0px",
    paddingBlockEnd: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    mobilePaddingTop: "0",
    mobilePaddingRight: "0",
    mobilePaddingLeft: "0",
    mobilePaddingBottom: "0",
    width: "100%",
    widthMobile: "100%",
    position: "static",
    alignSelf: "initial",
    mobileAlignSelf: "initial",
    order: "1",
    mobileOrder: "1",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    display: "flex",

    hidden: false,
    mobileHidden: false,
  },
  related: {
    settings: DividerSettings,
  },
};

export default Divider;

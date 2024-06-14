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
    borderBottomWidth: "2px",
    borderBottomColor: "#808080",
    borderBottomStyle: "solid",
    borderBottomWidthMobile: "2px",
    borderBottomColorMobile: "#808080",
    borderBottomStyleMobile: "dotted",
    width: "100%",
    widthMobile: "100%",
  },
  related: {
    settings: DividerSettings,
  },
};

export default Divider;

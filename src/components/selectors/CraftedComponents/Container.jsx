import { ContainerSettings } from "../Settings/ContainerSettings";
import { Container } from "../Elements/Container";

Container.craft = {
  displayName: "Container",
  props: {
    maxWidth: "100%",
    display: "flex",
    width: "100%",
    minHeight: "100px",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    rowGap: "0",
    columnGap: "0",
    flexWrap: "nowrap",
    htmlTag: "div",
    url: "",
    backgroundColor: "transparent",
    backgroundImage: "",
    borderStyle: "none",
    borderTopWidth: "1px",
    borderRightWidth: "1px",
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
    borderColor: "initial",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    hoverBorderStyle: "none",
    hoverBorderTopWidth: "0px",
    hoverBorderRightWidth: "0px",
    hoverBorderBottomWidth: "0px",
    hoverBorderLeftWidth: "0px",
    hoverBorderColor: "initial",
    hoverBorderTopLeftRadius: "0px",
    hoverBorderTopRightRadius: "0px",
    hoverBorderBottomRightRadius: "0px",
    hoverBorderBottomLeftRadius: "0px",
    hoverBackgroundColor: "initial",
    backgroundcolorTransitionDuration: "0.3",
    borderTransitionDuration: "0.3",
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    alignSelf: "initial",
    order: "0",
    flexShrink: "1",
    flexGrow: "0",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
    mobileWidth: "100%",
    mobileMinHeight: "100px",
    mobileFlexDirection: "column",
    mobileJustifyContent: "start",
    mobileAlignItems: "start",
    mobileRowGap: "0",
    mobileColumnGap: "0",
    mobileFlexWrap: "wrap",
    mobileMarginTop: "0px",
    mobileMarginRight: "0px",
    mobileMarginLeft: "0px",
    mobileMarginBottom: "0px",
    mobilePaddingTop: "0px",
    mobilePaddingRight: "0px",
    mobilePaddingLeft: "0px",
    mobilePaddingBottom: "0px",
    mobileAlignSelf: "initial",
    mobileOrder: "0",
    mobileFlexShrink: "1",
    mobileFlexGrow: "0",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    settings: ContainerSettings,
  },
};

export default Container;

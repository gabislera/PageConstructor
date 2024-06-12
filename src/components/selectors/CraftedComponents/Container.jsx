import { ContainerSettings } from "../Settings/ContainerSettings";
import { Container } from "../Container";

Container.craft = {
  displayName: "Container",
  props: {
    maxWidth: "100%",
    display: "flex",

    width: "100%",
    minHeight: "100px",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    rowGap: "0",
    columnGap: "0",
    flexWrap: "wrap",

    // overflow: "auto",
    htmlTag: "div",
    url: "",

    backgroundColor: "transparent",
    backgroundImage: "",

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

    hoverBorderStyle: "none",
    hoverBorderTopWidth: "0px",
    hoverBorderRightWidth: "0px",
    hoverBorderBottomWidth: "0px",
    hoverBorderLeftWidth: "0px",
    hoverBorderColor: "transparent",
    hoverBorderTopLeftRadius: "0px",
    hoverBorderTopRightRadius: "0px",
    hoverBorderBottomRightRadius: "0px",
    hoverBorderBottomLeftRadius: "0px",
    transition: "",

    marginTop: "0",
    marginRight: "0",
    marginLeft: "0",
    marginBottom: "0",
    paddingTop: "2",
    paddingRight: "2",
    paddingLeft: "2",
    paddingBottom: "2",
    alignSelf: "stretch",
    flexOrder: "0",
    flexShrink: "1",
    flexGrow: "0",
    position: "static",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
  },
  related: {
    settings: ContainerSettings,
  },
};

export default Container;

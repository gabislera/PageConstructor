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

    borderType: "none",
    borderWidth: "0px",
    borderColor: "transparent",
    borderRadius: "0px",

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
    position: "relative",
    zIndex: "auto",
  },
  related: {
    settings: ContainerSettings,
  },
};

export default Container;

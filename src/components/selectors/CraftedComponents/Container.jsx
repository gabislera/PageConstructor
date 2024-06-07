import { ContainerSettings } from "../Settings/ContainerSettings";
import { Container } from "../Container";

Container.craft = {
  displayName: "Container",
  props: {
    maxWidth: "100%",

    width: "100%",
    minHeight: "100px",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    rowGap: "10px",
    columnGap: "10px",
    flexWrap: "wrap",

    overflow: "hidden",
    htmlTag: "div",

    backgroundColor: "transparent",
    backgroundImage: "none",

    borderType: "none",
    borderWidth: "0px",
    borderColor: "transparent",
    borderRadius: "0px",

    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
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

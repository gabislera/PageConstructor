import { Grid } from "../Elements/Grid";
import { GridSettings } from "../Settings/GridSettings";

Grid.craft = {
  displayName: "Grid",
  props: {
    maxWidth: "100%",
    display: "grid",
    width: "100%",
    minHeight: "100px",
    gridColumns: 3,
    gridRows: 2,

    rowGap: "5px",
    columnGap: "5px",
    gridAutoFlow: "row",
    alignItems: "initial",
    justifyItems: "initial",
    overflow: "visible",

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
    hoverBorderTopWidth: "10px",
    hoverBorderRightWidth: "0px",
    hoverBorderBottomWidth: "0px",
    hoverBorderLeftWidth: "0px",
    hoverBorderColor: "transparent",
    hoverBorderTopLeftRadius: "0px",
    hoverBorderTopRightRadius: "0px",
    hoverBorderBottomRightRadius: "0px",
    hoverBorderBottomLeftRadius: "0px",
    hoverBackgroundColor: "transparent",
    backgroundcolorTransitionDuration: "0.3",
    borderTransitionDuration: "0.3",

    mobileGridColumns: 2,
    mobileGridRows: 2,

    mobileWidth: "100%",
    mobileMinHeight: "100px",
    mobileJustifyItems: "start",
    mobileAlignItems: "start",
    mobileRowGap: "5px",
    mobileColumnGap: "5px",
    mobileGridAutoFlow: "row",

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
    flexShrink: "1",
    flexGrow: "0",
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
    mobileFlexShrink: "1",
    mobileFlexGrow: "0",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",

    notDeletable: false,
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    settings: GridSettings,
  },
};

export default Grid;
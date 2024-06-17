import { Button } from "../Elements/Button";
import { ButtonSettings } from "../../../components/selectors/Settings/ButtonSettings";

Button.craft = {
  displayName: "Botão",
  props: {
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "12px",
    paddingRight: "24px",
    paddingLeft: "24px",
    paddingBottom: "12px",
    width: "10%",
    order: "1",
    zIndex: "1",
    color: "#fff",
    position: "static",
    display: "flex",
    alignSelf: "initial",
    background: "#61CE70",
    borderWidth: "0px",
    cursor: "pointer",
    className: "icon-button",
    type: "button",
    text: "Clique aqui",
    textAlign: "center",
    notDeletable: false,
    additional_css: "",
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: "12px",
    textTransform: "none",
    fontStyle: "normal",
    textDecoration: "none",
    wordSpacing: "0",
    letterSpacing: "0",
    boxShadow: "none",
    lineHeight: "1px",
    boxShadowString: "none",
    borderStyle: "none",
    borderTopWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "0px",
    borderLeftWidth: "0px",
    borderColor: "transparent",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
    minHeight: "0px",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    rowGap: "0",
    columnGap: "0",
    flexWrap: "wrap",
    mobileWidth: "32%",
    mobileMinHeight: "0px",
    mobileFlexDirection: "column",
    mobileJustifyContent: "start",
    mobileAlignItems: "start",
    mobileRowGap: "0",
    mobileColumnGap: "0",
    mobileFlexWrap: "wrap",
    mobileMarginTop: "0",
    mobileMarginRight: "0",
    mobileMarginLeft: "0",
    mobileMarginBottom: "0",
    mobilePaddingTop: "12px",
    mobilePaddingRight: "24px",
    mobilePaddingLeft: "24px",
    mobilePaddingBottom: "12px",
    mobileOrder: "1",
    mobileAlignSelf: "initial",
    mobileFlexOrder: "0",
    mobileFlexShrink: "1",
    mobileFlexGrow: "0",
    mobilePosition: "static",
    mobileTop: "0",
    mobileLeft: "0",
    mobileRight: "0",
    mobileBottom: "0",
    mobileZIndex: "0",
    // pulseMobile: "true",
    // pulse: "false",
  },
  related: {
    settings: ButtonSettings,
  },
};

export default Button;

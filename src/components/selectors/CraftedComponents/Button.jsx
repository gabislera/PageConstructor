import { Button } from "../Elements/Button";
import { ButtonSettings } from "../../../components/selectors/Settings/ButtonSettings";

Button.craft = {
  displayName: "Botão",
  props: {
    //props botão
    text: "Clique aqui",
    className: "icon-button",
    pulse: "false",
    cursor: "pointer",
    type: "button",
    action: "redirect_url",
    src: "http://www.sellflux.com",
    //props texto
    color: "#fff",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: "12px",
    fontStyle: "normal",
    textDecoration: "none",
    wordSpacing: "0",
    letterSpacing: "0",
    textTransform: "none",
    mobileTextAlign: "left",
    mobileLineHeight: "1.5",
    mobileFontWeight: "400",
    mobileFontSize: "12px",
    mobileWordSpacing: "0",
    //props padrão
    // notDeletable: false,
    additional_css: "",
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "18px",
    paddingRight: "18px",
    paddingLeft: "18px",
    paddingBottom: "18px",
    mobilePaddingTop: "18px",
    mobilePaddingRight: "18px",
    mobilePaddingLeft: "18px",
    mobilePaddingBottom: "18px",
    width: "100%",
    maxWidth: "12%",
    maxWidthMobile: "33%",
    order: "1",
    zIndex: "1",
    position: "static",
    display: "flex",
    alignSelf: "initial",
    backgroundColor: "#625CF3",
    backgroundImage: "none",
    borderWidth: "0px",
    boxShadow: "none",
    boxShadowString: "none",
    lineHeight: "1px",
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
    // borderTopLeftRadiusMobile: "3px",
    // borderTopRightRadiusMobile: "3px",
    // borderBottomRightRadiusMobile: "3px",
    // borderBottomLeftRadiusMobile: "3px",
    hoverBorderStyle: "none",
    minHeight: "0px",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
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
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    typeColor: "linear",
    textShadow: "none",
    hidden: false,
    mobileHidden: false,
  },
  related: {
    settings: ButtonSettings,
  },
};

export default Button;

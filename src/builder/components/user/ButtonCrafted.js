import { Button } from "./Button";
import { ButtonSettings } from "./ButtonSettings";

Button.craft = {
  displayName: "Botão",
  props: {
    marginTop: "5px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "5px",
    paddingTop: "10px",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    width: "50%",
    display: "flex",
    background: "#5D58E8",
    borderWidth: "0px",
    borderRadius: "5px",
    cursor: "pointer",
    className: "icon-button",
    type: "button",
    text: "Quero saber mais",
    notDeletable: false,
    additionalCss: ""
  },
  related: {
    settings: ButtonSettings,
  },
};

export default Button
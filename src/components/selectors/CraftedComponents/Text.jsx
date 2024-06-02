import { TextSettings } from '../Settings/TextSettings'
import { Text } from '../Text'

Text.craft = {
  props: {
    content: 'Digite seu texto aqui',
    url: '',
    tag: 'h2',
    textAlign: 'left',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    additional_css: "",
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    paddingTop: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    width: "100%",
    hoverColor: "#5D58E8",
    hoverBackgroundColor: "#5D58E8",
    textTransform: "none",
    fontStyle: "normal",
    textDecoration: "none",
    letterSpacing: "",
    wordSpacing: "",
  },
  related: {
    settings: TextSettings,
  },
};

export default Text
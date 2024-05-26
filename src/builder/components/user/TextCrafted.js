import { Text } from "./Text";
import { TextSettings } from "./TextSettings";

Text.craft = {
  props: {
    text: 'Hi',
    fontSize: 20,
    additional_css: "",
  },
  related: {
    settings: TextSettings,
  },
};

export default Text
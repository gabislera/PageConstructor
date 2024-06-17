import { AppComponent } from "../Elements/AppComponent";
import { AppComponentSettings } from "../Settings/AppComponent";

AppComponent.craft = {
  displayName: "Tela",
  props: {
    notDeletable: true,
    delay: 0,
    maxWidth: "1220px",
    margin: "0 auto",
    width: 100,
    backgroundColor: "#fdfdfd",
    flexDirection: "column",

    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "20px",
  },
  related: {
    settings: AppComponentSettings,
  },
};

export default AppComponent;

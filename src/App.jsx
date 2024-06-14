import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { Editor, Frame, Element } from "@craftjs/core";
import Container from "./components/selectors/CraftedComponents/Container.jsx";
import Button from "./components/selectors/CraftedComponents/Button.jsx";
import Text from "./components/selectors/CraftedComponents/Text.jsx";
import Image from "./components/selectors/CraftedComponents/Image.jsx";
import AppComponent from "./components/selectors/CraftedComponents/AppComponent.jsx";
import { Viewport } from "./components/editor/viewport";
import { RenderNode } from "./components/editor/viewport/RenderNode";
import { ResponsiveModeProvider } from "./contexts/ResponsiveModeContext";
import "./components/styles/app.css";
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveModeProvider>
        <Editor
          onRender={RenderNode}
          resolver={{ Container, Button, Text, AppComponent, Image }}
        >
          <Viewport>
            <Frame>
              <Element is={AppComponent} />
            </Frame>
          </Viewport>
        </Editor>
      </ResponsiveModeProvider>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    background: "#e0e0e0",
    minHeight: "100vh",
  },
});

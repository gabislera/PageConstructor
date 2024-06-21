import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { Editor, Frame, Element } from "@craftjs/core";
import Container from "./components/selectors/CraftedComponents/Container.jsx";
import Button from "./components/selectors/CraftedComponents/Button.jsx";
import Divider from "./components/selectors/CraftedComponents/Divider.jsx";
import Text from "./components/selectors/CraftedComponents/Text.jsx";
import Image from "./components/selectors/CraftedComponents/Image.jsx";
import Video from "./components/selectors/CraftedComponents/Video.jsx";
import AppComponent from "./components/selectors/CraftedComponents/AppComponent.jsx";
import Grid from "./components/selectors/CraftedComponents/Grid.jsx";
import Faq from "./components/selectors/CraftedComponents/Faq.jsx";
import Section from "./components/selectors/CraftedComponents/Section.jsx";
import ProgressBar from "./components/selectors/CraftedComponents/ProgressBar.jsx";

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
          enabled={true}
          resolver={{
            Container,
            Button,
            Text,
            AppComponent,
            Image,
            Divider,
            Video,
            Grid,
            Section,
            Faq,
            ProgressBar,
          }}
        >
          <Viewport>
            <Frame>
              <Element is={AppComponent} canvas>
                <Element is={Section} initialElement={null} canvas></Element>
              </Element>
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

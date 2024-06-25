import React, { useRef } from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { Editor, Frame, Element } from "@craftjs/core";
import AppComponent from "./components/selectors/CraftedComponents/AppComponent.jsx";
import Section from "./components/selectors/CraftedComponents/Section.jsx";
import Components from "./components/selectors/CraftedComponents/index.jsx";

import { Viewport } from "./components/editor/viewport";
import { RenderNode } from "./components/editor/viewport/RenderNode";
import { ResponsiveModeProvider } from "./contexts/ResponsiveModeContext";
import "./components/styles/app.css";
export default function App() {
  const classes = useStyles();
  const ref = useRef(null);
  // const html = ref.current.firstChild.firstChild.outerHTML

  return (
    <div className={classes.root}>
      <ResponsiveModeProvider>
        <Editor onRender={RenderNode} enabled={true} resolver={Components}>
          <Viewport ref={ref}>
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

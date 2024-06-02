import React from 'react';
import './App.css';
import { makeStyles } from '@mui/styles';
import { Editor, Frame, Element } from "@craftjs/core";
import { Container } from './builder/components/user/Container'
import Button from './builder/components/user/ButtonCrafted'
import Text from './components/selectors/CraftedComponents/Text.jsx'
import { Viewport } from './components/editor/viewport';
import { RenderNode } from './components/editor/viewport/RenderNode';
import { ResponsiveModeProvider } from './contexts/ResponsiveModeContext';


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ResponsiveModeProvider>
        <Editor onRender={RenderNode} resolver={{ Container, Button, Text }}>
          <Viewport>
            <Frame>
              <Element is={Container} minHeight={'100px'} maxWidth={'1220px'} canvas>

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
    background: '#e0e0e0',
    minHeight: '100vh',
  },
});
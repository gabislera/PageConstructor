import React from 'react';
import './App.css';
import { makeStyles } from '@mui/styles';
import { Editor, Frame, Element } from "@craftjs/core";
import { Card, CardTop, CardBottom } from './builder/components/user/Card'
import { Container } from './builder/components/user/Container'
import Button from './builder/components/user/ButtonCrafted'
import { Text } from './builder/components/user/Text'
import { Viewport } from './components/editor/viewport';
import { RenderNode } from './components/editor/viewport/RenderNode';
import { ResponsiveModeProvider } from './contexts/ResponsiveModeContext';

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ResponsiveModeProvider>
        <Editor onRender={RenderNode} resolver={{ Card, Container, Button, Text, CardTop, CardBottom }}>
          <Viewport>
            <Frame>
              <Element is={Container} minHeight={'100px'} maxWidth={'500px'} canvas>
                Arraste os elementos
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
    background: '#232325',
    minHeight: '100vh',
  },
});
import React from 'react';
import './App.css';
import { makeStyles } from '@mui/styles';
import Home from './page/Home';
import { Editor } from "@craftjs/core";
import { Card, CardTop, CardBottom } from './builder/components/user/Card'
import { Container } from './builder/components/user/Container'
import Button from './builder/components/user/ButtonCrafted'
import { Text } from './builder/components/user/Text'
import ToolBox from './components/Toolbox';
import SettingsPanel from './components/SettingsPannel';

export default function App() {
  const classes = useStyles();
  return (
    <Editor resolver={{ Card, Container, Button, Text, CardTop, CardBottom }}>
      <div className={classes.root}>
        <ToolBox />
        <main className={classes.main}>
          <div>
            <Home />
          </div>
        </main>
        <SettingsPanel />
      </div>
    </Editor>
  );
}

const useStyles = makeStyles({
  root: {
    background: '#18181b',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  main: {
    height: '100%',
    width: '100%',
    maxWidth: "1220px !important",
    margin: '0 auto',
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& div': {
      width: '100%',
      maxWidth: '1220px',
      boxSizing: 'border-box',
    }
  }
});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#625CF3" },
    secondary: { main: "#FFF" },
    default: { main: "#FFF" },

    success: { main: "#00962d" },
    error: { main: "#cc0000" },
    // background: {
    //   paper: "#010110",
    //   default: "#02021a",
    // },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

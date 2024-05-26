import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Topbar } from "../components/TopBar";

import { Container } from '../builder/components/user/Container'

import { Frame, Element } from "@craftjs/core";

export default function Home() {
  const classes = useStyles();

  return (
    <div >
      <Paper elevation={5} className={classes.root}>
        <Topbar />
        <Frame>
          <Element is={Container} background='#27272a' canvas>
          </Element>
        </Frame>
      </Paper>
    </div>

  );
}

const useStyles = makeStyles({
  root: {
    height: "100% ",
    width: "100% ",
    backgroundColor: "#27272a !important",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  }
})
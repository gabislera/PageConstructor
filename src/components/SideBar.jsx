import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles"
import ToolBox from "./Toolbox";
import SettingsPannel from "./SettingsPannel";

export default function SideBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} >
      {/* <ToolBox /> */}
      <SettingsPannel />
    </Paper>
  )
}

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    width: '16rem',
    height: '100%',
    padding: '0 1rem',
    backgroundColor: '#27272a !important',
  }
})
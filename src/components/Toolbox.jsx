import { Grid, Button as MaterialButton, Paper } from "@mui/material";
import { useEditor, Element } from "@craftjs/core";
import { Box, Typography } from "@mui/material";
import { Button } from '../builder/components/user/Button'
import { Text } from '../builder/components/user/Text'
import { Container } from '../builder/components/user/Container'
import { Card } from '../builder/components/user/Card'
import { makeStyles } from "@mui/styles"

export default function ToolBox() {
  const { connectors } = useEditor();
  const classes = useStyles();

  return (
    <Paper className={classes.root} >
      <Grid container direction="column" alignItems="center" justify="center" spacing={1} >
        <Box mt={10} pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item style={{ marginTop: '1.5rem' }}>
          <MaterialButton
            ref={ref => connectors.create(ref, <Button text="Click me" size="small" />)}
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)}
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles({
  root: {
    width: '16rem',
    minHeight: '100vh',
    height: '100%',
    padding: '0 1rem',
    backgroundColor: '#27272a !important',
  }
})
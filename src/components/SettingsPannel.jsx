import { useEditor } from '@craftjs/core';
import {
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
  Paper
} from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles"

const SettingsPanel = () => {
  const classes = useStyles();
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return (
    <Paper className={classes.root} >
      {isEnabled && selected ? (
        <Grid container direction="column" spacing={0} mt={4} >
          <Grid item pb={3}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography color='white' variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <Chip
                  size="small"
                  color="primary"
                  label={selected.name}
                  data-cy="chip-selected"
                />
              </Grid>
            </Grid>
          </Grid>
          <div data-cy="settings-panel">
            {selected.settings && React.createElement(selected.settings)}
          </div>

          {selected.isDeletable ? (
            <MaterialButton
              variant="contained"
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </MaterialButton>
          ) : null}
        </Grid>
      ) : null}
    </Paper>
  )
};

export default SettingsPanel;

const useStyles = makeStyles({
  root: {
    overflowY: 'auto',
    height: '100vh',
    width: '16rem',
    padding: '0 1rem',
    backgroundColor: '#27272a !important',
  }
})
import React from 'react';
import { useEditor } from '@craftjs/core';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const SettingsPanel = ({ setShowToolbox }) => {
  const classes = useStyles();
  const { selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
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
    <Grid container direction={'column'} alignItems={'center'} >
      {selected && selected.settings ? (
        <div data-cy='settings-panel'>
          {React.createElement(selected.settings)}
        </div>
      ) : (
        <Box className={classes.notSelected}>
          <Typography
            variant="caption"
            style={{ fontWeight: "bold", fontSize: 11 }}
            color="textSecondary"
          >
            Nenhum item selecionado para a edição.
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            style={{ fontSize: 11 }}
          >
            Selecione algum item para personalizá-lo ou arraste um novo elemento
            da barra lateral.
          </Typography>
        </Box>
      )}
      {/* {selected && selected.isDeletable ? (
        <MaterialButton
          variant='contained'
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </MaterialButton>
      ) : null} */}
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {

  },
  notSelected: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    textAlign: "center",
    // padding: "50px 12px",
  },
});
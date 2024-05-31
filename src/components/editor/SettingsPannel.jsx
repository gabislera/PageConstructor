import React, { useEffect } from 'react';
import { useEditor } from '@craftjs/core';
import { Chip, Box, Typography, Button as MaterialButton, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeEditor from '../CodeEditor';

export const SettingsPanel = ({ setShowToolbox }) => {
  const classes = useStyles();
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    // const currentNodeId = query.getEvent('selected').last();
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

  const addImportant = (css) => {
    return css.replace(
      /([^;\s{}]+)(\s*;)/g,
      (match, property, semicolon) => {
        if (property.includes('!important')) {
          return match;
        }
        return `${property} !important${semicolon}`;
      }
    );
  };

  // if (!isEnabled || !selected) {
  //   return null;
  // }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
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
      {selected && selected.isDeletable ? (
        <MaterialButton
          variant='contained'
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </MaterialButton>
      ) : null}
    </Box>
  );
};

const useStyles = makeStyles({
  notSelected: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    textAlign: "center",
    // padding: "50px 12px",
  },
});
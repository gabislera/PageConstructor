import React, { useEffect } from "react";
import { useEditor, useNode } from "@craftjs/core";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const SettingsPanel = ({ setShowToolbox }) => {
  const classes = useStyles();
  const { selected, actions } = useEditor((state, query) => {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" && selected && selected.isDeletable) {
        actions.delete(selected.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, actions]);

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      {selected && selected.settings && (
        <div data-cy="settings-panel">
          {React.createElement(selected.settings)}
        </div>
      )}
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {},
  notSelected: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    textAlign: "center",
  },
});

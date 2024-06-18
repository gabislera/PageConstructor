import React, { useEffect } from "react";
import { useEditor } from "@craftjs/core";
import { Grid } from "@mui/material";

export const SettingsPanel = () => {
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
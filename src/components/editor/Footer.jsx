import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useEditor } from "@craftjs/core";
import clsx from "clsx";
import {
  Redo,
  Undo,
  Devices,
  RemoveRedEye,
  Layers,
  Settings,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useResponsiveMode } from "../../contexts/ResponsiveModeContext";

export const Footer = () => {
  const classes = useStyles();
  const {
    isResponsiveMode,
    setIsResponsiveMode,
    setIsLayersOpen,
    isLayersOpen,
  } = useResponsiveMode();
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const handlePublish = () => {
    const json = query.serialize();
    console.log(json);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "z":
            actions.history.undo();
            return;
          case "y":
            actions.history.redo();
            return;
          default:
            return;
        }
      }
    });
  }, [actions.history]);

  const handleSelectAppComponent = () => {
    actions.selectNode("ROOT");
  };

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="center" width={"100%"}>
        <Tooltip title="Configurações" placement="bottom">
          <IconButton
            onClick={handleSelectAppComponent}
            className={classes.item}
          >
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Camadas" placement="bottom">
          <IconButton
            onClick={() => setIsLayersOpen(!isLayersOpen)}
            className={classes.item}
          >
            <Layers />
          </IconButton>
        </Tooltip>
        {enabled && (
          <>
            <Tooltip title="Desfazer" placement="bottom">
              <IconButton
                className={clsx(classes.item, {
                  [classes.itemDisabled]: !canUndo,
                })}
                onClick={() => actions.history.undo()}
                disabled={!canUndo}
              >
                <Undo />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refazer" placement="bottom">
              <IconButton
                className={clsx(classes.item, {
                  [classes.itemDisabled]: !canRedo,
                })}
                onClick={() => actions.history.redo()}
                disabled={!canRedo}
              >
                <Redo />
              </IconButton>
            </Tooltip>
          </>
        )}
        <Tooltip title="Modo responsivo" placement="bottom">
          <IconButton
            className={classes.item}
            onClick={() => setIsResponsiveMode(!isResponsiveMode)}
          >
            <Devices />
          </IconButton>
        </Tooltip>

        <Tooltip title="Preview" placement="bottom">
          <IconButton
            className={classes.item}
            onClick={() => actions.history.undo()}
            disabled={!canUndo}
          >
            <RemoveRedEye />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="Publish" placement="bottom">
        <Button
          onClick={handlePublish}
          variant="contained"
          sx={{ color: "white", borderRadius: 0, textTransform: "capitalize" }}
        >
          Publish
        </Button>
      </Tooltip>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    background: "#171717",
    width: "100%",
    overflowX: "hidden",
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",

    position: "absolute",
    zIndex: 20,
    bottom: 0,
  },
  item: {
    marginRight: "10px",
    "& svg": {
      width: "20px",
      height: "20px",
      fill: "#d5d8dc",
    },
  },
  itemDisabled: {
    opacity: "0.2",
    cursor: "not-allowed",
  },
});

import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useEditor } from "@craftjs/core";
import clsx from "clsx";
import { Redo, Undo, Devices, RemoveRedEye } from "@mui/icons-material";
import { useEffect } from "react";
import { useResponsiveMode } from "../../contexts/ResponsiveModeContext";

export const Footer = () => {
  const classes = useStyles();
  const { isResponsiveMode, setIsResponsiveMode } = useResponsiveMode();
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

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

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="center" width={"100%"}>
        {enabled && (
          <>
            <Tooltip title="Undo" placement="bottom">
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
            <Tooltip title="Redo" placement="bottom">
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
        <Tooltip title="Responsive mode" placement="bottom">
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
    background: "#232325",
    width: "100%",
    overflowX: "hidden",
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    marginRight: "10px",
    "& svg": {
      width: "20px",
      height: "20px",
      fill: "#707070",
    },
  },
  itemDisabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
});

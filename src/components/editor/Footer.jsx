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
  ExpandLess,
  Save,
  Folder,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
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
  const [saveOptions, setSaveOptions] = useState(false);

  const handlePublish = () => {
    const currentJson = query.serialize();
    const parsedJson = JSON.parse(currentJson);

    localStorage.setItem("pageData", parsedJson);

    // console.log(parsedJson);
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

  const toggleSaveOptions = () => {
    setSaveOptions((prev) => !prev);
  };

  return (
    <Box className={classes.footer}>
      {saveOptions && (
        <Box className={classes.saveOptions}>
          <Button
            startIcon={<Save sx={{ width: "16px", height: "16px" }} />
            }
            onClick={handlePublish}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              border: "1px solid #3f444b",
              padding: "8px 20px",
              fontSize: "12px",
              borderRadius: "2px",
              width: "100%",
              color: "#fff",

              "&:hover": {
                backgroundColor: "#3f444b",
              },
            }}
          >
            Salvar rascunho
          </Button>

          <Button
            startIcon={<Folder sx={{ width: "16px", height: "16px" }} />
            }
            onClick={handlePublish}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              border: "1px solid #3f444b",
              padding: "8px 20px",
              borderRadius: "2px",
              width: "100%",
              color: "#fff",
              fontSize: "12px",

              "&:hover": {
                backgroundColor: "#3f444b",
              },
            }}
          >
            Salvar como modelo
          </Button>
        </Box>
      )}

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

        <Box display="flex" alignItems="center">
          <Tooltip title="Publicar" placement="bottom">
            <Button
              onClick={handlePublish}
              sx={{
                color: "white",
                borderRadius: 0,
                textTransform: "capitalize",
                backgroundColor: "#625cf3",
                minHeight: "40px",
                paddingX: "0px",
                fontSize: "12px",

                "&:hover": {
                  backgroundColor: "#615cf3c5",
                },
              }}
            >
              Publicar
            </Button>
          </Tooltip>
          <Tooltip title="Expandir opçoes de salvamento" placement="bottom">
            <IconButton
              onClick={toggleSaveOptions}
              sx={{
                backgroundColor: "#625cf3",
                borderRadius: "0px",
                paddingX: "0px",
                color: "white",
                borderLeft: "1px solid rgba(255, 255, 255, 0.1)",

                "&:hover": {
                  backgroundColor: "#615cf3c5",
                },
              }}
            >
              <ExpandLess sx={{
                transform: saveOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease',
              }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: 'column',
    height: "40px",
    position: "relative",
  },
  saveOptions: {
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "#27272a",
    height: "120px",
    width: "100%",
    padding: "16px",
    position: "absolute",
    bottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    left: "0",
    zIndex: 10,
  },
  saveButton: {
    color: "white",
    borderRadius: 0,
    textTransform: "capitalize",
    backgroundColor: "#625cf3",
    minHeight: "40px",
    paddingX: "0px",
    fontSize: "12px",

    "&:hover": {
      backgroundColor: "#615cf3c5",
    },
  },
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
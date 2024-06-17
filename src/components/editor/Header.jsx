import React, { useState, useRef, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add } from "@mui/icons-material";
import ContentEditable from "react-contenteditable";
import { useEditor } from "@craftjs/core";

export const Header = ({ isOpen, onClick }) => {
  const classes = useStyles();
  const { actions, query } = useEditor((state) => ({
    selected: state.events.selected,
  }));
  const selectedNodeId = query.getEvent("selected").first();

  const [editable, setEditable] = useState(false);
  const nameDOM = useRef(null);
  const [name, setName] = useState("");

  const clickOutside = useCallback(
    (e) => {
      if (nameDOM.current && !nameDOM.current.contains(e.target)) {
        setEditable(false);
      }
    },
    [nameDOM]
  );

  useEffect(() => {
    if (selectedNodeId) {
      const node = query.node(selectedNodeId).get();
      const currentName =
        node?.data?.custom?.displayName ?? node?.data?.displayName;
      setName(currentName);
    }
  }, [selectedNodeId, query]);

  useEffect(() => {
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [clickOutside]);

  const handleContentChange = (evt) => {
    const newName = evt.target.value.replace(/<\/?[^>]+(>|$)/g, "");
    if (newName.trim() !== "") {
      setName(newName);
      actions.setCustom(
        selectedNodeId,
        (custom) => (custom.displayName = newName)
      );
    }
  };

  return (
    <Box className={classes.root}>
      {selectedNodeId ? (
        <span
          style={{
            opacity: isOpen ? "1" : "0",
            transition: "opacity 0.1s ease",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
          className={classes.logo}
          onDoubleClick={() => setEditable(true)}
        >
          <ContentEditable
            html={name}
            disabled={!editable}
            ref={(ref) => {
              if (ref) {
                nameDOM.current = ref.el.current;
                window.removeEventListener("click", clickOutside);
                window.addEventListener("click", clickOutside);
              }
            }}
            onChange={handleContentChange}
            tagName="span"
            style={{
              cursor: editable ? "text" : "pointer",
              padding: "2px",
            }}
          />
        </span>
      ) : (
        <img
          alt="logo"
          src="/sellflux_logo1.png"
          className={classes.logo}
          style={{
            opacity: isOpen ? "1" : "0",
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      )}

      <IconButton onClick={onClick}>
        <Add style={{ color: "white", opacity: "0.9" }} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    background: "#232325",
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  logo: {
    maxHeight: "20px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  },
});

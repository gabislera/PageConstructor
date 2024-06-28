import { useState, useCallback, useRef, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { ChromePicker } from "react-color";
import { FormatColorText, FormatColorFill } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Initialize Editor State
const initializeEditorState = (content) => {
  if (content) {
    const blocksFromHtml = htmlToDraft(content);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      return EditorState.createWithContent(contentState);
    }
  }
  return EditorState.createEmpty();
};

// Color Picker Wrapper Component
const ColorPickerWrapper = ({ type, onChange }) => {
  const classes = useStyles();
  const [color, setColor] = useState("#000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const pickerRef = useRef();

  const onColorChange = (color) => {
    setColor(color.hex);
  };

  const applyColor = (color) => {
    onChange(type, color.hex);
  };

  const handleClick = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showColorPicker]);

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        disableRipple
        onClick={() => setShowColorPicker(!showColorPicker)}
        className={classes.buttonColorPicker}
        sx={{ padding: 0, borderRadius: 0, width: "25px", height: "28px" }}
      >
        {type === "color" ? (
          <FormatColorText
            sx={{ color: "#000", width: "16px", height: "16px" }}
          />
        ) : (
          <FormatColorFill
            sx={{ color: "#000", width: "16px", height: "16px" }}
          />
        )}
      </IconButton>
      {showColorPicker && (
        <div ref={pickerRef} className={classes.pickerWrapper}>
          <ChromePicker
            className={classes.picker}
            color={color}
            onChange={onColorChange}
            onChangeComplete={applyColor}
          />
        </div>
      )}
    </div>
  );
};

// Main Rich Text Editor Component
const RichTextEditor = ({ content, onContentChange }) => {
  const [editorState, setEditorState] = useState(() =>
    initializeEditorState(content)
  );

  const onEditorStateChange = useCallback(
    (state) => {
      setEditorState(state);
      const rawContentState = convertToRaw(state.getCurrentContent());
      const htmlContent = draftToHtml(rawContentState);
      onContentChange(htmlContent);
    },
    [onContentChange]
  );

  const toolbarOptions = {
    options: [
      "blockType",
      "inline",
      "list",
      "textAlign",
      "link",
      "remove",
      "history",
      "colorPicker",
    ],
    inline: { options: ["bold", "italic", "underline"] },
    blockType: {
      className: "custom-block",
      inDropdown: true,
      options: [
        "Normal",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "Blockquote",
        "Code",
      ],
    },
    list: { options: ["unordered", "ordered"] },
    textAlign: { options: ["left", "center", "right", "justify"] },
    colorPicker: {
      component: (props) => (
        <div style={{ display: "flex" }}>
          <ColorPickerWrapper
            {...props}
            type="color"
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
          <ColorPickerWrapper
            {...props}
            type="bgcolor"
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      ),
    },
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbarOptions}
        toolbarStyle={{ backgroundColor: "transparent", color: "black" }}
        wrapperStyle={{
          backgroundColor: "white",
          color: "black",
          padding: "2px",
          border: "1px solid #ccc",
          width: "265px",
        }}
        editorStyle={{
          padding: "8px",
          height: "100%",
          minHeight: "300px",
          maxHeight: "300px",
          overflowY: "scroll",
        }}
      />
    </div>
  );
};

// Custom styles
const useStyles = makeStyles(() => ({
  buttonColorPicker: {
    "&:hover": {
      boxShadow: "1px 1px 1px rgba(16, 16, 16, 0.27)",
    },
  },

  pickerWrapper: {
    position: "absolute",
    zIndex: 4,
    top: 30,
    right: -32,
    backgroundColor: "#232325",
  },
  picker: {
    backgroundColor: "#232325 !important",
    padding: "10px",
    borderRadius: "8px",
    "& svg": {
      fill: "#d5d8dc !important",
    },
    "& svg:hover": {
      fill: "#fff !important",
      backgroundColor: "#232325 !important",
    },
    "& input": {
      color: "#fff !important",
      backgroundColor: "#232325 !important",
    },
  },
}));

export default RichTextEditor;

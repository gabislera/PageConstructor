import React, { useState, useEffect } from "react";
import moment from "moment";

import ace from "brace";
import "brace/theme/ambiance";
import "brace/theme/chaos";

require("brace/ext/searchbox");
require("brace/ext/language_tools");
require("brace/worker/javascript");

require("brace/mode/javascript");
require("brace/mode/html");
require("brace/mode/css");
var pretty = require("pretty");

const CodeEditor = ({ onChange, value, readOnly, lang, id }) => {
  let compAce = null;
  let session = null;

  const momentId = moment().valueOf();

  useEffect(() => {
    compAce = ace.edit("editor-html-" + momentId);
    compAce.setTheme("ace/theme/chaos");

    if (readOnly) compAce.setReadOnly(true);

    ace.acequire("ace/ext/language_tools");

    let EditSession = ace.acequire("ace/edit_session").EditSession;
    var codigo = value ? value : "";

    var edit = new EditSession(codigo);

    edit.setUseWrapMode(true);
    // console.log(id, value);

    edit.setUndoManager(new ace.UndoManager());
    session = edit;
    confgSave(compAce);
    compAce.setValue(value);
    compAce.renderer.setOption("showGutter", false);
    setStyle();
  }, [id]);

  function setStyle() {
    compAce.getSession().setMode(getMode());
    compAce.getSession().setScrollTop(0);
    compAce.getSession().setUseWrapMode(true);
  }

  function getMode() {
    switch (lang) {
      case "html":
        return "ace/mode/html";
      case "css":
        return "ace/mode/css";
      case "js":
        return " ace/mode/javascript";
      default:
        return "ace/mode/html";
    }
  }

  function confgSave(editor, tag) {
    editor.commands.addCommand({
      name: "saveFile",
      bindKey: {
        win: "Ctrl-S",
        mac: "Command-S",
        sender: "editor|cli",
      },
      exec: (editor, args, request) => {
        var cursor = editor.getSession().getScrollTop();
        var _value = editor.getValue();
        editor.setValue(formatCode(_value));
        editor.getSession().setScrollTop(cursor);
      },
    });
    editor.on("change", (code) => {
      if (onChange) {
        onChange({ target: { value: editor.getValue(), name: "html" } });
        console.log(editor.getValue());
      }
    });
    editor.commands.addCommand({
      name: "format",
      bindKey: {
        win: "Alt-f5",
        mac: "Alt-f5",
        sender: "editor|cli",
      },
      exec: (editorN, args, request) => {
        var cursor = editor.getSession().getScrollTop();
        var value = editor.getValue();
        editor.setValue(formatCode(value));
        editor.getSession().setScrollTop(cursor);
      },
    });
  }
  function formatCode(code) {
    try {
      var res = pretty(code);
      return res;
    } catch (e) {
      console.log(e);
    }
    return code;
  }

  return (
    <div
      id={"editor-html-" + momentId}
      style={{
        minHeight: "250px",
        width: "100%",
        height: "100%",
        borderRadius: 4,
      }}
    />
  );
};

export default CodeEditor;




















// ? selected.additional_css
//                     : `.${currentId} {
//   /* Place your custom styles here */
// }

// .${currentId}:hover {
//   /* Place your hover styles here */
// }`

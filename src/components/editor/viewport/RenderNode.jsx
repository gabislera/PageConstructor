import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { IconButton } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { ContentCopy, DragIndicator } from "@mui/icons-material";

const IndicatorDiv = ({ children, style, onClick }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      height: "24px",
      marginTop: "-25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: "6px",
      textAlign: "center",
      ...style,
    }}
  >
    {children}
  </div>
);

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
    props,
    isLinkedNode,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef();

  useEffect(() => {
    if (dom) {
      if (isHover) {
        dom.classList.add("component-hover");
      } else dom.classList.remove("component-hover");
      if (isActive) {
        dom.classList.add("component-selected");
        dom.classList.remove("component-hover");
      } else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const currentDOM = currentRef.current;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      .addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        .removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            // <div
            //   className="background-blur"
            //   style={{
            //     left: getPos(dom).left,
            //     top: getPos(dom).top,
            //     position: "fixed",
            //     zIndex: 9999,
            //     padding: 6,
            //     color: "#FFF",
            //     height: "24px",
            //     width: "24px",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //   }}
            // >
            //   {id !== ROOT_NODE && (
            //     <IconButton
            //       disableRipple
            //       disableFocusRipple
            //       disableTouchRipple
            //       size="small"
            //       style={{}}
            //       onClick={(e) => {
            //         e.preventDefault();
            //         e.stopPropagation();
            //         actions.selectNode(parent);
            //       }}
            //     >
            //       <KeyboardArrowUpIcon />
            //     </IconButton>
            //   )}
            // </div>,
            <IndicatorDiv
              onClick={() => actions.selectNode(id)}
              ref={currentRef}
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                position: "fixed",
                zIndex: 9999,
                padding: 6,
                color: "#FFF",
                backgroundColor: "#6465ffda",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: "bold" }}>{name}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {moveable ? (
                  <IconButton
                    size="small"
                    ref={drag}
                    sx={{
                      "&:hover": {
                        borderRadius: 0,
                      },
                      "& svg": {
                        width: 17,
                        height: 17,
                        transform: "rotate(90deg)",
                      },
                    }}
                  >
                    <DragIndicator />
                  </IconButton>
                ) : null}
                {id !== ROOT_NODE && (
                  <IconButton
                    size="small"
                    sx={{
                      "&:hover": {
                        borderRadius: 0,
                      },
                      "& svg": {
                        width: 17,
                        height: 17,
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      actions.selectNode(parent);
                    }}
                  >
                    <KeyboardArrowUpIcon />
                  </IconButton>
                )}
                {id !== ROOT_NODE &&
                !isLinkedNode &&
                !props.notDuplicateable &&
                !["Tela", "Section", "Container"].includes(name) ? (
                  <IconButton
                    size="small"
                    sx={{
                      "&:hover": {
                        borderRadius: 0,
                      },
                      "& svg": {
                        width: 13,
                        height: 13,
                      },
                    }}
                    onMouseDown={() => {
                      const {
                        data: { type, props },
                      } = query.node(id).get();
                      actions.add(
                        query.createNode(React.createElement(type, props)),
                        parent
                      );
                    }}
                  >
                    <ContentCopy />
                  </IconButton>
                ) : null}
                {!props.notDeletable && deletable ? (
                  <IconButton
                    size="small"
                    sx={{
                      "&:hover": {
                        borderRadius: 0,
                      },
                      "& svg": {
                        width: 15,
                        height: 15,
                      },
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      actions.delete(id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : null}
              </div>
            </IndicatorDiv>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};

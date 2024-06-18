import { useEditor } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';

import { EditableLayerName } from './EditableLayerName';

import { KeyboardArrowDown, Visibility, Link } from '@mui/icons-material';
import { useLayer } from '@craftjs/layers';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  background: ${(props) => (props.selected ? '#625CF3' : 'transparent')};
  border-radius: 4px;
  color: ${(props) => (props.selected ? '#fff' : 'inherit')};

  svg {
    fill: ${(props) => (props.selected ? '#fff' : '#d5d8dc')};
  }
  .inner {
    flex: 1;
    > div {
      padding: 0px;
      flex: 1;
      display: flex;
      margin-left: ${(props) => props.depth * 10}px;
      align-items: center;
      div.layer-name {
        flex: 1;
        h2 {
          font-size: 12px;
        }
      }
    }
  }
`;

const Expand = styled.a`
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transform: rotate(${(props) => (props.expanded ? 180 : 0)}deg);
  opacity: 0.7;
  cursor: pointer;
`;

const Hide = styled.a`
  width: 14px;
  height: 20px;
  margin-right: 10px;
  position: relative;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: ${(props) => (props.isHidden ? 0.2 : 1)};
  }
  &:after {
    content: ' ';
    width: 2px;
    height: ${(props) => (props.isHidden ? 100 : 0)}%;
    position: absolute;
    left: 2px;
    top: 3px;
    background: ${(props) => (props.selected ? '#fff' : '#808184')};
    transform: rotate(-45deg);
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: 0% 0%;
    opacity: ${(props) => (props.isHidden ? 0.4 : 1)};
  }
`;

const TopLevelIndicator = styled.div`
  margin-left: -22px;
  margin-right: 10px;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const DefaultLayerHeader = () => {
  const {
    id,
    depth,
    expanded,
    children,
    connectors: { drag, layerHeader },
    actions: { toggleLayer },
  } = useLayer((layer) => {
    return {
      expanded: layer.expanded,
    };
  });

  const { hidden, actions, selected, topLevel } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const selected = query.getEvent('selected').first() === id;

    return {
      hidden: state.nodes[id] && state.nodes[id].data.hidden,
      selected,
      topLevel: query.node(id).isTopLevelCanvas(),
    };
  });

  return (
    <StyledDiv selected={selected} ref={drag} depth={depth}>
      <Hide
        selected={selected}
        isHidden={hidden}
        onClick={() => actions.setHidden(id, !hidden)}
      >
        <Visibility />
      </Hide>
      <div className="inner">
        <div ref={layerHeader}>
          {topLevel ? (
            <TopLevelIndicator>
              <Link />
            </TopLevelIndicator>
          ) : null}

          <div className="layer-name s">
            <EditableLayerName />
          </div>
          {children && children.length ? (
            <Expand expanded={expanded} onMouseDown={() => toggleLayer()}>
              <KeyboardArrowDown />
            </Expand>
          ) : null}
        </div>
      </div>
    </StyledDiv>
  );
};
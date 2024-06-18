import { useEditor } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';

import { DefaultLayerHeader } from './DefaultLayerHeader';
import { useLayer } from '@craftjs/layers';

const LayerNodeDiv = styled.div`
  background: ${props => (props.hovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent')};
  color: ${props => (props.hovered ? '#fff' : '#d5d8dc')};
  border-radius: 4px;

  display: block;
  padding-bottom: ${props => (props.hasCanvases && props.expanded ? 5 : 0)}px;
`;

const LayerChildren = styled.div`
  margin: 0 0 0 ${props => (props.hasCanvases ? 35 : 5)}px;
  /* background: ${props => (props.hasCanvases ? 'rgba(255, 255, 255, 0.02)' : 'transparent')}; */
  background: 'transparent';

  position: relative;

  ${props =>
    props.hasCanvases
      ? `
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom:5px;
  margin-top:5px; 
  > * { overflow:hidden; }
    &:before { 
      position:absolute;
      left:-19px;
      width: 2px;
      height:100%;
      content: " ";
    }
  `
      : ''}
`;

export const DefaultLayer = ({ children }) => {
  const {
    id,
    expanded,
    hovered,
    connectors: { layer },
  } = useLayer(layer => ({
    hovered: layer.event.hovered,
    expanded: layer.expanded,
  }));
  const { hasChildCanvases } = useEditor((state, query) => {
    return {
      hasChildCanvases: query.node(id).isParentOfTopLevelNodes(),
    };
  });

  return (
    <LayerNodeDiv
      ref={layer}
      expanded={expanded}
      hasCanvases={hasChildCanvases}
      hovered={hovered}
    >
      <DefaultLayerHeader />
      {children ? (
        <LayerChildren
          hasCanvases={hasChildCanvases}
          className="craft-layer-children"
        >
          {children}
        </LayerChildren>
      ) : null}
    </LayerNodeDiv>
  );
};
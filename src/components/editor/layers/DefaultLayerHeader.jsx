import React from "react";
import styled from "styled-components";
import { useEditor } from "@craftjs/core";
import { useLayer } from "@craftjs/layers";
import { EditableLayerName } from "./EditableLayerName";
import {
  CropLandscapeSharp,
  SmartButton,
  CalendarViewMonth,
  ImageOutlined,
  OndemandVideo,
  Remove,
  Quiz,
  TextFields,
  FormatAlignLeft,
  Insights,
  Contacts,
  AccessTime,
  KeyboardArrowDown,
  Visibility,
  Link,
} from "@mui/icons-material";

// Mapeamento dos componentes para ícones
const componentIconMap = {
  container: CropLandscapeSharp,
  grid: CalendarViewMonth,
  título: TextFields,
  texto: FormatAlignLeft,
  botão: SmartButton,
  imagem: ImageOutlined,
  vídeo: OndemandVideo,
  divisor: Remove,
  perguntas_frequentes: Quiz,
  barra_de_progresso: Insights,
  formulário: Contacts,
  contador_regressivo: AccessTime,
};

// Função para normalizar o nome dos componentes
const normalizeComponentName = (name) => {
  return name.replace(/\s+/g, "_").toLowerCase();
};

const getElementIcon = (component) => {
  const normalizedComponent = normalizeComponentName(component);
  const Icon = componentIconMap[normalizedComponent];
  return Icon ? <Icon /> : null;
};

const LayerIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;

  svg {
    width: 16px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  background: ${(props) => (props.selected ? "#625CF3" : "transparent")};
  border-radius: 4px;
  color: ${(props) => (props.selected ? "#fff" : "inherit")};

  svg {
    fill: ${(props) => (props.selected ? "#fff" : "#d5d8dc")};
  }
  .inner {
    flex: 1;
    > div {
      padding: 0px;
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: ${(props) => props.depth * 10}px;

      div.layer-name {
        flex: 1;
        h2 {
          font-size: 11px;
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
  // margin-right: 10px;
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
    content: " ";
    width: 2px;
    height: ${(props) => (props.isHidden ? 100 : 0)}%;
    position: absolute;
    left: 2px;
    top: 3px;
    background: ${(props) => (props.selected ? "#fff" : "#808184")};
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

  const { hidden, actions, selected, topLevel, nodeType } = useEditor(
    (state, query) => {
      const selected = query.getEvent("selected").first() === id;
      const node = state.nodes[id];

      return {
        hidden: node && node.data.hidden,
        selected,
        topLevel: query.node(id).isTopLevelCanvas(),
        nodeType: node && node.data.displayName,
      };
    }
  );

  return (
    <StyledDiv selected={selected} ref={drag} depth={depth}>
      {children && children.length ? (
        <Expand expanded={expanded} onMouseDown={() => toggleLayer()}>
          <KeyboardArrowDown />
        </Expand>
      ) : null}
      <div className="inner">
        <div ref={layerHeader}>
          <LayerIconWrapper>{getElementIcon(nodeType)}</LayerIconWrapper>
          <div className="layer-name s">
            <EditableLayerName />
          </div>
          {topLevel ? (
            <TopLevelIndicator>
              <Link />
            </TopLevelIndicator>
          ) : null}
          <Hide
            selected={selected}
            isHidden={hidden}
            onClick={() => actions.setHidden(id, !hidden)}
          >
            <Visibility />
          </Hide>
        </div>
      </div>
    </StyledDiv>
  );
};

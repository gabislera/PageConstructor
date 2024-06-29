import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Divider, Tooltip, IconButton } from "@mui/material";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
  EastRounded,
  SouthRounded,
  NorthRounded,
  WestRounded,
  AlignVerticalTop,
  AlignVerticalCenter,
  AlignVerticalBottom,
  Start,
  WrapText,
  Clear,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import {
  ColorControl,
  CustomButtonGroup,
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
  FileUpload,
  TabOptions,
  CustomBoxShadowModal,
  CustomCollapse,
  CustomTypeColorGradient,
  CustomSwitch,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import { ReactComponent as JustifyCenter } from "../../iconsControls/justify_center.svg";
import { ReactComponent as JustifyStart } from "../../iconsControls/justify_start.svg";
import { ReactComponent as JustifyEnd } from "../../iconsControls/justify_end.svg";
import { ReactComponent as SpaceAround } from "../../iconsControls/space_around.svg";
import { ReactComponent as SpaceBetween } from "../../iconsControls/space_between.svg";
import { ReactComponent as SpaceEvenly } from "../../iconsControls/space_evenly.svg";
import { ReactComponent as AlignStretch } from "../../iconsControls/align_stretch.svg";
import { ReactComponent as Gradient } from "../../iconsControls/gradient.svg";
import { ReactComponent as Brush } from "../../iconsControls/brush.svg";
import ImageIcon from "@mui/icons-material/Image";
export const ContainerSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  // const { actions, selected } = useEditor((state, query) => {
  //   const [currentNodeId] = state.events.selected;
  //   let selected;

  //   if (currentNodeId) {
  //     selected = {
  //       id: currentNodeId,
  //       name: state.nodes[currentNodeId].data.name,
  //       settings:
  //         state.nodes[currentNodeId].related &&
  //         state.nodes[currentNodeId].related.settings,
  //       isDeletable: query.node(currentNodeId).isDeletable(),
  //     };
  //   }

  //   return {
  //     selected,
  //   };
  // });

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid color="#fff">
      <Box width="100%" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          sx={{ width: "305px" }}
        >
          <Tab
            className={classes.tab}
            icon={<SpaceDashboardOutlined />}
            label={<span>Layout</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            icon={<Contrast />}
            label={<span>Estilo</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            icon={<Settings />}
            label={<span>Avançado</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPannel value={value} index={0}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <Grid item>
            <CustomSlider
              text="Largura"
              value={props.width}
              mobileValue={props.mobileWidth}
              onChange={(e, value) => setProp((props) => (props.width = value))}
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileWidth = value))
              }
              min={8}
              max={1220}
              step={1}
              tooltipText={"Escolha a largura do container"}
            />
          </Grid>

          <Grid item>
            <CustomSlider
              text="Altura mínima"
              value={props.minHeight}
              mobileValue={props.mobileMinHeight}
              onChange={(e, value) =>
                setProp((props) => (props.minHeight = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileMinHeight = value))
              }
              min={8}
              max={1000}
              step={1}
              tooltipText={"Escolha a altura minima"}
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
          {/* 
          <Grid item xs={12}>
            <Typography variant="caption" gutterBottom color="inherit">
              Item
            </Typography>
          </Grid> */}

          <Grid item>
            <CustomButtonGroup
              text="Direção"
              value={props.flexDirection}
              mobileValue={props.mobileFlexDirection}
              onChange={(e, value) =>
                setProp((props) => (props.flexDirection = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileFlexDirection = value))
              }
              options={[
                {
                  value: "row",
                  icon: <EastRounded />,
                  tooltip: "Linha - horizontal",
                },
                {
                  value: "column",
                  icon: <SouthRounded />,
                  tooltip: "Coluna - vertical",
                },
                {
                  value: "row-reverse",
                  icon: <NorthRounded />,
                  tooltip: "Linha - invertida",
                },
                {
                  value: "column-reverse",
                  icon: <WestRounded />,
                  tooltip: "Coluna - invertida",
                },
              ]}
              tooltipText={"Escolha a direção do item"}
              fullWidth
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Justificar conteúdo"
              value={props.justifyContent}
              mobileValue={props.mobileJustifyContent}
              onChange={(e, value) =>
                setProp((props) => (props.justifyContent = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileJustifyContent = value))
              }
              options={[
                { value: "start", icon: <JustifyStart />, tooltip: "Início" },
                { value: "center", icon: <JustifyCenter />, tooltip: "Centro" },
                { value: "end", icon: <JustifyEnd />, tooltip: "Fim" },
                {
                  value: "space-between",
                  icon: <SpaceBetween />,
                  tooltip: "Espaço entre",
                },
                {
                  value: "space-around",
                  icon: <SpaceAround />,
                  tooltip: "Espaço ao redor",
                },
                {
                  value: "space-evenly",
                  icon: <SpaceEvenly />,
                  tooltip: "Espaço uniforme",
                },
              ]}
              tooltipText={"Escolha a direção do item"}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Alinhar itens"
              value={props.alignItems}
              mobileValue={props.mobileAlignItems}
              onChange={(e, value) =>
                setProp((props) => (props.alignItems = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileAlignItems = value))
              }
              options={[
                {
                  value: "start",
                  icon: <AlignVerticalTop />,
                  tooltip: "Início",
                },
                {
                  value: "center",
                  icon: <AlignVerticalCenter />,
                  tooltip: "Centro",
                },
                { value: "end", icon: <AlignVerticalBottom />, tooltip: "Fim" },
                {
                  value: "stretch",
                  icon: <AlignStretch />,
                  tooltip: "Esticar",
                },
              ]}
              tooltipText={"Escolha a direção do item"}
              fullWidth
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <Grid item>
            <CustomLinkedValues
              text="Espaçamentos"
              values={props}
              onChange={setProp}
              options={[
                { value: "columnGap", label: "Coluna" },
                { value: "rowGap", label: "Linha" },
              ]}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Envolver"
              value={props.flexWrap}
              mobileValue={props.mobileFlexWrap}
              onChange={(e, value) =>
                setProp((props) => (props.flexWrap = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileFlexWrap = value))
              }
              options={[
                { value: "nowrap", icon: <Start />, tooltip: "Sem envolver" },
                { value: "wrap", icon: <WrapText />, tooltip: "Envolver" },
              ]}
              tooltipText={"Quebra de linha"}
              fullWidth
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <Grid item width="100%">
            <CustomSelect
              text={"Tag HTML"}
              value={props.htmlTag}
              onChange={(e) =>
                setProp((props) => (props.htmlTag = e.target.value))
              }
              options={[
                { value: "div", label: "div" },
                { value: "header", label: "header" },
                { value: "footer", label: "footer" },
                { value: "main", label: "main" },
                { value: "article", label: "article" },
                { value: "aside", label: "aside" },
                { value: "section", label: "section" },
                { value: "nav", label: "nav" },
              ]}
              tooltipText={"Escolha a tag HTML para o container"}
            />
          </Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <Grid item>
            <TabOptions title="Plano de fundo">
              <Grid item mt={2} display="flex" flexDirection="column" gap={2}>
                <CustomCollapse
                  text="Tipo de plano de fundo"
                  row
                  buttons={[
                    {
                      value: "color",
                      tooltip: "Clássico",
                      icon: (
                        <Brush />
                      ),
                      content: (
                        <Box style={{ padding: 2 }}>
                          <ColorControl
                            name={"Cor"}
                            onChange={(e, value) => {
                              setProp(
                                (props) => (props.backgroundImage = "none")
                              );
                              setProp(
                                (props) => (props.backgroundColor = value)
                              );
                            }}
                            defaultValue={props.backgroundColor}
                            value={props.backgroundColor}
                          />
                        </Box>
                      ),
                    },
                    {
                      value: "gradient",
                      tooltip: "Gradiente",
                      icon: (
                        <Gradient />
                      ),
                      content: (
                        <CustomTypeColorGradient
                          props={props}
                          setProp={setProp}
                        />
                      ),
                    },
                    {
                      value: "image",
                      tooltip: "Imagem",
                      icon: (
                        <ImageIcon />
                      ),
                      content: (
                        <>
                          <FileUpload
                            value={props.backgroundImage}
                            onChange={(imageUrl) =>
                              setProp(
                                (props) => (props.backgroundImage = imageUrl)
                              )
                            }
                          />
                        </>
                      ),
                    },
                  ]}
                  defaultOpenSection="color"
                />
              </Grid>

              <Grid item mt={2} display="flex" flexDirection="column" gap={2}>
                <ColorControl
                  name="Cor de fundo"
                  onChange={(e, value) =>
                    setProp((props) => (props.hoverBackgroundColor = value))
                  }
                  defaultValue={props.hoverBackgroundColor}
                  value={props.hoverBackgroundColor}
                  hoverOptions
                />

                <CustomSlider
                  text="Duração da transição"
                  value={props.backgroundcolorTransitionDuration}
                  onChange={(e, value) =>
                    setProp(
                      (props) =>
                        (props.backgroundcolorTransitionDuration = value)
                    )
                  }
                  min={0}
                  max={3}
                  step={0.1}
                  disableUnits
                  disableDeviceView
                  tooltipText={"Escolha o tempo da transição"}
                />

                <CustomSwitch
                  text={"Habilitar hover"}
                  value={props.hasBackgroundHover}
                  onChange={(e) => setProp((props) => (props.hasBackgroundHover = e))}
                  checkedText={"Sim"}
                  uncheckedText={"Não"}
                />

              </Grid>
            </TabOptions>

            <TabOptions title="Borda" onChange={setProp}>
              <Grid
                item
                mt={2}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2 }}
              >
                <CustomSelect
                  text="Tipo da borda"
                  value={props.borderStyle}
                  onChange={(e) =>
                    setProp((props) => (props.borderStyle = e.target.value))
                  }
                  options={[
                    { value: "none", label: "Padrão" },
                    { value: "solid", label: "Solido" },
                    { value: "dashed", label: "Tracejado" },
                    { value: "dotted", label: "Pontilhado" },
                  ]}
                />
                {props.borderStyle !== "none" && (
                  <CustomLinkedValues
                    text="Largura da borda"
                    values={props}
                    onChange={setProp}
                    options={[
                      { value: "borderTopWidth", label: "Superior" },
                      { value: "borderRightWidth", label: "Direita" },
                      { value: "borderBottomWidth", label: "Inferior" },
                      { value: "borderLeftWidth", label: "Esquerda" },
                    ]}
                  />
                )}
                {props.borderStyle !== "none" && (
                  <ColorControl
                    name={"Cor da borda"}
                    onChange={(e, value) => {
                      setProp((props) => (props.borderColor = value));
                    }}
                    defaultValue={props.borderColor}
                    value={props.borderColor}
                  />
                )}
                <CustomLinkedValues
                  text="Raio da borda"
                  values={props}
                  onChange={setProp}
                  options={[
                    { value: "borderTopLeftRadius", label: "Superior" },
                    { value: "borderTopRightRadius", label: "Direita" },
                    { value: "borderBottomRightRadius", label: "Inferior" },
                    { value: "borderBottomLeftRadius", label: "Esquerda" },
                  ]}
                />
                <CustomBoxShadowModal
                  title={"Cor da sombra"}
                  props={props}
                  setProp={setProp}
                />
              </Grid>

              <Grid
                item
                mt={2}
                display={"flex"}
                flexDirection={"column"}
                sx={{ gap: 2 }}
              >
                <CustomSelect
                  text="Tipo da borda"
                  value={props.hoverBorderStyle}
                  onChange={(e) =>
                    setProp(
                      (props) => (props.hoverBorderStyle = e.target.value)
                    )
                  }
                  options={[
                    { value: "none", label: "Padrão" },
                    { value: "solid", label: "Solido" },
                    { value: "dashed", label: "Tracejado" },
                    { value: "dotted", label: "Pontilhado" },
                  ]}
                />

                {props.hoverBorderStyle !== "none" && (
                  <CustomLinkedValues
                    text="Largura da borda"
                    values={props}
                    onChange={setProp}
                    options={[
                      { value: "hoverBorderTopWidth", label: "Superior" },
                      { value: "hoverBorderRightWidth", label: "Direita" },
                      { value: "hoverBorderBottomWidth", label: "Inferior" },
                      { value: "hoverBorderLeftWidth", label: "Esquerda" },
                    ]}
                  />
                )}

                {props.hoverBorderStyle !== "none" && (
                  <ColorControl
                    name={"Cor da borda"}
                    onChange={(e, value) => {
                      setProp((props) => (props.hoverBorderColor = value));
                    }}
                    defaultValue={props.hoverBorderColor}
                    value={props.hoverBorderColor}
                  />
                )}

                <CustomLinkedValues
                  text="Raio da borda"
                  values={props}
                  onChange={setProp}
                  options={[
                    { value: "hoverBorderTopLeftRadius", label: "Superior" },
                    { value: "hoverBorderTopRightRadius", label: "Direita" },
                    {
                      value: "hoverBorderBottomRightRadius",
                      label: "Inferior",
                    },
                    {
                      value: "hoverBorderBottomLeftRadius",
                      label: "Esquerda",
                    },
                  ]}
                />

                <CustomSlider
                  text="Duração da transição"
                  value={props.borderTransitionDuration}
                  onChange={(e, value) =>
                    setProp(
                      (props) => (props.borderTransitionDuration = value)
                    )
                  }
                  min={0}
                  max={3}
                  step={0.1}
                  disableUnits
                  disableDeviceView
                  tooltipText={"Escolha o tempo da transição"}
                />

                <CustomSwitch
                  text={"Habilitar hover"}
                  value={props.hasBorderHover}
                  onChange={(e) => setProp((props) => (props.hasBorderHover = e))}
                  checkedText={"Sim"}
                  uncheckedText={"Não"}
                />
              </Grid>
            </TabOptions>
          </Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={2}>
        <AdvancedSettings props={props} setProp={setProp} />
      </TabPannel>
    </Grid>
  );
};

const useStyles = makeStyles({
  customInput: {
    "& .MuiOutlinedInput-root": {
      padding: "5px",
      fontSize: "12px",

      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.15)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "0",
    },
  },
  tab: {
    "& > svg": {
      width: "16px",
      height: "16px",
      fill: "#d5d8dc",
    },
    "& > span": {
      fontSize: "10px",
      color: "#d5d8dc",
      textTransform: "none",
    },
  },
});

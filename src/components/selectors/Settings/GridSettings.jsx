import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Divider } from "@mui/material";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import {
  ColorControl,
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
  FileUpload,
  TabOptions,
  CustomCheckbox,
  CustomCollapse,
  CustomSwitch,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";

export const GridSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
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
            tooltipText={"Escolha a largura do grid"}
          />

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

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <CustomSlider
            text="Colunas"
            value={props.gridColumns}
            mobileValue={props.mobileGridColumns}
            onChange={(e, value) =>
              setProp((props) => (props.gridColumns = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileGridColumns = value))
            }
            min={1}
            max={12}
            step={1}
            disableUnits
            tooltipText={"Escolha o número de colunas"}
          />

          <CustomSlider
            text="Linhas"
            value={props.gridRows}
            mobileValue={props.mobileGridRows}
            onChange={(e, value) =>
              setProp((props) => (props.gridRows = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileGridRows = value))
            }
            min={1}
            max={12}
            step={1}
            disableUnits
            tooltipText={"Escolha o número de Linhas"}
          />

          <CustomLinkedValues
            text="Espaçamentos"
            values={props}
            onChange={setProp}
            options={[
              { value: "columnGap", label: "Coluna" },
              { value: "rowGap", label: "Linha" },
            ]}
          />

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <CustomSelect
            text={"Fluxo automático"}
            value={props.gridAutoFlow}
            onChange={(e) =>
              setProp((props) => (props.gridAutoFlow = e.target.value))
            }
            options={[
              { value: "row", label: "Linha" },
              { value: "column", label: "Coluna" },
            ]}
            tooltipText={"Escolha o fluxo do grid"}
          />

          <CustomSelect
            text={"Transbordar"}
            value={props.overflow}
            onChange={(e) =>
              setProp((props) => (props.overflow = e.target.value))
            }
            options={[
              { value: "visible", label: "Padrão" },
              { value: "hidden", label: "Oculto" },
              { value: "scroll", label: "Scroll" },
              { value: "auto", label: "Automático" },
            ]}
            tooltipText={"Escolha como o item transborda"}
          />

          <CustomCollapse
            text="Link"
            placeholder={"Cole a URL ou digite"}
            value={props.src}
            tooltip={"Opções de link"}
            classes={classes}
            onChange={(e) => setProp((props) => (props.src = e.target.value))}
            type={"TextField"}
            buttons={[
              {
                tooltip: "Opções de link",
                icon: (
                  <SettingsIcon
                    fontSize="small"
                    color="secondary"
                    style={{ width: "18px", height: "18px" }}
                  />
                ),
                content: (
                  <Box style={{ padding: 2 }}>
                    <CustomCheckbox
                      options={[
                        {
                          value: "redirect_url",
                          label: "Redirecionar para um link",
                        },
                        {
                          value: "redirect_project_page",
                          label: "Redirecionar para uma página",
                        },
                        {
                          value: "scroll_to_block",
                          label: "Focar outro bloco da página",
                        },
                        {
                          value: "close_modal",
                          label: "Fechar o modal",
                        },
                        {
                          value: "window_modal_open",
                          label: "Abrir em uma nova janela",
                        },
                      ]}
                      defaultValue={props.url}
                      value={props.url}
                      onChange={(value) => {
                        setProp((props) => (props.url = value));
                      }}
                    />
                  </Box>
                ),
              },
            ]}
          />
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
                <ColorControl
                  name="Cor de Fundo"
                  onChange={(e, value) =>
                    setProp((props) => (props.backgroundColor = value))
                  }
                  defaultValue={props.backgroundColor}
                  value={props.backgroundColor}
                />

                <FileUpload
                  value={props.backgroundImage}
                  onChange={(imageUrl) =>
                    setProp((props) => (props.backgroundImage = imageUrl))
                  }
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

            <TabOptions title="Borda">
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
                    { value: "hoverBorderBottomLeftRadius", label: "Esquerda" },
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

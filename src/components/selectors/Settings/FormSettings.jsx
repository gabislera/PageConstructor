import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Divider } from "@mui/material";
import {
  Settings,
  Contrast,
  Edit,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  Brush,
  Gradient,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";

import { AdvancedSettings } from "./AdvancedSettings";
import {
  AddFormItems,
  ColorControl,
  CustomAccordion,
  CustomButtonGroup,
  CustomCollapse,
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
  CustomSwitch,
  CustomTextInput,
  CustomTypeColorGradient,
  CustomTypography,
  TabOptions,
} from "../../_Control";

export const FormSettings = () => {
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
            icon={<Edit />}
            label={<span>Conteúdo</span>}
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
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Campos do formulário" defaultExpanded>
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomTextInput
                text="Nome do formulário"
                value={props.formName}
                row
                onChange={(e) =>
                  setProp((props) => {
                    props.formName = e.target.value;
                  })
                }
              />

              <AddFormItems />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <CustomSelect
                text="Tamanho do input"
                value={props.inputSize}
                onChange={(e) =>
                  setProp((props) => (props.inputSize = e.target.value))
                }
                options={[
                  { value: "extra-small", label: "Extra pequeno" },
                  { value: "small", label: "Pequeno" },
                  { value: "medium", label: "Médio" },
                  { value: "large", label: "Grande" },
                  { value: "extra-large", label: "Extra grande" },
                ]}
                tooltipText={"Escolha o tamanho do input"}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <CustomSwitch
                text="Mostrar rótulo"
                checkedText="Mostrar"
                uncheckedText="Ocultar"
                value={props.showLabel}
                onChange={(e) => setProp((props) => (props.showLabel = e))}
              />

              <CustomSwitch
                text="Mostrar ícone de requerido"
                checkedText="Mostrar"
                uncheckedText="Ocultar"
                value={props.showRequiredIcon}
                onChange={(e) =>
                  setProp((props) => (props.showRequiredIcon = e))
                }
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Botão">
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomTextInput
                text="Texto"
                row={true}
                value={props.buttonText}
                onChange={(e) =>
                  setProp((props) => (props.buttonText = e.target.value))
                }
                tooltipText={"Texto do botão"}
              />

              <CustomSelect
                text="Tamanho do botão"
                value={props.buttonSize}
                onChange={(e) =>
                  setProp((props) => (props.buttonSize = e.target.value))
                }
                options={[
                  { value: "extra-small", label: "Extra pequeno" },
                  { value: "small", label: "Pequeno" },
                  { value: "medium", label: "Médio" },
                  { value: "large", label: "Grande" },
                  { value: "extra-large", label: "Extra grande" },
                ]}
                tooltipText={"Escolha o tamanho do botão"}
              />

              <CustomSlider
                text={"Largura do botão"}
                value={props.buttonMaxWidth}
                mobileValue={props.mobileButtonMaxWidth}
                step={1}
                max={100}
                disableUnits
                onChange={(e, value) =>
                  setProp((props) => (props.buttonMaxWidth = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileButtonMaxWidth = value))
                }
              />

              <CustomButtonGroup
                text="Alinhamento"
                value={props.buttonAlign}
                mobileValue={props.mobileButtonAlign}
                onChange={(e, value) =>
                  setProp((props) => (props.buttonAlign = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileButtonAlign = value))
                }
                options={[
                  {
                    value: "start",
                    icon: <FormatAlignLeft />,
                    tooltip: "Esquerda",
                  },
                  {
                    value: "center",
                    icon: <FormatAlignCenter />,
                    tooltip: "Centro",
                  },
                  {
                    value: "end",
                    icon: <FormatAlignRight />,
                    tooltip: "Direita",
                  },
                ]}
                tooltipText={"Escolha o alinhamento do texto"}
                fullWidth
              />
            </Box>
          </CustomAccordion>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Formulário" defaultExpanded>
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomSlider
                text={"Espaçamento das colunas"}
                value={props.columnGap}
                disableDeviceView
                onChange={(e, value) =>
                  setProp((props) => (props.columnGap = value))
                }
              />

              <CustomSlider
                text={"Espaçamento das linhas"}
                value={props.rowGap}
                disableDeviceView
                onChange={(e, value) =>
                  setProp((props) => (props.rowGap = value))
                }
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Rótulos">
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomTypography
                props={props}
                setProp={setProp}
                type="label"
                disableDeviceView
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <ColorControl
                name={"Cor do texto"}
                value={props.labelColor}
                defaultValue={props.labelColor}
                onChange={(e, value) => {
                  setProp((props) => (props.labelColor = value));
                }}
              />

              <ColorControl
                name={"Cor de fundo"}
                value={props.inputBackgroundColor}
                defaultValue={props.inputBackgroundColor}
                onChange={(e, value) => {
                  setProp((props) => (props.inputBackgroundColor = value));
                }}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Campos">
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomTypography
                props={props}
                setProp={setProp}
                type="input"
                disableDeviceView
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <ColorControl
                name={"Cor do texto"}
                value={props.inputColor}
                defaultValue={props.inputColor}
                onChange={(e, value) => {
                  setProp((props) => (props.inputColor = value));
                }}
              />

              <ColorControl
                name={"Cor de fundo"}
                value={props.inputBackgroundColor}
                defaultValue={props.inputBackgroundColor}
                onChange={(e, value) => {
                  setProp((props) => (props.inputBackgroundColor = value));
                }}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <ColorControl
                name={"Cor da borda"}
                value={props.inputBorderColor}
                defaultValue={props.inputBorderColor}
                onChange={(e, value) => {
                  setProp((props) => (props.inputBorderColor = value));
                }}
              />

              <CustomLinkedValues
                text="Largura da borda"
                values={props}
                onChange={setProp}
                options={[
                  { value: "inputBorderTopWidth", label: "Superior" },
                  { value: "inputBorderRightWidth", label: "Direita" },
                  { value: "inputBorderBottomWidth", label: "Inferior" },
                  { value: "inputBorderLeftWidth", label: "Esquerda" },
                ]}
              />
              <CustomLinkedValues
                text="Raio da borda"
                values={props}
                onChange={setProp}
                options={[
                  { value: "inputBorderTopLeftRadius", label: "Superior" },
                  { value: "inputBorderTopRightRadius", label: "Direita" },
                  { value: "inputBorderBottomRightRadius", label: "Inferior" },
                  { value: "inputBorderBottomLeftRadius", label: "Esquerda" },
                ]}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Botão">
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomTypography
                props={props}
                setProp={setProp}
                type="button"
                disableDeviceView
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <TabOptions>
                <Grid item mt={2} display="flex" flexDirection="column" gap={2}>
                  <ColorControl
                    name={"Cor do texto"}
                    onChange={(e, value) => {
                      setProp((props) => (props.buttonColor = value));
                    }}
                    defaultValue={props.color}
                    value={props.color}
                  />

                  <CustomCollapse
                    text="Cor do fundo"
                    row
                    options={[
                      {
                        value: "color",
                        tooltip: "Clássico",
                        icon: <Brush />,
                        content: (
                          <ColorControl
                            name={"Cor"}
                            onChange={(e, value) => {
                              setProp(
                                (props) => (props.buttonBackgroundColor = value)
                              );
                            }}
                            defaultValue={props.buttonBackgroundColor}
                            value={props.buttonBackgroundColor}
                          />
                        ),
                      },
                      {
                        value: "gradient",
                        tooltip: "Gradiente",
                        icon: <Gradient />,
                        content: (
                          <CustomTypeColorGradient
                            props={props}
                            setProp={setProp}
                          />
                        ),
                      },
                    ]}
                    defaultOpenSection="color"
                  />
                </Grid>

                <Grid item mt={2} display="flex" flexDirection="column" gap={2}>
                  <ColorControl
                    name={"Cor do texto"}
                    onChange={(e, value) => {
                      setProp((props) => (props.hoverButtonColor = value));
                    }}
                    defaultValue={props.hoverButtonColor}
                    value={props.hoverButtonColor}
                  />

                  <CustomCollapse
                    text="Tipo de plano de fundo"
                    row
                    options={[
                      {
                        value: "color",
                        tooltip: "Clássico",
                        icon: <Brush />,
                        content: (
                          <ColorControl
                            name={"Cor"}
                            onChange={(e, value) => {
                              setProp(
                                (props) => (props.backgroundImage = "none")
                              );
                              setProp(
                                (props) =>
                                  (props.hoverButtonBackgroundColor = value)
                              );
                            }}
                            defaultValue={props.hoverButtonBackgroundColor}
                            value={props.hoverButtonBackgroundColor}
                          />
                        ),
                      },
                      {
                        value: "gradient",
                        tooltip: "Gradiente",
                        icon: <Gradient />,
                        content: (
                          <CustomTypeColorGradient
                            props={props}
                            setProp={setProp}
                          />
                        ),
                      },
                    ]}
                    defaultOpenSection="color"
                  />

                  <ColorControl
                    name={"Cor da borda"}
                    onChange={(e, value) => {
                      setProp(
                        (props) => (props.hoverButtonBorderColor = value)
                      );
                    }}
                    defaultValue={props.hoverButtonBorderColor}
                    value={props.hoverButtonBorderColor}
                  />

                  <CustomSlider
                    text="Duração da transição"
                    value={props.transitionDuration}
                    onChange={(e, value) =>
                      setProp((props) => (props.transitionDuration = value))
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
                    onChange={(e) =>
                      setProp((props) => (props.hasBackgroundHover = e))
                    }
                    checkedText={"Sim"}
                    uncheckedText={"Não"}
                  />
                </Grid>
              </TabOptions>

              {/* <ColorControl
                name={"Cor do texto"}
                value={props.buttonColor}
                defaultValue={props.buttonColor}
                onChange={(e, value) => {
                  setProp((props) => (props.buttonColor = value));
                }}
              />

              <ColorControl
                name={"Cor de fundo"}
                value={props.buttonBackgroundColor}
                defaultValue={props.buttonBackgroundColor}
                onChange={(e, value) => {
                  setProp((props) => (props.buttonBackgroundColor = value));
                }}
              /> */}

              <CustomLinkedValues
                text="Raio da borda"
                values={props}
                onChange={setProp}
                options={[
                  { value: "buttonBorderTopLeftRadius", label: "Superior" },
                  { value: "buttonBorderTopRightRadius", label: "Direita" },
                  { value: "buttonBorderBottomRightRadius", label: "Inferior" },
                  { value: "buttonBorderBottomLeftRadius", label: "Esquerda" },
                ]}
              />

              {/* <CustomLinkedValues
                text="Preenchimento"
                values={props}
                onChange={setProp}
                options={[
                  { value: "buttonPaddingTop", label: "Superior" },
                  { value: "buttonPaddingRight", label: "Direita" },
                  { value: "buttonPaddingLeft", label: "Inferior" },
                  { value: "buttonPaddingBottom", label: "Esquerda" },
                ]}
              /> */}
            </Box>
          </CustomAccordion>
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

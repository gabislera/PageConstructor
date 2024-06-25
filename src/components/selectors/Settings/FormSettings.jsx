import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Divider, Typography } from "@mui/material";
import {
  Settings,
  Contrast,
  Edit,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
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
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
  CustomSwitch,
  CustomTextInput,
  CustomTypography,
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
              <ColorControl
                name={"Cor do rótulo"}
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

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <CustomSelect
                text={"Fonte"}
                value={props.labelFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.labelFontFamily = e.target.value))
                }
                options={[
                  { label: "Padrão", value: "sans-serif" },
                  { label: "Serifa", value: "serif" },
                  { label: "Fantasia", value: "fantasy" },
                  { label: "Cursiva", value: "cursive" },
                  { label: "Monoespaçada", value: "monospace" },
                ]}
              />

              <CustomSlider
                text={"Tamanho da fonte"}
                value={props.labelFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.labelFontSize = value))
                }
                disableDeviceView
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.labelFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.labelFontWeight = e.target.value))
                }
                options={[
                  { value: "300", label: "300" },
                  { value: "400", label: "400" },
                  { value: "500", label: "500" },
                  { value: "600", label: "600" },
                  { value: "700", label: "700" },
                ]}
                tooltipText={"Escolha o peso da fonte"}
              />

              <CustomSelect
                text="Transformar"
                value={props.labelTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.labelTextTransform = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              />

              <CustomSelect
                text="Estilo"
                value={props.labelFontStyle}
                mobileValue={props.mobilelabelFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.labelFontStyle = e.target.value))
                }
                mobileOnChange={(e) =>
                  setProp(
                    (props) => (props.mobilelabelFontStyle = e.target.value)
                  )
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.labelTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.labelTextDecoration = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Normal" },
                  { value: "underline", label: "Sublinhado" },
                  { value: "overline", label: "Overline" },
                  { value: "line-through", label: "Riscado" },
                ]}
                tooltipText={"Escolha a decoração do texto"}
              />

              <CustomSlider
                text={"Altura da linha"}
                value={props.labelLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.labelLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                disableUnits
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.labelLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.labelLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.labelWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.labelWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Campos">
            <Box display="flex" flexDirection="column" gap={2}>
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

              <CustomSelect
                text={"Fonte"}
                value={props.inputFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.inputFontFamily = e.target.value))
                }
                options={[
                  { label: "Padrão", value: "sans-serif" },
                  { label: "Serifa", value: "serif" },
                  { label: "Fantasia", value: "fantasy" },
                  { label: "Cursiva", value: "cursive" },
                  { label: "Monoespaçada", value: "monospace" },
                ]}
              />

              <CustomSlider
                text={"Tamanho da fonte"}
                value={props.inputFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.inputFontSize = value))
                }
                disableDeviceView
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.inputFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.inputFontWeight = e.target.value))
                }
                options={[
                  { value: "300", label: "300" },
                  { value: "400", label: "400" },
                  { value: "500", label: "500" },
                  { value: "600", label: "600" },
                  { value: "700", label: "700" },
                ]}
                tooltipText={"Escolha o peso da fonte"}
              />

              <CustomSelect
                text="Transformar"
                value={props.inputTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.inputTextTransform = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              />

              <CustomSelect
                text="Estilo"
                value={props.inputFontStyle}
                mobileValue={props.mobilelabelFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.inputFontStyle = e.target.value))
                }
                mobileOnChange={(e) =>
                  setProp(
                    (props) => (props.mobilelabelFontStyle = e.target.value)
                  )
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.inputTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.inputTextDecoration = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Normal" },
                  { value: "underline", label: "Sublinhado" },
                  { value: "overline", label: "Overline" },
                  { value: "line-through", label: "Riscado" },
                ]}
                tooltipText={"Escolha a decoração do texto"}
              />

              <CustomSlider
                text={"Altura da linha"}
                value={props.inputLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.inputLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                disableUnits
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.inputLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.inputLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.inputWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.inputWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
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
              <ColorControl
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
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <CustomSelect
                text={"Fonte"}
                value={props.buttonFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.buttonFontFamily = e.target.value))
                }
                options={[
                  { label: "Padrão", value: "sans-serif" },
                  { label: "Serifa", value: "serif" },
                  { label: "Fantasia", value: "fantasy" },
                  { label: "Cursiva", value: "cursive" },
                  { label: "Monoespaçada", value: "monospace" },
                ]}
              />

              <CustomSlider
                text={"Tamanho da fonte"}
                value={props.buttonFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.buttonFontSize = value))
                }
                disableDeviceView
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.buttonFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.buttonFontWeight = e.target.value))
                }
                options={[
                  { value: "300", label: "300" },
                  { value: "400", label: "400" },
                  { value: "500", label: "500" },
                  { value: "600", label: "600" },
                  { value: "700", label: "700" },
                ]}
                tooltipText={"Escolha o peso da fonte"}
              />

              <CustomSelect
                text="Transformar"
                value={props.buttonTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.buttonTextTransform = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              />

              <CustomSelect
                text="Estilo"
                value={props.buttonFontStyle}
                mobileValue={props.mobilebuttonFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.buttonFontStyle = e.target.value))
                }
                mobileOnChange={(e) =>
                  setProp(
                    (props) => (props.mobilebuttonFontStyle = e.target.value)
                  )
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.buttonTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.buttonTextDecoration = e.target.value)
                  )
                }
                options={[
                  { value: "none", label: "Normal" },
                  { value: "underline", label: "Sublinhado" },
                  { value: "overline", label: "Overline" },
                  { value: "line-through", label: "Riscado" },
                ]}
                tooltipText={"Escolha a decoração do texto"}
              />

              <CustomSlider
                text={"Altura da linha"}
                value={props.buttonLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.buttonLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                disableUnits
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.buttonLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.buttonLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.buttonWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.buttonWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />

              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

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

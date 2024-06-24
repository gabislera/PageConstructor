import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";

import { AdvancedSettings } from "./AdvancedSettings";
import {
  ColorControl,
  CustomAccordion,
  CustomSelect,
  CustomSlider,
  CustomSwitch,
  CustomTextInput,
} from "../../_Control";

export const ProgressBarSettings = () => {
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
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <CustomTextInput
            text="Título"
            value={props.title}
            onChange={(e) => setProp((props) => (props.title = e.target.value))}
            tooltipText={"Defina o título da barra de progresso"}
          />

          <CustomSelect
            text={"Tag HTML do título"}
            value={props.htmlTag}
            onChange={(e) =>
              setProp((props) => (props.htmlTag = e.target.value))
            }
            options={[
              { value: "h1", label: "h1" },
              { value: "h2", label: "h2" },
              { value: "h3", label: "h3" },
              { value: "h4", label: "h4" },
              { value: "h5", label: "h5" },
              { value: "h6", label: "h6" },
              { value: "p", label: "p" },
              { value: "span", label: "span" },
            ]}
            tooltipText={"Escolha a tag HTML para o container"}
          />

          <CustomSlider
            disableUnits
            disableDeviceView
            text="Porcentagem"
            value={props.width}
            onChange={(e, value) => setProp((props) => (props.width = value))}
            min={0}
            max={100}
            step={1}
            tooltipText={
              "Ajuste o deslocamento horizontal da barra de progresso"
            }
          />

          <CustomSwitch
            text="Exibir porcentagem"
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            value={props.showPercentage}
            onChange={(e) => setProp((props) => (props.showPercentage = e))}
          />

          <CustomTextInput
            text="Texto interno"
            value={props.content}
            onChange={(e) =>
              setProp((props) => (props.content = e.target.value))
            }
            tooltipText={"Defina o texto interno da barra de progresso"}
          />
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          color={"#fff"}
          paddingTop={0}
        >
          <CustomAccordion title="Barra de progresso" defaultExpanded>
            <Box display="flex" flexDirection="column" gap={2}>
              <ColorControl
                name={"Cor do texto"}
                onChange={(e, value) => {
                  setProp((props) => (props.color = value));
                }}
                defaultValue={props.color}
                value={props.color}
              />

              <ColorControl
                name={"Cor de fundo"}
                onChange={(e, value) => {
                  setProp((props) => (props.backgroundColor = value));
                }}
                defaultValue={props.backgroundColor}
                value={props.backgroundColor}
              />

              <CustomSlider
                text="Altura"
                value={props.height}
                onChange={(e, value) =>
                  setProp((props) => (props.height = value))
                }
                min={1}
                max={100}
                step={1}
                tooltipText={"Ajuste a altura da barra de progresso"}
              />

              <CustomSlider
                text="Raio da borda"
                value={props.borderRadius}
                onChange={(e, value) =>
                  setProp((props) => (props.borderRadius = value))
                }
                min={1}
                max={100}
                step={1}
                tooltipText={"Ajuste o raio da borda"}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Estilos do título">
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomSelect
                text={"Fonte"}
                value={props.titleFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.titleFontFamily = e.target.value))
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
                value={props.titleFontSize}
                mobileValue={props.mobileTitleFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.titleFontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileTitleFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.titleFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.titleFontWeight = e.target.value))
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
                value={props.titleTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.titleTextTransform = e.target.value)
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
                value={props.titleFontStyle}
                mobileValue={props.mobileTitleFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.titleFontStyle = e.target.value))
                }
                mobileOnChange={(e) =>
                  setProp(
                    (props) => (props.mobileTitleFontStyle = e.target.value)
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
                value={props.titleTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.titleTextDecoration = e.target.value)
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
                value={props.titleLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.titleLineHeight = value))
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
                value={props.titleLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.titleLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.titleWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.titleWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Texto interno">
            <Box display="flex" flexDirection="column" gap={2}>
              <ColorControl
                name={"Cor do texto"}
                value={props.contentColor}
                defaultValue={props.contentColor}
                onChange={(e, value) => {
                  setProp((props) => (props.contentColor = value));
                }}
              />

              <CustomSelect
                text={"Fonte"}
                value={props.contentFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.contentFontFamily = e.target.value))
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
                value={props.contentFontSize}
                mobileValue={props.mobileContentFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.contentFontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileContentFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.contentFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.contentFontWeight = e.target.value))
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
                value={props.contentTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.contentTextTransform = e.target.value)
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
                value={props.contentFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.contentFontStyle = e.target.value))
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.contentTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.contentTextDecoration = e.target.value)
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
                value={props.contentLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.contentLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.contentLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.contentLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.contentWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.contentWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />
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

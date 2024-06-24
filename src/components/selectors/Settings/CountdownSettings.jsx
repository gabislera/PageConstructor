import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import { AdvancedSettings } from "./AdvancedSettings";
import {
  CustomSelect,
  CustomSwitch,
  CustomTextInput,
  CustomAutocomplete,
  CustomAccordion,
  CustomSlider,
  ColorControl,
  CustomLinkedValues,
} from "../../_Control";
import Divider from "@mui/material/Divider";

export const CountdownSettings = () => {
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
          <CustomSelect
            text={"Tipo de data"}
            value={props.CountType}
            onChange={(e) =>
              setProp((props) => (props.CountType = e.target.value))
            }
            options={[
              { value: "weekly_diary", label: "Diário" },
              { value: "specific_date", label: "Data Específica" },
              { value: "all_year", label: "Todo o Ano" },
            ]}
          />

          {props.CountType === "specific_date" ? (
            <>
              <CustomTextInput
                type="datetime-local"
                id="datetime-local"
                text="Data Alvo"
                value={props.endDate}
                onChange={(e) =>
                  setProp((props) => (props.endDate = e.target.value))
                }
              />
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#9da5ae",
                  fontStyle: "italic",
                }}
              >
                Data definida de acordo com seu fuso horário: América/Sao_Paulo.
              </Typography>
            </>
          ) : props.CountType === "all_year" ? (
            <>
              <CustomTextInput
                type="datetime-local"
                id="datetime-local"
                text="Data Alvo"
                value={props.endDate}
                onChange={(e) =>
                  setProp((props) => (props.endDate = e.target.value))
                }
              />
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#9da5ae",
                  fontStyle: "italic",
                }}
              >
                Data definida de acordo com seu fuso horário: América/Sao_Paulo.
              </Typography>
            </>
          ) : props.CountType === "weekly_diary" ? (
            <>
              <CustomTextInput
                text="Horas"
                type="number"
                value={props.timerHours}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.timerHours = e.target.value))
                }
                row
              />
              <CustomTextInput
                text="Minutos"
                type="number"
                value={props.timerMinutes}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.timerMinutes = e.target.value))
                }
                row
              />
            </>
          ) : null}
          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#9da5ae",
            }}
          >
            Formato de Exibição
          </Typography>

          <CustomSwitch
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            text="Dias"
            value={props.displayFormatDays}
            onChange={(e) => setProp((props) => (props.displayFormatDays = e))}
          />
          <CustomSwitch
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            text="Horas"
            value={props.displayFormatHours}
            onChange={(e) => setProp((props) => (props.displayFormatHours = e))}
          />
          <CustomSwitch
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            text="Minutos"
            value={props.displayFormatMin}
            onChange={(e) => setProp((props) => (props.displayFormatMin = e))}
          />
          <CustomSwitch
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            text="Segundos"
            value={props.displayFormatSeconds}
            onChange={(e) =>
              setProp((props) => (props.displayFormatSeconds = e))
            }
          />

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
          <CustomSwitch
            checkedText="Mostrar"
            uncheckedText="Ocultar"
            text="Customizar textos"
            value={props.customText}
            onChange={(e) => setProp((props) => (props.customText = e))}
          />

          {props.customText ? (
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomTextInput
                text="Dias"
                value={props.textDays}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.textDays = e.target.value))
                }
                row
              />
              <CustomTextInput
                text="Horas"
                value={props.textHours}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.textHours = e.target.value))
                }
                row
              />
              <CustomTextInput
                text="Minutos"
                value={props.textMinutes}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.textMinutes = e.target.value))
                }
                row
              />
              <CustomTextInput
                text="Segundos"
                value={props.textSeconds}
                width="30%"
                onChange={(e) =>
                  setProp((props) => (props.textSeconds = e.target.value))
                }
                row
              />
            </Box>
          ) : null}
          <CustomAutocomplete
            multiline
            rows={1}
            text={"Ações após expiração"}
            value={props?.showAction}
            onChange={(e) => setProp((props) => (props.showAction = e))}
            options={[
              {
                label: "Redirecionar",
                value: "redirect",
              },
              {
                label: "Esconder",
                value: "hide",
              },
              {
                label: "Mostrar Mensagem",
                value: "show_menssage",
              },
            ]}
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
          <CustomAccordion title="Boxes">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSlider
                text="Largura dos elementos"
                value={props.minWidth}
                mobileValue={props.minWidthMobile}
                onChange={(e, value) =>
                  setProp((props) => (props.minWidth = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.minWidthMobile = value))
                }
                min={1}
                max={100}
                step={1}
              />
              <ColorControl
                name={"Cor dos elementos"}
                onChange={(e, value) => {
                  setProp((props) => (props.background = value));
                }}
                defaultValue={props.background}
                value={props.background}
              />
              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
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
              <CustomSlider
                text="Espaço entre elementos"
                value={props.gap}
                mobileValue={props.gapMobile}
                onChange={(e, value) => setProp((props) => (props.gap = value))}
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.gapMobile = value))
                }
                min={0}
                max={100}
                step={1}
              />
              <CustomLinkedValues
                text="Preenchimento" //padding
                values={props}
                onChange={setProp}
                options={[
                  { value: "paddingTop", label: "Superior" },
                  { value: "paddingRight", label: "Direita" },
                  { value: "paddingLeft", label: "Inferior" },
                  { value: "paddingBottom", label: "Esquerda" },
                ]}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Timer">
            <Box display="flex" flexDirection="column" gap="16px">
              <ColorControl
                name={"Cor do texto"}
                onChange={(e, value) => {
                  setProp((props) => (props.color = value));
                }}
                defaultValue={props.color}
                value={props.color}
              />
              <CustomSelect
                text={"Fonte"}
                value={props.fontFamily}
                onChange={(e) =>
                  setProp((props) => (props.fontFamily = e.target.value))
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
                value={props.fontSize}
                mobileValue={props.mobileFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.fontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />
              <CustomSelect
                text="Peso da fonte"
                value={props.fontWeight}
                onChange={(e) =>
                  setProp((props) => (props.fontWeight = e.target.value))
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
                text={"Alinhamento da fonte"}
                value={props.alignItems}
                onChange={(e) => setProp((props) => (props.f = e.target.value))}
                options={[
                  { label: "Inicial", value: "start" },
                  { label: "Centro", value: "center" },
                  { label: "Final", value: "end" },
                ]}
              />
              {/* <CustomSelect
                text="Transformar"
                value={props.textTransform}
                onChange={(e) =>
                  setProp((props) => (props.textTransform = e.target.value))
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              /> */}
              <CustomSelect
                text="Estilo"
                value={props.fontStyle}
                onChange={(e) =>
                  setProp((props) => (props.fontStyle = e.target.value))
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />
              <CustomSelect
                text="Decoração"
                value={props.textDecoration}
                onChange={(e) =>
                  setProp((props) => (props.textDecoration = e.target.value))
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
                value={props.lineHeight}
                mobileValue={props.mobileLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.lineHeight = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                tooltipText={"Escolha a altura da linha"}
              />
              <CustomSlider
                text={"Espaçamento entre letras"}
                value={props.letterSpacing}
                mobileValue={props.mobileLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.letterSpacing = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileLetterSpacing = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das letras"}
              />
              {/* <CustomSlider
                text={"Espaçamento entre palavras"}
                value={props.wordSpacing}
                mobileValue={props.mobileWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.wordSpacing = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileWordSpacing = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das palavras"}
              /> */}
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Texto">
            <Box display="flex" flexDirection="column" gap="16px">
              <ColorControl
                name={"Cor do texto"}
                onChange={(e, value) => {
                  setProp((props) => (props.colorText = value));
                }}
                defaultValue={props.colorText}
                value={props.colorText}
              />
              <CustomSelect
                text={"Fonte"}
                value={props.fontFamilyText}
                onChange={(e) =>
                  setProp((props) => (props.fontFamilyText = e.target.value))
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
                value={props.fontSizeText}
                mobileValue={props.mobileFontSizeText}
                onChange={(e, value) =>
                  setProp((props) => (props.fontSizeText = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileFontSizeText = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />
              <CustomSelect
                text="Peso da fonte"
                value={props.fontWeightText}
                onChange={(e) =>
                  setProp((props) => (props.fontWeightText = e.target.value))
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
                text={"Alinhamento da fonte"}
                value={props.textAlignText}
                onChange={(e) =>
                  setProp((props) => (props.textAlignText = e.target.value))
                }
                options={[
                  { label: "Inicial", value: "start" },
                  { label: "Centro", value: "center" },
                  { label: "Final", value: "end" },
                ]}
              />
              {/* <CustomSelect
                text="Transformar"
                value={props.textTransform}
                onChange={(e) =>
                  setProp((props) => (props.textTransform = e.target.value))
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              /> */}
              <CustomSelect
                text="Estilo"
                value={props.fontStyleText}
                onChange={(e) =>
                  setProp((props) => (props.fontStyleText = e.target.value))
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />
              <CustomSelect
                text="Decoração"
                value={props.textDecorationText}
                onChange={(e) =>
                  setProp(
                    (props) => (props.textDecorationText = e.target.value)
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
                value={props.lineHeightText}
                mobileValue={props.mobileLineHeightText}
                onChange={(e, value) =>
                  setProp((props) => (props.lineHeightText = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileLineHeightText = value))
                }
                min={1}
                max={3}
                step={0.1}
                tooltipText={"Escolha a altura da linha"}
              />
              <CustomSlider
                text={"Espaçamento entre letras"}
                value={props.letterSpacingText}
                mobileValue={props.mobileLetterSpacingText}
                onChange={(e, value) =>
                  setProp((props) => (props.letterSpacingText = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileLetterSpacingText = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das letras"}
              />
              {/* <CustomSlider
                text={"Espaçamento entre palavras"}
                value={props.wordSpacing}
                mobileValue={props.mobileWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.wordSpacing = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileWordSpacing = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das palavras"}
              />{" "} */}
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

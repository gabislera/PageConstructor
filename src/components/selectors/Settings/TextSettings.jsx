import {
  Grid,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Edit,
  Settings,
  Contrast,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import {
  CustomButtonGroup,
  CustomSelect,
  CustomSlider,
  CustomTextInput,
  ColorControl,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";

export const TextSettings = () => {
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
    <Grid color={"#fff"}>
      <Box width={"100%"} sx={{ borderBottom: 1, borderColor: "divider" }}>
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
            label={<span>Content</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            icon={<Contrast />}
            label={<span>Style</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            icon={<Settings />}
            label={<span>Advanced</span>}
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
            <CustomTextInput
              text="Texto"
              value={props.content}
              onChange={(e) =>
                setProp((props) => (props.content = e.target.value))
              }
              tooltipText={"Conteúdo do texto"}
              multiline
              rows={4}
            />
          </Grid>

          <Grid item>
            <CustomTextInput
              text="Link"
              value={props.url}
              onChange={(e) => setProp((props) => (props.url = e.target.value))}
              tooltipText={"Link para onde o texto redireciona"}
            />
          </Grid>

          <Grid item>
            <CustomSelect
              text={"Tag HTML"}
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
              tooltipText={"Escolha a tag HTML para o texto"}
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
            <ColorControl
              name={"Cor do texto"}
              onChange={(e, value) => {
                setProp((props) => (props.color = value));
              }}
              defaultValue={props.color}
              value={props.color}
            />
          </Grid>

          <Grid item spacing={3} width={"100%"}>
            <CustomButtonGroup
              text="Alinhamento"
              value={props.textAlign}
              mobileValue={props.mobileTextAlign}
              onChange={(e, value) =>
                setProp((props) => (props.textAlign = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.mobileTextAlign = value))
              }
              options={[
                {
                  value: "left",
                  icon: <FormatAlignLeft />,
                  tooltip: "Esquerda",
                },
                {
                  value: "center",
                  icon: <FormatAlignCenter />,
                  tooltip: "Centro",
                },
                {
                  value: "right",
                  icon: <FormatAlignRight />,
                  tooltip: "Direita",
                },
                {
                  value: "justify",
                  icon: <FormatAlignJustify />,
                  tooltip: "Justificado",
                },
              ]}
              tooltipText={"Escolha o alinhamento do texto"}
              fullWidth
            />
          </Grid>

          <Grid item width={"100%"}>
            <CustomSlider
              text={"Tamanho"}
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
          </Grid>

          <Grid item width={"100%"}>
            <CustomSelect
              text="Peso"
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
          </Grid>

          <Grid item width={"100%"}>
            <CustomSelect
              text="Transformação"
              value={props.textTransform}
              onChange={(e) =>
                setProp((props) => (props.textTransform = e.target.value))
              }
              options={[
                { value: "none", label: "Nenhum" },
                { value: "capitalize", label: "Capitalizar" },
                { value: "uppercase", label: "Maiúsculo" },
                { value: "lowercase", label: "Minúsculo" },
              ]}
              tooltipText={"Escolha a transformação do texto"}
            />
          </Grid>

          <Grid item width={"100%"}>
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
          </Grid>

          <Grid item width={"100%"}>
            <CustomSelect
              text="Decoração"
              value={props.textDecoration}
              onChange={(e) =>
                setProp((props) => (props.textDecoration = e.target.value))
              }
              options={[
                { value: "normal", label: "Normal" },
                { value: "underline", label: "Sublinhado" },
                { value: "overline", label: "Sobrelinhado" },
                { value: "line-through", label: "Riscado" },
              ]}
              tooltipText={"Escolha a decoração do texto"}
            />
          </Grid>

          <Grid item width={"100%"}>
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
          </Grid>

          <Grid item width={"100%"}>
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
          </Grid>

          <Grid item width={"100%"}>
            <CustomSlider
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
            />
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

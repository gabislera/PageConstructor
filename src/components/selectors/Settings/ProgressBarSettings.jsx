import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import { AdvancedSettings } from "./AdvancedSettings";
import {
  ColorControl,
  CustomAccordion,
  CustomSelect,
  CustomSlider,
  CustomSwitch,
  CustomTextInput,
  CustomTypography,
  CustomBoxShadowModal,
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
            fullWidth
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
            fullWidth
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
                name={"Cor"}
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
              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <Typography className={"control-title-size"}>
                Textos internos
              </Typography>
              <ColorControl
                name={"Cor do texto"}
                value={props.contentColor}
                defaultValue={props.contentColor}
                onChange={(e, value) => {
                  setProp((props) => (props.contentColor = value));
                }}
              />
              <CustomTypography
                props={props}
                setProp={setProp}
                type={"content"}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Estilos do título">
            <Box display="flex" flexDirection="column" gap={2}>
              <ColorControl
                name={"Cor do texto"}
                value={props.titleColor}
                defaultValue={props.titleColor}
                onChange={(e, value) => {
                  setProp((props) => (props.titleColor = value));
                }}
              />
              <CustomTypography
                props={props}
                setProp={setProp}
                type={"title"}
              />
              <CustomBoxShadowModal
                title={"Sombra do texto"}
                props={props}
                setProp={setProp}
                type="text"
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

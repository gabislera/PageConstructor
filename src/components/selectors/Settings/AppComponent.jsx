import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { ColorControl, CustomLinkedValues, CustomSlider } from "../../_Control";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
} from "@mui/icons-material";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import { AdvancedSettings } from "./AdvancedSettings";

export const AppComponentSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
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
          color={"#fff"}
          sx={{ gap: 2 }}
        ></Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <ColorControl
            name={"Cor de fundo"}
            onChange={(e, value) => {
              setProp((props) => (props.backgroundColor = value));
            }}
            defaultValue={props.backgroundColor}
            value={props.backgroundColor}
          />

          <CustomSlider
            text="Largura do container"
            value={props.maxWidth}
            onChange={(e, value) =>
              setProp((props) => (props.maxWidth = value))
            }
            min={0}
            max={2000}
            step={10}
            disableUnits
            disableDeviceView
            tooltipText={"Escolha o largura máxima do container"}
          />

          <CustomLinkedValues
            text="Padding"
            values={props}
            onChange={setProp}
            options={[
              { value: "paddingTop", label: "Superior" },
              { value: "paddingRight", label: "Direita" },
              { value: "paddingBottom", label: "Inferior" },
              { value: "paddingLeft", label: "Esquerda" },
            ]}
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

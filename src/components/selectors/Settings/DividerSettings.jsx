import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Divider } from "@mui/material";
import { Settings, Contrast } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import {
  CustomSelect,
  CustomSlider,
  CustomAccordion,
  ColorControl,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";

export const DividerSettings = () => {
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
            icon={<CreateIcon />}
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
            text={"Estilo"}
            value={props.borderBottomStyle}
            onChange={(e) =>
              setProp((props) => (props.borderBottomStyle = e.target.value))
            }
            options={[
              { value: "solid", label: "Sólido" },
              { value: "double", label: "Duplo" },
              { value: "dotted", label: "Pontilhado" },
              { value: "dashed", label: "Tracejado" },
            ]}
          />

          <CustomSlider
            text="Largura"
            value={props.width}
            mobileValue={props.widthMobile}
            onChange={(e, value) => setProp((props) => (props.width = value))}
            mobileOnChange={(e, value) =>
              setProp((props) => (props.widthMobile = value))
            }
            min={8}
            max={1000}
            step={1}
          />
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          paddingTop={1}
          color={"#fff"}
        >
          <CustomAccordion title="Divisor" defaultExpanded>
            <Box display="flex" flexDirection="column" gap="16px">
              <ColorControl
                name={"Cor"}
                onChange={(e, value) => {
                  setProp((props) => (props.borderBottomColor = value));
                }}
                tooltipText={"Cor do divisor"}
                defaultValue={props.borderBottomColor}
                value={props.borderBottomColor}
              />
              <CustomSlider
                text={"Peso"}
                disableDeviceView
                value={props.borderBottomWidth}
                mobileValue={props.borderBottomWidthMobile}
                onChange={(e, value) =>
                  setProp((props) => (props.borderBottomWidth = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.borderBottomWidthMobile = value))
                }
                min={1}
                max={10}
                step={0.1}
              />
              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
              <CustomSlider
                text={"Espaçamento"}
                disableDeviceView
                value={props.paddingBlockStart}
                onChange={(e, value) => {
                  setProp((props) => {
                    props.paddingBlockStart = value;
                    props.paddingBlockEnd = value;
                    return props;
                  });
                }}
                min={2}
                max={50}
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

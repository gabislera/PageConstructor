import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import { CustomAccordion } from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import {
  CustomButtonGroup,
  CustomSelect,
  CustomSlider,
  CustomTextInput,
  FileUpload,
} from "../../_Control";

export const VideoSettings = () => {
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
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Vídeo">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSelect
                text="Fonte"
                value={props.position}
                onChange={(e) =>
                  setProp((props) => (props.position = e.target.value))
                }
                options={[
                  { value: "static", label: "Youtube" },
                  { value: "relative", label: "Vimeo" },
                  { value: "absolute", label: "Dailymotion" },
                  { value: "fixed", label: "VideoPress" },
                  { value: "fixed", label: "Auto-hospedado" },
                ]}
                tooltipText={"Escolha a posição do item"}
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
          <CustomAccordion title="Vídeo">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSelect
                text="Proporção da tela"
                value={props.position}
                onChange={(e) =>
                  setProp((props) => (props.position = e.target.value))
                }
                options={[
                  { value: "11", label: "1:1" },
                  { value: "32", label: "3:2" },
                  { value: "43", label: "4:3" },
                  { value: "169", label: "16:9" },
                  { value: "219", label: "21:9" },
                  { value: "916", label: "9:16" },
                ]}
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

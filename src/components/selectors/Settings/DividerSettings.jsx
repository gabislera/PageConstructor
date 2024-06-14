import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect } from "react";
import { Settings, Contrast } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import UploadIcon from "@mui/icons-material/Upload";
import Icon from "@mui/material/Icon";
import {
  CustomSelect,
  CustomTextInput,
  CustomCollapse,
  CustomSlider,
  ColorControl,
  CustomLinkedValues,
} from "../../_Control";
import { ExpandMore } from "@mui/icons-material";
import { AdvancedSettings } from "./AdvancedSettings";
import Divider from "@mui/material/Divider";

import { ReactComponent as Replay } from "../../iconsControls/replay.svg";
import {
  CustomAccordion,
  CustomAccordionRoot,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../editor/Toolbox";

export const DividerSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [upload, setUpload] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const initialValueBoxShadow = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    spread: 0,
    color: "rgba(0, 0, 0, 0.3)",
    inset: false,
  };
  const [boxShadow, setBoxShadow] = useState(initialValueBoxShadow);

  useEffect(() => {
    const { horizontal, vertical, blur, spread, color, inset } = boxShadow;
    const boxShadowString = `${horizontal} ${vertical} ${blur} ${spread} ${color}${
      inset ? " inset" : ""
    }`;
    setProp((props) => (props.boxShadow = boxShadowString));
  }, [boxShadow, props, setProp]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClearBoxShadow = () => {
    setBoxShadow(initialValueBoxShadow);
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
          <Grid item width="100%" mt={1}>
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
          </Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}></TabPannel>

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

import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { ColorControl } from "../../ColorControl";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
  Tab,
  Tabs,
  Button as MaterialButton,
  Slider,
} from "@mui/material";
import {
  Edit,
  Settings,
  Contrast,
  Delete,
  SpaceDashboardOutlined,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";

export const ContainerSettings = () => {
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
        <Grid container spacing={3} padding={2} color={"#fff"}>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}></Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}></TabPannel>

      <TabPannel value={value} index={2}>
        <Grid container spacing={3} padding={2} color={"#fff"}>
          <Grid item xs={12}>
            {selected && selected.isDeletable ? (
              <MaterialButton
                variant="text"
                fullWidth
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                endIcon={<Delete color="secondary" />}
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </MaterialButton>
            ) : null}
          </Grid>
        </Grid>
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

import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import {
  Grid,
  Typography,
  Box,
  Tab,
  Tabs,
  Button as MaterialButton,
  ToggleButton,
  ToggleButtonGroup,
  Divider
} from "@mui/material";
import {
  Settings,
  Contrast,
  Delete,
  SpaceDashboardOutlined,
  EastRounded,
  SouthRounded,
  NorthRounded,
  WestRounded,
  AlignVerticalTop,
  AlignVerticalCenter,
  AlignVerticalBottom,
  FormatAlignJustify
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import { CustomButtonGroup, CustomSlider } from "../../_controls";

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
        <Grid container flexDirection={'column'} padding={2} color={'#fff'} sx={{ gap: 2 }}>
          <Grid item width={'100%'}>
            <CustomSlider
              text='Min width'
              value={props.minHeight}
              onChange={(e, value) => setProp((props) => (props.minHeight = value))}
              min={8}
              max={1000}
              step={1}
              tooltipText={'Escolha a altura minima'}
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <Grid item xs={12} >
            <Typography variant="caption" gutterBottom color="inherit">
              Item
            </Typography>
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text='Direction'
              value={props.flexDirection}
              onChange={(e, value) => setProp((props) => (props.flexDirection = value))}
              options={[
                { value: "row", icon: <EastRounded /> },
                { value: "column", icon: <SouthRounded /> },
                { value: "row-reverse", icon: <NorthRounded /> },
                { value: "column-reverse", icon: <WestRounded /> },
              ]}
              tooltipText={'Escolha a direção do item'}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text='Justify Content'
              value={props.justifyContent}
              onChange={(e, value) => setProp((props) => (props.justifyContent = value))}
              options={[
                { value: "start", icon: <EastRounded /> },
                { value: "center", icon: <SouthRounded /> },
                { value: "end", icon: <NorthRounded /> },
                { value: "space-between", icon: <WestRounded /> },
                { value: "space-around", icon: <WestRounded /> },
                { value: "space-evenly", icon: <WestRounded /> },
              ]}
              tooltipText={'Escolha a direção do item'}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text='Align Items'
              value={props.alignItems}
              onChange={(e, value) => setProp((props) => (props.alignItems = value))}
              options={[
                { value: "start", icon: <AlignVerticalTop /> },
                { value: "center", icon: <AlignVerticalCenter /> },
                { value: "end", icon: <AlignVerticalBottom /> },
                { value: "stretch", icon: <FormatAlignJustify /> },
              ]}
              tooltipText={'Escolha a direção do item'}
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid container flexDirection={'column'} padding={2} color={'#fff'} sx={{ gap: 2 }}>

        </Grid>
      </TabPannel>

      <TabPannel value={value} index={2}>
        <Grid container flexDirection={'column'} padding={2} color={'#fff'} sx={{ gap: 2 }}>
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

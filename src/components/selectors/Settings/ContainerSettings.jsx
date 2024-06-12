import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Grid, Typography, Box, Tab, Tabs, Divider } from "@mui/material";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
  EastRounded,
  SouthRounded,
  NorthRounded,
  WestRounded,
  AlignVerticalTop,
  AlignVerticalCenter,
  AlignVerticalBottom,
  Start,
  WrapText,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import {
  ColorControl,
  CustomButtonGroup,
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
  CustomTextInput,
  FileUpload,
  TabOptions,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";

import { ReactComponent as JustifyCenter } from "../../iconsControls/justify_center.svg";
import { ReactComponent as JustifyStart } from "../../iconsControls/justify_start.svg";
import { ReactComponent as JustifyEnd } from "../../iconsControls/justify_end.svg";
import { ReactComponent as SpaceAround } from "../../iconsControls/space_around.svg";
import { ReactComponent as SpaceBetween } from "../../iconsControls/space_between.svg";
import { ReactComponent as SpaceEvenly } from "../../iconsControls/space_evenly.svg";
import { ReactComponent as AlignStretch } from "../../iconsControls/align_stretch.svg";

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
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <Grid item>
            <CustomSlider
              text="Width"
              value={props.width}
              onChange={(e, value) => setProp((props) => (props.width = value))}
              min={8}
              max={1220}
              step={1}
              tooltipText={"Escolha a largura do container"}
            />
          </Grid>

          <Grid item>
            <CustomSlider
              text="Min height"
              value={props.minHeight}
              onChange={(e, value) =>
                setProp((props) => (props.minHeight = value))
              }
              min={8}
              max={1000}
              step={1}
              tooltipText={"Escolha a altura minima"}
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
          {/* 
          <Grid item xs={12}>
            <Typography variant="caption" gutterBottom color="inherit">
              Item
            </Typography>
          </Grid> */}

          <Grid item>
            <CustomButtonGroup
              text="Direction"
              value={props.flexDirection}
              onChange={(e, value) =>
                setProp((props) => (props.flexDirection = value))
              }
              options={[
                { value: "row", icon: <EastRounded /> },
                { value: "column", icon: <SouthRounded /> },
                { value: "row-reverse", icon: <NorthRounded /> },
                { value: "column-reverse", icon: <WestRounded /> },
              ]}
              tooltipText={"Escolha a direção do item"}
              fullWidth
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Justify Content"
              value={props.justifyContent}
              onChange={(e, value) =>
                setProp((props) => (props.justifyContent = value))
              }
              options={[
                { value: "start", icon: <JustifyStart /> },
                { value: "center", icon: <JustifyCenter /> },
                { value: "end", icon: <JustifyEnd /> },
                { value: "space-between", icon: <SpaceBetween /> },
                { value: "space-around", icon: <SpaceAround /> },
                { value: "space-evenly", icon: <SpaceEvenly /> },
              ]}
              tooltipText={"Escolha a direção do item"}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Align Items"
              value={props.alignItems}
              onChange={(e, value) =>
                setProp((props) => (props.alignItems = value))
              }
              options={[
                { value: "start", icon: <AlignVerticalTop /> },
                { value: "center", icon: <AlignVerticalCenter /> },
                { value: "end", icon: <AlignVerticalBottom /> },
                { value: "stretch", icon: <AlignStretch /> },
              ]}
              tooltipText={"Escolha a direção do item"}
              fullWidth
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <Grid item>
            <CustomLinkedValues
              text="Gaps"
              values={props}
              onChange={setProp}
              options={[
                { value: "columnGap", label: "Column" },
                { value: "rowGap", label: "Row" },
              ]}
            />
          </Grid>

          <Grid item>
            <CustomButtonGroup
              text="Wrap"
              value={props.flexWrap}
              onChange={(e, value) =>
                setProp((props) => (props.flexWrap = value))
              }
              options={[
                { value: "nowrap", icon: <Start /> },
                { value: "wrap", icon: <WrapText /> },
              ]}
              tooltipText={"Quebra de linha"}
              fullWidth
            />
          </Grid>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          <Grid item width="100%">
            <CustomSelect
              text={"Html Tag"}
              value={props.htmlTag}
              onChange={(e) =>
                setProp((props) => (props.htmlTag = e.target.value))
              }
              options={[
                { value: "div", label: "div" },
                { value: "header", label: "header" },
                { value: "footer", label: "footer" },
                { value: "main", label: "main" },
                { value: "article", label: "article" },
                { value: "aside", label: "aside" },
                { value: "section", label: "section" },
                { value: "nav", label: "nav" },
              ]}
              tooltipText={"Escolha a tag HTML para o container"}
            />
          </Grid>

          <Grid item>
            <CustomTextInput
              text="Url"
              value={props.url}
              onChange={(e) => setProp((props) => (props.url = e.target.value))}
              tooltipText={"Link para onde o container redireciona"}
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
            <TabOptions title="Background type">
              <Grid item mt={2}>
                <ColorControl
                  name="Color"
                  onChange={(e, value) =>
                    setProp((props) => (props.backgroundColor = value))
                  }
                  defaultValue={props.backgroundColor}
                  value={props.backgroundColor}
                />

                <FileUpload
                  value={props.backgroundImage}
                  onChange={(imageUrl) =>
                    setProp((props) => (props.backgroundImage = imageUrl))
                  }
                />
              </Grid>

              <Grid item mt={2}>
                <ColorControl
                  name="Color"
                  onChange={(e, value) =>
                    setProp((props) => (props.backgroundColor = value))
                  }
                  defaultValue={props.backgroundColor}
                  value={props.backgroundColor}
                />
              </Grid>
            </TabOptions>

            <TabOptions title="Border">
              <Grid item mt={0}>
                <Grid item mt={2}>
                  <CustomSelect
                    text="Border style"
                    value={props.borderStyle}
                    onChange={(e) =>
                      setProp((props) => (props.borderStyle = e.target.value))
                    }
                    options={[
                      { value: "none", label: "None" },
                      { value: "solid", label: "Solid" },
                      { value: "dashed", label: "Dashed" },
                      { value: "dotted", label: "Dotted" },
                    ]}
                  />
                </Grid>

                {props.borderStyle !== "none" && (
                  <Grid item mt={2}>
                    <CustomLinkedValues
                      text="Border Width"
                      values={props}
                      onChange={setProp}
                      options={[
                        { value: "borderTopWidth", label: "Top" },
                        { value: "borderRightWidth", label: "Right" },
                        { value: "borderBottomWidth", label: "Bottom" },
                        { value: "borderLeftWidth", label: "Left" },
                      ]}
                    />
                  </Grid>
                )}

                {props.borderStyle !== "none" && (
                  <Grid item mt={2}>
                    <ColorControl
                      name={"Border Color"}
                      onChange={(e, value) => {
                        setProp((props) => (props.borderColor = value));
                      }}
                      defaultValue={props.borderColor}
                      value={props.borderColor}
                    />
                  </Grid>
                )}

                <Grid item mt={2}>
                  <CustomLinkedValues
                    text="Border Radius"
                    values={props}
                    onChange={setProp}
                    options={[
                      { value: "borderTopLeftRadius", label: "Top L" },
                      { value: "borderTopRightRadius", label: "Top R" },
                      { value: "borderBottomRightRadius", label: "Bottom R" },
                      { value: "borderBottomLeftRadius", label: "Bottom L" },
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid item mt={0}>
                <Grid item mt={2}>
                  <CustomSelect
                    text="Border style"
                    value={props.hoverBorderStyle}
                    onChange={(e) =>
                      setProp(
                        (props) => (props.hoverBorderStyle = e.target.value)
                      )
                    }
                    options={[
                      { value: "none", label: "None" },
                      { value: "solid", label: "Solid" },
                      { value: "dashed", label: "Dashed" },
                      { value: "dotted", label: "Dotted" },
                    ]}
                  />
                </Grid>

                {props.hoverBorderStyle !== "none" && (
                  <Grid item mt={2}>
                    <CustomLinkedValues
                      text="Border Width"
                      values={props}
                      onChange={setProp}
                      options={[
                        { value: "hoverBorderTopWidth", label: "Top" },
                        { value: "hoverBorderRightWidth", label: "Right" },
                        { value: "hoverBorderBottomWidth", label: "Bottom" },
                        { value: "hoverBorderLeftWidth", label: "Left" },
                      ]}
                    />
                  </Grid>
                )}

                {props.hoverBorderStyle !== "none" && (
                  <Grid item mt={2}>
                    <ColorControl
                      name={"Border Color"}
                      onChange={(e, value) => {
                        setProp((props) => (props.hoverBorderColor = value));
                      }}
                      defaultValue={props.hoverBorderColor}
                      value={props.hoverBorderColor}
                    />
                  </Grid>
                )}

                <Grid item mt={2}>
                  <CustomLinkedValues
                    text="Border Radius"
                    values={props}
                    onChange={setProp}
                    options={[
                      { value: "hoverBorderTopLeftRadius", label: "Top L" },
                      { value: "hoverBorderTopRightRadius", label: "Top R" },
                      {
                        value: "hoverBorderBottomRightRadius",
                        label: "Bottom R",
                      },
                      {
                        value: "hoverBorderBottomLeftRadius",
                        label: "Bottom L",
                      },
                    ]}
                  />
                </Grid>
              </Grid>
            </TabOptions>
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

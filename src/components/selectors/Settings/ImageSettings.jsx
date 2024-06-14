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

import { AdvancedSettings } from "./AdvancedSettings";
import {
  CustomButtonGroup,
  CustomSelect,
  CustomSlider,
  CustomTextInput,
  FileUpload,
} from "../../_Control";

export const ImageSettings = () => {
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
          <FileUpload
            value={props.src}
            onChange={(src) => setProp((props) => (props.src = src))}
          />
          <CustomTextInput
            text="Texto alternativo"
            value={props.alt}
            onChange={(e) => setProp((props) => (props.alt = e.target.value))}
            row
          />
          <CustomTextInput
            text="Legenda"
            value={props.caption}
            onChange={(e) =>
              setProp((props) => (props.caption = e.target.value))
            }
            row
          />
          <CustomTextInput
            text="Link"
            value={props.url}
            onChange={(e) => setProp((props) => (props.url = e.target.value))}
            tooltipText={"Link para onde o texto redireciona"}
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
          <CustomButtonGroup
            text="Alinhamento"
            value={props.alignSelf}
            mobileValue={props.mobileAlignSelf}
            onChange={(e, value) =>
              setProp((props) => (props.alignSelf = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileAlignSelf = value))
            }
            options={[
              {
                value: "start",
                icon: <FormatAlignLeft />,
                tooltip: "Esquerda",
              },
              {
                value: "center",
                icon: <FormatAlignCenter />,
                tooltip: "Centro",
              },
              {
                value: "end",
                icon: <FormatAlignRight />,
                tooltip: "Direita",
              },
            ]}
            tooltipText={"Escolha o alinhamento do texto"}
            fullWidth
          />

          <CustomSlider
            text={"Largura"}
            value={props.width}
            max={1200}
            mobileValue={props.mobilewidth}
            onChange={(e, value) => setProp((props) => (props.width = value))}
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobilewidth = value))
            }
            tooltipText={"Escolha a largura da imagem"}
          />

          <CustomSlider
            text={"Largura máxima"}
            value={props.maxWidth}
            max={1200}
            mobileValue={props.mobileMaxWidth}
            onChange={(e, value) =>
              setProp((props) => (props.maxWidth = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileMaxWidth = value))
            }
            tooltipText={"Escolha a largura máxima da imagem"}
          />

          <CustomSelect
            text="Ajuste do objeto"
            value={props.objectFit}
            onChange={(e) =>
              setProp((props) => (props.objectFit = e.target.value))
            }
            options={[
              { value: "initial", label: "Padrão" },
              { value: "fill", label: "Preencher" },
              { value: "cover", label: "Cobertura" },
              { value: "contain", label: "Conter" },
            ]}
            tooltipText={"Escolha a posição do item"}
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
import React, { useState } from "react";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import { useNode } from "@craftjs/core";
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
  ColorControl,
  CustomTypography,
  CustomBoxShadowModal,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import RichTextEditor from "../../RichTextEditor";

export const TextSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [value, setValue] = useState(0);
  const classes = useStyles();

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
          <RichTextEditor
            content={props.content}
            onContentChange={(htmlContent) =>
              setProp((props) => (props.content = htmlContent))
            }
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
            value={props.textAlign}
            mobileValue={props.mobileTextAlign}
            onChange={(e, value) =>
              setProp((props) => (props.textAlign = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileTextAlign = value))
            }
            options={[
              { value: "left", icon: <FormatAlignLeft />, tooltip: "Esquerda" },
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
          <ColorControl
            name={"Cor do texto"}
            onChange={(e, value) => setProp((props) => (props.color = value))}
            defaultValue={props.color}
            value={props.color}
          />
          <CustomTypography props={props} setProp={setProp} />
          <CustomBoxShadowModal
            title={"Sombra do texto"}
            props={props}
            setProp={setProp}
            type="text"
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

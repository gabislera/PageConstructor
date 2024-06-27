import { Grid, Box, Tab, Tabs } from "@mui/material";
import { useNode } from "@craftjs/core";
import React, { useState } from "react";
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
  CustomSelect,
  CustomSlider,
  CustomTextInput,
  ColorControl,
  CustomTypography,
  CustomBoxShadowModal,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";

export const TitleSettings = () => {
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
          <Grid item>
            <CustomTextInput
              text="Texto"
              value={props.content}
              onChange={(e) =>
                setProp((props) => (props.content = e.target.value))
              }
              tooltipText={"Conteúdo do texto"}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid item>
            <CustomTextInput
              text="Link"
              value={props.url}
              onChange={(e) => setProp((props) => (props.url = e.target.value))}
              tooltipText={"Link para onde o texto redireciona"}
              fullWidth
            />
          </Grid>

          <Grid item>
            <CustomSelect
              text={"Tag HTML"}
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
              tooltipText={"Escolha a tag HTML para o texto"}
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
              {
                value: "left",
                icon: <FormatAlignLeft />,
                tooltip: "Esquerda",
              },
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
            onChange={(e, value) => {
              setProp((props) => (props.color = value));
            }}
            defaultValue={props.color}
            value={props.color}
          />
          <CustomTypography props={props} setProp={setProp} />{" "}
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

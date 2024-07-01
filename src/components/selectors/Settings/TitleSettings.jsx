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
import Title from "../../selectors/CraftedComponents/Title";
import {
  CustomButtonGroup,
  CustomSelect,
  CustomCheckbox,
  CustomTextInput,
  ColorControl,
  CustomTypography,
  CustomBoxShadow,
  CustomCollapse,
} from "../../_Control";
import SettingsIcon from "@mui/icons-material/Settings";

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

          <CustomCollapse
            text="Link"
            placeholder={"Cole a URL ou digite"}
            value={props.src}
            tooltip={"Opções de link"}
            classes={classes}
            onChange={(e) => setProp((props) => (props.src = e.target.value))}
            type={"TextField"}
            buttons={[
              {
                tooltip: "Opções de link",
                icon: (
                  <SettingsIcon
                    fontSize="small"
                    color="secondary"
                    style={{ width: "18px" }}
                  />
                ),
                content: (
                  <Box style={{ padding: 2 }}>
                    <CustomCheckbox
                      options={[
                        {
                          value: "redirect_url",
                          label: "Redirecionar para um link",
                        },
                        {
                          value: "redirect_project_page",
                          label: "Redirecionar para uma página",
                        },
                        {
                          value: "scroll_to_block",
                          label: "Focar outro bloco da página",
                        },
                        {
                          value: "close_modal",
                          label: "Fechar o modal",
                        },
                        {
                          value: "window_modal_open",
                          label: "Abrir em uma nova janela",
                        },
                      ]}
                      defaultValue={props.url}
                      value={props.url}
                      onChange={(value) => {
                        setProp((props) => (props.url = value));
                      }}
                    />
                  </Box>
                ),
              },
            ]}
          />

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
          <CustomTypography
            props={props}
            setProp={setProp}
            valueReset={Title}
          />
          <CustomBoxShadow
            title={"Sombra do texto"}
            props={props}
            setProp={setProp}
            valueReset={Title}
            type="title"
            custom={"TextShadow"}
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

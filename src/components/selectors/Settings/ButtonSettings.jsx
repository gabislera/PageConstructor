import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import { Settings, Contrast } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  CustomSelect,
  CustomTextInput,
  CustomCollapse,
  CustomSlider,
  ColorControl,
  CustomLinkedValues,
  CustomCheckbox,
  CustomBoxShadowModal,
  CustomTypography,
} from "../../_Control";
import { CustomTypeColorGradient } from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import Divider from "@mui/material/Divider";
import { ReactComponent as Gradient } from "../../iconsControls/gradient.svg";
import { ReactComponent as Brush } from "../../iconsControls/brush.svg";

export const ButtonSettings = () => {
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
          <CustomTextInput
            text="Texto"
            row={true}
            value={props.text}
            width={"50%"}
            onChange={(e) => setProp((props) => (props.text = e.target.value))}
            tooltipText={"Link para onde o botáo redireciona"}
          />

          <CustomCollapse
            text="Link"
            placeholder={"Cole a URL ou digite"}
            value={props.src}
            tooltip={"Opções de link"}
            width={"100%"}
            classes={classes}
            onChange={(e) => setProp((props) => (props.src = e.target.value))}
            type={"TextField"}
            optionsButton={[
              {
                icon: <SettingsIcon fontSize="small" color="secondary" />,
              },
            ]}
          >
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
              defaultValue={props.action}
              value={props.action}
              onChange={(value) => {
                setProp((props) => (props.action = value));
              }}
            />
          </CustomCollapse>

          <CustomCollapse
            text="Icone"
            row={true}
            onChange={(e, value) => {
              setProp((props) => (props.action = value));
            }}
            defaultValue={props.action}
            value={props.action}
            type={"Button"}
            tooltip={"Icone"}
            remove={true}
            // optionsButton={[
            //   {
            //     value: "redirect_url",
            //     label: "Nenhum icone",
            //     icon: <DoNotDisturbAltIcon color="secondary" />,
            //     onclick: () => {
            //       setUpload(true);
            //     },
            //   },
            //   {
            //     value: "redirect_project_page",
            //     label: "Carregar imagem",
            //     icon: <UploadIcon color="secondary" />,
            //     onclick: () => {
            //       setUpload(true);
            //     },
            //   },
            // ]}
          />

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* <Box display="flex" flexDirection="column" gap="5px">
            <CustomTextInput
              text="ID do botão"
              row
              value={props.id}
              onChange={(e) => setProp((props) => (props.id = e.target.value))}
              tooltipText={
                "Adicione o seu próprio ID SEM o ponto. p.ex.: meu-id"
              }
            />
            <Typography
              sx={{
                fontSize: "11px",
                fontStyle: "italic",
                color: "#9da5ae",
              }}
            >
              Certifique-se de que o ID seja exclusivo e não seja usado em
              nenhum outro lugar da página em que este formulário é exibido.
              Este campo permite <code>A-z 0-9</code> & sublinhar caracteres sem
              espaços.
            </Typography>
          </Box> */}
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          paddingTop={2}
          color={"#fff"}
        >
          <Box display="flex" flexDirection="column" gap="16px">
            <CustomSlider
              text="Largura"
              value={props.maxWidth}
              mobileValue={props.maxWidthMobile}
              onChange={(e, value) =>
                setProp((props) => (props.maxWidth = value))
              }
              mobileOnChange={(e, value) =>
                setProp((props) => (props.maxWidthMobile = value))
              }
              min={0}
              max={100}
              step={1}
            />

            <CustomTypography props={props} setProp={setProp} />
            <ColorControl
              name={"Cor do texto"}
              onChange={(e, value) => {
                setProp((props) => (props.color = value));
              }}
              defaultValue={props.color}
              value={props.color}
            />
            <CustomCollapse
              text="Cor do fundo"
              buttons={[
                {
                  value: "color",
                  tooltip: "Clássico",
                  icon: (
                    <Brush
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  ),
                  content: (
                    <Box style={{ padding: 2 }}>
                      <ColorControl
                        name={"Cor"}
                        onChange={(e, value) =>
                          setProp((props) => (props.backgroundColor = value))
                        }
                        defaultValue={props.backgroundColor}
                        value={props.backgroundColor}
                      />
                    </Box>
                  ),
                },
                {
                  value: "gradient",
                  tooltip: "Gradiente",
                  icon: (
                    <Gradient
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  ),
                  content: (
                    <CustomTypeColorGradient props={props} setProp={setProp} />
                  ),
                },
              ]}
              defaultOpenSection="color"
            />

            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
            <CustomSelect
              text="Tipo da borda"
              value={props.borderStyle}
              onChange={(e) =>
                setProp((props) => (props.borderStyle = e.target.value))
              }
              options={[
                { value: "none", label: "Padrão" },
                { value: "solid", label: "Solido" },
                { value: "dashed", label: "Tracejado" },
                { value: "dotted", label: "Pontilhado" },
              ]}
            />
            {props.borderStyle !== "none" && (
              <CustomLinkedValues
                text="Largura da borda"
                values={props}
                onChange={setProp}
                options={[
                  { value: "borderTopWidth", label: "Superior" },
                  { value: "borderRightWidth", label: "Direita" },
                  { value: "borderBottomWidth", label: "Inferior" },
                  { value: "borderLeftWidth", label: "Esquerda" },
                ]}
              />
            )}

            {props.borderStyle !== "none" && (
              <ColorControl
                name={"Cor da borda"}
                onChange={(e, value) => {
                  setProp((props) => (props.hoverBorderColor = value));
                }}
                defaultValue={props.hoverBorderColor}
                value={props.hoverBorderColor}
              />
            )}
            <CustomLinkedValues
              text="Raio da borda"
              values={props}
              onChange={setProp}
              options={[
                { value: "borderTopLeftRadius", label: "Superior" },
                { value: "borderTopRightRadius", label: "Direita" },
                { value: "borderBottomRightRadius", label: "Inferior" },
                { value: "borderBottomLeftRadius", label: "Esquerda" },
              ]}
            />
            <CustomBoxShadowModal props={props} setProp={setProp} />
            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
            <CustomLinkedValues
              text="Preenchimento" //padding
              values={props}
              onChange={setProp}
              options={[
                { value: "paddingTop", label: "Superior" },
                { value: "paddingRight", label: "Direita" },
                { value: "paddingLeft", label: "Inferior" },
                { value: "paddingBottom", label: "Esquerda" },
              ]}
            />
          </Box>
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

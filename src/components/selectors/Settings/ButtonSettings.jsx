import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { Settings, Contrast } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import UploadIcon from "@mui/icons-material/Upload";
import {
  CustomSelect,
  CustomTextInput,
  CustomCollapse,
  CustomSlider,
  ColorControl,
  CustomLinkedValues,
  CustomAccordion,
  TabOptions,
} from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import Divider from "@mui/material/Divider";
import { ReactComponent as Replay } from "../../iconsControls/replay.svg";

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

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
    const boxShadowString = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}${
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
          <CustomTextInput
            text="Texto"
            row={true}
            value={props.text}
            onChange={(e) => setProp((props) => (props.text = e.target.value))}
            tooltipText={"Link para onde o botáo redireciona"}
          />

          <CustomCollapse
            text="Link"
            onChange={(e, value) => {
              setProp((props) => (props.action = value));
            }}
            defaultValue={props.action}
            value={props.action}
            type={"textField"}
            placeholder={"Cole a URL ou digite"}
            tooltip={"Opções de link"}
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
          />

          <CustomCollapse
            text="Icone"
            onChange={(e, value) => {
              setProp((props) => (props.action = value));
            }}
            defaultValue={props.action}
            value={props.action}
            type={"Button"}
            tooltip={"Icone"}
            remove={true}
            optionsButton={[
              {
                value: "redirect_url",
                label: "Nenhum icone",
                icon: <DoNotDisturbAltIcon color="secondary" />,
                onclick: () => {
                  setUpload(true);
                },
              },
              {
                value: "redirect_project_page",
                label: "Carregar imagem",
                icon: <UploadIcon color="secondary" />,
                onclick: () => {
                  setUpload(true);
                },
              },
            ]}
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
          paddingTop={1}
          color={"#fff"}
        >
          <CustomAccordion title="Tipografia" defaultExpanded>
            <Box display="flex" flexDirection="column" gap="16px">
              <ColorControl
                name={"Cor do texto"}
                onChange={(e, value) => {
                  setProp((props) => (props.color = value));
                }}
                defaultValue={props.color}
                value={props.color}
              />

              <CustomSelect
                text={"Fonte"}
                value={props.fontFamily}
                onChange={(e) =>
                  setProp((props) => (props.fontFamily = e.target.value))
                }
                options={[
                  { label: "Padrão", value: "sans-serif" },
                  { label: "Serifa", value: "serif" },
                  { label: "Fantasia", value: "fantasy" },
                  { label: "Cursiva", value: "cursive" },
                  { label: "Monoespaçada", value: "monospace" },
                ]}
              />

              <CustomSlider
                text={"Tamanho da fonte"}
                value={props.fontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.fontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.fontWeight}
                onChange={(e) =>
                  setProp((props) => (props.fontWeight = e.target.value))
                }
                options={[
                  { value: "300", label: "300" },
                  { value: "400", label: "400" },
                  { value: "500", label: "500" },
                  { value: "600", label: "600" },
                  { value: "700", label: "700" },
                ]}
                tooltipText={"Escolha o peso da fonte"}
              />

              <CustomSelect
                text={"Alinhamento da fonte"}
                value={props.alignItems}
                onChange={(e) =>
                  setProp((props) => (props.alignItems = e.target.value))
                }
                options={[
                  { label: "Inicial", value: "start" },
                  { label: "Centro", value: "center" },
                  { label: "Final", value: "end" },
                ]}
              />

              <CustomSelect
                text="Transformar"
                value={props.textTransform}
                onChange={(e) =>
                  setProp((props) => (props.textTransform = e.target.value))
                }
                options={[
                  { value: "none", label: "Nenhum" },
                  { value: "capitalize", label: "Capitalizado" },
                  { value: "uppercase", label: "Maiúsculo" },
                  { value: "lowercase", label: "Minúsculo" },
                ]}
                tooltipText={"Escolha a transformação do texto"}
              />

              <CustomSelect
                text="Estilo"
                value={props.fontStyle}
                onChange={(e) =>
                  setProp((props) => (props.fontStyle = e.target.value))
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.textDecoration}
                onChange={(e) =>
                  setProp((props) => (props.textDecoration = e.target.value))
                }
                options={[
                  { value: "none", label: "Normal" },
                  { value: "underline", label: "Sublinhado" },
                  { value: "overline", label: "Overline" },
                  { value: "line-through", label: "Riscado" },
                ]}
                tooltipText={"Escolha a decoração do texto"}
              />

              <CustomSlider
                text={"Altura da linha"}
                value={props.lineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.lineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.letterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.letterSpacing = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.wordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.wordSpacing = value))
                }
                min={-5}
                tooltipText={"Escolha a espaçamento das palavras"}
              />
            </Box>
          </CustomAccordion>

          <TabOptions title="Borda">
            <Grid
              item
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              sx={{ gap: 2 }}
            >
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
                    setProp((props) => (props.borderColor = value));
                  }}
                  defaultValue={props.borderColor}
                  value={props.borderColor}
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
              <CustomCollapse
                type={"button"}
                propype="boxShadow"
                text="Sombra do botão"
                boxShadow={boxShadow}
                setBoxShadow={setBoxShadow}
                openCollapse={openCollapse}
                setOpenCollapse={setOpenCollapse}
                remove={true}
                optionsButton={[
                  {
                    value: "none",
                    label: "Voltar para o padrão",
                    icon: <Replay />,
                    onClick: () => handleClearBoxShadow(),
                  },
                  {
                    value: "boxShadow",
                    icon: <CreateIcon color="secondary" />,
                    onClick: () => setOpenCollapse(!openCollapse),
                  },
                ]}
                tooltipText={"Escolha a ordem da posição"}
              />
            </Grid>

            <Grid
              item
              mt={2}
              display={"flex"}
              flexDirection={"column"}
              sx={{ gap: 2 }}
            >
              <CustomSelect
                text="Tipo da borda"
                value={props.hoverBorderStyle}
                onChange={(e) =>
                  setProp((props) => (props.hoverBorderStyle = e.target.value))
                }
                options={[
                  { value: "none", label: "Padrão" },
                  { value: "solid", label: "Solido" },
                  { value: "dashed", label: "Tracejado" },
                  { value: "dotted", label: "Pontilhado" },
                ]}
              />
              {props.hoverBorderStyle !== "none" && (
                <CustomLinkedValues
                  text="Largura da borda"
                  values={props}
                  onChange={setProp}
                  options={[
                    { value: "hoverBorderTopWidth", label: "Superior" },
                    { value: "hoverBorderRightWidth", label: "Direita" },
                    { value: "hoverBorderBottomWidth", label: "Inferior" },
                    { value: "hoverBorderLeftWidth", label: "Esquerda" },
                  ]}
                />
              )}
              {props.hoverBorderStyle !== "none" && (
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
                  { value: "hoverBorderTopLeftRadius", label: "Superior" },
                  { value: "hoverBorderTopRightRadius", label: "Direita" },
                  { value: "hoverBorderBottomRightRadius", label: "Inferior" },
                  { value: "hoverBorderBottomLeftRadius", label: "Esquerda" },
                ]}
              />
              <CustomCollapse
                type={"button"}
                propype="boxShadow"
                text="Sombra do botão"
                boxShadow={boxShadow}
                setBoxShadow={setBoxShadow}
                openCollapse={openCollapse}
                setOpenCollapse={setOpenCollapse}
                remove={true}
                optionsButton={[
                  {
                    value: "none",
                    label: "Voltar para o padrão",
                    icon: <Replay />,
                    onClick: () => handleClearBoxShadow(),
                  },
                  {
                    value: "boxShadow",
                    icon: <CreateIcon color="secondary" />,
                    onClick: () => setOpenCollapse(!openCollapse),
                  },
                ]}
                tooltipText={"Escolha a ordem da posição"}
              />
              {props.hoverBorderStyle !== "none" && (
                <CustomSlider
                  text="Duração da transição"
                  value={props.borderTransitionDuration}
                  onChange={(e, value) =>
                    setProp((props) => (props.borderTransitionDuration = value))
                  }
                  min={0}
                  max={3}
                  step={0.1}
                  disableUnits
                  disableDeviceView
                  tooltipText={"Escolha o tempo da transição"}
                />
              )}{" "}
            </Grid>
          </TabOptions>

          <CustomAccordion title="Preenchimento">
            <CustomSlider
              text="Largura"
              value={props.width}
              mobileValue={props.widthMobile}
              onChange={(e, value) => setProp((props) => (props.width = value))}
              mobileOnChange={(e, value) =>
                setProp((props) => (props.widthMobile = value))
              }
              min={8}
              max={1000}
              step={1}
            />

            <CustomLinkedValues
              text="Preenchimento" //padding
              values={props}
              onChange={setProp}
              options={[
                { value: "paddingTopLeftRadius", label: "Superior" },
                { value: "paddingTopRightRadius", label: "Direita" },
                { value: "paddingBottomRightRadius", label: "Inferior" },
                { value: "paddingBottomLeftRadius", label: "Esquerda" },
              ]}
            />
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

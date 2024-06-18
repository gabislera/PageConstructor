import React, { useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import {
  Settings,
  Contrast,
  SpaceDashboardOutlined,
} from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import { CustomAccordion, CustomSwitch } from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import Divider from "@mui/material/Divider";
import {
  CustomSelect,
  CustomTextInput,
  FileUpload,
  ColorControl,
  CustomSlider,
  TextFieldControl,
} from "../../_Control";

export const VideoSettings = () => {
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
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Vídeo">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSelect
                text="Fonte"
                value={props.typeVideo}
                onChange={(e) =>
                  setProp((props) => (props.typeVideo = e.target.value))
                }
                options={[
                  { value: "video_url", label: "Youtube" },
                  { value: "Video_embead", label: "Embead" },
                  { value: "upload_video", label: "Auto-hospedado" },
                ]}
              />
              {props.typeVideo === "video_url" ? (
                <CustomTextInput
                  text="Link"
                  value={props.url}
                  onChange={(e) =>
                    setProp((props) => (props.url = e.target.value))
                  }
                  placeholder={"Digite seu URL(Youtube)"}
                />
              ) : props.typeVideo === "Video_embead" ? (
                <TextFieldControl
                  name="Código HTML do Vídeo: "
                  multiline
                  value={props.html}
                  onChange={(e) => {
                    setProp((props) => (props.html = e.target.value));
                  }}
                />
              ) : props.typeVideo === "upload_video" ? (
                <FileUpload
                  value={props.src}
                  title={"Selecionar vídeo"}
                  onChange={(src) => setProp((props) => (props.src = src))}
                />
              ) : null}
              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
              <Box display="flex" flexDirection="column" gap="16px">
                <Typography variant="caption" gutterBottom color="inherit">
                  Opções de vídeo
                </Typography>
                <CustomSwitch
                  checkedText="Sim"
                  uncheckedText="Não"
                  text="Reprodução automática"
                  value={props.autoPlay}
                  onChange={(e) => setProp((props) => (props.autoPlay = e))}
                />
                <CustomSwitch
                  checkedText="Sim"
                  uncheckedText="Não"
                  text="Sem som"
                  value={props.muted}
                  onChange={(e) => setProp((props) => (props.muted = e))}
                />
                <CustomSwitch
                  checkedText="Sim"
                  uncheckedText="Não"
                  text="Repetir"
                  value={props.loop}
                  onChange={(e) => setProp((props) => (props.loop = e))}
                />
                <CustomSwitch
                  checkedText="Mostrar"
                  uncheckedText="Ocultar"
                  text="Controles do reprodutor"
                  value={props.controls}
                  onChange={(e) => setProp((props) => (props.controls = e))}
                />
                <CustomSwitch
                  checkedText="Sim"
                  uncheckedText="Não"
                  text="Marca discreta"
                  value={props.playsInline}
                  onChange={(e) => setProp((props) => (props.playsInline = e))}
                />
              </Box>
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Sobreposição de imagem">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSwitch
                checkedText="Mostrar"
                uncheckedText="Ocultar"
                text="Sobreposição de iamgem"
                value={props.display}
                onChange={(e) => setProp((props) => (props.display = e))}
              />
              <FileUpload
                value={props.src}
                title={"Selecionar imagem"}
                onChange={(src) => setProp((props) => (props.src = src))}
              />
              <CustomSelect
                text="Resolução de imagem"
                value={props.typeVideo}
                onChange={(e) =>
                  setProp((props) => (props.typeVideo = e.target.value))
                }
                options={[
                  { value: "thumbnail", label: "Thumbnail - 150 x 150" },
                  { value: "medium", label: "Medium - 300 x 300" },
                  { value: "medium_large", label: "Medium Large - 768 x 0" },
                  { value: "large", label: "Large - 1024 x 1024" },
                  { value: "1536x1536", label: "1536x1536 - 1536 x 1536" },
                  { value: "2048x2048", label: "2048x2048 - 2048 x 2048" },
                  {
                    value: "woocommerce_thumbnail",
                    label: "Woocommerce Thumbnail - 300 x 300",
                  },
                  {
                    value: "woocommerce_single",
                    label: "Woocommerce Single - 600 x 0",
                  },
                  {
                    value: "full",
                    label: "Completo",
                  },
                  {
                    value: "custom",
                    label: "Personalizado",
                  },
                ]}
              />{" "}
              <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
              <Box display="flex" flexDirection="column" gap="16px">
                <CustomSwitch
                  checkedText="Mostrar"
                  uncheckedText="Ocultar"
                  text="Ícone de reprodução"
                  value={props.display}
                  onChange={(e) => setProp((props) => (props.display = e))}
                />
              </Box>{" "}
            </Box>
          </CustomAccordion>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid
          container
          flexDirection={"column"}
          padding={2}
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Vídeo">
            <Box display="flex" flexDirection="column" gap="16px">
              <CustomSelect
                text="Proporção da tela"
                value={props.position}
                onChange={(e) =>
                  setProp((props) => (props.position = e.target.value))
                }
                options={[
                  { value: "11", label: "1:1" },
                  { value: "32", label: "3:2" },
                  { value: "43", label: "4:3" },
                  { value: "169", label: "16:9" },
                  { value: "219", label: "21:9" },
                  { value: "916", label: "9:16" },
                ]}
              />
            </Box>
          </CustomAccordion>
          <CustomAccordion title="Sobreposição de imagem">
            <Box display="flex" flexDirection="column" gap="16px">
              <Typography variant="caption" gutterBottom color="inherit">
                Ícone de Reprodução
              </Typography>
              <ColorControl
                name={"Cor"}
                onChange={(e) =>
                  setProp((props) => (props.position = e.target.value))
                }
                defaultValue={props?.color}
                value={props?.color}
              />
              <CustomSlider
                text={"Tamanho"}
                value={props.fontSize}
                mobileValue={props.mobileFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.fontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />
            </Box>
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

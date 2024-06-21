import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tab, Tabs, Typography } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
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
  CustomSlider,
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
          paddingTop={0}
          color={"#fff"}
        >
          <CustomAccordion title="Vídeo" defaultExpanded>
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
                <CustomTextInput
                  name="Código HTML do Vídeo: "
                  value={props.html}
                  onChange={(e) => {
                    setProp((props) => (props.html = e.target.value));
                  }}
                  fullWidth
                  rows={10}
                  multiline
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
                <Typography variant="caption" color="inherit">
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
                value={props.imageOverlay}
                onChange={(e) => setProp((props) => (props.imageOverlay = e))}
              />
              {props.imageOverlay ? (
                <>
                  <FileUpload
                    value={props.thumbnail}
                    title={"Selecionar imagem"}
                    onChange={(src) =>
                      setProp((props) => (props.thumbnail = src))
                    }
                  />
                  <CustomSelect
                    text="Resolução de imagem"
                    value={props.resolutionVideo}
                    onChange={(e) =>
                      setProp(
                        (props) => (props.resolutionVideo = e.target.value)
                      )
                    }
                    options={[
                      {
                        value: { with: "100%", height: "auto" },
                        label: "Completo",
                      },
                      {
                        value: { with: "100%", height: "100%" },
                        label: "Personalizado",
                      },
                    ]}
                  />
                  {props.resolutionVideo === "personalizado" ? <></> : null}
                  {props.typeVideo === "custom" ? <></> : null}
                  {/* <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} /> */}
                  {/* <Box display="flex" flexDirection="column" gap="16px">
                    <CustomSwitch
                      checkedText="Mostrar"
                      uncheckedText="Ocultar"
                      text="Ícone de reprodução"
                      value={props.iconPlay}
                      onChange={(e) => setProp((props) => (props.iconPlay = e))}
                    />
                  </Box>{" "} */}
                </>
              ) : null}
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
              <CustomSlider
                text={"Largura"}
                value={props.width}
                max={1200}
                mobileValue={props.mobilewidth}
                onChange={(e, value) =>
                  setProp((props) => (props.width = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobilewidth = value))
                }
                tooltipText={"Escolha a largura do vídeo"}
              />

              <CustomSlider
                text={"Altura"}
                value={props.height}
                max={1200}
                mobileValue={props.heightMobile}
                onChange={(e, value) =>
                  setProp((props) => (props.height = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.heightMobile = value))
                }
                tooltipText={"Escolha a Altura do vídeo"}
              />
            </Box>
          </CustomAccordion>
          {/* <CustomAccordion title="Sobreposição de imagem">
            <Box display="flex" flexDirection="column" gap="16px">
              <Typography variant="caption" color="inherit">
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
          </CustomAccordion> */}
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

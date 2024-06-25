import { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tabs, Tab, Typography } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";

import { AdvancedSettings } from "./AdvancedSettings";
import {
  AddFaqItems,
  ColorControl,
  CustomAccordion,
  CustomLinkedValues,
  CustomSelect,
  CustomSlider,
} from "../../_Control";

export const FaqSettings = () => {
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

  const handleItemsChange = (newItems) => {
    setProp((props) => {
      props.items = newItems.map((item) => ({ ...item }));
    });
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
          color={"#fff"}
          sx={{ gap: 2 }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#d5d8dc",
              fontSize: 14,
              mt: "4px",
            }}
          >
            Itens
          </Typography>
          <AddFaqItems />
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
          <CustomAccordion title="Borda" defaultExpanded>
            <Box display="flex" flexDirection="column" gap={2}>
              <CustomSlider
                text={"Largura da borda"}
                value={props.borderWidth}
                max={20}
                step={1}
                disableDeviceView
                onChange={(e, value) =>
                  setProp((props) => (props.borderWidth = value))
                }
              />
              <ColorControl
                name={"Cor da borda"}
                value={props.borderColor}
                defaultValue={props.borderColor}
                onChange={(e, value) => {
                  setProp((props) => (props.borderColor = value));
                }}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Título">
            <Box display="flex" flexDirection="column" gap={2}>
              <ColorControl
                name={"Cor do Título"}
                value={props.titleColor}
                defaultValue={props.titleColor}
                onChange={(e, value) => {
                  setProp((props) => (props.titleColor = value));
                }}
              />

              <ColorControl
                name={"Cor de fundo do Título"}
                value={props.titleBackgroundColor}
                defaultValue={props.titleBackgroundColor}
                onChange={(e, value) => {
                  setProp((props) => (props.titleBackgroundColor = value));
                }}
              />

              <CustomSelect
                text={"Fonte"}
                value={props.titleFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.titleFontFamily = e.target.value))
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
                value={props.titleFontSize}
                mobileValue={props.mobileTitleFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.titleFontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileTitleFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.titleFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.titleFontWeight = e.target.value))
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

              {/* <CustomSelect
                text={"Alinhamento da fonte"}
                value={props.titleTextAlign}
                onChange={(e) =>
                  setProp((props) => (props.titleTextAlign = e.target.value))
                }
                options={[
                  { label: "Inicial", value: "start" },
                  { label: "Centro", value: "center" },
                  { label: "Final", value: "end" },
                ]}
              /> */}

              <CustomSelect
                text="Transformar"
                value={props.titleTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.titleTextTransform = e.target.value)
                  )
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
                value={props.titleFontStyle}
                mobileValue={props.mobileTitleFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.titleFontStyle = e.target.value))
                }
                mobileOnChange={(e) =>
                  setProp(
                    (props) => (props.mobileTitleFontStyle = e.target.value)
                  )
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.titleTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.titleTextDecoration = e.target.value)
                  )
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
                value={props.titleLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.titleLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.titleLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.titleLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.titleWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.titleWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />

              <CustomLinkedValues
                text="Preenchimento"
                values={props}
                onChange={setProp}
                options={[
                  { value: "titlePaddingTop", label: "Superior" },
                  { value: "titlePaddingRight", label: "Direita" },
                  { value: "titlePaddingBottom", label: "Inferior" },
                  { value: "titlePaddingLeft", label: "Esquerda" },
                ]}
              />
            </Box>
          </CustomAccordion>

          <CustomAccordion title="Conteúdo">
            <Box display="flex" flexDirection="column" gap={2}>
              <ColorControl
                name={"Cor do Título"}
                value={props.contentColor}
                defaultValue={props.contentColor}
                onChange={(e, value) => {
                  setProp((props) => (props.contentColor = value));
                }}
              />

              <ColorControl
                name={"Cor de fundo do Título"}
                value={props.contentBackgroundColor}
                defaultValue={props.contentBackgroundColor}
                onChange={(e, value) => {
                  setProp((props) => (props.contentBackgroundColor = value));
                }}
              />

              <CustomSelect
                text={"Fonte"}
                value={props.contentFontFamily}
                onChange={(e) =>
                  setProp((props) => (props.contentFontFamily = e.target.value))
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
                value={props.contentFontSize}
                mobileValue={props.mobileContentFontSize}
                onChange={(e, value) =>
                  setProp((props) => (props.contentFontSize = value))
                }
                mobileOnChange={(e, value) =>
                  setProp((props) => (props.mobileContentFontSize = value))
                }
                tooltipText={"Escolha o tamanho da fonte"}
              />

              <CustomSelect
                text="Peso da fonte"
                value={props.contentFontWeight}
                onChange={(e) =>
                  setProp((props) => (props.contentFontWeight = e.target.value))
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

              {/* <CustomSelect
                text={"Alinhamento da fonte"}
                value={props.contentTextAlign}
                onChange={(e) =>
                  setProp((props) => (props.contentTextAlign = e.target.value))
                }
                options={[
                  { label: "Inicial", value: "start" },
                  { label: "Centro", value: "center" },
                  { label: "Final", value: "end" },
                ]}
              /> */}

              <CustomSelect
                text="Transformar"
                value={props.contentTextTransform}
                onChange={(e) =>
                  setProp(
                    (props) => (props.contentTextTransform = e.target.value)
                  )
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
                value={props.contentFontStyle}
                onChange={(e) =>
                  setProp((props) => (props.contentFontStyle = e.target.value))
                }
                options={[
                  { value: "normal", label: "Normal" },
                  { value: "italic", label: "Italico" },
                ]}
                tooltipText={"Escolha o estilo da fonte"}
              />

              <CustomSelect
                text="Decoração"
                value={props.contentTextDecoration}
                onChange={(e) =>
                  setProp(
                    (props) => (props.contentTextDecoration = e.target.value)
                  )
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
                value={props.contentLineHeight}
                onChange={(e, value) =>
                  setProp((props) => (props.contentLineHeight = value))
                }
                min={1}
                max={3}
                step={0.1}
                disableDeviceView
                tooltipText={"Escolha a altura da linha"}
              />

              <CustomSlider
                text={"Espaçamento das letras"}
                value={props.contentLetterSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.contentLetterSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das letras"}
              />

              <CustomSlider
                text={"Espaçamento das palavras"}
                value={props.contentWordSpacing}
                onChange={(e, value) =>
                  setProp((props) => (props.contentWordSpacing = value))
                }
                min={-5}
                disableDeviceView
                tooltipText={"Escolha a espaçamento das palavras"}
              />

              <CustomLinkedValues
                text="Preenchimento"
                values={props}
                onChange={setProp}
                options={[
                  { value: "contentPaddingTop", label: "Superior" },
                  { value: "contentPaddingRight", label: "Direita" },
                  { value: "contentPaddingBottom", label: "Inferior" },
                  { value: "contentPaddingLeft", label: "Esquerda" },
                ]}
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

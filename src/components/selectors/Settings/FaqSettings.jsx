import { useState } from "react";
import { useNode } from "@craftjs/core";
import { Grid, Box, Tabs, Tab, Typography } from "@mui/material";
import { Settings, Contrast, Edit } from "@mui/icons-material";
import { TabPannel } from "../TabPannel";
import { a11yProps } from "../../../utils/a11yProps";
import { makeStyles } from "@mui/styles";
import { CustomTypography } from "../../_Control";
import { AdvancedSettings } from "./AdvancedSettings";
import Faq from "../../selectors/CraftedComponents/Faq";
import {
  AddFaqItems,
  ColorControl,
  CustomAccordion,
  CustomLinkedValues,
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

  // const handleItemsChange = (newItems) => {
  //   setProp((props) => {
  //     props.items = newItems.map((item) => ({ ...item }));
  //   });
  // };

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
              <CustomTypography
                props={props}
                setProp={setProp}
                type={"title"}
                valueReset={Faq}
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

              <CustomTypography
                props={props}
                setProp={setProp}
                type={"content"}
                valueReset={Faq}
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

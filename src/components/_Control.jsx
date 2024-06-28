import { ChromePicker } from "react-color";
import React, { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/base";
import { makeStyles } from "@mui/styles";
import {
  Tooltip,
  TextField,
  Grow,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Tabs,
  Tab,
  Grid,
  Switch,
  Collapse,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Autocomplete,
  Chip,
  Popover,
  Icon,
} from "@mui/material";
import {
  Link,
  LinkOff,
  Add,
  ExpandMore,
  Tv,
  PhoneIphone,
  FormatColorReset,
  Clear,
  ContentCopy,
  Close,
  Edit,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { a11yProps } from "../utils/a11yProps";
import { TabPannel } from "./selectors/TabPannel";
import {
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomAccordionRoot,
  CustomAccordionBase,
} from "../components/editor/Toolbox";
import { useResponsiveMode } from "../contexts/ResponsiveModeContext";
import { unitConfigs } from "../utils/unitConfigs";
import { useNode } from "@craftjs/core";

export const CustomTypography = ({
  type,
  props,
  setProp,
  disableDeviceView = false,
  assistant,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const getPropName = (name) => {
    if (!type) {
      return name;
    }

    return `${type}${name.charAt(0).toUpperCase() + name.slice(1)}`;
  };

  const handleDesktopChange = (propName, value) => {
    setProp((props) => (props[getPropName(propName)] = value));
  };

  const handleMobileChange = (propName, value) => {
    setProp(
      (props) =>
        (props[
          getPropName(
            `mobile${propName.charAt(0).toUpperCase() + propName.slice(1)}`
          )
        ] = value)
    );
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="caption" color="inherit" marginBottom={0}>
        Tipografia
      </Typography>

      <IconButton
        className={classes.border}
        onClick={handleClick}
        sx={{
          padding: 0.2,
          backgroundColor: anchorEl !== null ? "#3f444b" : "",
        }}
      >
        <Edit sx={{ color: "#d5d8dc", width: "16px", height: "16px" }} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 2,
            width: "272px",
            backgroundColor: "#27272a",
            boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.9)",
            borderRadius: "0px",
            overflow: "hidden",
            color: "#fff",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: -300,
        }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <CustomSelect
            text="Família da fonte"
            value={props[getPropName("fontFamily")]}
            onChange={(e) => handleDesktopChange("fontFamily", e.target.value)}
            options={[
              { label: "Padrão", value: "sans-serif" },
              { label: "Serifa", value: "serif" },
              { label: "Fantasia", value: "fantasy" },
              { label: "Cursiva", value: "cursive" },
              { label: "Monoespaçada", value: "monospace" },
            ]}
          />
          <CustomSlider
            text="Tamanho da fonte"
            value={props[getPropName("fontSize")]}
            mobileValue={props[getPropName("mobileFontSize")]}
            onChange={(e, value) => handleDesktopChange("fontSize", value)}
            mobileOnChange={(e, value) => handleMobileChange("fontSize", value)}
            disableDeviceView={disableDeviceView}
          />
          <CustomSelect
            text="Peso da fonte"
            value={props[getPropName("fontWeight")]}
            onChange={(e) => handleDesktopChange("fontWeight", e.target.value)}
            options={[
              { value: "300", label: "300" },
              { value: "400", label: "400" },
              { value: "500", label: "500" },
              { value: "600", label: "600" },
              { value: "700", label: "700" },
            ]}
          />

          <CustomSelect
            text="Transformar"
            value={props[getPropName("textTransform")]}
            onChange={(e) =>
              handleDesktopChange("textTransform", e.target.value)
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
            value={props[getPropName("fontStyle")]}
            onChange={(e) => handleDesktopChange("fontStyle", e.target.value)}
            options={[
              { value: "normal", label: "Normal" },
              { value: "italic", label: "Italico" },
            ]}
            tooltipText={"Escolha o estilo da fonte"}
          />

          <CustomSelect
            text="Decoração"
            value={props[getPropName("textDecoration")]}
            onChange={(e) =>
              handleDesktopChange("textDecoration", e.target.value)
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
            value={props[getPropName("lineHeight")]}
            mobileValue={props[getPropName("mobileLineHeight")]}
            onChange={(e, value) => handleDesktopChange("lineHeight", value)}
            mobileOnChange={(e, value) =>
              handleMobileChange("lineHeight", value)
            }
            min={1}
            max={3}
            step={0.1}
            disableDeviceView={disableDeviceView}
            disableUnits
            tooltipText={"Escolha a altura da linha"}
          />

          <CustomSlider
            text={"Espaçamento das letras"}
            value={props[getPropName("letterSpacing")]}
            mobileValue={props[getPropName("mobileLetterSpacing")]}
            onChange={(e, value) => handleDesktopChange("letterSpacing", value)}
            mobileOnChange={(e, value) =>
              handleMobileChange("letterSpacing", value)
            }
            min={-5}
            disableDeviceView={disableDeviceView}
            tooltipText={"Escolha a espaçamento das letras"}
          />

          <CustomSlider
            text={"Espaçamento das palavras"}
            value={props[getPropName("wordSpacing")]}
            onChange={(e, value) => handleDesktopChange("wordSpacing", value)}
            min={-5}
            disableDeviceView={disableDeviceView}
            tooltipText={"Escolha a espaçamento das palavras"}
          />
        </Box>
      </Popover>
    </Box>
  );
};

export const CustomBoxShadowModal = ({ title, props, setProp, type }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log("type", type);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const initialBoxShadow = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    spread: 0,
    color: "rgba(0, 0, 0, 0.5)",
    inset: false,
  };
  //
  const initialTextShadow = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    color: "rgba(0, 0, 0, 0.5)",
  };

  const [shadow, setShadow] = useState(
    type === "text" ? initialTextShadow : initialBoxShadow
  );
  const classes = useStyles();

  const handleColorChange = (color) => {
    setShadow({
      ...shadow,
      color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
    });
  };

  const handleSliderChange = (prop) => (event, newValue) => {
    setShadow({ ...shadow, [prop]: newValue });
  };

  const toggleInset = () => {
    setShadow({ ...shadow, inset: !shadow.inset });
  };

  useEffect(() => {
    if (type === "text") {
      const { horizontal, vertical, blur, color } = shadow;
      const textShadowString = `${horizontal}px ${vertical}px ${blur}px ${color}`;
      setProp((props) => (props.textShadow = textShadowString));
    } else {
      const { horizontal, vertical, blur, spread, color, inset } = shadow;
      const boxShadowString = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}${
        inset ? " inset" : ""
      }`;
      setProp((props) => (props.boxShadow = boxShadowString));
    }
  }, [shadow, props, setProp, type]);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="caption" color="inherit" marginBottom={0}>
        {title}
      </Typography>

      <IconButton
        onClick={handleClick}
        className={classes.border}
        sx={{
          padding: 0.2,
          backgroundColor: anchorEl !== null ? "#3f444b" : "",
        }}
      >
        <Edit sx={{ color: "#d5d8dc", width: "16px", height: "16px" }} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            zIndex: 2,
            p: 2,
            width: "272px",
            height: "auto",
            backgroundColor: "#27272a",
            boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.9)",
            borderRadius: "0px",
            overflow: "hidden",
            color: "#fff",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: -300,
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <ColorControl
            name={"Cor da sombra"}
            onChange={handleColorChange}
            defaultValue={shadow?.color}
            value={shadow.color}
            popertation={true}
          />

          {[
            "horizontal",
            "vertical",
            "blur",
            ...(type !== "text" ? ["spread"] : []),
          ].map((prop, index) => (
            <CustomSlider
              key={index}
              disableUnits
              disableDeviceView
              text={prop.charAt(0).toUpperCase() + prop.slice(1)}
              value={shadow[prop]}
              onChange={handleSliderChange(prop)}
              min={prop === "blur" ? 0 : prop === "spread" ? -50 : -100}
              max={prop === "blur" ? 100 : prop === "spread" ? 50 : 100}
              step={1}
            />
          ))}
          {type !== "text" && (
            <CustomSelect
              text={"Posição"}
              value={shadow?.inset ? "inset" : ""}
              onChange={toggleInset}
              options={[
                { value: "false", label: "Contorno" },
                { value: "inset", label: "Interno" },
              ]}
            />
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export const AddFaqItems = () => {
  const [expanded, setExpanded] = useState(false);

  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addItem = () => {
    setProp((props) => {
      if (!props.items) {
        props.items = [];
      }
      props.items.push({
        title: `Nova pergunta`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      });
    });
  };

  const duplicateItem = (index) => {
    setProp((props) => {
      const newItem = { ...props.items[index] };
      props.items.splice(index + 1, 0, newItem);
    });
  };

  const removeItem = (index) => {
    setProp((props) => {
      props.items.splice(index, 1);
    });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        {(props.items || []).map((item, index) => (
          <Accordion
            disableGutters
            sx={{
              backgroundColor: "transparent",
              color: "#d5d8dc",
              boxShadow: "none",
              border: "1px solid #3f444b",
              padding: "0",
              width: "100%",
            }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              id={`panel${index}bh-header`}
              sx={{
                backgroundColor: "transparent",
                fontSize: "14px",
                fontWeight: "700",
                padding: "0",
                paddingLeft: "10px",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                minHeight: "unset",
                "&.Mui-expanded": {
                  minHeight: "unset",
                  borderBottom: "1px solid #3f444b",
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </Typography>
                <Box>
                  <IconButton
                    sx={{
                      borderLeft: "1px solid #3f444b",
                      borderRight: "1px solid #3f444b",
                      borderRadius: 0,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateItem(index);
                    }}
                  >
                    <ContentCopy
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                  >
                    <Close
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "block",
                padding: "10px",
              }}
            >
              <Box display="flex" flexDirection="column" gap="10px">
                <CustomTextInput
                  text="Title"
                  value={item.title}
                  onChange={(e) =>
                    setProp((props) => {
                      props.items[index].title = e.target.value;
                    })
                  }
                />
                <CustomTextInput
                  text="Content"
                  value={item.content}
                  onChange={(e) =>
                    setProp((props) => {
                      props.items[index].content = e.target.value;
                    })
                  }
                  multiline
                  rows={4}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Button
        color="primary"
        onClick={addItem}
        sx={{
          mt: 2,
          backgroundColor: "#3f444b",
          color: "#d5d8dc",
          fontWeight: "600",
          fontSize: "12px",
          padding: "6px 16px",
          "&:hover": {
            backgroundColor: "#333",
          },
          textTransform: "none",
        }}
      >
        Adicionar item
      </Button>
    </Box>
  );
};

export const AddFormItems = () => {
  const [expanded, setExpanded] = useState(false);

  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addItem = () => {
    setProp((props) => {
      if (!props.items) {
        props.items = [];
      }
      props.items.push({
        type: "text",
        label: "Novo Item",
        placeholder: "Novo item",
        required: false,
      });
    });
  };

  const duplicateItem = (index) => {
    setProp((props) => {
      const newItem = { ...props.items[index] };
      props.items.splice(index + 1, 0, newItem);
    });
  };

  const removeItem = (index) => {
    setProp((props) => {
      props.items.splice(index, 1);
    });
  };

  const updateItem = (index, key, value) => {
    setProp((props) => {
      props.items[index][key] = value;
    });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        {(props.items || []).map((item, index) => (
          <Accordion
            disableGutters
            sx={{
              backgroundColor: "transparent",
              color: "#d5d8dc",
              boxShadow: "none",
              border: "1px solid #3f444b",
              padding: "0",
              width: "100%",
            }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              id={`panel${index}bh-header`}
              sx={{
                backgroundColor: "transparent",
                fontSize: "14px",
                fontWeight: "700",
                padding: "0",
                paddingLeft: "10px",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                minHeight: "unset",
                "&.Mui-expanded": {
                  minHeight: "unset",
                  borderBottom: "1px solid #3f444b",
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  {item.label}
                </Typography>
                <Box>
                  <IconButton
                    sx={{
                      borderLeft: "1px solid #3f444b",
                      borderRight: "1px solid #3f444b",
                      borderRadius: 0,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateItem(index);
                    }}
                  >
                    <ContentCopy
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                  >
                    <Close
                      sx={{ color: "#d5d8dc", width: "16px", height: "16px" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "block",
                padding: "10px",
              }}
            >
              <Box display="flex" flexDirection="column" gap="10px">
                <CustomSelect
                  text="Tipo do input"
                  value={item.type}
                  onChange={(e) => updateItem(index, "type", e.target.value)}
                  options={[
                    { value: "text", label: "Texto" },
                    { value: "email", label: "Email" },
                    { value: "tel", label: "Telefone" },
                    { value: "custom", label: "Customizado" },
                  ]}
                  tooltipText={"Escolha o tipo do input"}
                />
                <CustomTextInput
                  text="Label"
                  value={item.label}
                  onChange={(e) => updateItem(index, "label", e.target.value)}
                  row
                />
                <CustomTextInput
                  text="Placeholder"
                  value={item.placeholder}
                  onChange={(e) =>
                    updateItem(index, "placeholder", e.target.value)
                  }
                  row
                />
                <CustomSwitch
                  text="Requerido"
                  checkedText="Sim"
                  uncheckedText="Não"
                  value={props.required}
                  onChange={(checked) => updateItem(index, "required", checked)}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Button
        color="primary"
        onClick={addItem}
        sx={{
          mt: 2,
          backgroundColor: "#3f444b",
          color: "#d5d8dc",
          fontWeight: "600",
          fontSize: "12px",
          padding: "6px 16px",
          "&:hover": {
            backgroundColor: "#333",
          },
          textTransform: "none",
        }}
      >
        Adicionar item
      </Button>
    </Box>
  );
};

export const FileUpload = ({ value, valueVideo, onChange, title }) => {
  const classes = useStyles();

  const [imagePreviewUrl, setImagePreviewUrl] = useState(value || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChange(imageUrl);
      setImagePreviewUrl(imageUrl);
    }
  };

  return (
    <Grid item>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Typography variant="caption" color="inherit" lineHeight={1}>
          {title ? title : "Escolher imagem"}
        </Typography>

        <Tooltip title="Remover imagem" placement="right">
          <IconButton
            sx={{
              padding: 0,
            }}
            onClick={() => {
              onChange(null);
              setImagePreviewUrl(null);
            }}
          >
            <Close
              sx={{
                color: "#d5d8dc",
                width: "14px",
                height: "14px",
                padding: 0,
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <input
        accept="image/*, video/*"
        id="file-upload"
        type="file"
        className={classes.hiddenInput}
        onChange={handleImageChange}
      />

      <label htmlFor="file-upload" className={classes.uploadLabel}>
        <Box className={classes.uploadContainer}>
          {imagePreviewUrl ? (
            <img
              src={imagePreviewUrl}
              alt="Preview"
              className={classes.previewImage}
            />
          ) : (
            <IconButton component="span" sx={{ color: "#d5d8dc" }}>
              <Add fontSize="small" />
            </IconButton>
          )}
        </Box>
      </label>
    </Grid>
  );
};

export const TabOptions = ({ title, children, typeStyle }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingBottom: 2,
        marginBottom: 2,
      }}
    >
      {title && (
        <Typography variant="caption" color="inherit">
          {title}
        </Typography>
      )}

      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="transparent"
        sx={{
          mt: 1,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          minHeight: "auto",
          color: "#fff !important",
          "& .Mui-selected": {
            backgroundColor: "#3f444b",
            fontWeight: "bold",
          },
        }}
      >
        <Tab
          label="Normal"
          {...a11yProps(0)}
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            minWidth: "auto",
            width: "50%",
            padding: "3px",
            minHeight: "auto",
            textTransform: "none",
            color: "#fff !important",
            fontSize: "12px",
          }}
        />
        <Tab
          label="Hover"
          {...a11yProps(1)}
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            minWidth: "auto",
            width: "50%",
            textTransform: "none",
            color: "#fff !important",
            padding: "3px",
            minHeight: "auto",
            fontSize: "12px",
          }}
        />
      </Tabs>

      {children.map((child, index) => (
        <TabPannel key={index} value={tabValue} index={index}>
          {child}
        </TabPannel>
      ))}
    </Box>
  );
};

export const CustomLinkedValues = ({
  text,
  values,
  onChange,
  options,
  tooltipText,
  nolink,
  disableUnits = false,
  disableDeviceView = false,
}) => {
  const classes = useStyles();
  const { deviceView } = useResponsiveMode();
  const [linked, setLinked] = useState(true);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const initialUnitDesktop =
    (options[0]?.value &&
      values[options[0]?.value]?.toString().match(/[a-zA-Z%]+$/)?.[0]) ||
    "px";

  const initialUnitMobile =
    (options[0]?.value &&
      values[`mobile${capitalizeFirstLetter(options[0]?.value)}`]
        ?.toString()
        .match(/[a-zA-Z%]+$/)?.[0]) ||
    "px";

  const [currentUnitDesktop, setCurrentUnitDesktop] =
    useState(initialUnitDesktop);

  const [currentUnitMobile, setCurrentUnitMobile] = useState(initialUnitMobile);

  const getValuesForDevice = (deviceView, values) =>
    options.reduce((acc, { value }) => {
      const key =
        deviceView === "desktop"
          ? value
          : `mobile${capitalizeFirstLetter(value)}`;
      acc[value] = values[key] || 0;
      return acc;
    }, {});

  const [localValues, setLocalValues] = useState(() =>
    getValuesForDevice(deviceView, values)
  );

  useEffect(() => {
    setLocalValues(getValuesForDevice(deviceView, values));
  }, [values, options, deviceView]);

  const updateValues = (newValues) => {
    options.forEach(({ value }) => {
      const key =
        deviceView === "desktop"
          ? value
          : `mobile${capitalizeFirstLetter(value)}`;
      onChange((props) => {
        props[key] = newValues[value];
      });
    });
  };

  const handleInputChange = (option, value) => {
    const newUnit =
      deviceView === "desktop" ? currentUnitDesktop : currentUnitMobile;
    const newValues = { ...localValues, [option]: `${value}${newUnit}` };

    if (linked) {
      Object.keys(newValues).forEach(
        (key) => (newValues[key] = `${value}${newUnit}`)
      );
    }

    setLocalValues(newValues);
    updateValues(newValues);
  };

  const handleIconButtonClick = () => {
    setLinked(!linked);

    const resetValues = options.reduce((acc, { value }) => {
      acc[value] = 0;
      return acc;
    }, {});

    setLocalValues(resetValues);
    updateValues(resetValues);
  };

  const handleUnitChange = (event) => {
    const newUnit = event.target.value;

    const updatedValues = options.reduce((acc, { value }) => {
      acc[value] = `${parseFloat(localValues[value])}${newUnit}`;
      return acc;
    }, {});

    if (deviceView === "desktop") {
      setCurrentUnitDesktop(newUnit);
    } else {
      setCurrentUnitMobile(newUnit);
    }

    setLocalValues(updatedValues);
    updateValues(updatedValues);
  };

  const units = ["px", "%", "rem", "vw"];

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box alignItems="center">
          <Typography variant="caption" color="inherit">
            {text}
          </Typography>
          <DeviceViewSelect />
        </Box>

        <Tooltip title="Unidade de medida" placement="right">
          <FormControl
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                padding: "5px",
                fontSize: "12px",
                border: "none",
                "& fieldset": {
                  borderColor: "transparent",
                  textAlign: "center",
                },
                "&:hover fieldset": {
                  borderColor: "#333",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: 0,
                paddingRight: "0 !important",
              },
            }}
          >
            <Select
              value={
                deviceView === "desktop"
                  ? currentUnitDesktop
                  : currentUnitMobile
              }
              onChange={handleUnitChange}
              IconComponent={() => null}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#333333",
                    "& .MuiMenuItem-root": {
                      color: "#fff",
                      fontSize: "12px",
                      padding: "4px 8px",
                      textAlign: "center",
                      justifyContent: "center",
                      paddingRight: "0 important",
                    },
                  },
                },
              }}
            >
              {units.map((unit, index) => (
                <MenuItem key={index} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Tooltip>
      </Box>

      <Box display="flex" alignItems="start" justifyContent="space-between">
        {options.map((option, index) => (
          <Box
            display={"flex"}
            alignItems="center"
            key={index}
            flexDirection={"column"}
          >
            <TextField
              key={index}
              variant="outlined"
              type="number"
              value={
                parseFloat(localValues[option.value]) ||
                localValues[option.value] === 0
                  ? parseFloat(localValues[option.value])
                  : localValues[option.value]
              }
              placeholder={
                parseFloat(localValues[option.value]) ||
                localValues[option.value] === 0
                  ? parseFloat(localValues[option.value])
                  : localValues[option.value]
              }
              onChange={(e) =>
                handleInputChange(
                  option.value,
                  parseInt(e.target.value, 10) || 0
                )
              }
              className={`${classes.customInput} ${classes.spinButton}`}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "0px",
                },
                " & .MuiInputBase-input": {
                  textAlign: "center",
                },
              }}
            />
            <Typography
              variant="caption"
              gutterBottom
              color="inherit"
              fontSize={10}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
        {!nolink ? (
          <Tooltip title="Relacionar todos os valores" placement="right">
            <IconButton
              onClick={handleIconButtonClick}
              sx={{
                color: linked ? "#d5d8dc" : "grey",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxSizing: "border-box",
                borderRadius: "0px",
                padding: "5px 5px 4px 4px",

                "& svg": {
                  width: "16px",
                  height: "16px",
                },
              }}
            >
              {linked ? <Link /> : <LinkOff />}
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
    </Box>
  );
};

export const CustomButtonGroup = ({
  text,
  value,
  mobileValue,
  onChange,
  mobileOnChange,
  options,
  tooltipText,
  fullWidth,
  children,
}) => {
  const { deviceView } = useResponsiveMode();
  const [showChildren, setShowChildren] = useState(false);

  const handleChange = (event, newValue) => {
    if (newValue === "more-options") {
      setShowChildren(true);
    } else {
      setShowChildren(false);
      if (deviceView === "mobile") {
        mobileOnChange(event, newValue);
      } else {
        onChange(event, newValue);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: fullWidth ? "row" : "column",
          alignItems: fullWidth ? "center" : "start",
          justifyContent: fullWidth ? "space-between" : "start",
        }}
      >
        <Box display="flex" alignItems="center">
          <Tooltip title={tooltipText} placement="top">
            <Typography variant="caption" color="inherit">
              {text}
            </Typography>
          </Tooltip>

          <DeviceViewSelect />
        </Box>

        <ToggleButtonGroup
          value={
            deviceView === "mobile"
              ? mobileValue === "more-options"
                ? "more-options"
                : mobileValue
              : value === "more-options"
              ? "more-options"
              : value
          }
          exclusive
          onChange={handleChange}
          sx={{
            width: fullWidth ? "auto" : "100%",
            justifyContent: "space-between",
            "& .Mui-selected": {
              backgroundColor: "rgba(255, 255, 255, 0.3) !important",
              borderColor: "rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
            },
            "& .MuiToggleButton-root": {
              borderColor: "rgba(255, 255, 255, 0.1)",
              padding: fullWidth ? "5px" : "5px 14px", // TODO: paddingX must not be fixed, it only works in justifyContent props
              "&.Mui-selected > svg": {
                fill: "#fff",
              },
              "& > svg": {
                width: "16px",
                height: "16px",
                fill: "#d5d8dc",
              },
            },
          }}
        >
          {options.map((option) => (
            <Tooltip
              title={option.tooltip ? option.tooltip : option.value}
              placement="top"
              key={option.value}
            >
              <ToggleButton
                value={option.value}
                aria-label={option.value}
                selected={
                  deviceView === "mobile"
                    ? mobileValue === option.value ||
                      (showChildren && option.value === "more-options")
                    : value === option.value ||
                      (showChildren && option.value === "more-options")
                }
              >
                {option.icon}
              </ToggleButton>
            </Tooltip>
          ))}
        </ToggleButtonGroup>
      </Box>

      {showChildren && <Box>{children}</Box>}
    </>
  );
};

export const CustomTextInput = ({
  text,
  value,
  onChange,
  tooltipText,
  multiline,
  fullWidth,
  rows,
  type,
  id,
  shrink,
  placeholder,
  width,
}) => {
  const classes = useStyles();
  return (
    <Tooltip title={tooltipText ? tooltipText : ""} placement="right">
      <Box
        sx={{
          display: "flex",
          flexDirection: fullWidth ? "column" : "row",
          alignItems: fullWidth ? "start" : "center",
          justifyContent: fullWidth ? "start" : "space-between",
          width: fullWidth ? "100%" : "50%",
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          sx={{ mb: 0 }}
        >
          {text}
        </Typography>
        <TextField
          type={type ? type : ""}
          id={id ? id : ""}
          InputLabelProps={shrink ? true : false}
          variant="outlined"
          multiline={multiline ? true : false}
          rows={multiline ? rows : 1}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.customInput}
          sx={{
            padding: 0,
            width: fullWidth ? "100%" : width ? width : "50%",
          }}
          fullWidth={fullWidth}
        />
      </Box>
    </Tooltip>
  );
};

export const CustomAutocomplete = ({
  text,
  value,
  onChange,
  tooltipText,
  multiline,
  row,
  rows,
  type,
  id,
  shrink,
  placeholder,
  width,
  options,
}) => {
  const classes = useStyles();

  return (
    <Tooltip title={tooltipText ? tooltipText : ""} placement="right">
      <Box
        sx={{
          display: "flex",
          flexDirection: row ? "row" : "column",
          alignItems: row ? "center" : "start",
          justifyContent: row ? "space-between" : "start",
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          sx={{ mb: 0 }}
        >
          {text}
        </Typography>
        <Autocomplete
          rows={multiline ? rows : 1}
          multiline={multiline ? true : false}
          getOptionLabel={(option) => option.lebel}
          fullWidth={row ? false : true}
          value={options.map((el) => el.value)}
          options={options}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          renderTags={(selectedOptions, getTagProps) =>
            selectedOptions.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              value={value}
              type={type ? type : ""}
              id={id ? id : ""}
              InputLabelProps={shrink ? true : false}
              variant="outlined"
              placeholder={placeholder}
              onChange={onChange}
              className={classes.customInput}
              sx={{ padding: 0, width: width ? width : "100%" }}
              fullWidth={row ? false : true}
              {...params}
            />
          )}
        />
      </Box>
    </Tooltip>
  );
};

export const CustomSlider = ({
  text,
  value = "0px",
  onChange,
  mobileValue = "0px",
  mobileOnChange,
  min,
  max,
  step,
  disableUnits = false,
  disableDeviceView = false,
}) => {
  const classes = useStyles();
  const { deviceView } = useResponsiveMode();

  // console.log(value, mobileValue);

  const getDefaultUnit = (val) => val?.match(/[a-zA-Z%]+$/)?.[0] || "px";

  const initialConfigs = {
    desktop: {
      value,
      unit: disableUnits ? "" : getDefaultUnit(value),
    },
    mobile: {
      value: mobileValue,
      unit: disableUnits ? "" : getDefaultUnit(mobileValue),
    },
  };

  const [internalValue, setInternalValue] = useState(
    !disableDeviceView && deviceView === "mobile"
      ? initialConfigs.mobile.value
      : initialConfigs.desktop.value
  );

  const [currentUnit, setCurrentUnit] = useState(
    disableUnits
      ? ""
      : !disableDeviceView && deviceView === "mobile"
      ? initialConfigs.mobile.unit
      : initialConfigs.desktop.unit
  );

  const units = Object.keys(unitConfigs);

  useEffect(() => {
    const updatedValue =
      !disableDeviceView && deviceView === "mobile" ? mobileValue : value;
    const updatedUnit = disableUnits ? "" : getDefaultUnit(updatedValue);
    setInternalValue(updatedValue);
    setCurrentUnit(updatedUnit);
  }, [value, mobileValue, deviceView, disableUnits, disableDeviceView]);

  const handleChange = (event, newValue) => {
    const formattedValue = disableUnits
      ? newValue
      : `${newValue}${currentUnit}`;

    setInternalValue(formattedValue);

    if (deviceView === "desktop" || disableDeviceView) {
      onChange(event, formattedValue);
    } else {
      mobileOnChange(event, formattedValue);
    }
  };

  const handleSliderChange = (event, newValue) => {
    handleChange(event, newValue);
  };

  const handleInputChange = (event) => {
    const newValue =
      event.target.value === "" ? "" : Number(event.target.value);
    handleChange(event, newValue);
  };

  const handleUnitChange = (event) => {
    const newUnit = event.target.value;
    const numericValue = parseFloat(internalValue);
    setCurrentUnit(newUnit);
    handleChange({}, numericValue);
  };

  const unitConfig = unitConfigs[currentUnit] || {};
  const { _max = 1000, _step = 1, _min = 0 } = unitConfig;
  const computedMax = currentUnit === "%" ? _max : max || _max;

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box alignItems="center">
          <Typography variant="caption" color="inherit">
            {text}
          </Typography>
          {!disableDeviceView && <DeviceViewSelect />}
        </Box>

        {!disableUnits && (
          <Tooltip title="Unidade de medida" placement="right">
            <FormControl
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  padding: "5px",
                  fontSize: "12px",
                  border: "none",
                  "& fieldset": {
                    borderColor: "transparent",
                    textAlign: "center",
                  },
                  "&:hover fieldset": {
                    borderColor: "#333",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: 0,
                  paddingRight: "0 !important",
                },
              }}
            >
              <Select
                value={currentUnit}
                onChange={handleUnitChange}
                IconComponent={() => null}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "#333333",
                      "& .MuiMenuItem-root": {
                        color: "#fff",
                        fontSize: "12px",
                        padding: "4px 8px",
                        textAlign: "center",
                        justifyContent: "center",
                        paddingRight: "0 important",
                      },
                    },
                  },
                }}
              >
                {units.map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        )}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Slider
          value={parseFloat(internalValue) || 0}
          onChange={handleSliderChange}
          min={min || _min}
          max={computedMax}
          step={step || _step}
          valueLabelDisplay="auto"
          aria-labelledby={`${text}-slider`}
          sx={{
            width: "80%",
            "& .MuiSlider-thumb": {
              color: "#fff",
              width: "13px",
              height: "13px",
            },
            "& .MuiSlider-track": { color: "#333", height: "2px" },
            "& .MuiSlider-rail": { color: "#888", height: "2px" },
          }}
        />
        <TextField
          value={parseFloat(internalValue) || internalValue}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          className={classes.customInput}
          sx={{
            width: "50px",
          }}
        />
      </Box>
    </Box>
  );
};

export const CustomSelect = ({
  text,
  value,
  // mobileValue = "0px",
  // mobileOnChange,
  onChange,
  options,
  tooltipText,
  column,
}) => {
  const classes = useStyles();

  // const initialConfigs = {
  //   desktop: {
  //     value,
  //   },
  //   mobile: {
  //     value: mobileValue,
  //   },
  // };

  // const [internalValue, setInternalValue] = useState(
  //   deviceView === "mobile"
  //     ? initialConfigs.mobile.value
  //     : initialConfigs.desktop.value
  // );

  // const handleChange = (e) => {
  //   setInternalValue(e.target.value);
  //   if (deviceView === "desktop") {
  //     onChange(e);
  //   } else {
  //     mobileOnChange(e);
  //   }
  // };

  return (
    <Tooltip title={tooltipText ? tooltipText : ""} placement="right">
      <Box
        display={"flex"}
        width={"100%"}
        style={{
          flexDirection: column ? "column" : "row",
          justifyContent: column ? "" : "space-between",
          alignItems: column ? "start" : "center",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          marginBottom={0}
        >
          {text}
        </Typography>
        <FormControl
          variant="outlined"
          className={classes.customInput}
          sx={{ width: column ? "100%" : "50%" }}
        >
          <Select
            value={value}
            onChange={onChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#333333",
                  marginTop: "5px",
                  padding: "5px",
                  "& .MuiMenuItem-root": {
                    color: "#fff",
                    fontSize: "12px",
                    padding: "2px",
                  },
                },
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Tooltip>
  );
};
export const CustomTypeColorGradient = ({ props, setProp }) => {
  const initialValueBackgroundImage = {
    colorOne: "rgba(0, 0, 0, 1)",
    localizationOne: 0,
    colorTwo: "rgba(0, 0, 0, 1)",
    localizationTwo: 0,
    angle: 0,
    position: "center center",
  };

  const [backgroundImage, setBackgroundImage] = useState(
    initialValueBackgroundImage
  );

  const handleColorChange = (name, color) => {
    if (color && color.rgb) {
      setBackgroundImage((prev) => ({
        ...prev,
        [name]: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
      }));
    }
  };

  const handleSliderChange = (name, value) => {
    setBackgroundImage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const {
      colorOne,
      localizationOne,
      colorTwo,
      localizationTwo,
      angle,
      position,
    } = backgroundImage;
    if (!colorOne || !colorTwo) return;
    const loc1 = Math.min(100, Math.max(0, localizationOne));
    const loc2 = Math.min(100, Math.max(0, localizationTwo));
    const ang = Math.min(360, Math.max(0, angle));

    const backgroundImageString = `${
      props?.typeColor === "linear"
        ? `linear-gradient(${ang}deg, ${colorOne} ${loc1}%, ${colorTwo} ${loc2}%)`
        : `radial-gradient(at ${position}, ${colorOne} ${loc1}%, ${colorTwo} ${loc2}%)`
    }`;

    setProp((props) => (props.backgroundImage = backgroundImageString));
  }, [backgroundImage, setProp]);

  const renderColorSection = (
    name,
    key,
    backgroundColor,
    localization,
    keyLocation
  ) => (
    <Box display="flex" flexDirection="column" gap={1}>
      <ColorControl
        name={name}
        onChange={(e) => handleColorChange(key, e)}
        defaultValue={backgroundColor}
        value={backgroundColor}
      />
      <CustomSlider
        text={"Localização"}
        min={0}
        max={100}
        value={localization}
        onChange={(val) => handleSliderChange(keyLocation, val.target.value)}
        step={1}
        disableUnits
        tooltipText={"Escolha a altura da linha"}
      />
    </Box>
  );
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 2,
      }}
    >
      <Typography className={"subtitle"} paddingBottom={2} paddingTop={2}>
        Determine as posições exatas e os ângulos para cada ponto de
        interrupção, garantindo assim que o gradiente se ajuste adequadamente a
        telas de vários tamanhos.
      </Typography>

      {renderColorSection(
        "Primeira cor",
        "colorOne",
        backgroundImage.colorOne,
        backgroundImage.localizationOne,
        "localizationOne"
      )}

      {renderColorSection(
        "Segunda cor",
        "colorTwo",
        backgroundImage.colorTwo,
        backgroundImage.localizationTwo,
        "localizationTwo"
      )}

      <CustomSelect
        text="Tipo"
        value={props.typeColor}
        onChange={(e) => setProp((props) => (props.typeColor = e.target.value))}
        options={[
          { value: "linear", label: "Linear" },
          { value: "radical", label: "Radical" },
        ]}
      />
      {props.typeColor === "linear" ? (
        <CustomSlider
          text={"Ângulo"}
          min={0}
          max={360}
          step={1}
          value={backgroundImage.angle}
          onChange={(e, val) => handleSliderChange("angle", val)}
          disableUnits
          tooltipText={"Escolha o ângulo do gradiente"}
        />
      ) : null}
      {props.typeColor === "radical" ? (
        <CustomSelect
          text="Posição"
          value={backgroundImage.position}
          onChange={(e) =>
            setBackgroundImage((prev) => ({
              ...prev,
              position: e.target.value,
            }))
          }
          options={[
            {
              value: "center center",
              label: "Centro ao centro",
            },
            {
              value: "center left",
              label: "Centro à esquerda",
            },
            {
              value: "center right",
              label: "Centro à direita",
            },

            {
              value: "top center",
              label: "Superior ao centro",
            },
            { value: "top left", label: "Superior à esquerda" },
            { value: "topRight", label: "Superior à direita" },

            {
              value: "bottom center",
              label: "Inferiror ao centro",
            },
            {
              value: "bottom left",
              label: "Inferiror à esquerda",
            },
            {
              value: "bottom right",
              label: "Inferiror à direita",
            },
          ]}
        />
      ) : null}
    </Box>
  );
};
export const ColorControl = ({
  name,
  onChange,
  value,
  alpha,
  tooltipText,
  hoverOptions,
  popertation,
}) => {
  const [openFilterColor, setOpenFilterColor] = useState(null);

  const classes = useStyles();
  console.log("popertation", popertation);
  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpenFilterColor(null);
      }}
    >
      <Box zIndex={3}>
        <Box className={classes.box}>
          <Typography variant="caption" color="inherit">
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap="4px">
            {hoverOptions && (
              <Tooltip title={"Desabilitar hover"} placement="top">
                <IconButton
                  disabled={value === "initial"}
                  onClick={() => onChange({}, "initial")}
                  sx={{
                    padding: 0,

                    "&:disabled": {
                      "& svg": {
                        fill: "rgba(255, 255, 255, 0.3)",
                      },
                    },
                  }}
                >
                  <Clear sx={{ color: "#fff", width: 16, height: 16 }} />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title={"Transparente"} placement="top">
              <IconButton
                disabled={value === "transparent"}
                onClick={() => onChange({}, "transparent")}
                sx={{
                  padding: 0,

                  "&:disabled": {
                    "& svg": {
                      fill: "rgba(255, 255, 255, 0.3)",
                    },
                  },
                }}
              >
                <FormatColorReset
                  sx={{ color: "#fff", width: 16, height: 16 }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title={tooltipText ? tooltipText : value} placement="top">
              <div
                className={classes.border}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setOpenFilterColor(!openFilterColor);
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: value,
                  }}
                />
              </div>
            </Tooltip>
          </Box>
        </Box>
        {openFilterColor ? (
          <Grow in={openFilterColor}>
            <div
              // onMouseLeave={() => {
              //   setOpenFilterColor(false);
              // }}

              className={
                popertation ? classes.pickerWrapperPop : classes.pickerWrapper
              }
            >
              <ChromePicker
                color={value}
                onChange={(color) => {
                  onChange(color, color.hex);
                }}
                className={classes.picker}
              />
            </div>
          </Grow>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export const CustomSwitch = ({
  text,
  value,
  onChange,
  tooltipText,
  checkedText,
  uncheckedText,
}) => {
  return (
    <Tooltip title={tooltipText || ""} placement="right">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="caption" color="inherit">
          {text}
        </Typography>
        <Switch
          sx={{
            width: "54px",
            padding: 0,
            height: "20px",
            borderRadius: 20 / 2,
            transitionDuration: "300ms",
            "& .MuiSwitch-switchBase": {
              padding: 0,
              "&.Mui-checked": {
                transform: "translateX(34px)",
                color: "#d5d8dc",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#625CF3",
                  opacity: 1,
                  border: 0,
                  "&:before": {
                    content: `'${checkedText || "On"}'`,
                    display: "block",
                    lineHeight: "18px",
                    color: "#d5d8dc",
                    fontSize: 10,
                    textAlign: "start",
                    marginLeft: "8px",
                  },
                },
              },
              "& + .MuiSwitch-track": {
                backgroundColor: "#333",
                opacity: 1,
                border: 0,
                "&:before": {
                  content: `'${uncheckedText || "Off"}'`,
                  display: "block",
                  lineHeight: "18px",
                  color: "#d5d8dc",
                  fontSize: 10,
                  textAlign: "end",
                  marginRight: "5px",
                },
              },
            },
            "& .MuiSwitch-thumb": {
              width: "20px",
              height: "20px",
              padding: 0,
            },
          }}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          inputProps={{ "aria-label": "custom switch" }}
        />
      </Box>
    </Tooltip>
  );
};

export const DeviceViewSelect = () => {
  const { deviceView, setDeviceView } = useResponsiveMode();

  return (
    <FormControl
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "5px",
          fontSize: "12px",
          border: "none",
          "& fieldset": {
            borderColor: "transparent",
            textAlign: "center",
          },
          "&:hover fieldset": {
            borderColor: "#333",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
        "& .MuiOutlinedInput-input": {
          padding: 0,
          paddingRight: "0 !important",
          "& svg": {
            width: "14px",
            height: "14px",
            fill: "#fff",
          },
        },
      }}
    >
      <Select
        value={deviceView}
        onChange={(e) => setDeviceView(e.target.value)}
        IconComponent={() => null}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#333333",
              "& .MuiMenuItem-root": {
                color: "#fff",
                fontSize: "12px",
                padding: "6px 6px",
                textAlign: "center",
                justifyContent: "center",
                paddingRight: "0 important",
              },
              "& svg": {
                width: "14px",
                height: "14px",
                fill: "#fff",
              },
            },
          },
        }}
      >
        <MenuItem value="desktop">
          <Tooltip title="Desktop" placement="right">
            <Tv />
          </Tooltip>
        </MenuItem>
        {/* <MenuItem value="tablet">
          <Tooltip title="Tablet" placement="right">
            <TabletMac />
          </Tooltip>
        </MenuItem> */}
        <MenuItem value="mobile">
          <Tooltip title="Mobile" placement="right">
            <PhoneIphone />
          </Tooltip>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export const CustomAccordion = ({ title, children, defaultExpanded }) => {
  return (
    <CustomAccordionRoot>
      <CustomAccordionBase defaultExpanded={defaultExpanded}>
        <CustomAccordionSummary
          expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {title}
        </CustomAccordionSummary>
        <CustomAccordionDetails>{children}</CustomAccordionDetails>
      </CustomAccordionBase>
    </CustomAccordionRoot>
  );
};

export const CustomInput = ({
  text,
  placeholder,
  tooltip,
  icon,
  setOpen,
  open,
  classes,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    style={{ display: "flex", gap: 5 }}
  >
    <Typography variant="caption" color="inherit" marginBottom={0}>
      {text}
    </Typography>
    <Box display="flex" alignItems="center" flexDirection="row" width="100%">
      <TextField
        fullWidth
        placeholder={placeholder || ""}
        sx={{
          "& .MuiInputBase-placeholder": {
            color: "#d5d8dc",
          },
          "& .MuiInputBase-root": {
            borderRadius: "0px",
          },
        }}
        variant="outlined"
        className={`${classes.customInput} ${classes.spinButton}`}
      />
      <Tooltip title={tooltip || ""} placement="top">
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxSizing: "border-box",
            borderRadius: "0px",
            padding: "5px 5px 4px 4px",
            "& svg": {
              width: "16px",
              height: "16px",
            },
          }}
        >
          {icon ? icon : <SettingsIcon fontSize="small" color="secondary" />}
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);

export const CustomCheckbox = ({ options, value, onChange }) => {
  const handleChangeCheckbox = (event) => {
    const newValue = options.reduce((acc, option) => {
      acc[option.value] = option.value === event.target.value;
      return acc;
    }, {});

    onChange(newValue);
  };

  return (
    <>
      {options?.map((option, index) => (
        <Box key={index}>
          <FormControlLabel
            style={{ display: "flex", alignItems: "center" }}
            control={
              <Checkbox
                size="small"
                checked={value[option.value] || false}
                sx={{ color: "#fff", cursor: "pointer" }}
                onChange={handleChangeCheckbox}
                value={option.value}
              />
            }
            label={
              <Typography variant="caption" color="inherit">
                {option.label}
              </Typography>
            }
          />
        </Box>
      ))}
    </>
  );
};

export const TextFieldControl = ({
  name,
  label,
  icon,
  value,
  defaultValue,
  onChange,
  helperText,
  multiline,
  error,
}) => {
  return (
    <>
      <Box>
        <Typography variant="caption" color="inherit">
          Código HTML do Vídeo:
        </Typography>
        <Tooltip title={name} placement="top">
          <TextField
            error={error}
            multiline={multiline}
            value={value}
            helperText={helperText}
            defaultValue={defaultValue}
            onChange={(e) => {
              onChange(e, e.target.value);
            }}
            size={multiline ? "large" : "small"}
            variant="outlined"
            fullWidth
            placeholder={name}
            InputProps={{
              startAdornment: label ? (
                <Typography
                  variant="body2"
                  style={{ opacity: 0.5, fontSize: 12, margin: "0 10px" }}
                  gutterBottom
                >
                  {label}
                </Typography>
              ) : (
                icon
              ),
            }}
          />
        </Tooltip>
      </Box>
    </>
  );
};

export const CustomCollapse = ({
  children,
  text,
  buttons = [],
  defaultOpenSection = null,
  placeholder = "",
  tooltip = "",
  icon = (
    <SettingsIcon color="secondary" sx={{ width: "28px", height: "0px" }} />
  ),
  type,
  row = false,
  onChange,
  value,
}) => {
  const [openSection, setOpenSection] = useState(defaultOpenSection);
  const classes = useStyles();
  const handleClick = (buttonValue) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === buttonValue ? null : buttonValue
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: row ? "row" : "column",
          justifyContent: "space-between",
          alignItems: row ? "center" : "",
          width: "100%",
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          sx={{ mb: 0 }}
        >
          {text}
        </Typography>
        <Box display="flex" alignItems="center">
          {type === "TextField" && (
            <CustomTextInput
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              fullWidth
            />
          )}

          {buttons.map((button, index) => (
            <Tooltip key={index} title={button.tooltip} placement="top">
              <IconButton
                onClick={() => handleClick(button.value)}
                sx={{
                  backgroundColor:
                    openSection === button.value ? "#3f444b" : "",
                  color: openSection ? "#d5d8dc" : "grey",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxSizing: "border-box",
                  borderRadius: "3px",
                  padding: "5px 5px 4px 4px",
                  width: "28px",
                  height: "28px",
                }}
              >
                <Icon sx={{ color: "#fff" }}>{button.icon}</Icon>
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
      {buttons.map((button, index) => (
        <Collapse
          key={index}
          in={openSection === button.value}
          timeout="auto"
          unmountOnExit
          sx={{ "&:before, &:after": { display: "none" } }}
        >
          <Box padding={0} sx={{ paddingTop: 1 }}>
            {button.content}
          </Box>
        </Collapse>
      ))}
    </Box>
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
  pickerWrapper: {
    position: "absolute",
    zIndex: 4,
    top: 160,
    right: 15,
    backgroundColor: "#232325",
  },
  pickerWrapperPop: {
    position: "absolute",
    zIndex: 4,
    top: 40,
    right: 15,
    backgroundColor: "#232325",
  },
  picker: {
    backgroundColor: "#232325 !important",
    padding: "10px",
    borderRadius: "8px",
    "& svg": {
      fill: "#d5d8dc !important",
    },
    "& svg:hover": {
      fill: "#fff !important",

      backgroundColor: "#232325 !important",
    },
    "& input": {
      color: "#fff !important",
      backgroundColor: "#232325 !important",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  tab: {
    "& > svg": {
      width: "16px",
      height: "16px",
      fill: "#d5d8dc",
    },
  },
  uploadContainer: {
    marginTop: "4px",
    width: "100%",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2e32",
    color: "#d5d8dc",
    border: "1px dashed rgba(255, 255, 255, 0.2)",
    borderRadius: "2px",
    cursor: "pointer",
    position: "relative",
  },
  hiddenInput: {
    display: "none",
  },
  uploadLabel: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
  },
  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "2px",
  },
  border: {
    height: "27px",
    width: "27px",
    border: "1px solid #3f444b !important",
    borderRadius: "3px !important",
  },
});

// export const CustomAccordion = styled((props) => <Accordion {...props} />)`
//   background-color: transparent !important;
//   color: #d5d8dc;
//   box-shadow: none;
//   border: none;

//   &:before {
//     display: none;
//   }

//   &.Mui-expanded {
//     margin: 0;
//   }
// `;

// export const CustomAccordionSummary = styled(AccordionSummary)`
//   background-color: transparent;
//   /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
//   min-height: 48px;
//   font-size: 14px;
//   padding: 0;

//   & .MuiAccordionSummary-content {
//     margin: 0;
//   }

//   &.Mui-expanded {
//     // min-height: 48px;
//   }
// `;

// export const CustomAccordionDetails = styled(AccordionDetails)`
//   display: block;
//   padding: 0;
//   margin-bottom: 1rem;
// `;

// export const CustomAccordionRoot = styled("div")`
//   width: 100%;
//   background-color: transparent !important;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// `;

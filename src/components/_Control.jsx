import { ChromePicker } from "react-color";
import { useState, useEffect } from "react";
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
} from "@mui/material";
import {
  Link,
  LinkOff,
  Add,
  ExpandMore,
  Tv,
  PhoneIphone,
  FormatColorReset,
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

export const FileUpload = ({ value, onChange, title }) => {
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
      <Typography variant="caption" gutterBottom color="inherit">
        {title ? title : "Escolher imagem"}
      </Typography>

      <input
        accept="image/*"
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
        <Typography variant="caption" gutterBottom color="inherit">
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
          <Typography variant="caption" gutterBottom color="inherit">
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
}) => {
  const { deviceView } = useResponsiveMode();
  const handleChange = (event, newValue) => {
    if (deviceView === "mobile") {
      mobileOnChange(event, newValue);
    } else {
      onChange(event, newValue);
    }
  };

  return (
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
          <Typography variant="caption" gutterBottom color="inherit">
            {text}
          </Typography>
        </Tooltip>

        <DeviceViewSelect />
      </Box>

      <ToggleButtonGroup
        value={deviceView === "mobile" ? mobileValue : value}
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
                  ? mobileValue === option.value
                  : value === option.value
              }
            >
              {option.icon}
            </ToggleButton>
          </Tooltip>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
const BoxShadowDemo = () => {
  const [boxShadow, setBoxShadow] = useState("0px 0px 5px rgba(0, 0, 0, 0.3)");

  return <div></div>;
};

export const CustomTextInput = ({
  text,
  value,
  onChange,
  tooltipText,
  multiline,
  row,
  placeholder,
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
        <TextField
          variant="outlined"
          multiline={multiline ? true : false}
          rows={multiline ? 4 : 1}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.customInput}
          sx={{ padding: 0 }}
          fullWidth={row ? false : true}
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
    deviceView === "desktop" || disableUnits
      ? initialConfigs.desktop.value
      : initialConfigs.mobile.value
  );

  const [currentUnit, setCurrentUnit] = useState(
    disableUnits
      ? ""
      : deviceView === "desktop"
      ? initialConfigs.desktop.unit
      : initialConfigs.mobile.unit
  );

  const units = Object.keys(unitConfigs);

  useEffect(() => {
    const updatedValue =
      disableUnits || deviceView === "desktop" ? value : mobileValue;
    const updatedUnit = disableUnits ? "" : getDefaultUnit(updatedValue);
    setInternalValue(updatedValue);
    setCurrentUnit(updatedUnit);
  }, [value, mobileValue, deviceView, disableUnits]);

  const handleChange = (event, newValue) => {
    const formattedValue = disableUnits
      ? newValue
      : `${newValue}${currentUnit}`;

    setInternalValue(formattedValue);

    if (disableUnits || deviceView === "desktop") {
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
          <Typography variant="caption" gutterBottom color="inherit">
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
  onChange,
  options,
  tooltipText,
  column,
}) => {
  const classes = useStyles();
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

export const ColorControl = ({ name, onChange, value, alpha, tooltipText }) => {
  const [openFilterColor, setOpenFilterColor] = useState(false);
  const classes = useStyles();

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpenFilterColor(false);
      }}
    >
      <Box>
        <Box className={classes.box}>
          <Typography variant="caption" gutterBottom color="inherit">
            {name}
          </Typography>
          <Box display="flex" alignItems="center">
            <Tooltip title={"Transparente"} placement="top">
              <IconButton
                disabled={value === "transparent"}
                onClick={() => onChange({}, "transparent")}
                sx={{
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
                onClick={() => {
                  setOpenFilterColor(true);
                }}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  position: "relative",
                  width: 16,
                  height: 16,
                  backgroundColor: value,
                }}
              />
            </Tooltip>
          </Box>
        </Box>
        {openFilterColor && (
          <Grow in={openFilterColor}>
            <div
              // onMouseLeave={() => {
              //   setOpenFilterColor(false);
              // }}
              className={classes.pickerWrapper}
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
        )}
      </Box>
    </ClickAwayListener>
  );
};

export const CustomSwitch = ({
  text,
  value,
  mobileOnChange,
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
        <Typography variant="caption" gutterBottom color="inherit">
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
                    content: `'${checkedText}'`,
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
                  content: `'${uncheckedText}'`,
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

const CustomInput = ({
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
    <Typography variant="caption" gutterBottom color="inherit" marginBottom={0}>
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

const OptionsList = ({ options, value, onChange }) => (
  <>
    {options?.map((option, index) => (
      <Box key={index}>
        <FormControlLabel
          style={{ display: "flex", alignItems: "center" }}
          control={
            <Checkbox
              size="small"
              checked={value}
              onChange={onChange}
              value={value}
            />
          }
          label={
            <Typography variant="caption" gutterBottom color="inherit">
              {option.label}
            </Typography>
          }
        />
      </Box>
    ))}
  </>
);

const IconButtonGroup = ({
  optionsButton,
  openCollapse,
  setOpenCollapse,
  text,
  boxShadow,
  setBoxShadow,
}) => (
  <Box width="100%" style={{ display: "flex", flexDirection: "column" }}>
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          marginBottom={0}
        >
          {text}
        </Typography>
      </Box>
      <Box>
        {optionsButton?.map((option, index) => (
          <Tooltip key={index} title={option.label || ""} placement="top">
            <IconButton
              onClick={option.onClick}
              sx={{
                backgroundColor: option.value === "boxShadow" ? "#3f444b" : "",
                border:
                  option.value === "none" || "boxShadow"
                    ? ""
                    : "1px solid rgba(255, 255, 255, 0.1)",
                boxSizing: "border-box",
                borderRadius: option.value === "boxShadow" ? "3px" : "0px",
                padding: "5px 5px 4px 4px",
                "& svg": {
                  width: "14px",
                  height: "14px",
                  transform:
                    option.value === "none"
                      ? "translateY(-0%) rotate(-40deg)"
                      : "",
                },
              }}
            >
              {option.icon}
            </IconButton>
          </Tooltip>
        ))}{" "}
      </Box>
    </Box>

    <Box>
      <CustomCollapseBoxShadow
        openCollapse={openCollapse}
        setOpenCollapse={setOpenCollapse}
        boxShadow={boxShadow}
        setBoxShadow={setBoxShadow}
      />
    </Box>
  </Box>
);

const CustomCollapseBoxShadow = ({ openCollapse, boxShadow, setBoxShadow }) => {
  const handleColorChange = (color) => {
    setBoxShadow({
      ...boxShadow,
      color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
    });
  };
  const handleSliderChange = (prop) => (event, newValue) => {
    setBoxShadow({ ...boxShadow, [prop]: newValue });
  };
  const toggleInset = () => {
    setBoxShadow({ ...boxShadow, inset: !boxShadow.inset });
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <Grid item mt={2}>
          <ColorControl
            name={"Cor da sobra"}
            onChange={handleColorChange}
            defaultValue={boxShadow?.color}
            value={boxShadow?.color}
          />
        </Grid>
        <Grid item mt={2}>
          <CustomSlider
            disableUnits
            disableDeviceView
            text="Horizontal"
            value={boxShadow?.horizontal}
            onChange={handleSliderChange("horizontal")}
            min={-100}
            max={100}
            step={1}
            tooltipText={"Ajuste o valor horizontal da sombra"}
          />
        </Grid>

        <Grid item mt={2}>
          <CustomSlider
            disableUnits
            disableDeviceView
            text="Vertical"
            value={boxShadow?.vertical}
            onChange={handleSliderChange("vertical")}
            min={-100}
            max={100}
            step={1}
            tooltipText={"Ajuste o valor vertical da sombra"}
          />
        </Grid>

        <Grid item mt={2}>
          <CustomSlider
            disableUnits
            disableDeviceView
            text="Desfoque"
            value={boxShadow?.blur}
            onChange={handleSliderChange("blur")}
            min={0}
            max={100}
            step={1}
            tooltipText={"Ajuste o valor de desfoque da sombra"}
          />
        </Grid>

        <Grid item mt={2}>
          <CustomSlider
            disableUnits
            disableDeviceView
            text="Distância"
            value={boxShadow?.spread}
            onChange={handleSliderChange("spread")}
            min={-50}
            max={50}
            step={1}
            tooltipText={"Ajuste a distância da sombra"}
          />
        </Grid>

        <Grid item mt={2}>
          <CustomSelect
            text={"Posição"}
            value={boxShadow?.inset ? "inset" : ""}
            onChange={toggleInset}
            options={[
              { value: "", label: "Contorno" },
              { value: "inset", label: "Interno" },
            ]}
          />
        </Grid>
      </Collapse>
    </Box>
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
        <Typography variant="caption" gutterBottom color="inherit">
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
  text,
  options,
  type,
  value,
  onChange,
  tooltip,
  icon,
  placeholder,
  optionsButton,
  propype,
  boxShadow,
  setBoxShadow,
  onclick,
  openCollapse,
  setOpenCollapse,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {type === "textField" ? (
        <CustomInput
          text={text}
          placeholder={placeholder}
          tooltip={tooltip}
          icon={icon}
          setOpen={setOpen}
          open={open}
          classes={classes}
        />
      ) : (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={"row"}
          width="100%"
        >
          <IconButtonGroup
            optionsButton={optionsButton}
            setOpen={setOpen}
            open={open}
            text={text}
            propype={propype}
            openCollapse={openCollapse}
            setOpenCollapse={setOpenCollapse}
            boxShadow={boxShadow}
            setBoxShadow={setBoxShadow}
          />
        </Box>
      )}

      <Box width="100%">
        <Collapse in={open} timeout="auto" unmountOnExit>
          {type === "textField" && (
            <OptionsList options={options} value={value} onChange={onChange} />
          )}
        </Collapse>
      </Box>
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

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
} from "@mui/material";
import {
  Brush,
  Gradient,
  Link,
  LinkOff,
  Image,
  Add,
  ExpandMore,
} from "@mui/icons-material";
import { a11yProps } from "../utils/a11yProps";
import { TabPannel } from "./selectors/TabPannel";
import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomAccordionRoot,
} from "../components/editor/Toolbox";

export const FileUpload = ({ value, onChange }) => {
  const classes = useStyles();

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

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
        Image
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

export const TabOptions = ({ title, children }) => {
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
      <Typography variant="caption" gutterBottom color="inherit">
        {title}
      </Typography>

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

export const TabOptionsBackup = ({ title, children }) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setBackgroundImage(fileURL);
    }
  };

  return (
    <Box>
      <CustomAccordionRoot>
        <CustomAccordion defaultExpanded>
          <CustomAccordionSummary
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {title}
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="transparent"
              sx={{
                mt: 2,
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
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>
    </Box>
  );
};

// export const BackgroundType = ({ value, onChange }) => {
//   const [tabValue, setTabValue] = useState(0);
//   const classes = useStyles();

//   const handleChange = (event, newValue) => {
//     setTabValue(newValue);
//   };
//   return (
//     <Box>
//       <Typography variant="caption" gutterBottom color="inherit">
//         Background
//       </Typography>
//       <Box
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         width={"100%"}
//         display={"flex"}
//       >
//         <Typography variant="caption">Background Type</Typography>
//         <Tabs
//           value={tabValue}
//           onChange={handleChange}
//           indicatorColor="transparent"
//           sx={{
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             minHeight: "auto",
//             "& .Mui-selected": {
//               backgroundColor: "#3f444b",
//               "& > svg": {
//                 fill: "#fff",
//               },
//             },
//           }}
//         >
//           <Tooltip title="Solid Color" placement="top">
//             <Tab
//               icon={<Brush />}
//               {...a11yProps(0)}
//               className={classes.tab}
//               disableFocusRipple
//               disableRipple
//               disableTouchRipple
//               sx={{
//                 minWidth: "auto",
//                 padding: "5px",
//                 minHeight: "auto",
//               }}
//             />
//           </Tooltip>
//           <Tooltip title="Image" placement="top">
//             <Tab
//               icon={<Image />}
//               {...a11yProps(1)}
//               className={classes.tab}
//               disableFocusRipple
//               disableRipple
//               disableTouchRipple
//               sx={{
//                 minWidth: "auto",
//                 padding: "5px",
//                 minHeight: "auto",
//                 borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
//                 borderRight: "1px solid rgba(255, 255, 255, 0.1)",
//               }}
//             />
//           </Tooltip>
//         </Tabs>
//       </Box>
//       <TabPannel value={tabValue} index={0}>
//         <Grid item mt={4}>
//           <ColorControl
//             name={"Cor do fundo"}
//             onChange={onChange}
//             defaultValue={value}
//             value={value}
//           />
//         </Grid>
//       </TabPannel>
//       <TabPannel value={tabValue} index={1}>
//         <Grid item mt={4}>
//           Load image here
//         </Grid>
//       </TabPannel>
//     </Box>
//   );
// };

export const CustomLinkedValues = ({ text, values, onChange, options }) => {
  const classes = useStyles();
  const [linked, setLinked] = useState(true);
  const [currentUnit, setCurrentUnit] = useState("px");
  const [localValues, setLocalValues] = useState(
    options.reduce((acc, option) => {
      acc[option.value] = values[option.value] || 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    setLocalValues(
      options.reduce((acc, option) => {
        acc[option.value] = values[option.value] || 0;
        return acc;
      }, {})
    );
  }, [values, options]);

  const handleInputChange = (option, value) => {
    const newValues = { ...localValues, [option]: value };
    if (linked) {
      const syncedValue = value;
      Object.keys(newValues).forEach((key) => (newValues[key] = syncedValue));
    }
    setLocalValues(newValues);

    options.forEach((opt) => {
      console.log(newValues[opt.value], currentUnit);

      onChange((props) => {
        props[opt.value] = `${newValues[opt.value]}`;
      });
    });
  };

  const handleIconButtonClick = () => {
    const newLinkedState = !linked;
    setLinked(newLinkedState);

    const newValues = options.reduce((acc, option) => {
      acc[option.value] = 0;
      return acc;
    }, {});

    setLocalValues(newValues);

    options.forEach((opt) => {
      // console.log(newValues[opt.value]);
      onChange((props) => {
        props[opt.value] = newValues[opt.value];
      });
    });
  };

  const unities = ["px", "%", "rem", "vw"];

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tooltip title={text} placement="right">
          <Typography variant="caption" gutterBottom color="inherit">
            {text}
          </Typography>
        </Tooltip>

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
              onChange={(e) => setCurrentUnit(e.target.value)}
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
              {unities.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
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
              value={localValues[option.value]}
              placeholder={localValues[option.value]}
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
      </Box>
    </Box>
  );
};

export const CustomButtonGroup = ({
  text,
  value,
  onChange,
  options,
  tooltipText,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Tooltip title={tooltipText} placement="right">
        <Typography variant="caption" gutterBottom color="inherit">
          {text}
        </Typography>
      </Tooltip>

      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        sx={{
          "& .Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.3) !important",
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
          "& .MuiToggleButton-root": {
            borderColor: "rgba(255, 255, 255, 0.1)",
            padding: "5px",
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
            <ToggleButton value={option.value} aria-label={option.value}>
              {option.icon}
            </ToggleButton>
          </Tooltip>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export const CustomTextInput = ({
  text,
  value,
  onChange,
  tooltipText,
  multiline,
  row,
}) => {
  const classes = useStyles();
  return (
    <Tooltip title={tooltipText} placement="right">
      <Box
        sx={{
          display: "flex",
          flexDirection: row ? "row" : "column",
          alignItems: row ? "center" : "start",
          justifyContent: row ? "space-between" : "start",
        }}
      >
        <Typography variant="caption" gutterBottom color="inherit">
          {text}
        </Typography>
        <TextField
          variant="outlined"
          multiline={multiline ? true : false}
          rows={multiline ? 4 : 1}
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
  value,
  onChange,
  min,
  max,
  step,
  tooltipText,
}) => {
  const classes = useStyles();
  const [internalValue, setInternalValue] = useState(value);
  const [currentUnit, setCurrentUnit] = useState("px");
  const unities = ["px", "%", "rem", "vw"];

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleSliderChange = (event, newValue) => {
    setInternalValue(newValue);
    onChange(event, `${newValue}${currentUnit}`);
  };

  const handleInputChange = (event) => {
    const newValue =
      event.target.value === "" ? "" : Number(event.target.value);
    setInternalValue(newValue);
    onChange(event, `${newValue}${currentUnit}`);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tooltip title={tooltipText} placement="right">
          <Typography variant="caption" gutterBottom color="inherit">
            {text}
          </Typography>
        </Tooltip>

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
              onChange={(e) => setCurrentUnit(e.target.value)}
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
              {unities.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Tooltip>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Slider
          value={typeof internalValue === "number" ? internalValue : 0}
          onChange={handleSliderChange}
          min={min || 0}
          max={max || 100}
          step={step || 1}
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
          value={internalValue}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          className={classes.customInput}
          sx={{
            width: "50px",
            "& input": {
              textAlign: "center",
            },
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
}) => {
  const classes = useStyles();
  return (
    <Tooltip title={tooltipText} placement="right">
      <Box
        display={"flex"}
        width={"100%"}
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
          sx={{ width: "50%" }}
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

export const ColorControl = ({ name, onChange, value }) => {
  const [openFilterColor, setOpenFilterColor] = useState(false);

  const classes = useStyles();

  const handleHexChange = (e) => {
    let value = e.target.value;
    if (value.length < 10) {
      onChange({}, value);
    }
  };

  return (
    <>
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
            <Tooltip title={value} placement="top">
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
          {openFilterColor && (
            <Grow in={openFilterColor}>
              <div
                // onMouseLeave={() => {
                //   setOpenFilterColor(false);
                // }}
                className={classes.pickerWrapper}
              >
                <ChromePicker
                  disableAlpha
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
    </>
  );
};

export const CustomSwitch = ({ text, value, onChange, tooltipText }) => {
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
                    content: '"Hide"',
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
                  content: '"Show"',
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
          // onChange={onChange(checked ? "none" : "flex")}
          inputProps={{ "aria-label": "custom switch" }}
        />
      </Box>
    </Tooltip>
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
    borderRadius: "4px",
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
    borderRadius: "4px",
  },
});

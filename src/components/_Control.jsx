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
} from "@mui/material";
import {
  Brush,
  Gradient,
  Link,
  LinkOff,
  Image,
  Add,
} from "@mui/icons-material";
import { a11yProps } from "../utils/a11yProps";
import { TabPannel } from "./selectors/TabPannel";

export const FileUpload = ({ value, onChange }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const classes = useStyles();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("oi");
    if (file) {
      const fileURL = URL.createObjectURL(file);
      console.log(`url(${fileURL})`);
      setBackgroundImage(fileURL);
      onChange(fileURL);
    }
  };

  // const handleBackgroundImageChange = (fileURL) => {
  //   setProp((props) => (props.backgroundImage = `url(${fileURL})`));
  // };

  return (
    <Box>
      <Typography variant="caption" gutterBottom color="inherit">
        Image
      </Typography>
      <input
        accept="image/*"
        id="file-upload"
        type="file"
        className={classes.hiddenInput}
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload" className={classes.uploadLabel}>
        <Box className={classes.uploadContainer}>
          <IconButton component="span" sx={{ color: "#d5d8dc" }}>
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </label>
    </Box>
  );
};

export const TabOptions = ({ title, children }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="caption" gutterBottom color="inherit">
        {title}
      </Typography>

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
    </Box>
  );
};

export const TabOptionsBackup = ({ value, onChange }) => {
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

  console.log(backgroundImage);

  return (
    <Box>
      <Typography variant="caption" gutterBottom color="inherit">
        Background type
      </Typography>

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

      <TabPannel value={tabValue} index={0}>
        <Grid item mt={4}>
          <ColorControl
            name={"Color"}
            onChange={onChange}
            defaultValue={value}
            value={value}
          />

          <Box>
            <Typography variant="caption" gutterBottom color="inherit">
              Image
            </Typography>
            <input
              accept="image/*"
              id="file-upload"
              type="file"
              className={classes.hiddenInput}
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className={classes.uploadLabel}>
              <Box className={classes.uploadContainer}>
                <IconButton component="span" sx={{ color: "#d5d8dc" }}>
                  <Add fontSize="small" />
                </IconButton>
              </Box>
            </label>
          </Box>
        </Grid>
      </TabPannel>
      <TabPannel value={tabValue} index={1}>
        <Grid item mt={4}>
          Load image here
        </Grid>
      </TabPannel>
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
      onChange((props) => {
        props[opt.value] = newValues[opt.value];
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
      onChange((props) => {
        props[opt.value] = newValues[opt.value];
      });
    });
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Tooltip title={text} placement="right">
        <Typography variant="caption" gutterBottom color="inherit">
          {text}
        </Typography>
      </Tooltip>

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
}) => {
  return (
    <Tooltip title={tooltipText} placement="right">
      <Box>
        <Typography variant="caption" gutterBottom color="inherit">
          {text}
        </Typography>
        <TextField
          variant="outlined"
          multiline={multiline ? true : false}
          rows={multiline ? 4 : 1}
          value={value}
          onChange={onChange}
          sx={{
            padding: 0,
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
          }}
          fullWidth
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
  const [internalValue, setInternalValue] = useState(value);
  const classes = useStyles();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleSliderChange = (event, newValue) => {
    setInternalValue(newValue);
    onChange(event, newValue);
  };

  const handleInputChange = (event) => {
    const newValue =
      event.target.value === "" ? "" : Number(event.target.value);
    setInternalValue(newValue);
    onChange(event, newValue);
  };

  return (
    <Tooltip title={tooltipText} placement="right">
      <Box width="100%" display="flex" flexDirection="column">
        <Typography variant="caption" gutterBottom color="inherit">
          {text}
        </Typography>
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
    </Tooltip>
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
});

import { ChromePicker } from "react-color";
import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/base";
import { makeStyles } from "@mui/styles";
import { Tooltip, TextField, Grow, Icon, Select, MenuItem, FormControl, Typography, Box, Slider, ToggleButtonGroup, ToggleButton } from "@mui/material";

export const CustomButtonGroup = ({ text, value, onChange, options, tooltipText }) => {
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
        aria-label="text alignment"
        sx={{
          '& .Mui-selected': {
            backgroundColor: "rgba(255, 255, 255, 0.3) !important",
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '& .MuiToggleButton-root': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            padding: "5px",
            '&.Mui-selected > svg': {
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
          <Tooltip title={option.value} placement="top" key={option.value}>
            <ToggleButton value={option.value} aria-label={option.value}>
              {option.icon}
            </ToggleButton>
          </Tooltip>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export const CustomTextInput = ({ text, value, onChange, tooltipText, multiline }) => {
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
            '& .MuiOutlinedInput-root': {
              padding: '5px',
              fontSize: '12px',

              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.15)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
            },
            '& .MuiOutlinedInput-input': {
              padding: '0',
            },
          }}
          fullWidth
        />
      </Box>
    </Tooltip>
  )
}

export const CustomSlider = ({ text, value, onChange, min, max, step, tooltipText }) => {
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
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
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
            value={typeof internalValue === 'number' ? internalValue : 0}
            onChange={handleSliderChange}
            min={min || 0}
            max={max || 100}
            step={step || 1}
            valueLabelDisplay="auto"
            aria-labelledby={`${text}-slider`}
            sx={{
              width: '80%',
              '& .MuiSlider-thumb': { color: '#fff', width: '13px', height: '13px' },
              '& .MuiSlider-track': { color: '#333', height: '2px' },
              '& .MuiSlider-rail': { color: '#888', height: '2px' },
            }}
          />
          <TextField
            value={internalValue}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            className={classes.customInput}
            sx={{
              width: '50px',
              '& input': {
                textAlign: 'center',
              },
            }}
          />
        </Box>
      </Box>
    </Tooltip>
  );
};

export const CustomSelect = ({ text, value, onChange, options, tooltipText }) => {
  return (
    <Tooltip title={tooltipText} placement="right">
      <Box
        display={'flex'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant="caption" gutterBottom color="inherit" marginBottom={0}>
          {text}
        </Typography>
        <FormControl
          variant="outlined"
          sx={{
            width: '30%',
            '& .MuiOutlinedInput-root': {
              padding: '5px',
              fontSize: '12px',

              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.15)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
            },
            '& .MuiOutlinedInput-input': {
              padding: '0',
            },
          }}>
          <Select
            value={value}
            onChange={onChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#333333',
                  marginTop: '5px',
                  padding: '5px',
                  '& .MuiMenuItem-root': {
                    color: '#fff',
                    fontSize: '12px',
                    padding: '2px',
                  },
                },
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Tooltip>

  );
};

export const ColorControl = ({
  name,
  onChange,
  value,
}) => {
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

  pickerWrapper: {
    position: "absolute",
    zIndex: 4,
    top: 160,
    right: 15,
    backgroundColor: "#333",
  },

  picker: {
    backgroundColor: "#333 !important",
    color: "#000",
    padding: "10px",
    borderRadius: "8px",
    "& input": {
      color: "#fff !important",
      backgroundColor: "#333 !important",
    },
    "& .chrome-picker": {
      backgroundColor: "transparent !important",
      boxShadow: "none !important",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});


import { ChromePicker } from "react-color";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { Tooltip, TextField, Grow, Icon } from "@mui/material";

export const ColorControl = ({
  children,
  name,
  onChange,
  value,
  list,
  defaultValue,
}) => {
  const [openFilterColor, setOpenFilterColor] = useState(false);

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
        <Tooltip title={name} placement="top">
          <div
            style={{
              position: "relative",
            }}
          >
            <TextField
              value={value === "transparent" ? "transparente" : value}
              onChange={handleHexChange}
              variant="outlined"
              fullWidth
              size="small"
              placeholder="#ffffff"
              InputProps={{
                startAdornment: (
                  <div
                    onClick={() => {
                      setOpenFilterColor(true);
                    }}
                    style={{
                      border: "1px solid #aaaaaaaa",
                      cursor: "pointer",
                      marginRight: "8px",
                      width: 24,
                      height: 16,
                      borderRadius: 0,
                      backgroundColor: value,
                      margin: "0px 10px",
                    }}
                  />
                ),
                endAdornment: (
                  <Tooltip
                    title={`Transparência: ${
                      value === "transparent" ? "Ativa" : "Inativa"
                    }`}
                  >
                    <Icon
                      color="primary"
                      onClick={() => {
                        value === "transparent"
                          ? onChange({}, "#FFFFFF")
                          : onChange({}, "transparent");
                      }}
                      style={{
                        cursor: "pointer",
                        fontSize: 13,
                        margin: "0px 6px",
                      }}
                    >
                      {value === "transparent"
                        ? "visibility_off"
                        : "visibility"}
                    </Icon>
                  </Tooltip>
                ),
              }}
            />

            <Grow timeout={200} in={openFilterColor}>
              <div
                onMouseLeave={() => {
                  setOpenFilterColor(false);
                }}
                style={{
                  position: "absolute",
                  zIndex: 4,
                  top: 50,
                }}
              >
                <ChromePicker
                  disableAlpha
                  color={value}
                  onChange={(hex) => {
                    onChange(hex, hex.hex);
                  }}
                />
              </div>
            </Grow>
          </div>
        </Tooltip>
      </ClickAwayListener>
    </>
  );
};

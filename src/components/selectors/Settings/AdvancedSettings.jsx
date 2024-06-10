import { Divider, Grid } from "@mui/material";
import { CustomButtonGroup, CustomLinkedValues } from "../../_Control";
import {
  AlignVerticalTop,
  AlignVerticalCenter,
  AlignVerticalBottom,
  FormatAlignJustify,
  VerticalAlignBottom,
  VerticalAlignTop,
} from "@mui/icons-material";

import { ReactComponent as AlignStretch } from "../../iconsControls/align_stretch.svg";

export const AdvancedSettings = ({ props, setProp }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      padding={2}
      color={"#fff"}
      sx={{ gap: 2 }}
    >
      <Grid item xs={12}>
        <CustomLinkedValues
          text="Padding"
          values={props}
          onChange={setProp}
          options={[
            { value: "paddingTop", label: "Top" },
            { value: "paddingRight", label: "Right" },
            { value: "paddingBottom", label: "Bottom" },
            { value: "paddingLeft", label: "Left" },
          ]}
        />
      </Grid>

      <Grid item xs={12}>
        <CustomLinkedValues
          text="Margin"
          values={props}
          onChange={setProp}
          options={[
            { value: "marginTop", label: "Top" },
            { value: "marginRight", label: "Right" },
            { value: "marginBottom", label: "Bottom" },
            { value: "marginLeft", label: "Left" },
          ]}
        />
      </Grid>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

      <Grid item>
        <CustomButtonGroup
          text="Align Self"
          value={props.alignSelf}
          onChange={(e, value) => setProp((props) => (props.alignSelf = value))}
          options={[
            { value: "start", icon: <AlignVerticalTop /> },
            { value: "center", icon: <AlignVerticalCenter /> },
            { value: "end", icon: <AlignVerticalBottom /> },
            { value: "stretch", icon: <AlignStretch /> },
          ]}
          tooltipText={"Escolha a direção do item"}
        />
      </Grid>

      <Grid item spacing={3} width={"100%"}>
        <CustomButtonGroup
          text="Order"
          value={props.order}
          onChange={(e, value) => setProp((props) => (props.order = value))}
          options={[
            {
              value: "1",
              icon: (
                <VerticalAlignBottom style={{ transform: "rotate(90deg)" }} />
              ),
              tooltip: "first",
            },
            {
              value: "2",
              icon: <VerticalAlignTop style={{ transform: "rotate(90deg)" }} />,
              tooltip: "last",
            },
          ]}
          tooltipText={"Escolha a ordem da posição"}
        />
      </Grid>

      {/* <Grid item xs={12}>
        {selected && selected.isDeletable ? (
          <MaterialButton
            variant="text"
            fullWidth
            sx={{
              color: "#fff",
              textTransform: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
            endIcon={<Delete color="secondary" />}
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        ) : null}
      </Grid> */}
    </Grid>
  );
};

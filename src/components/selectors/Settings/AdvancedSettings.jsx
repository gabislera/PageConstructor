import { Divider, Grid, Typography } from "@mui/material";
import {
  CustomButtonGroup,
  CustomLinkedValues,
  CustomSelect,
  CustomSwitch,
  CustomTextInput,
} from "../../_Control";
import {
  AlignVerticalTop,
  AlignVerticalCenter,
  AlignVerticalBottom,
  VerticalAlignBottom,
  VerticalAlignTop,
  ExpandMore,
} from "@mui/icons-material";
import {
  CustomAccordion,
  CustomAccordionRoot,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "../../editor/Toolbox";

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
      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            sx={{ mt: -2 }}
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Layout
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid item xs={12} mt={1}>
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

            <Grid item xs={12} mt={1}>
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
                onChange={(e, value) =>
                  setProp((props) => (props.alignSelf = value))
                }
                options={[
                  { value: "start", icon: <AlignVerticalTop /> },
                  { value: "center", icon: <AlignVerticalCenter /> },
                  { value: "end", icon: <AlignVerticalBottom /> },
                  { value: "stretch", icon: <AlignStretch /> },
                ]}
                tooltipText={"Escolha a direção do item"}
                fullWidth
              />
            </Grid>

            <Grid item spacing={3} width={"100%"}>
              <CustomButtonGroup
                text="Order"
                value={props.order}
                onChange={(e, value) =>
                  setProp((props) => (props.order = value))
                }
                options={[
                  {
                    value: "1",
                    icon: (
                      <VerticalAlignBottom
                        style={{ transform: "rotate(90deg)" }}
                      />
                    ),
                    tooltip: "first",
                  },
                  {
                    value: "2",
                    icon: (
                      <VerticalAlignTop
                        style={{ transform: "rotate(90deg)" }}
                      />
                    ),
                    tooltip: "last",
                  },
                ]}
                tooltipText={"Escolha a ordem da posição"}
                fullWidth
              />
            </Grid>

            <Grid item mt={1}>
              <CustomSelect
                text="Position"
                value={props.position}
                onChange={(e) =>
                  setProp((props) => (props.position = e.target.value))
                }
                options={[
                  { value: "static", label: "default" },
                  { value: "relative", label: "relative" },
                  { value: "absolute", label: "absolute" },
                  { value: "fixed", label: "fixed" },
                ]}
                tooltipText={"Escolha a posição do item"}
              />
            </Grid>

            {props.position !== "static" && (
              <Grid item mt={1}>
                <CustomLinkedValues
                  // text="Padding"
                  values={props}
                  onChange={setProp}
                  options={[
                    { value: "top", label: "Top" },
                    { value: "right", label: "Right" },
                    { value: "bottom", label: "Bottom" },
                    { value: "left", label: "Left" },
                  ]}
                />
              </Grid>
            )}

            {props.position !== "static" && (
              <Grid item mt={1}>
                <CustomTextInput
                  text="Z-index"
                  value={props.zIndex}
                  onChange={(e) =>
                    setProp((props) => (props.zIndex = e.target.value))
                  }
                  row
                  tooltipText={"z-index"}
                />
              </Grid>
            )}
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>
      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            sx={{ mt: -2 }}
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Responsivo
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid item width="100%">
              <Typography className="subtitle">
                A visibilidade responsiva terá efeito apenas no modo de
                pré-visualização ou na página ao vivo, e não durante a edição no
                Elementor.
              </Typography>
            </Grid>

            <Grid item width="100%" mt={1}>
              <Grid>
                <CustomSwitch
                  checkedText="Mostrar"
                  uncheckedText="Ocultar"
                  text="Ocultar em Desktop"
                  value={props.display}
                  onChange={(props) =>
                    setProp((props) => (props.display = props))
                  }
                />
              </Grid>

              <Grid mt={1}>
                <CustomSwitch
                  text="Ocultar em Tablet no modo retrato"
                  checkedText={"Mostrar"}
                  uncheckedText={"Ocultar"}
                />
              </Grid>
              <Grid mt={1}>
                <CustomSwitch
                  text="Ocultar em Dispositivos móveis no modo retrato"
                  checkedText={"Mostrar"}
                  uncheckedText={"Ocultar"}
                />
              </Grid>
            </Grid>
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>
      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            sx={{ mt: -2 }}
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Efeitos de movimento
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid item width="100%" mt={1}>
              <CustomSelect
                column
                text={"Animação de entrada"}
                value={props.htmlTag}
                onChange={(e) =>
                  setProp((props) => (props.htmlTag = e.target.value))
                }
                options={[
                  { value: "NoAnimation", label: "Sem animação" },
                  { value: "pulse", label: "Pulsar" },
                ]}
              />
            </Grid>

            <Grid item width="100%" mt={1}>
              <CustomSelect
                text={"Duração da Animação"}
                value={props.htmlTag}
                onChange={(e) =>
                  setProp((props) => (props.htmlTag = e.target.value))
                }
                options={[
                  { value: "Rápido", label: "fast" },
                  { value: "Médio", label: "avarege" },
                  { value: "Lento", label: "slow" },
                ]}
              />
            </Grid>
            <Grid item width="100%" mt={1}>
              <CustomLinkedValues
                nolink
                text="Atraso da animação (ms)"
                values={props}
                onChange={setProp}
                options={[{ value: "paddingTop" }]}
              />
            </Grid>
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>

      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            sx={{ mt: -2 }}
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Custom css
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid sx={{ fontSize: "12px", textAlign: "center" }}>
              Edit your custom css here
            </Grid>
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>

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

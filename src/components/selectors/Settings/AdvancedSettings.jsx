import { Divider, Grid, Typography, Box } from "@mui/material";
import {
  CustomAccordion,
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
  MoreVert,
} from "@mui/icons-material";

import { ReactComponent as AlignStretch } from "../../iconsControls/align_stretch.svg";

export const AdvancedSettings = ({ props, setProp }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      padding={2}
      paddingTop={0}
      color={"#fff"}
    >
      <CustomAccordion title="Layout" defaultExpanded>
        <Box display="flex" flexDirection="column" gap="16px">
          <CustomLinkedValues
            text="Padding"
            values={props}
            onChange={setProp}
            options={[
              { value: "paddingTop", label: "Superior" },
              { value: "paddingRight", label: "Direita" },
              { value: "paddingBottom", label: "Inferior" },
              { value: "paddingLeft", label: "Esquerda" },
            ]}
          />
          <CustomLinkedValues
            text="Margin"
            values={props}
            onChange={setProp}
            options={[
              { value: "marginTop", label: "Superior" },
              { value: "marginRight", label: "Direita" },
              { value: "marginBottom", label: "Inferior" },
              { value: "marginLeft", label: "Esquerda" },
            ]}
          />
          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
          <CustomButtonGroup
            text="Alinhar-se"
            value={props.alignSelf}
            mobileValue={props.mobileAlignSelf}
            onChange={(e, value) =>
              setProp((props) => (props.alignSelf = value))
            }
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileAlignSelf = value))
            }
            options={[
              {
                value: "start",
                icon: <AlignVerticalTop />,
                tooltip: "Início",
              },
              {
                value: "center",
                icon: <AlignVerticalCenter />,
                tooltip: "Centro",
              },
              {
                value: "end",
                icon: <AlignVerticalBottom />,
                tooltip: "Fim",
              },
              {
                value: "stretch",
                icon: <AlignStretch />,
                tooltip: "Esticar",
              },
            ]}
            tooltipText={"Escolha a direção do item"}
            fullWidth
          />
          <CustomButtonGroup
            text="Ordem"
            value={props.order}
            mobileValue={props.mobileOrder}
            onChange={(e, value) => setProp((props) => (props.order = value))}
            mobileOnChange={(e, value) =>
              setProp((props) => (props.mobileOrder = value))
            }
            options={[
              {
                value: "0",
                icon: <VerticalAlignTop sx={{ transform: "rotate(-90deg)" }} />,
                tooltip: "Primeiro",
              },
              {
                value: "999",
                icon: (
                  <VerticalAlignBottom sx={{ transform: "rotate(-90deg)" }} />
                ),
                tooltip: "Último",
              },
              {
                value: "more-options",
                icon: <MoreVert />,
                tooltip: "Mais opções",
              },
            ]}
            tooltipText={"Escolha a ordem da posição"}
            fullWidth
          >
            <CustomTextInput
              text="Ordem personalizada"
              value={props.order}
              onChange={(e) =>
                setProp((props) => (props.order = e.target.value))
              }
              row
            />
          </CustomButtonGroup>

          <CustomSelect
            text="Posição"
            value={props.position}
            onChange={(e) =>
              setProp((props) => (props.position = e.target.value))
            }
            options={[
              { value: "static", label: "Padrão" },
              { value: "relative", label: "Relativo" },
              { value: "absolute", label: "Absoluto" },
              { value: "fixed", label: "Fixo" },
            ]}
            tooltipText={"Escolha a posição do item"}
          />
          {props.position !== "static" && (
            <Grid item mt={1}>
              <CustomLinkedValues
                // text="Padding"
                values={props}
                onChange={setProp}
                options={[
                  { value: "top", label: "Superior" },
                  { value: "right", label: "Direita" },
                  { value: "bottom", label: "Inferior" },
                  { value: "left", label: "Esquerda" },
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
        </Box>
      </CustomAccordion>

      <CustomAccordion title="Responsivo">
        <Box display="flex" flexDirection="column" gap="16px">
          <Typography className="subtitle">
            A visibilidade responsiva terá efeito apenas no modo de
            pré-visualização ou na página ao vivo, e não durante a edição no
            Elementor.
          </Typography>

          <Box display="flex" flexDirection="column" gap="8px">
            <CustomSwitch
              checkedText="Mostrar"
              uncheckedText="Ocultar"
              text="Ocultar em Desktop"
              value={props.display}
              onChange={(e) => setProp((props) => (props.display = e))}
            />

            <CustomSwitch
              text="Ocultar em Dispositivos móveis"
              checkedText={"Mostrar"}
              uncheckedText={"Ocultar"}
              value={props.displayMobile}
              onChange={(e) => setProp((props) => (props.displayMobile = e))}
            />
          </Box>
        </Box>
      </CustomAccordion>

      <CustomAccordion title="Efeitos de movimento">
        <Box display="flex" flexDirection="column" gap="16px">
          <CustomSelect
            column
            text={"Animação de entrada"}
            value={props.pulse}
            onChange={(e) => setProp((props) => (props.pulse = e.target.value))}
            options={[
              { value: "false", label: "Sem animação" },
              { value: "true", label: "Pulsar" },
            ]}
          />
        </Box>
      </CustomAccordion>

      <CustomAccordion title="Custom css">
        <Box display="flex" flexDirection="column" gap="16px">
          <Grid sx={{ fontSize: "12px", textAlign: "center" }}>
            Edite seu CSS personalizado aqui
          </Grid>
        </Box>
      </CustomAccordion>

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

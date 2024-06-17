import React from "react";
import { useNode } from "@craftjs/core";
import Grid from "@mui/material/Grid";
import { ColorControl, CustomLinkedValues, CustomSlider } from "../../_Control";

export const AppComponentSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Grid
      container
      flexDirection={"column"}
      padding={2}
      paddingTop={0}
      color={"#fff"}
      mt={4}
    >
      <ColorControl
        name={"Cor de fundo"}
        onChange={(e, value) => {
          setProp((props) => (props.backgroundColor = value));
        }}
        defaultValue={props.backgroundColor}
        value={props.backgroundColor}
      />

      <CustomSlider
        text="Largura do container"
        value={props.maxWidth}
        onChange={(e, value) => setProp((props) => (props.maxWidth = value))}
        min={0}
        max={2000}
        step={10}
        disableUnits
        disableDeviceView
        tooltipText={"Escolha o largura máxima do container"}
      />

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
    </Grid>
  );
};

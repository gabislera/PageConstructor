import { useEditor, Element } from "@craftjs/core";
import { Box, Grid as MaterialGrid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Container from "../selectors/CraftedComponents/Container";
import Text from "../selectors/CraftedComponents/Text";
import Button from "../selectors/CraftedComponents/Button";
import Countdown from "../selectors/CraftedComponents/Countdown";
import Divider from "../selectors/CraftedComponents/Divider";
import Image from "../selectors/CraftedComponents/Image";
import Video from "../selectors/CraftedComponents/Video";
import Grid from "../selectors/CraftedComponents/Grid";
import Faq from "../selectors/CraftedComponents/Faq";
import Title from "../selectors/CraftedComponents/Title";
import ProgressBar from "../selectors/CraftedComponents/ProgressBar";
import Form from "../selectors/CraftedComponents/Form";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import InsightsIcon from "@mui/icons-material/Insights";
// import ContactsIcon from "@mui/icons-material/Contacts";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  CropLandscapeSharp,
  SmartButton,
  CalendarViewMonth,
  ImageOutlined,
  OndemandVideo,
  Remove,
  Quiz,
  TextFields,
  FormatAlignLeft,
  Insights,
  Contacts,
  AccessTime,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { CustomAccordion } from "../_Control";

export const Toolbox = () => {
  const {
    connectors: { create },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const classes = useStyles();

  const GridItem = ({ element, tooltipText, children }) => {
    return (
      <MaterialGrid
        item
        ref={(ref) => create(ref, <Element canvas is={element} />)}
      >
        <Tooltip title={tooltipText} placement="right">
          <Box className={classes.item}>{children}</Box>
        </Tooltip>
      </MaterialGrid>
    );
  };

  return (
    <MaterialGrid container padding={2}>
      <CustomAccordion title="Layout" defaultExpanded>
        <MaterialGrid container justifyContent={"space-between"}>
          <GridItem element={Container} tooltipText={"Container"}>
            <CropLandscapeSharp />
            <span>Container</span>
          </GridItem>

          <GridItem element={Grid} tooltipText={"Grid"}>
            <CalendarViewMonth />
            <span>Grade</span>
          </GridItem>
        </MaterialGrid>
      </CustomAccordion>

      <CustomAccordion title="Básico" defaultExpanded>
        <MaterialGrid container rowSpacing={1} justifyContent="space-between">
          <GridItem element={Title} tooltipText={"Título"}>
            <TextFields />
            <span>Título</span>
          </GridItem>
          <GridItem element={Text} tooltipText={"Editor de texto"}>
            <FormatAlignLeft />
            <span>Editor de texto</span>
          </GridItem>
          <GridItem element={Button} tooltipText={"Botão"}>
            <SmartButton />
            <span>Botão</span>
          </GridItem>
          <GridItem element={Image} tooltipText={"Imagem"}>
            <ImageOutlined />
            <span>Imagem</span>
          </GridItem>
          <GridItem element={Video} tooltipText={"Video"}>
            <OndemandVideo />
            <span>Video</span>
          </GridItem>
          <GridItem element={Divider} tooltipText={"Divisor"}>
            <Remove />
            <span>Divisor</span>
          </GridItem>
          <GridItem element={Faq} tooltipText={"Faq"}>
            <Quiz />
            <span>Faq</span>
          </GridItem>
          <GridItem element={ProgressBar} tooltipText={"Barra de progresso"}>
            <Insights />
            <span>Barra de progresso</span>
          </GridItem>
          <GridItem element={Form} tooltipText={"Formulário"}>
            <Contacts />
            <span>Formulário</span>
          </GridItem>
          <GridItem element={Countdown} tooltipText={"Contador regressivo"}>
            <AccessTime />
            <span>Contador regressivo</span>
          </GridItem>
        </MaterialGrid>
      </CustomAccordion>
    </MaterialGrid>
  );
};

const useStyles = makeStyles({
  item: {
    border: "1px solid #3f444b",
    borderRadius: "3px",
    // margin: '0.5rem',
    // padding: '1rem 3rem',
    width: "128px",
    height: "85px",
    cursor: "move",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: "#d5d8dc",
    "& > svg": {
      width: "28px",
      height: "28px",
      fill: "#d5d8dc",
    },
  },
});

export const CustomAccordionBase = styled((props) => <Accordion {...props} />)`
  background-color: transparent;
  color: #d5d8dc;
  box-shadow: none;
  border: none;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin: 0;
  }
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: transparent;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  min-height: 48px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  padding: 0;

  & .MuiAccordionSummary-content {
    margin: 0;
  }

  &.Mui-expanded {
    // min-height: 48px;
  }
`;

export const CustomAccordionDetails = styled(AccordionDetails)`
  display: block;
  padding: 0;
  margin-bottom: 1rem;
`;

export const CustomAccordionRoot = styled("div")`
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

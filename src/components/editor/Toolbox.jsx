import { useEditor, Element } from "@craftjs/core";
import { Box, Grid, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Container } from '../../builder/components/user/Container';
import Container from "../selectors/CraftedComponents/Container";
import Text from "../selectors/CraftedComponents/Text";
import Button from "../selectors/CraftedComponents/Button";
import Image from "../selectors/CraftedComponents/Image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  ExpandMore,
  CropLandscapeSharp,
  FormatQuote,
  SmartButton,
  CalendarViewMonth,
  ImageOutlined,
  OndemandVideo,
  Remove,
  Quiz,
} from "@mui/icons-material";
import styled from "@emotion/styled";

export const Toolbox = () => {
  const {
    connectors: { create },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const classes = useStyles();

  const GridItem = ({ element, tooltipText, children }) => {
    return (
      <Grid item ref={(ref) => create(ref, <Element canvas is={element} />)}>
        <Tooltip title={tooltipText} placement="right">
          <Box className={classes.item}>{children}</Box>
        </Tooltip>
      </Grid>
    );
  };

  return (
    <Grid container padding={2}>
      <CustomAccordionRoot>
        <CustomAccordion defaultExpanded>
          <CustomAccordionSummary
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Layout
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid container justifyContent={"space-between"}>
              <GridItem element={Container} tooltipText={"Container"}>
                <CropLandscapeSharp />
                <span>Container</span>
              </GridItem>

              <GridItem element={Container} tooltipText={"Grid"}>
                <CalendarViewMonth />
                <span>Grid</span>
              </GridItem>
            </Grid>
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>

      <CustomAccordionRoot>
        <CustomAccordion defaultExpanded>
          <CustomAccordionSummary
            expandIcon={<ExpandMore style={{ color: "#d5d8dc" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Basic
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid container rowSpacing={1} justifyContent="space-between">
              <GridItem element={Button} tooltipText={"Button"}>
                <SmartButton />
                <span>Button</span>
              </GridItem>

              <GridItem element={Text} tooltipText={"Text"}>
                <FormatQuote />
                <span>Text</span>
              </GridItem>

              <GridItem element={Image} tooltipText={"Image"}>
                <ImageOutlined />
                <span>Image</span>
              </GridItem>

              <GridItem element={Text} tooltipText={"Video"}>
                <OndemandVideo />
                <span>Video</span>
              </GridItem>

              <GridItem element={Text} tooltipText={"Divider"}>
                <Remove />
                <span>Divider</span>
              </GridItem>

              <GridItem element={Text} tooltipText={"Faq"}>
                <Quiz />
                <span>Faq</span>
              </GridItem>
            </Grid>
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>
    </Grid>
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

export const CustomAccordion = styled((props) => <Accordion {...props} />)`
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

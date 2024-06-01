import { useEditor, Element } from '@craftjs/core';
import { Box, Grid, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '../../builder/components/user/Container';
import { Text } from '../../builder/components/user/Text';
import { Button } from '../../builder/components/user/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore, CropLandscapeSharp, FormatQuote, SmartButton } from '@mui/icons-material';
import styled from '@emotion/styled';

export const Toolbox = ({ setShowToolbox }) => {
  const {
    connectors: { create },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const classes = useStyles();

  return (
    <Grid container >
      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            expandIcon={<ExpandMore style={{ color: '#d5d8dc' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Layout
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid container justifyContent={'space-between'}>
              <Grid
                item
                ref={(ref) =>
                  create(
                    ref,
                    <Element
                      canvas
                      is={Container}
                      height="auto"
                      width="auto"
                    />
                  )
                }
              >
                <Tooltip title="Container" placement="right">
                  <Box className={classes.item}>
                    <CropLandscapeSharp />
                    <span>Container</span>
                  </Box>
                </Tooltip>
              </Grid>

              <Grid
                item
                ref={(ref) =>
                  create(
                    ref,
                    <Element
                      canvas
                      is={Text}
                      text="Texto"
                    />
                  )
                }
              >
                <Tooltip title="Text" placement="right">
                  <Box className={classes.item}>
                    <FormatQuote />
                    <span>Text</span>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid >
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>

      <CustomAccordionRoot>
        <CustomAccordion>
          <CustomAccordionSummary
            expandIcon={<ExpandMore style={{ color: '#d5d8dc' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Basic
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Grid container justifyContent={'space-between'}>
              <Grid
                item
                ref={(ref) =>
                  create(
                    ref,
                    <Element
                      canvas
                      is={Button}
                      height="auto"
                      width="auto"
                    />
                  )
                }
              >
                <Tooltip title="Container" placement="right">
                  <Box className={classes.item}>
                    <SmartButton />
                    <span>Button</span>
                  </Box>
                </Tooltip>
              </Grid>

              <Grid
                item
                ref={(ref) =>
                  create(
                    ref,
                    <Element
                      canvas
                      is={Text}
                      text="Texto"
                    />
                  )
                }
              >
                <Tooltip title="Text" placement="right">
                  <Box className={classes.item}>
                    <FormatQuote />
                    <span>Text</span>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid >
          </CustomAccordionDetails>
        </CustomAccordion>
      </CustomAccordionRoot>
    </Grid>
  )
}

const useStyles = makeStyles({
  item: {
    border: '1px solid #3f444b',
    borderRadius: '3px',
    // margin: '0.5rem',
    // padding: '1rem 3rem',
    width: '128px',
    height: '85px',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    color: '#d5d8dc',
    '& > svg': {
      width: '28px',
      height: '28px',
      fill: '#d5d8dc',
    },
  },
});


const CustomAccordion = styled(Accordion)`
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

const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: transparent;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  min-height: 48px;
  padding: 0 15px;
  font-size: 14px;

  & .MuiAccordionSummary-content {
    margin: 0;
  }

  &.Mui-expanded {
    min-height: 48px;
  }
`;

const CustomAccordionDetails = styled(AccordionDetails)`
  display: block;
  padding: 0;
  margin-bottom: 1rem;
  padding: 0 15px;
`;

const CustomAccordionRoot = styled('div')`
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
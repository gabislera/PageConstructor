import { useEditor, Element } from '@craftjs/core';
import { Box, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '../../builder/components/user/Container';
import { Text } from '../../builder/components/user/Text';
import { Button } from '../../builder/components/user/Button';
import CropLandscapeSharpIcon from '@mui/icons-material/CropLandscapeSharp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

export const Toolbox = ({ setShowToolbox }) => {
  const {
    connectors: { create },
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  const classes = useStyles();

  return (
    < >
      <Box
        ref={(ref) =>
          create(
            ref,
            <Element
              canvas
              is={Container}
              background={{ r: 78, g: 78, b: 78, a: 1 }}
              color={{ r: 0, g: 0, b: 0, a: 1 }}
              height="auto"
              width="auto"
            />
          )
        }
      >
        <Tooltip title="Container" placement="right">
          <Box className={classes.item}>
            <CropLandscapeSharpIcon />
            <span>Container</span>
          </Box>
        </Tooltip>
      </Box>
      <Box
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
            <FormatQuoteIcon />
            <span>Text</span>
          </Box>
        </Tooltip>
      </Box>
      <Box
        ref={(ref) =>
          create(
            ref,
            <Element
              canvas
              is={Button}
              text="Botão"
            />
          )
        }
      >
        <Tooltip title="Button" placement="right">
          <Box className={classes.item}>
            <SmartButtonIcon />
            <span>Button</span>
          </Box>
        </Tooltip>
      </Box>
    </>
  )
}

const useStyles = makeStyles({
  item: {
    border: '1px solid #707070',
    margin: '0.5rem',
    padding: '1rem 3rem',
    width: '200px',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    color: '#707070',
    '& > svg': {
      width: '40px',
      height: '40px',
      fill: '#707070',
    },
  },
});
import { useResponsiveMode } from '../../contexts/ResponsiveModeContext';
import { makeStyles } from '@mui/styles';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Tv, TabletMac, PhoneIphone } from '@mui/icons-material';

export const ResponsiveMode = ({ onModeChange }) => {
  const classes = useStyles();
  const { isResponsiveMode } = useResponsiveMode();

  const handleModeChange = (mode) => {
    onModeChange(mode);
  };

  return (
    <Box
      className={classes.root}
      style={{ height: isResponsiveMode ? '45px' : '0' }}
    >
      <Tooltip title="Desktop" placement="bottom">
        <IconButton
          className={classes.item}
          onClick={() => handleModeChange('desktop')}
        >
          <Tv />
        </IconButton>
      </Tooltip>

      <Tooltip title="Tablet" placement="bottom">
        <IconButton
          className={classes.item}
          onClick={() => handleModeChange('tablet')}
        >
          <TabletMac />
        </IconButton>
      </Tooltip>

      <Tooltip title="Mobile" placement="bottom">
        <IconButton
          className={classes.item}
          onClick={() => handleModeChange('mobile')}
        >
          <PhoneIphone />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#1f2124',
    transition: 'height 0.3s ease-in-out',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      width: '20px',
      height: '20px',
      fill: '#707070',
    },
  }
});
import { IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Toolbox } from './Toolbox';
import { SettingsPanel } from './SettingsPannel';
import { useEditor } from '@craftjs/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Footer } from './Footer';
import { Header } from './Header';

export default function SideBar({ isSelected }) {
  const { actions } = useEditor();
  const [isOpen, setIsOpen] = useState(true);
  const classes = useStyles();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box className={`${classes.root}`}>
      <div
        className={classes.container}
        style={{
          overflowX: 'hidden',
          width: isOpen ? '16rem' : '0px',
          transition: 'width 0.3s ease-in-out',
          height: '100%',
        }}>
        <Box className={classes.content}>
          <Header isOpen={isOpen} onClick={() => actions.clearEvents()} />
          {!isSelected ? (
            <Toolbox />
          ) : (
            <SettingsPanel />
          )}
        </Box>
        <Footer />
      </div>
      <IconButton
        className={classes.toggleButton}
        onClick={toggleSidebar}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10px',
          transform: 'translateY(-50%) rotate(0deg)',
          backgroundColor: '#27272a',
          borderRadius: 0,
          height: '40px',
          width: '10px',
          padding: '6px',
          '&:hover': {
            backgroundColor: '#27272a',
          },
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            color: 'white',
            opacity: '0.9',
            width: '8px',
            height: '8px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </IconButton>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#27272a',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
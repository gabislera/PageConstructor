import { Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

export const Header = ({ isOpen, onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        alt="logo"
        src="/sellflux_logo1.png"
        className={classes.logo}
        style={{
          opacity: isOpen ? '1' : '0',
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <IconButton onClick={onClick}>
        <AddIcon style={{ color: 'white', opacity: '0.9' }} />
      </IconButton>
    </Box>
  )
}

const useStyles = makeStyles({
  root: {
    background: '#232325',
    width: '100%',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  logo: {
    maxHeight: '20px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },

})
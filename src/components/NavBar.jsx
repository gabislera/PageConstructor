import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Logo from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);

  return (
    <Paper
      className={classes.root}
      elevation={5}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box className={classes.main}>
        <Logo hovered={hovered} />
      </Box>
    </Paper >
  )
}

const useStyles = makeStyles({
  root: {
    margin: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    width: '3.5rem',
    zIndex: 999,
    backgroundColor: '#27272a !important',
    transition: 'width 200ms ease !important',

    '&:hover': {
      width: '16rem',
    },
  },

  main: {
    display: 'flex',
    flexDirection: `collumn`,
    flexGrow: 1,
    marginTop: '1rem',
  }
})
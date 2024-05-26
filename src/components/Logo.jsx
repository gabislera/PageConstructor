import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default function Logo({ hovered }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        alt='logo'
        src='/sellflux_logo2.png'
        width={40}
        className={`${classes.image} ${hovered ? classes.fadeOut : classes.fadeIn}`}
      >
      </img>

      <img
        alt='logo'
        src='/sellflux_logo1.png'
        width={120}
        className={`${classes.image} ${hovered ? classes.fadeIn : classes.fadeOut}`}
      >
      </img>
    </Box>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    padding: '0 0.25rem',
    position: 'relative',
  },
  image: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all .2s ease !important",
  },
  fadeIn: {
    opacity: 1,
  },

  fadeOut: {
    opacity: 0,
  },
})
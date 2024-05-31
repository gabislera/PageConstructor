import { Box, IconButton, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEditor } from '@craftjs/core';
import clsx from 'clsx';
import { Redo, Undo } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

export const Header = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const classes = useStyles();

  return (
    <Box className={`header ${classes.root}`}>
      <Box className={classes.headerContent}>
        <Box className={classes.leftSection}>
          {enabled && (
            <>
              <Tooltip title="Undo" placement="bottom">
                <IconButton
                  className={clsx(classes.item, { [classes.itemDisabled]: !canUndo })}
                  onClick={() => actions.history.undo()}
                  disabled={!canUndo}
                >
                  <Undo />
                </IconButton>
              </Tooltip>
              <Tooltip title="Redo" placement="bottom">
                <IconButton
                  className={clsx(classes.item, { [classes.itemDisabled]: !canRedo })}
                  onClick={() => actions.history.redo()}
                  disabled={!canRedo}
                >
                  <Redo />
                </IconButton>
              </Tooltip>
            </>
          )}
          <IconButton
            className={classes.item}
            onClick={() => actions.clearEvents()}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Box className={classes.rightSection}>

          {/* <Button
            style={{ backgroundColor: enabled ? 'green' : 'blue' }}
            variant="contained"
            className={clsx(classes.btn, { [classes.enabled]: enabled, [classes.disabled]: !enabled })}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <Check /> : <Build />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '45px',
    zIndex: 999,
    display: 'flex',
    padding: '0 10px',
    background: '#232325',
    color: 'white',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '13px',
    '& svg': {
      marginRight: '6px',
      width: '12px',
      height: '12px',
      fill: '#fff',
      opacity: '0.9',
    },
  },
  item: {
    marginRight: '10px',
    '& svg': {
      width: '20px',
      height: '20px',
      fill: '#707070',
    },
  },
  itemDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
});
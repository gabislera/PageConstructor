import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
  Tab,
  Tabs,
  Button as MaterialButton,
  Slider,
} from '@mui/material';
import { useNode, useEditor } from '@craftjs/core';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Edit, Settings, Contrast, Delete } from '@mui/icons-material';
import { TabPannel } from '../TabPannel';
import { a11yProps } from '../../../utils/a11yProps';

export const TextSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid color={'#fff'}>
      <Box width={'100%'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          sx={{ width: '305px' }}
        >
          <Tab
            className={classes.tab}
            icon={<Edit />}
            label={<span>Content</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            icon={<Contrast />}
            label={<span>Style</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            icon={<Settings />}
            label={<span>Advanced</span>}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPannel value={value} index={0}>
        <Grid container spacing={3} padding={2} color={'#fff'}>
          <Grid item xs={12}>
            <Typography variant="caption" gutterBottom color="inherit">
              Title
            </Typography>
            <TextField
              sx={{ padding: 0 }}
              variant="outlined"
              multiline
              rows={4}
              value={props.content}
              onChange={(e) => setProp((props) => (props.content = e.target.value))}
              fullWidth
              className={`${classes.customInput} ${classes.input}`}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption" gutterBottom color="inherit">
              Link
            </Typography>
            <TextField
              variant="outlined"
              value={props.url}
              onChange={(e) => setProp((props) => (props.url = e.target.value))}
              fullWidth
              className={classes.customInput}
            />
          </Grid>

          <Grid
            item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit" marginBottom={0}>
              HTML Tag
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '50%' }}>
              <Select
                value={props.tag}
                onChange={(e) => setProp((props) => (props.tag = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="h1">h1</MenuItem>
                <MenuItem value="h2">h2</MenuItem>
                <MenuItem value="h3">h3</MenuItem>
                <MenuItem value="h4">h4</MenuItem>
                <MenuItem value="h5">h5</MenuItem>
                <MenuItem value="h6">h6</MenuItem>
                <MenuItem value="p">p</MenuItem>
                <MenuItem value="span">span</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={1}>
        <Grid container spacing={3} padding={2} color={'#fff'}>
          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Typography variant="caption" gutterBottom color="inherit">
              Alignment
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '30%' }} >
              <Select
                value={props.textAlign}
                onChange={(e) => setProp((props) => (props.textAlign = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="left">Left</MenuItem>
                <MenuItem value="center">Center</MenuItem>
                <MenuItem value="right">Right</MenuItem>
                <MenuItem value="justify">Justify</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Size
            </Typography>
            <Slider
              value={props.fontSize}
              onChange={(e, value) => setProp((props) => (props.fontSize = value))}
              min={8}
              max={100}
              step={1}
              valueLabelDisplay="auto"
              aria-labelledby="size-slider"
              sx={{
                width: '50%',
                '& .MuiSlider-thumb': { color: '#fff', width: '13px', height: '13px' },
                '& .MuiSlider-track': { color: '#333', height: '2px' },
                '& .MuiSlider-rail': { color: '#888', height: '2px' },
              }}
            />
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Weight
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '30%' }}>
              <Select
                value={props.fontWeight}
                onChange={(e) => setProp((props) => (props.fontWeight = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="300">300</MenuItem>
                <MenuItem value="400">400</MenuItem>
                <MenuItem value="500">500</MenuItem>
                <MenuItem value="600">600</MenuItem>
                <MenuItem value="700">700</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Transform
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '30%' }}>
              <Select
                value={props.textTransform}
                onChange={(e) => setProp((props) => (props.textTransform = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="capitalize">Capitalize</MenuItem>
                <MenuItem value="uppercase">Uppercase</MenuItem>
                <MenuItem value="lowercase">Lowercase</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Style
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '30%' }}>
              <Select
                value={props.fontStyle}
                onChange={(e) => setProp((props) => (props.fontStyle = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="italic">Italic</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Decoration
            </Typography>
            <FormControl variant="outlined" className={classes.customInput} sx={{ width: '30%' }}>
              <Select
                value={props.textDecoration}
                onChange={(e) => setProp((props) => (props.textDecoration = e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: '#333333',
                      marginTop: '5px',
                      padding: '5px',
                      '& .MuiMenuItem-root': {
                        color: '#fff',
                        fontSize: '12px',
                        padding: '2px',
                      },
                    },
                  },
                }}
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="underline">Underline</MenuItem>
                <MenuItem value="overline">Overline</MenuItem>
                <MenuItem value="line-through">Line-Through</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Line height
            </Typography>
            <Slider
              value={props.lineHeight}
              onChange={(e, value) => setProp((props) => (props.lineHeight = value))}
              min={1}
              max={3}
              step={0.1}
              valueLabelDisplay="auto"
              aria-labelledby="line-height-slider"
              sx={{
                width: '50%',
                '& .MuiSlider-thumb': { color: '#fff', width: '13px', height: '13px' },
                '& .MuiSlider-track': { color: '#333', height: '2px' },
                '& .MuiSlider-rail': { color: '#888', height: '2px' },
              }}
            />
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Letter spacing
            </Typography>
            <Slider
              value={props.letterSpacing}
              onChange={(e, value) => setProp((props) => (props.letterSpacing = value))}
              min={-5}
              max={10}
              step={0.1}
              valueLabelDisplay="auto"
              aria-labelledby="letter-spacing-slider"
              sx={{
                width: '50%',
                '& .MuiSlider-thumb': { color: '#fff', width: '13px', height: '13px' },
                '& .MuiSlider-track': { color: '#333', height: '2px' },
                '& .MuiSlider-rail': { color: '#888', height: '2px' },
              }}
            />
          </Grid>

          <Grid item
            spacing={3}
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption" gutterBottom color="inherit">
              Word spacing
            </Typography>
            <Slider
              value={props.wordSpacing}
              onChange={(e, value) => setProp((props) => (props.wordSpacing = value))}
              min={-5}
              max={20}
              step={0.5}
              valueLabelDisplay="auto"
              aria-labelledby="word-spacing-slider"
              sx={{
                width: '50%',
                '& .MuiSlider-thumb': { color: '#fff', width: '13px', height: '13px' },
                '& .MuiSlider-track': { color: '#333', height: '2px' },
                '& .MuiSlider-rail': { color: '#888', height: '2px' },
              }}
            />
          </Grid>
        </Grid>
      </TabPannel>

      <TabPannel value={value} index={2}>
        <Grid container spacing={3} padding={2} color={'#fff'}>
          <Grid item xs={12}>
            {selected && selected.isDeletable ? (
              <MaterialButton
                variant="text"
                fullWidth
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                endIcon={<Delete color="secondary" />}
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </MaterialButton>
            ) : null}
          </Grid>
        </Grid>
      </TabPannel>
    </Grid>
  );
};

const useStyles = makeStyles({
  customInput: {
    '& .MuiOutlinedInput-root': {
      padding: '5px',
      fontSize: '12px',

      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.15)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '0',
    },
  },
  tab: {
    '& > svg': {
      width: '16px',
      height: '16px',
      fill: '#d5d8dc',
    },
    '& > span': {
      fontSize: '10px',
      color: '#d5d8dc',
      textTransform: 'none',
    },
  },
});
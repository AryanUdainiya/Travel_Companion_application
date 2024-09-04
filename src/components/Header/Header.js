import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{background:"#424556"}}>
      <Toolbar className={classes.toolbar}>
          <img src="./logo.png" alt="Welcome" style={{width:"60px"}}/>
        <Typography variant="h5" className={classes.title} style={{marginRight:"auto", marginLeft:"10px"}}>
          Travel The World
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

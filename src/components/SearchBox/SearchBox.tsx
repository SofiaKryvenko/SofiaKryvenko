import React from "react"

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    }
  }));

const SearchBox =()=>{
    const classes = useStyles();

    return (
       <Grid container justify="center">

         <Paper className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Enter movie, series, episode name"
       />
      <IconButton type="submit"aria-label="search">
        <SearchIcon />
      </IconButton>
        </Paper>

         
    </Grid> 


    )
}

export default SearchBox;
import React from "react"
import { Typography,  Grid } from '@material-ui/core';

import CardItem from "../CardItem";

const MovieList =({movies,title})=>{
    return     <Grid container justify="space-around" >
    <Grid item xs={12} className="mt-30">
        <Typography gutterBottom={true} variant="h6">{title?title:"Popular"}</Typography>
    </Grid>
        {(movies||[]).map(movie=>(<CardItem 
        key={movie.id} 
        info={movie}/>))}
    </Grid> 
}

export default MovieList;
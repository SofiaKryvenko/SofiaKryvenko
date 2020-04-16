import React from "react"
import { Typography,  Grid } from '@material-ui/core';

import CardItem from "../CardItem";

const MovieList =({movies,title,logged})=>{
    return     <Grid container justify="space-around" className="mt-30">
    <Grid item xs={12} className="mt-30">
        <Typography gutterBottom={true} variant="h6">{title?title:"Popular"}</Typography>
    </Grid>
    {(movies||[]).map(movie=>(<CardItem key={movie.id} logged={logged}
    info={movie}/>))}
    </Grid> 
}

export default MovieList;
import React from "react"
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import {MOVIE_GENRES} from "../../constants/general"

const GenresBox =({onHandleClick})=> <Grid container justify="center" className="mb-20">
    {MOVIE_GENRES.map(item=><Chip  
        key={item.id} 
        label={item.name} 
        onClick={()=>onHandleClick(item.id)} 
        className="p-5 m-5" 
        color="primary" 
        clickable/>)}
    </Grid>


export default GenresBox;
import React from "react"
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const GenresBox =({genres})=><Grid container justify="center" className="mb-20">
    {(genres||[]).map(item=><Chip  key={item.id} label={item.name} className="p-5 m-5" color="primary" clickable/>)}
    </Grid>


export default GenresBox;
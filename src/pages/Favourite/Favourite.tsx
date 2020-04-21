import React from "react"

import {  Grid } from '@material-ui/core';
 import MovieList from "../../components/MovieList"

const Favourite=({favourite})=>(<Grid container className="container mb-30" justify="center" > 
<MovieList
    movies={favourite.list}
    title="Favourites"/>
</Grid>)


export default Favourite;
import React from "react"
import { Typography,  Grid } from '@material-ui/core';


const MovieCast =({cast})=><Grid container justify="center">{(cast||[]).filter(person => person.name !== '' && person.profile_path !== null)
.slice(0, 4)
.map(actor=><Grid item className="m-10" key={actor.credit_id}> <img
    src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
    alt={actor.name}
    style={{ minHeight: 150 }}
/>
<Typography align="center" variant="caption" component='p'>{actor.name}</Typography>
</Grid>

)}</Grid>

export default MovieCast;
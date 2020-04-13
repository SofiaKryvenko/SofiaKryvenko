import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import StarRateIcon from '@material-ui/icons/StarRate';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {IMG_W300} from "../../constants/configsKey"
import MoviePoster from "../moviePoster"


const useStyles = makeStyles({
    root: {
      maxWidth:"300px"
    },
    rating_block:{
      display:"inline-flex",
      alignItems: 'center'
    },
    icon:{
      color:"yellow"
    }
  });

const CardItem =({info})=>{
    const classes = useStyles();
    const {title,poster_path,id,vote_average} = info;
  
   
    return <Link underline='none' component={RouterLink} to={`/movie/${id}`}>
      <Card className={`${classes.root} mb-10`}>
            <MoviePoster size={IMG_W300} poster={poster_path}/>
            <CardContent>
                <div className={classes.rating_block}>
                  <StarRateIcon className={classes.icon}/>
                  <Typography  variant="caption" component="span">{vote_average}</Typography>
                </div>
                
                <Typography  variant="subtitle2">{title}</Typography>

            </CardContent>
    </Card>
    </Link>
}

export default CardItem;
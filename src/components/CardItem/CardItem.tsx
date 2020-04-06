import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import StarRateIcon from '@material-ui/icons/StarRate';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {IMG_URL,IMG_W300} from "../../constants/configsKey"

const useStyles = makeStyles({
    root: {
      width: 250
    },
    rating_block:{
      display:"inline-flex",
      alignItems: 'center'
    },
    icon:{
      color:"yellow"
    },
    poster:{
      maxWidth:"250px"
    }
  });

const CardItem =({info})=>{
    const classes = useStyles();
    const {title,poster_path,id,vote_average} = info;
    const imgPath = poster_path ?IMG_URL+IMG_W300+poster_path :'https://dummyimage.com/500x730/d8d8d8/fafafa.png&text=x'
   
    return <Link underline='none' component={RouterLink} to={`/movie/${id}`}>
      <Card className={`${classes.root} mb-10`}>
             <CardMedia
                component="img"         
                image={imgPath}
                title={title}
                alt={title}
                classes={{root:classes.poster}}
            />
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
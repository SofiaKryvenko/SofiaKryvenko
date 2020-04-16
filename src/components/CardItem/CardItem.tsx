import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {IMG_W300} from "../../constants/configsKey"
import MoviePoster from "../moviePoster"

import {addToList} from "../../actions/favourite"

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

const CardItem =({info,auth,addToList})=>{
    const classes = useStyles();
    const {title,poster_path,id,vote_average} = info;
  
   
    return <Card className={`${classes.root} mb-10`}>
        <Link underline='none' component={RouterLink} to={`/movie/${id}`}>
            <MoviePoster size={IMG_W300} poster={poster_path}/>
            <CardContent>
                <div className={classes.rating_block}>
                  <StarRateIcon className={classes.icon}/>
                  <Typography  variant="caption" component="span">{vote_average}</Typography>
                </div>
                
                <Typography  variant="subtitle2">{title}</Typography>

            </CardContent>
            </Link>
            {
        auth.loggedIn &&
        <CardActions>
           <IconButton onClick={()=>addToList({movieId:id,userId:auth.user.uid})}>
                    <FavoriteBorderIcon color="error"/>
             </IconButton>
             <IconButton onClick={()=>addToList({movieId:id,userId:auth.user.uid})}>
                    <FavoriteIcon color="error"/>
             </IconButton>
            {/* {
              isFavorite ?
                  <IconButton tooltip="Remove from favorites" onClick={ removeFromFavorite }>
                    <Favorite color="red"/>
                  </IconButton>
                  :
                  <IconButton tooltip="Add to favorites" onClick={ addToFavorite }>
                    <FavoriteBorder color="red"/>
                  </IconButton>
            } */}
        </CardActions>
      }
    </Card>
}

const mapStateToProps = (state) => ({
  auth:state.auth,
  favouriteMovies:state.favourite.list
  });


const mapDispathToProps = dispath =>
  bindActionCreators(
    {
      addToList
    },
    dispath
  );


export default connect( mapStateToProps,mapDispathToProps)(CardItem);
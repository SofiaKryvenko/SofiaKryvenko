import React from 'react';
import {NavLink} from "react-router-dom"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createStyles, WithStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


const styles=createStyles({
	root:{
		backgroundColor:"#ffff",
		"&:hover":{
			backgroundColor:"#ffff"
		}
	}
})


interface Props extends WithStyles<typeof styles> {}

const Landing=({classes}:Props) =>{
	
	
	return(<Grid container justify="center">
<div className="main-background"/>
<Grid item  className="auth-start">
	<Button 
		component={NavLink} 
		to="/login" 
		variant="outlined" 
		color="primary" 
		className="mr-10" 
		classes={{root:classes.root}}
		>Sign In</Button>
	<Button component={NavLink} to="/register" variant="outlined" color="primary" classes={{root:classes.root}}>Sign Up</Button>
</Grid>
</Grid>)}





export default withStyles(styles)(Landing);


import React from 'react';
import {NavLink} from "react-router-dom"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {compose} from "ramda";

import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

import {startLoadingFirebase} from "../../actions/firebase"
import {userLogOut} from "../../actions/user"

import Header from "../../components/Header"
 import AppRouter from '../../routes';

import "./app.scss"


const styles=()=>({
	root:{
		backgroundColor:"#ffff",
		"&:hover":{
			backgroundColor:"#ffff"
		}
	}
})


class App extends React.Component {

	componentDidMount(){
		this.props.startLoadingFirebase()
	}

	render() {

		return (

			<Grid container justify="center" className="app-wrapper">
				<Header logout={this.props.userLogOut}/>
				<AppRouter/>
		 	</Grid>
		);
	}
}

const mapStateToProps = () => ({
	
  });


const mapDispathToProps = dispath =>
  bindActionCreators(
    {
		startLoadingFirebase,
		userLogOut
    },
    dispath
  );

export default compose(
	withStyles(styles),
	connect( mapStateToProps,mapDispathToProps)
)(App)


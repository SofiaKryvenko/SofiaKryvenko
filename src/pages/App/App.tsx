import React from 'react';
import { connect } from "react-redux";
import {  withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import {compose} from "ramda";

import Grid from '@material-ui/core/Grid';


import {startLoadingFirebase} from "../../actions/firebase"
import {userLogOut,userSignup} from "../../actions/user"

import Header from "../../components/Header"
 import AppRouter from '../../routes';







class App extends React.Component {

	componentDidMount(){
		this.props.startLoadingFirebase()
	}

	render() {

		return (

			<Grid container justify="center" className="app-wrapper">
				 <Header 
					 logout={this.props.userLogOut} 
					 auth={this.props.auth}
				/>
					 
				<div className="page-content">
					<AppRouter/>
				</div>
				
		 	</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	auth:state.auth
  });


const mapDispathToProps = dispath =>
  bindActionCreators(
    {
		startLoadingFirebase,
		userLogOut,
		userSignup
    },
    dispath
  );

export default compose(
	withRouter,
	connect( mapStateToProps,mapDispathToProps)
)(App)


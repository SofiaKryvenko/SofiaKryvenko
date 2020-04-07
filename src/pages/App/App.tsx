import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {compose} from "ramda";

import Grid from '@material-ui/core/Grid';


import {startLoadingFirebase} from "../../actions/firebase"
import {userLogOut} from "../../actions/user"

import Header from "../../components/Header"
 import AppRouter from '../../routes';

import "./app.scss"





class App extends React.Component {

	componentDidMount(){
		this.props.startLoadingFirebase()
	}

	render() {

		return (

			<Grid container justify="center" className="app-wrapper">
				{this.props.user && <Header logout={this.props.userLogOut} />}
				<div className="page-content">
					<AppRouter/>
				</div>
				
		 	</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	user:state.auth.user
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
	connect( mapStateToProps,mapDispathToProps)
)(App)

